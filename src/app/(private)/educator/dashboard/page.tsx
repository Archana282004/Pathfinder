import EducatorDashboard from "@/src/components/educator/dashboard"
import { STORAGE_KEYS } from "@/src/utils/constant";
import { getEducatorAvalability_Action } from "@/src/utils/graphql/availability/action";
import { getEducatorDashboard_Action } from "@/src/utils/graphql/dashboard/action";
import { getSessions_Action } from "@/src/utils/graphql/sessions/action";
import { cookies } from "next/headers";

const EducatorDashboardPage = async() => {

  const cookieStore = await cookies();
  const user = cookieStore.get(STORAGE_KEYS.USER)?.value;
  const userId = JSON.parse(user || "{}")?.id;

  const availability = await getEducatorAvalability_Action();
  const educatoravailability = availability?.GetEducatorAvailability?.availabilityDays.slice(0,3) ?? [];

  const sessionsresponse = await getSessions_Action({ input: { filter: "UPCOMING" } });
  const upcomingSessions = sessionsresponse?.getSessions?.sessions ?? [];

   const dashboard = await getEducatorDashboard_Action({ userId });
  const dashboardData = dashboard?.getEducatorDashboard;

  return (
    <EducatorDashboard  dashboardData={dashboardData} educatoravailability={educatoravailability} upcomingSessions={upcomingSessions} user={user}/>
  )
}

export default EducatorDashboardPage;
