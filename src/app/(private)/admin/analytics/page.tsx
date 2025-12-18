import AdminAnalytics from "@/src/components/admin/analytics";
import { analytics_Action } from "@/src/utils/graphql/analytics/action";

const AdminAnalyticsPage = async () => { 
  const response = await analytics_Action();
  const sessionData = response?.getAnalytics?.sessionStatus;
  const userOverviewData = response?.getAnalytics?.userOverview;

  return (
    <AdminAnalytics sessionData={sessionData} userOverviewData={userOverviewData} />
  )
}

export default AdminAnalyticsPage;
