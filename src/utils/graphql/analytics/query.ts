import { gql, DocumentNode } from "@apollo/client";

export const GET_ANALYTICS_QUERY : DocumentNode = gql`
query Query {
  getAnalytics {
    message
    sessionStatus {
      cancelled
      completed
      upcoming
      expired
    }
    userOverview {
      educators
      students
      total
    }
    success
  }
}`