import { BoardCard } from "@/entities/card/board-card";
import { ListDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { cn } from "@/shared/ui/utils";
import { MoreHorizontal } from "lucide-react";
import { CreateCardForm } from "./create-card-form";
import { ListTitle } from "./list-title";

export function BoardList({ listData }: { listData: ListDto }) {
  return (
    <li className={cn("px-1.5 pb-3 min-h-full min-w-[272px] max-w-[272px]")}>
      <Card className={cn("max-h-full flex flex-col pb-2")}>
        <CardHeader
          className={cn(
            "flex flex-row justify-between items-center p-2 pb-0 flex-grow-0 flex-wrap",
          )}
        >
          <ListTitle
            listData={listData}
            className={cn("mr-2 flex-grow flex-shrink basis-[min-content]")}
          />
          <Button
            variant="ghost"
            className={cn(
              "w-8 h-8 p-2 self-center flex-shrink-0 flex-grow-0 space-y-0",
            )}
						style={{marginTop: '0'}}
          >
            <MoreHorizontal />
          </Button>
        </CardHeader>
        <CardContent
          className={cn(
            "p-2 pb-0 overflow-x-hidden overflow-y-auto shrink grow basis-auto h-full scrollbar",
          )}
        >
          <ol className={cn("list-none flex flex-col w-full gap-y-2")}>
            {listData.cards.map((card) => (
              <BoardCard key={card.id} cardData={card} />
            ))}
          </ol>
        </CardContent>
        <CardFooter className={cn("p-2 pb-0")}>
          <CreateCardForm
            listData={listData}
            className={cn("min-w-100 flex-grow")}
          />
        </CardFooter>
      </Card>
    </li>
  );
}
