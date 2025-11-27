import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Progress } from "@/src/components/ui/progress"
import { Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { Application } from "@/src/lib/types"

interface ApplicationCardProps{
    application:Application,
    daysUntil:number,
    getStatusColor: (status: string) => string,
    getStatusIcon: (status: string) => React.ReactNode,
    progress:number,
    isExpanded:boolean,
    setExpandedApp: React.Dispatch<React.SetStateAction<string | null>>

}
const ApplicationCard = ({application,daysUntil, getStatusColor,  getStatusIcon, progress, setExpandedApp, isExpanded}:ApplicationCardProps) => {
    return (
        <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0" />

            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h3 className="text-xl font-semibold mb-1">{application.collegeName}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Deadline: {new Date(application.deadline).toLocaleDateString()}
                            </div>
                            <Badge variant="outline" className={daysUntil < 30 ? "border-red-500 text-red-500" : ""}>
                                {daysUntil} days left
                            </Badge>
                        </div>
                    </div>

                    <Badge className={getStatusColor(application.status)}>
                        {getStatusIcon(application.status)}
                        <span className="ml-1">{application.status}</span>
                    </Badge>
                </div>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{Math.round(progress)}% Complete</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedApp(isExpanded ? null : application.id)}
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                Hide Details
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                View Details
                            </>
                        )}
                    </Button>
                    <Button size="sm">Continue Application</Button>
                </div>
            </div>
        </div>
    )
}

export default ApplicationCard;