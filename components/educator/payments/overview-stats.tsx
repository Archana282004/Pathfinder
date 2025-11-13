import { EducatorPaymentCards } from "@/lib/mock-data"
import OverviewCards from "@/components/ui/overviewcards"

export default function PaymentOverview(){
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {EducatorPaymentCards.map((card,index)=>(
        <OverviewCards
        key={index}
        title={card.title}
        icon={card.icon}
        data={card.data}
        cardcontent={card.cardcontent}
        />
      ))}
    </div>
  )
}