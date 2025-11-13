import { mockAdminUsers, mockAdminPayments } from "@/lib/mock-data"
import AdminRecentUsers from "./recent-users"
import AdminRecentTransactions from "./recent-transactions";

const AdminMainGrid = () => {
  const recentUsers = mockAdminUsers.slice(0, 3);

  const recentTransactions = mockAdminPayments.slice(0, 2)
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Users */}
        <AdminRecentUsers recentUsers={recentUsers} />

        {/* Recent Transactions */}
        <AdminRecentTransactions recentTransactions={recentTransactions} />
      </div>
    </div>
  )
}

export default AdminMainGrid;