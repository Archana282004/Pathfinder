"use client"

import OverviewCards from "@/src/components/ui/overviewcards";
import { useAppSelector } from "@/src/store/hooks";
import { useEffect, useState } from "react";
import { getStudentWallet_Action } from "@/src/utils/graphql/wallet/action";
import { ArrowDownRight, ArrowUpRight, RefreshCw } from "lucide-react";

interface StatsGridProps {
  totalPurchased: number,
  totalSpent: number,
  totalRefunded: number
}
const StatsGrid = () => {

  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;


  const [wallet, setWallet] = useState<StatsGridProps>({
    totalPurchased: 0,
    totalSpent: 0,
    totalRefunded: 0
  });



  useEffect(() => {
    if (!userId) return;
    const fetchStudentWallet = async () => {
      
      const response = await getStudentWallet_Action()
      setWallet(response?.getStudentWalletSummary)
      
    }
    fetchStudentWallet();
  }, []);


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