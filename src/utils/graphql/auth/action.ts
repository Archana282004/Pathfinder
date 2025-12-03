"use server"
import { fetchGraphQLMutation, fetchGraphQLQuery } from ".."
import { CHANGEPASSWORD_MUTATION, REFRESH_TOKEN_MUTATION, SIGNIN_MUTATION, SIGNUP_MUTATION, UPDATEUSER_MUTATION } from "./query";


export const signIn_Action = async ({
  variables,
}: {
  variables: { input: any };
}): Promise<any> => {
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

export const ChangePassword_Action = async (form: any): Promise<any> => {
  
  const variables = {
    input: { ...form }
  };
  const res = await fetchGraphQLMutation<any>(CHANGEPASSWORD_MUTATION, variables);
  return res as any
} 

export const updateUser_Action = async (form: any, selectedFilePath?: string, profile?: any): Promise<any> => {
  const { updateUserId, updateUserInput } = form;

  const updateUserInputFinal = {
    ...updateUserInput,
    ...(selectedFilePath && { file_path: selectedFilePath }),
    ...(profile && { profile })
  };

  const variables = {
    updateUserId,
    updateUserInput: updateUserInputFinal,
  };

  const res: any = await fetchGraphQLMutation(
    UPDATEUSER_MUTATION,
    variables
  );
  
  return res;
};


