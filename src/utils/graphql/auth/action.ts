
import { fetchGraphQLMutation, fetchGraphQLQuery } from ".."
import { REFRESH_TOKEN_MUTATION, SIGNIN_MUTATION, SIGNUP_MUTATION } from "./query";


export const signIn_Action = async ({
  variables,
}: {
  variables: { input: any };
}): Promise<any> => { debugger
  const res = await fetchGraphQLMutation<any>(SIGNIN_MUTATION, variables);
  
  return res as any;
};

export const signUp_Action = async (variables: { input: any }): Promise<any> => {
  const res = await fetchGraphQLMutation<any>(SIGNUP_MUTATION, variables);
  return res as any;
};

export const refreshToken = async (refreshToken: string): Promise<any> => {
  const variables = { refreshToken };
  const res = await fetchGraphQLMutation<any>(
    REFRESH_TOKEN_MUTATION,
    variables
  );
  return res;
};
