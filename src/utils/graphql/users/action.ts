"use server"

import { fetchGraphQLQuery } from "..";
import { GET_USERS_QUERY } from "./query";

export const getUsers_Action = async (variables:any ): Promise<any> => {
  const res = await fetchGraphQLQuery<any>(
    GET_USERS_QUERY,
    variables
  );
  return res;
}; 