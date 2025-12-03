import { mockChatConversations, StudentOverviewCards } from "@/src/lib/mock-data"
import OverviewCards from "@/src/components/ui/overviewcards"
import { useAppDispatch, useAppSelector } from "@/src/store/hooks"
import { getStudentDashboard_Action } from "@/src/utils/graphql/dashboard/action";
import { useEffect, useState } from "react";
import { Calendar, CheckCircle2, MessageSquare, Wallet } from "lucide-react";

const StatsGrid = () => {
  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;
  const [dashboardData, setDashboardData] = useState({
    completedSessions: 0,
    tokenBalance: 0,
    upcomingSessions: 0
  });

  useEffect(() => {
    if (!userId) return;

    const fetchDashboard = async () => { debugger
      const res = await getStudentDashboard_Action({ userId });
      setDashboardData(res?.getStudentDashboard)
    };

    fetchDashboard();

  }, [userId]);

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
