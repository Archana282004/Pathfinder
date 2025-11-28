import { gql, DocumentNode } from '@apollo/client';

export const SIGNUP_MUTATION :DocumentNode = gql`
mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
    message
    success
  }
} `;

export const SIGNIN_MUTATION : DocumentNode = gql`
mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    accessToken
    message
    refreshToken
    success
    user {
      id
      email
      first_name
      last_name
      phone
      role
    }
  }
} `;

export const REFRESH_TOKEN_MUTATION : DocumentNode = gql`
mutation RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    accessToken
    refreshToken
    message
    success
  }
} `;