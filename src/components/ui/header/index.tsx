"use server";
import HeaderComponent from "@/src/components/ui/header/header-component";
import { getUpdatedTokenAction } from "@/src/utils/graphql/auth/action";

const  HeaderPage = async ()=> {
  const res = await getUpdatedTokenAction()
  return (
   <HeaderComponent/>
  )
}

export default HeaderPage
