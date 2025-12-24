import EducatorSessions from "@/src/components/educator/sessions"
import CompletedSessionTab from "@/src/components/educator/sessions/tab-list/completed-session-tab";
import { getSessions_Action } from "@/src/utils/graphql/sessions/action"

const EducatorSessionsPage = async () => {

  const sessionsresponse = await getSessions_Action({ input: { page: 1, limit: 10, filter: "UPCOMING" } })
  const UpcomingSessions = sessionsresponse?.getSessions ?? null;

  const Cancelledsessionsresponse = await getSessions_Action({ input: { page: 1, limit: 10, filter: "CANCELLED" } })
  const CancelledSessions = Cancelledsessionsresponse?.getSessions ?? null;

  const Expiredsessionsresponse = await getSessions_Action({ input: { page: 1, limit: 10, filter: "EXPIRED" } })
  const ExpiredSessions = Expiredsessionsresponse?.getSessions ?? null;

  const Completedsessionsresponse = await getSessions_Action({ input: { page: 1, limit: 10, filter: "EXPIRED" } })
  const CompletedSessions = Completedsessionsresponse?.getSessions ?? null;


  return (
    <EducatorSessions UpcomingSessions={UpcomingSessions} CancelledSessions={CancelledSessions} ExpiredSessions={ExpiredSessions} CompletedSessions={CompletedSessions} />
  )
}

export default EducatorSessionsPage;
