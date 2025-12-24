import AdminResources from "@/src/components/admin/resources";
import { getAllResources_Action } from "@/src/utils/graphql/resources/action";


const AdminResourcesPage = async() => {

  const response = await getAllResources_Action({
        variables: {
          searchFilter: {
            limit: 10, page: 1
          }
        }
      });
 const AllResources = response?.GetAllResources

  return (
   <AdminResources AllResources={AllResources}/>
  )
}

export default AdminResourcesPage;
