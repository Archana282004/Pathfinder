"use client"

import OverviewCards from "@/src/components/ui/overviewcards";
import { Calendar, DollarSign, Users } from "lucide-react";
import { EducatorDashboardType } from "@/src/types/Educatortypes";

interface EducatorStatsProps {
  dashboardData: EducatorDashboardType;
}
const EducatorStats = ({ dashboardData }: EducatorStatsProps) => {

  const totalEarnings = dashboardData?.totalEarnings;
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