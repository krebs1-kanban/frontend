import { CardDetails } from '@/features/card-details/card-details'
import { cn } from "@/shared/ui/utils";

export const metadata = {
  title: "Загрузка карточки",
};

export default function CardPage({ params }: { params: { cardId: string } }) {
  return <main className={cn("container relative")}>
    <CardDetails cardId={params.cardId}/>
  </main>;
}
