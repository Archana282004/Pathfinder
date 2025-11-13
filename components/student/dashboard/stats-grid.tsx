import { StudentOverviewCards } from "@/lib/mock-data"
import OverviewCards from "@/components/ui/overviewcards"

const StatsGrid = () =>{
    return(
         <div className="grid gap-4 md:grid-cols-4">
            {StudentOverviewCards.map((card,index)=>(
              <OverviewCards
              key={index}
              title={card.title}
              icon={card.icon}
              cardcontent={card.cardcontent}
              data={card.data}
              />
            ))}
          </div>
    )
}

export default StatsGrid;