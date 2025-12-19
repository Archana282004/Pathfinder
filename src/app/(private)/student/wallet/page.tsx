import StudentWallet from "@/src/components/student/wallet";
import { getStudentTokenBalance_Action, getStudentTransaction_Action, getStudentWallet_Action } from "@/src/utils/graphql/wallet/action";

const StudentWalletPage = async() => {

   const balance = await getStudentTokenBalance_Action();
   const tokenBalance = balance?.gettoken?.tokenBalance

   const Studentwallet = await getStudentWallet_Action();
   const wallet = Studentwallet?.getStudentWalletSummary;

   const StudentTransaction = await getStudentTransaction_Action();
   const transaction= StudentTransaction?.getStudentTransactionHistory?.transactions ?? []

  return (
    <StudentWallet  tokenBalance={tokenBalance} wallet={wallet} transaction={transaction}/>
  )
}

export default StudentWalletPage;
