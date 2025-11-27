import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Send } from "lucide-react"


interface Message {
    id: string;
    conversationId: string;
    senderId: string;
    senderName: string;
    content: string;
    timestamp: string;
    isOwn: boolean;
}

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

interface MessageWindowProps {
    currentMessages: Message[]
    currentConversation?: Conversation
    messageInput: string
    setMessageInput: React.Dispatch<React.SetStateAction<string>>
}

const ChatWindow = ({ currentMessages, currentConversation, messageInput, setMessageInput }: MessageWindowProps) => {
    return (
        <Card className="md:col-span-2 flex flex-col">
            <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                    <img
                        src={currentConversation?.avatar || "/placeholder.svg"}
                        alt={currentConversation?.participantName}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <CardTitle>{currentConversation?.participantName}</CardTitle>
                        <p className="text-sm text-muted-foreground capitalize">{currentConversation?.participantRole}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`max-w-[70%] rounded-lg p-3 ${message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                                }`}
                        >
                            <p className="text-sm">{message.content}</p>
                            <p
                                className={`text-xs mt-1 ${message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                            >
                                {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                        </div>
                    </div>
                ))}
            </CardContent>
            <div className="border-t p-4">
                <div className="flex gap-2">
                    <Input
                        placeholder="Type your message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                setMessageInput("")
                            }
                        }}
                    />
                    <Button size="icon">
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default ChatWindow;