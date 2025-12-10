"use client"

import OverviewCards from "@/src/components/ui/overviewcards";
import { useAppSelector } from "@/src/store/hooks";
import { useEffect, useState } from "react";
import { getEducatorDashboard_Action } from "@/src/utils/graphql/dashboard/action";
import { Calendar, DollarSign, Users } from "lucide-react";


const EducatorStats = () => {

   const user = useAppSelector((state) => state.auth.user);
    const userId = user?.id;
   
     const [dashboardData, setDashboardData] = useState({
        totalEarnings: 0,
        sessionsThisWeek: 0,
        activeStudents: 0
      });
    useEffect(() => {
      if (!userId) return;
  
      const fetchDashboard = async () => { 
        const res = await getEducatorDashboard_Action({ userId });
        setDashboardData(res?.getEducatorDashboard)
      };
  
      fetchDashboard();
  
    }, [userId]);

    const totalEarnings= dashboardData?.totalEarnings;
    const activeStudents = dashboardData?.activeStudents;
    const sessionsThisWeek = dashboardData?.sessionsThisWeek;
  return (
    <div className="grid gap-4 md:grid-cols-3">
          <OverviewCards
            title="Total Earnings"
            icon={DollarSign}
            data={totalEarnings}
          />
          <OverviewCards
            title="Active Students"
            icon={Users}
            data={activeStudents}
          />
          <OverviewCards
            title="Sessions This Week"
            icon={Calendar}
            data={sessionsThisWeek}
          />
      </div>


  )
}

export default EducatorStats;