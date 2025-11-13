import { AdminOverviewCards } from "@/lib/mock-data";
import OverviewCards from "@/components/ui/overviewcards";

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
            cardcontent={card.cardcontent} />
        )}
      </div>
    </div>
  )
}

export default AdminStatsGrid;