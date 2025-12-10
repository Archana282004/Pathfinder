"use client"

import OverviewCards from "@/src/components/ui/overviewcards";
import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";

interface AdminStatsGridProps {
  cards: {
    growthRate: number,
    activeSessions: number,
    revenue: number,
    totalusers: number,
  }
}
const AdminStatsGrid = ({ cards }: AdminStatsGridProps) => {
  const data = [
    { title: "Total Users", data: cards?.totalusers, icon: Users },
    { title: "Revenue", data: cards?.revenue, icon: DollarSign },
    { title: "Active Sessions", data: cards?.activeSessions, icon: Calendar },
    { title: "Growth Rate", data: cards?.growthRate, icon: TrendingUp }

  ]
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        {data.map((card, index) =>
          <OverviewCards
            key={index}
            title={card.title}
            data={card.data}
            icon={card.icon}
          />
        )}
      </div>
    </div>
  )
}

export default AdminStatsGrid;