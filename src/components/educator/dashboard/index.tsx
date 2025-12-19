"use client"

import EducatorStats from "./stats-grid"
import EducatorQuickActions from "./quick-actions"
import DashboardMainGrid from "./main-grid"
import Header from "@/src/components/ui/header"
import { EducatorAvailabilityType, EducatorDashboardType, UpcomingSessionsType } from "@/src/types/Educatortypes"

interface EducatorDashboardProps {
    educatoravailability: EducatorAvailabilityType[];
    upcomingSessions: UpcomingSessionsType[];
    user: any;
    dashboardData:EducatorDashboardType;
}
const EducatorDashboard = ({ educatoravailability, upcomingSessions, user, dashboardData }: EducatorDashboardProps) => {

    const username = JSON.parse(user || "{}")?.first_name + " " + JSON.parse(user || "{}")?.last_name;

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="space-y-8">
                    <Header heading={`Welcome back, ${username}`} description="Manage your sessions and help students succeed" />

                    {/* Stats Grid */}
                    <EducatorStats dashboardData={dashboardData}/>

                    {/* Main Content Grid */}
                    <DashboardMainGrid educatoravailability={educatoravailability} upcomingSessions={upcomingSessions} />

                    {/* Quick Actions */}
                    <EducatorQuickActions />
                </div>
            </div>
        </div>
    )
}

export default EducatorDashboard;