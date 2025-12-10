"use server"

import { fetchGraphQLMutation, fetchGraphQLQuery } from "..";
import { GET_ADMIN_SETTINGS_MUTATION, GET_ADMIN_SETTINGS_QUERY } from "./query";

export const getAdminSettings_Action = async (variables:any ): Promise<any> => {
  const res = await fetchGraphQLQuery<any>(
    GET_ADMIN_SETTINGS_QUERY,
    variables
  );
  return res;
};

export const Settings_Action = async ({
  variables,
}: {
  variables: { input: any };
}): Promise<any> => {
  const res = await fetchGraphQLMutation<any>(GET_ADMIN_SETTINGS_MUTATION, variables);

  return res as any;
};