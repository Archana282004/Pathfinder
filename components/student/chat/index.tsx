"use client"

import { useState } from "react"
import StudentNav  from "@/components/navigation/student-nav"
import { mockChatConversations, mockMessages } from "@/lib/mock-data"
import ChatWindow from "./chat-window"
import ConversationList from "./conversation-list"
import Header from "@/components/ui/header"

const StudentChat = () => {
  const [selectedConversation, setSelectedConversation] = useState(mockChatConversations[0].id)
  const [messageInput, setMessageInput] = useState("")

  const currentMessages = mockMessages.filter((m) => m.conversationId === selectedConversation)
  const currentConversation = mockChatConversations.find((c) => c.id === selectedConversation)

  return (
    <div className="min-h-screen bg-background">
      <StudentNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Header heading="Messages" description="Chat with your educators"/>

          <div className="grid md:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <ConversationList 
            selectedConversation={selectedConversation}
            setSelectedConversation={setSelectedConversation}
            mockChatConversations={mockChatConversations}
            />

            {/* Chat Window */}
            <ChatWindow 
            currentMessages={currentMessages}
            currentConversation={currentConversation}
            messageInput={messageInput}
            setMessageInput={setMessageInput}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentChat;