import AdminUsers from "@/src/components/admin/users"
import { getUsers_Action } from "@/src/utils/graphql/users/action";

const AdminUsersPage = async () => {
  const response = await getUsers_Action({
    filter: { limit: 10, page: 1, role: null },
  });
  const AllUser = response?.users;

  const Studentresponse = await getUsers_Action({
    filter: { limit: 10, page: 1, role: "STUDENT" },
  });
  const AllStudents = Studentresponse?.users;

  const Educatorresponse = await getUsers_Action({
    filter: { limit: 10, page: 1, role: "EDUCATOR" },
  });
  const AllEducators = Educatorresponse?.users;




  return (
    <AdminUsers AllUser={AllUser} AllStudents={AllStudents} AllEducators={AllEducators}/>
  )
}

export default AdminUsersPage;
