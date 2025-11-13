import { StudentWalletData } from "@/lib/mock-data";
import OverviewCards from "@/components/ui/overviewcards";

const StatsGrid = () => {
    return(
        <div className="grid gap-4 md:grid-cols-3">
            {StudentWalletData.map((card,index)=>(
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

export default StatsGrid;