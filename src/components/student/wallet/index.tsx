"use client"

import StudentNav from "@/src/components/navigation/student-nav"
import BalanceCard from "./balance-card"
import StatsGrid from "./stats-grid"
import TransactionHistory from "./transaction-hitory"
import Header from "@/src/components/ui/header"
import { useAppSelector } from "@/src/store/hooks"
import { useEffect, useState } from "react"
import { getStudentTokenBalance_Action, getStudentTransaction_Action, getStudentWallet_Action } from "@/src/utils/graphql/wallet/action"

interface StatsGridtype {
  totalPurchased: number,
  totalSpent: number,
  totalRefunded: number
}

interface transactions {
  transaction_type: string,
  session: {
    scheduled_at_start_time: string
  },
  amount: number
}
const StudentWallet = () => {

  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;


  const [balance, setBalance] = useState({
    tokenBalance: 0
  });


  const [wallet, setWallet] = useState<StatsGridtype>({
    totalPurchased: 0,
    totalSpent: 0,
    totalRefunded: 0
  });
  const [transaction, setTransaction] = useState<transactions[]>([]);

  useEffect(() => {
    if (!userId) return;
    const fetchStudentTokenBalance = async () => {
      const response = await getStudentTokenBalance_Action();
      setBalance(response?.gettoken)

    }

    const fetchStudentWallet = async () => {

      const response = await getStudentWallet_Action()
      setWallet(response?.getStudentWalletSummary)

    }

    const fetchStudentTransactions = async () => {
      try {
        const response = await getStudentTransaction_Action();
        setTransaction(response?.getStudentTransactionHistory?.transactions ?? []);
      }
      catch (err) {
        console.log("error", err)
      }
    }

    fetchStudentTokenBalance();
    fetchStudentWallet();
    fetchStudentTransactions();

  }, [userId]);
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Header heading="My Wallet" description="Manage your tokens and transactions" />

          {/* Balance Card */}
          <BalanceCard tokenBalance={balance?.tokenBalance} />

          {/* Stats Grid */}
          <StatsGrid wallet={wallet} />

          {/* Transaction History */}
          <TransactionHistory transaction={transaction}/>

        </div>
      </div>
    </div>
  )
}

export default StudentWallet;