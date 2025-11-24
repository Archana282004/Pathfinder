import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import ConversationListCard from "./conversation-list";

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

const ConversationList = ({ selectedConversation, setSelectedConversation, mockChatConversations }: ConversationListProps)=> {
    return (
        <Card className="md:col-span-1">
            <CardHeader>
                <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <ConversationListCard 
            mockChatConversations={mockChatConversations}
            selectedConversation={selectedConversation}
            setSelectedConversation={setSelectedConversation}
            />
        </Card>
    )
}

export default ConversationList;