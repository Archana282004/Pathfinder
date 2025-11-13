import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RecentMessageCard from "./recent-messages";

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
            <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Latest conversations with educators</CardDescription>
            </CardHeader>
            <RecentMessageCard
                recentMessages={recentMessages}
            />
        </Card>
    )
}

export default RecentMesaages;