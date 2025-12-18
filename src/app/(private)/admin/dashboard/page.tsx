import AdminDashboard from "@/src/components/admin/dash-board";
import { getAdminDashboard_Action } from "@/src/utils/graphql/dashboard/action";

const AdminDashboardPage = async () => {
  
  const response = await getAdminDashboard_Action();
  const cards = response?.getAdminDashboard;
  const recentUsers = response?.getAdminDashboard?.users;

  return (
    <AdminDashboard recentUsers={recentUsers} cards={cards} />
  )
}

export default AdminDashboardPage;
