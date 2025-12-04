import { gql, DocumentNode } from "@apollo/client";

export const GET_EDUCATORSESSIONS_QUERY: DocumentNode = gql`
query GetSessions($input: GetEducatorSessionsInput) {
  getSessions(input: $input) {
    message
    success
    sessions {
      active_status
      cancelledBy {
        first_name
        last_name
        id
        email
      }
      cancelled_at
      cancelled_by
      created_at
      description
      duration_min
      educator {
       profile {
          specialization
        }
        first_name
        last_name
        email
        id
      }
      educator_id
      ended_at
      id
      rescheduled_at_end_time
      rescheduled_at_start_time
      room_metadata
      room_url
      scheduled_at_end_time
      scheduled_at_start_time
      started_at
      status
      student {
        first_name
        last_name
        email
        id
      }
      student_id
      title
      updated_at
    }
    total
    completedCount
    canceledCount
    upcomingCount
    expiredCount
  }
}
`;