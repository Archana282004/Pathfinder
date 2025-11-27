import { StudentWalletData } from "@/src/lib/mock-data";
import OverviewCards from "@/src/components/ui/overviewcards";

const StatsGrid = () => {
    return(
        <div className="grid gap-4 md:grid-cols-3">
            {StudentWalletData.map((card,index)=>(
              <OverviewCards
              key={index}
              title={card.title}
              icon={card.icon}
              data={card.data}
              />
            ))}
          </div>
    )
}

export default StatsGrid;