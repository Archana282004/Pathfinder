import StudentDashboard from "@/src/components/student/dashboard"
import { STORAGE_KEYS } from "@/src/utils/constant";
import { getStudentDashboard_Action } from "@/src/utils/graphql/dashboard/action";
import { getSessions_Action } from "@/src/utils/graphql/sessions/action";
import { cookies } from "next/headers";

const StudentDashboardPage = async () => {

  const cookieStore = await cookies();
  const user = cookieStore.get(STORAGE_KEYS.USER)?.value;
  const userId = JSON.parse(user || "{}")?.id;

  const res = await getStudentDashboard_Action({ userId });
  const dashboardData = res?.getStudentDashboard;

   const sessionsresponse = await getSessions_Action({ input: { filter: "UPCOMING" } })
   const upcomingSessions = sessionsresponse?.getSessions?.sessions ?? [] ;

  return (
    <StudentDashboard user={user} dashboardData={dashboardData} upcomingSessions={upcomingSessions}/>
  )
}

export default StudentDashboardPage;
