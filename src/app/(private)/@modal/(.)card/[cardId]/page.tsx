import { CardDetailsModal } from '@/features/card-details/card-details-modal'
import { Dialog, DialogContent, DialogHeader } from "@/shared/ui/dialog";

export default function CardModalPage({
  params,
}: {
  params: { cardId: string };
}) {
  return (
    <CardDetailsModal cardId={params.cardId}/>
  );
}
