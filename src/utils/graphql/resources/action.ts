"use server"

import { fetchGraphQLMutation, fetchGraphQLQuery } from "..";
import { GET_ALL_RESOURCES_QUERY, REMOVE_RESOURCE_MUTATION } from "./query";

export const getAllResources_Action = async ({variables}:any): Promise<any> => { 
  const res = await fetchGraphQLQuery<any>(
    GET_ALL_RESOURCES_QUERY,
    variables
  );
  return res;
};

export const RemoveResource_Action = async ({
  variables,
}: {
  variables: { removeResourceId: string };
}): Promise<any> => {
  const res = await fetchGraphQLMutation<any>(
    REMOVE_RESOURCE_MUTATION,
    variables
  );
  return res;
};
