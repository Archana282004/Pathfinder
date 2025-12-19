"use client"

import { transactionsType, WalletType } from "@/src/types/Studenttypes"
import BalanceCard from "./balance-card"
import StatsGrid from "./stats-grid"
import TransactionHistory from "./transaction-hitory"
import Header from "@/src/components/ui/header"

interface StudentWalletProps {
  tokenBalance: number;
  wallet: WalletType;
  transaction: transactionsType[];
}
const StudentWallet = ({ tokenBalance, wallet, transaction }: StudentWalletProps) => {


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Header heading="My Wallet" description="Manage your tokens and transactions" />

          {/* Balance Card */}
          <BalanceCard tokenBalance={tokenBalance} />

          {/* Stats Grid */}
          <StatsGrid wallet={wallet} />

          {/* Transaction History */}
          <TransactionHistory transaction={transaction} />

        </div>
      </div>
    </div>
  )
}

export default StudentWallet;