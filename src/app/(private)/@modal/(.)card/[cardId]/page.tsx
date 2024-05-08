import { Dialog, DialogContent, DialogHeader } from "@/shared/ui/dialog";

export default function CardModalPage({
  params,
}: {
  params: { cardId: string };
}) {
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <h2>Card modal {params.cardId}</h2>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
