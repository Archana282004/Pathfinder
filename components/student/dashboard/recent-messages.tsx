import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Message {
    recentMessages: {
        id: string;
        from: string;
        message: string;
        time: string;
    }[]
}

export default function RecentMesaages({ recentMessages }: Message) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Latest conversations with educators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {recentMessages.map((msg) => (
                    <div key={msg.id} className="flex items-start justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                            <p className="font-medium">{msg.from}</p>
                            <p className="text-sm text-muted-foreground">{msg.message}</p>
                            <p className="text-xs text-muted-foreground">{msg.time}</p>
                        </div>
                        <Button size="sm" variant="outline">
                            Reply
                        </Button>
                    </div>
                ))}
                <Button className="w-full" asChild>
                    <Link href="/student/chat">Open Chat</Link>
                </Button>
            </CardContent>
        </Card>
    )
}