"use client"
import { signIn_Action, signUp_Action } from "@/src/utils/graphql/auth/action";
import { AppDispatch } from "../store";
import * as authReducer from "@/src/store/reducers/authreducer";


export const SignIn =   (form: any) =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await signIn_Action({ variables: { input: form } });
      
      if (res?.signIn?.success) { 
        const { accessToken, refreshToken, user, token } = res.signIn;
        dispatch(
          authReducer.login({
            access_token: accessToken,
            refresh_token: refreshToken,
            token:token,
            user: { ...user, role: user?.role?.toLowerCase() },
          })
        );
      }
      return res;
    } catch (err: any) {
      return {
        message: err.message as string,
        success : false
      };
    }
  };


export const signUp = async (formData: any) => {
  const res = await signUp_Action({ input: formData })
  if (typeof res === "string") {
    return {
      message: res,
      success: false
    };
  }
  return res;
};

export const appLogout = async (dispatch: AppDispatch) => {
      dispatch(authReducer.logout());
}
