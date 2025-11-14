import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RecentMessageCard from "./recent-messages";
import CardsHeader from "@/components/ui/cardheader";

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