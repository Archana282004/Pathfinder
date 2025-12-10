"use client"

import OverviewCards from "@/src/components/ui/overviewcards";
import { ArrowDownRight, ArrowUpRight, RefreshCw } from "lucide-react";

interface StatsGridProps {
  wallet:{
    totalPurchased: number,
  totalSpent: number,
  totalRefunded: number
  }
}
const StatsGrid = ({wallet}:StatsGridProps) => {

  return (
    <div className="grid gap-4 md:grid-cols-3">
        <OverviewCards
          title="Total Purchased"
          data={wallet.totalPurchased}
          icon={ArrowDownRight}
        />
        <OverviewCards
          title="Total Spent"
          data={wallet.totalSpent}
          icon={ArrowUpRight}
        />
        <OverviewCards
          title="Refunds"
          data={`$ ${wallet.totalRefunded}`}
          icon={RefreshCw}
        />

    </div>
  )
}

export default StatsGrid;