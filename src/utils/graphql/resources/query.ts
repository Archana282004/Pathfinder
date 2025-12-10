import { gql, DocumentNode } from "@apollo/client";

export const GET_ALL_RESOURCES_QUERY: DocumentNode = gql`
query Query($searchFilter: ResourceSearchFilterInput) {
  GetAllResources(searchFilter: $searchFilter) {
    total
    items {
    id
      attachment {
        file_type
        file_url
      }
      description
      resource_type
      title
    }
  }
}`;

export const REMOVE_RESOURCE_MUTATION: DocumentNode = gql`
mutation Mutation($removeResourceId: String!) {
  RemoveResource(id: $removeResourceId) {
    message
    success
  }
}`