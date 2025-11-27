import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Application } from "@/src/lib/types"
import { CheckCircle, Circle, FileText } from "lucide-react"

interface CheckListProps {
    application: Application
}
const CheckList = ({ application }: CheckListProps) => {
    return (
        <div>
            <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Requirements Checklist
                </h4>
                <div className="space-y-3">
                    {application.requirements.map((req) => (
                        <div
                            key={req.id}
                            className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                        >
                            <div className="mt-0.5">
                                {req.completed ? (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : (
                                    <Circle className="w-5 h-5 text-muted-foreground" />
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="font-medium">{req.name}</div>
                                <div className="text-sm text-muted-foreground">
                                    <Badge variant="outline" className="mr-2">
                                        {req.type}
                                    </Badge>
                                    {req.dueDate && `Due: ${new Date(req.dueDate).toLocaleDateString()}`}
                                </div>
                            </div>
                            {!req.completed && (
                                <Button size="sm" variant="outline">
                                    Complete
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CheckList