"use server"

import { fetchGraphQLQuery } from "..";
import { GET_EDUCATORS_LIST_QUERY, GET_EDUCATORSESSIONS_QUERY } from "./query";

export const getSessions_Action = async (
  variables: { input:any}
): Promise<any> => {
  const res = await fetchGraphQLQuery<any>(
    GET_EDUCATORSESSIONS_QUERY,
    variables 
  );
  return res;
};


export const getEducatorsListAction = async (
  paginate:any
): Promise<any> => {
  const variables = {
    filter: {
      limit: paginate.limit,
      page: paginate.page,
      search: paginate.search
    },
  };
  const res = await fetchGraphQLQuery<any>(
    GET_EDUCATORS_LIST_QUERY,
    variables
  );
  return res;
};