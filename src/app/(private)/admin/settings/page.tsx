import AdminSettings from "@/src/components/admin/settings"
import { getAdminSettings_Action } from "@/src/utils/graphql/settings/action";

const AdminSettingsPage = async () => {

  const response = await getAdminSettings_Action();
  const settings = response?.getSettings?.settings;
  
  return (
    <AdminSettings  settings={settings}/>
  )
}

export default AdminSettingsPage;
