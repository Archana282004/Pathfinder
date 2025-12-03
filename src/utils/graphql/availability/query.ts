import { gql, DocumentNode } from "@apollo/client";

export const GET_EDUCATOR_AVAILABILITY_QUERY: DocumentNode = gql`
query GetEducatorAvailability {
  GetEducatorAvailability {
    availabilityDays {
      dayOfWeek
      startTime
      endTime
    }
  }
}
`