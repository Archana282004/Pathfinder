import { AdminPaymentCards } from "@/lib/mock-data";
import OverviewCards from "../cards/overviewcards";



export default function AdminPaymentStats(){
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {AdminPaymentCards.map((card, index) =>
        <OverviewCards
          key={index}
          title={card.title}
          icon={card.icon}
          data={card.data}
          cardcontent={card.cardcontent}
          />
      )}
    </div>
  )
}