import { Card, CardContent } from "@/components/ui/card"
import QuickActionTab from "./quick-actions-tab"
import { EducatorQuickActionsData } from "@/lib/mock-data"
import CardsHeader from "@/components/ui/cardheader"
const EducatorQuickActions = () => {
  return (
    <Card>
      <CardsHeader title="Quick Actions" description="Common tasks and tools" />
      <CardContent>
        <div className="grid gap-4 md:grid-cols-4">
          {EducatorQuickActionsData.map((card, index) => (
            <QuickActionTab
              key={index}
              link={card.link}
              icon={card.icon}
              data={card.data}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default EducatorQuickActions;