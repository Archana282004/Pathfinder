import { gql, DocumentNode } from '@apollo/client';

export const SIGNUP_MUTATION: DocumentNode = gql`
mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
    message
    success
  }
} `;

export const SIGNIN_MUTATION: DocumentNode = gql`
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

export const REFRESH_TOKEN_MUTATION: DocumentNode = gql`
mutation RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    accessToken
    refreshToken
    message
    success
  }
} `;


export const CHANGEPASSWORD_MUTATION: DocumentNode = gql`
mutation ChangePassword($input: ChangePasswordInput!) {
  ChangePassword(input: $input) {
    message
    success
  }
}`

export const UPDATEUSER_MUTATION :DocumentNode = gql`
mutation UpdateUser($updateUserId: String!, $updateUserInput: UpdateUserInput!) {
  updateUser(id: $updateUserId, updateUserInput: $updateUserInput) {
    message
    success
    user {
      id
      email
      first_name
      last_name
      role
      profile {
        specialization
        session_topic
        session_description
      }
    }
  }
}`;

export const GET_USER_QUERY : DocumentNode = gql`
query Query($userId: String!) {
  user(id: $userId) {
    email
    first_name
    last_name
    phone
    role
    avatar_path
      profile {
        specialization
        session_topic
        session_description
      }
  }
}`