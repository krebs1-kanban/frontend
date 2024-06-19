import { useDetachFileMutation } from "@/entities/card/_vm/queries";
import { apiInstance } from "@/shared/api/api-instance";
import { FileDto } from "@/shared/api/generated";
import { publicConfig } from "@/shared/config/public-config";
import { MAIN } from "@/shared/constants/main";
import { writeToClipboard } from "@/shared/lib/clipboard-fns";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";
import Link from "next/link";
import urlJoin from "url-join";

const AttachmentDownloadURL = (fileName: string) => {
  const url = urlJoin(
    publicConfig.STATIC_FILES_URL_SEGMENT,
    publicConfig.PROJECT_ATTACHMENTS_URL_SEGMENT,
    fileName,
  );
  console.log(url);
  return url;
};

const AttachmentCopyUrl = (fileName: string) => {
  const url = urlJoin(
    publicConfig.BACKEND_URL,
    publicConfig.STATIC_FILES_URL_SEGMENT,
    publicConfig.PROJECT_ATTACHMENTS_URL_SEGMENT,
    fileName,
  );
  console.log(url);
  return url;
};

export function CardAttachment({
  className,
  data,
}: {
  className?: string;
  data: FileDto & { cardId: string };
}) {
  const detachMutation = useDetachFileMutation();

  const handleDelete = () => {
    detachMutation.mutate({
      id: data.cardId,
      filename: data.name,
    });
  };

  const handleDownload = () => {
    apiInstance
      .get(AttachmentDownloadURL(data.name), {
        responseType: "blob",
      })
      .then((res) => {
        const url = URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", data.displayName ?? data.name);
        link.click();
        link.remove();
      });
  };

  const handleCopy = () => {
    writeToClipboard(AttachmentCopyUrl(data.name));
  };

  return (
    <div className={cn("flex flex-col gap-y-2 p-2")}>
      <h4 className={cn("text-sm font-bold")}>
        <Link
          href={`${publicConfig.BACKEND_URL}/${MAIN.PROJECT_ATTACHMENTS_PATH_SEGMENT}/${data.name}`}
          target="_blank"
        >
          {data.displayName}
        </Link>
      </h4>
      <div
        className={cn("flex flex-row flex-wrap gap-x-4 text-sm font-normal")}
      >
        <Button
          className={cn(
            "hover:text-foreground/80 hover:bg-transparent text-foreground/60 p-0 h-min",
          )}
          variant="ghost"
          onClick={handleDownload}
        >
          Скачать
        </Button>
        <Button
          className={cn(
            "hover:text-foreground/80 hover:bg-transparent text-foreground/60 p-0 h-min",
          )}
          variant="ghost"
          onClick={handleCopy}
        >
          Скопировать ссылку
        </Button>
        <Button
          className={cn(
            "hover:text-foreground/80 hover:bg-transparent text-foreground/60 p-0 h-min",
          )}
          variant="ghost"
          onClick={handleDelete}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}
