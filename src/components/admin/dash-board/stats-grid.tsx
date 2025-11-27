import { AdminOverviewCards } from "@/src/lib/mock-data";
import OverviewCards from "@/src/components/ui/overviewcards";

const AdminStatsGrid = () => {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        {AdminOverviewCards.map((card, index) =>
          <OverviewCards
            key={index}
            title={card.title}
            data={card.mockAnalyticsdata}
            icon={card.icon}
            />
        )}
      </div>
    </div>
  )
}

export default AdminStatsGrid;