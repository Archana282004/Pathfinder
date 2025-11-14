import { Card } from "@/components/ui/card";
import { Application } from "@/lib/types";

interface StatsType{
    mockApplications: Application[]
}
const Stats = ({mockApplications}:StatsType) =>{
return(
    <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Applications</div>
            <div className="text-3xl font-bold">{mockApplications.length}</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">In Progress</div>
            <div className="text-3xl font-bold text-yellow-500">
              {mockApplications.filter((app) => app.status === "In Progress").length}
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Submitted</div>
            <div className="text-3xl font-bold text-blue-500">
              {mockApplications.filter((app) => app.status === "Submitted").length}
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Accepted</div>
            <div className="text-3xl font-bold text-green-500">
              {mockApplications.filter((app) => app.status === "Accepted").length}
            </div>
          </Card>
        </div>
)
}

export default Stats;