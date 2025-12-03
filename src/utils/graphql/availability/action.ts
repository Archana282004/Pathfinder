"use server"

import { fetchGraphQLQuery } from "..";
import { GET_EDUCATOR_AVAILABILITY_QUERY } from "./query";

export const getEducatorAvalability_Action = async (): Promise<any> => {
  const res = await fetchGraphQLQuery<any>(
    GET_EDUCATOR_AVAILABILITY_QUERY
  );
  return res;
};

