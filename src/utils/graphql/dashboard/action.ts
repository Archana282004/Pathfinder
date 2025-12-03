"use server"

import { fetchGraphQLQuery } from "..";
import { GET_EDUCATOR_DASHBOARD_QUERY, GET_STUDENT_DASHBOARD_QUERY } from "./query";

export const getStudentDashboard_Action = async (variables:any ): Promise<any> => {
  const res = await fetchGraphQLQuery<any>(
    GET_STUDENT_DASHBOARD_QUERY,
    variables
  );
  return res;
};

export const getEducatorDashboard_Action = async (variables:any ): Promise<any> => {
  const res = await fetchGraphQLQuery<any>(
    GET_EDUCATOR_DASHBOARD_QUERY,
    variables
  );
  return res;
};