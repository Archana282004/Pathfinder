import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StudentQuickActionsData } from "@/lib/mock-data"
import QuickActionCard from "./quick-actions-card"
import CardsHeader from "@/components/ui/card-header"

const StudentQuickActions = () =>{
    return(
        <Card>
            <CardsHeader title="Quick Actions" description="Common tasks and resources"/>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                {StudentQuickActionsData.map((card, index)=>(
                  <QuickActionCard 
                  key={index}
                  link={card.link}
                  data={card.data}
                  icon={card.icon}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
    )
}

export default StudentQuickActions;