import { mockAdminUsers, mockAdminPayments } from "@/lib/mock-data"
import AdminRecentUsers from "./recent-users"
import AdminRecentTransactions from "./recent-transactions";

const AdminMainGrid = () => {
  const recentUsers = mockAdminUsers.slice(0, 3);

  const recentTransactions = mockAdminPayments.slice(0, 2)
  return (
    <div>
      <div className="grid gap-6 ">
        {/* Recent Users */}
        <AdminRecentUsers recentUsers={recentUsers} />

      </div>
    </div>
  )
}

export default AdminMainGrid;