"use server"

import { fetchGraphQLQuery } from "..";
import { GET_ANALYTICS_QUERY } from "./query";

export const analytics_Action = async (): Promise<any> => {
  const res = await fetchGraphQLQuery<any>(GET_ANALYTICS_QUERY);
  return res ;
};
