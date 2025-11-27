import { Card } from "@/src/components/ui/card"
import RecentMessageCard from "./recent-messages";
import CardsHeader from "@/src/components/ui/card-header";

interface Message {
    recentMessages: {
        id: string;
        from: string;
        message: string;
        time: string;
    }[]
}

const RecentMesaages = ({ recentMessages }: Message) => {
    return (
        <Card>
            <CardsHeader title="Recent Messages" description="Latest conversations with educators" />
            <RecentMessageCard
                recentMessages={recentMessages}
            />
        </Card>
    )
}

export default RecentMesaages;