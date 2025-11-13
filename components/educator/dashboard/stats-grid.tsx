import { EducatorOverviewCards } from "@/lib/mock-data";
import OverviewCards from "@/components/ui/overviewcards";


const EducatorStats = () => {
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

export default EducatorStats;