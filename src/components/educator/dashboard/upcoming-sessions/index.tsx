import { Card } from "@/src/components/ui/card"
import UpcomingSessionTab from "./upcoming-sessions-tab";
import CardsHeader from "@/src/components/ui/card-header";
interface upcomingSessionsProps {
           upcomingSessions:{ duration_min: number,
            educator: {
                first_name: string,
                last_name: string
            },
            id:string,
            scheduled_at_start_time: string,
            title: string}[]
}
const UpcomingSessions = ({ upcomingSessions }: upcomingSessionsProps) => {
    return (
        <Card>
            <CardsHeader title="Upcoming Sessions" description="Your scheduled counseling sessions" />
            <UpcomingSessionTab
                upcomingSessions={upcomingSessions}
            />
        </Card>

    )
}

export default UpcomingSessions;