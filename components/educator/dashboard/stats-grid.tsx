import { EducatorOverviewCards } from "@/lib/mock-data";
import OverviewCards from "../cards/overviewcards";


export default function EducatorStats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
        {EducatorOverviewCards.map((card, index) => (
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