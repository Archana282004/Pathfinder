"use server"

import { fetchGraphQLMutation, fetchGraphQLQuery } from "..";
import { CREATE_RESOURCE_MUTATION, GET_ALL_RESOURCES_QUERY, REMOVE_RESOURCE_MUTATION } from "./query";

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


export const createResourceAction = async (
  input: any
): Promise<any> => {
  const variables = {
    createResourceInput: {
      title: input.title,
      description: input.description,
      resource_type: input.resource_type,
      file_url: input.file_url,
      file_type: input.file_type,
      active_status: input.active_status ?? true,
    },
  };

  const res = await fetchGraphQLMutation<any>(
    CREATE_RESOURCE_MUTATION,
    variables
  );

  return res;
}