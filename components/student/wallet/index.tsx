"use client"

import { StudentNav } from "@/components/navigation/student-nav"
import { mockWalletTransactions } from "@/lib/mock-data"
import BalanceCard from "./balance-card"
import StatsGrid from "./stats-grid"
import TransactionHistory from "./transaction-hitory"
import TokenPackages from "./token-packages"
import Title from "../title"

export default function StudentWallet() {
  const tokenBalance = mockWalletTransactions.reduce((sum, txn) => sum + txn.tokens, 0)
  const totalSpent = mockWalletTransactions
    .filter((t) => t.type === "spent")
    .reduce((sum, txn) => sum + Math.abs(txn.amount), 0)
  const totalPurchased = mockWalletTransactions
    .filter((t) => t.type === "purchase")
    .reduce((sum, txn) => sum + txn.amount, 0)

  return (
    <div className="min-h-screen bg-background">
      <StudentNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Title heading="My Wallet" description="Manage your tokens and transactions"/>

          {/* Balance Card */}
         <BalanceCard tokenBalance={tokenBalance} />

          {/* Stats Grid */}
          <StatsGrid 
          mockWalletTransactions={mockWalletTransactions}
          totalSpent={totalSpent}
          totalPurchased={totalPurchased}
          />

          {/* Transaction History */}
         <TransactionHistory 
         mockWalletTransactions={mockWalletTransactions}
         />

          {/* Token Packages */}
          <TokenPackages />
        </div>
      </div>
    </div>
  )
}
