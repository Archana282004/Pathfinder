import { gql, DocumentNode } from "@apollo/client";


export const GET_STUDENT_WALLET_SUMMARY: DocumentNode = gql`
query Query {
  getStudentWalletSummary {
    totalPurchased
    totalSpent
    totalRefunded
  }
}
`;

export const GET_STUDENT_TRANSACTION_HISTORY: DocumentNode = gql`
query Transactions($input: StudentTransactionHistoryInput) {
  getStudentTransactionHistory(input: $input) {
    transactions {
      transaction_type
      session {
        scheduled_at_start_time
      }
      amount
    }
  }
}
`;