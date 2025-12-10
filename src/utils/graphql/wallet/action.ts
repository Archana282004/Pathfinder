"use server"

import { fetchGraphQLQuery } from "..";
import { GET_STUDENT_TRANSACTION_HISTORY, GET_STUDENT_WALLET_SUMMARY, GET_TOKEN_BALANCE_QUERY } from "./query";

export const getStudentWallet_Action = async (): Promise<any> => { 
  const res = await fetchGraphQLQuery<any>(
    GET_STUDENT_WALLET_SUMMARY,
  );
  return res;
};

export const getStudentTransaction_Action = async (): Promise<any> => { 
  const res = await fetchGraphQLQuery<any>(
    GET_STUDENT_TRANSACTION_HISTORY,
  );
  return res;
};

export const getStudentTokenBalance_Action = async (): Promise<any> => { 
  const res = await fetchGraphQLQuery<any>(
    GET_TOKEN_BALANCE_QUERY,
  );
  return res;
};
