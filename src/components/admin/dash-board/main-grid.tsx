import { mockAdminUsers} from "@/src/lib/mock-data"
import AdminRecentUsers from "./recent-users"

const AdminMainGrid = () => {
  const recentUsers = mockAdminUsers.slice(0, 3);

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