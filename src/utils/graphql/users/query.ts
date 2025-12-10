import { gql, DocumentNode } from "@apollo/client";

export const GET_USERS_QUERY : DocumentNode = gql`
query Users($filter: AdminUsersFilterInput) {
  users(filter: $filter) {
    totalEducators
    totalStudents
    totalUsers
    items {
      id
      first_name
      last_name
      email
      phone
      role
      platform
      active_status
      created_at
      profile {
        specialization
      }
      avatar_path
    }
  }
}
`