export type StudentDashboardDataType = {
    completedSessions: number;
    tokenBalance: number;
    upcomingSessions: number;
}

export type WalletType = {
    totalPurchased: number;
    totalSpent: number;
    totalRefunded: number
}
export type transactionsType = {
    transaction_type: string,
    session: {
        scheduled_at_start_time: string
    },
    amount: number
}