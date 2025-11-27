import { Card } from "@/src/components/ui/card"
import { Application } from "@/src/lib/types";
interface NotesProps {
    application: Application
}
const Notes = ({ application }: NotesProps) => {
    return (
        <div>
            {application.notes && (
                <div>
                    <h4 className="font-semibold mb-2">Notes</h4>
                    <Card className="p-4 bg-muted/50">
                        <p className="text-sm">{application.notes}</p>
                    </Card>
                </div>
            )}
        </div>
    )
}

export default Notes;