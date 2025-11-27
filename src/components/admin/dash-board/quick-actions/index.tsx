import { Card, CardContent} from "@/src/components/ui/card";
import { AdminQuickActionsCard } from "@/src/lib/mock-data";
import QuickActionCard from "./quick-actions-card";
import CardsHeader from "@/src/components/ui/card-header";

const AdminQuickActions = () => {
  return (
    <div>
      <Card>
        <CardsHeader
          title="Quick Actions"
          description="Common administrative tasks" />
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {AdminQuickActionsCard.map((card, index) => (
              <QuickActionCard
                key={index}
                name={card.name}
                link={card.link}
                icon={card.icon}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminQuickActions;