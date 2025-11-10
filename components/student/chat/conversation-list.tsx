import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Conversation {
    id: string;
    participantId: string;
    participantName: string;
    participantRole: string;
    lastMessage: string;
    lastMessageTime: string;
    unread: number;
    avatar: string;
}

interface ConversationListProps {
    selectedConversation: string
    setSelectedConversation: React.Dispatch<React.SetStateAction<string>>
    mockChatConversations: Conversation[]
}

export default function ConversationList({ selectedConversation, setSelectedConversation, mockChatConversations }: ConversationListProps) {
    return (
        <Card className="md:col-span-1">
            <CardHeader>
                <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 p-0">
                {mockChatConversations.map((conv) => (
                    <button
                        key={conv.id}
                        onClick={() => setSelectedConversation(conv.id)}
                        className={`w-full p-4 text-left hover:bg-muted transition-colors ${selectedConversation === conv.id ? "bg-muted" : ""
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <img
                                src={conv.avatar || "/placeholder.svg"}
                                alt={conv.participantName}
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium truncate">{conv.participantName}</p>
                                    {conv.unread > 0 && (
                                        <Badge variant="default" className="ml-2">
                                            {conv.unread}
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                                <p className="text-xs text-muted-foreground mt-1">{conv.lastMessageTime}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </CardContent>
        </Card>
    )
}