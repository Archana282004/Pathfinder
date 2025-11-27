import { Application } from "@/src/lib/types";

interface ApplicationDetailsProps{
    application:Application
}
const ApplicationDetails = ({application}:ApplicationDetailsProps) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <div className="text-sm text-muted-foreground mb-1">Application Fee</div>
                    <div className="font-semibold">${application.applicationFee}</div>
                </div>
                {application.submittedDate && (
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">Submitted Date</div>
                        <div className="font-semibold">
                            {new Date(application.submittedDate).toLocaleDateString()}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ApplicationDetails;