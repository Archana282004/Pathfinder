import { gql, DocumentNode } from "@apollo/client";

export const GET_ADMIN_SETTINGS_QUERY : DocumentNode = gql`
query Settings {
  getSettings {
    settings {
      default_admin_token
      cancellation_time {
        hours
        minutes
      }
      reschedule_time {
        hours
        minutes
      }
      session_amount
    }
  }
}
`;

export const GET_ADMIN_SETTINGS_MUTATION : DocumentNode = gql`
mutation Mutation($input: SettingsDto!) {
  adminUpdateSettings(input: $input) {
    settings {
      cancellation_time {
        hours
        minutes
      }
      created_at
      default_admin_token
      id
      reschedule_time {
        hours
        minutes
      }
      session_amount
      updated_at
    }
    success
    message
  }
}
`;