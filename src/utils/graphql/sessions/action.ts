"use server"

import { fetchGraphQLQuery } from "..";
import { GET_EDUCATORSESSIONS_QUERY } from "./query";

export const getSessions_Action = async (
  variables: { input: {filter: string } }
): Promise<any> => {
  const res = await fetchGraphQLQuery<any>(
    GET_EDUCATORSESSIONS_QUERY,
    variables 
  );
  return res;
};