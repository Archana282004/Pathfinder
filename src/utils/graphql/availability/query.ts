import { gql, DocumentNode } from "@apollo/client";

export const GET_EDUCATOR_AVAILABILITY_QUERY: DocumentNode = gql`
query Query {
  GetEducatorAvailability {
    availabilityDays {
      dayOfWeek
      startTime
      endTime
      fullDay
    }
    break {
      break_between_interval
      interval_status
    }
    lunchBreak {
      endTime
      lunchBreak
      startTime
    }
    slot_duration
    unavailabilityDays {
      dayOfWeek
      startTime
      endTime
    }
  }
}
`