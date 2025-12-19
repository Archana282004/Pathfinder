"use client"

import { mockChatConversations } from "@/src/lib/mock-data"
import OverviewCards from "@/src/components/ui/overviewcards"
import { Calendar, CheckCircle2, MessageSquare, Wallet } from "lucide-react";
import { StudentDashboardDataType } from "@/src/types/Studenttypes";

interface StatsGridProps {
  dashboardData: StudentDashboardDataType;
}
const StatsGrid = ({ dashboardData }: StatsGridProps) => {

  const upcomingSessions = dashboardData?.upcomingSessions || 0;
  const tokenBalance = dashboardData?.tokenBalance || 0;
  const completedSessions = dashboardData?.completedSessions || 0;

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <OverviewCards
        title="Token Balance"
        icon={Wallet}
        data={tokenBalance}
      />
      <OverviewCards
        title="Upcoming Sessions"
        icon={Calendar}
        data={upcomingSessions}
      />
      <OverviewCards
        title="Completed Sessions"
        icon={CheckCircle2}
        data={completedSessions}
      />
      <OverviewCards
        title="Unread Messages"
        data={mockChatConversations.reduce((sum, conv) => sum + conv.unread, 0)}
        icon={MessageSquare}
      />
    </div>
  );
};

export default StatsGrid;
