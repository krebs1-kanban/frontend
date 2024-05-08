import { CardDetails } from '@/features/card-details/card-details'
import { cn } from "@/shared/ui/utils";

export default function CardPage({ params }: { params: { cardId: string } }) {
  return <main className={cn("container relative")}>
    <CardDetails cardId={params.cardId}/>
  </main>;
}
