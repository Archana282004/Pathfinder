"use client"

import { useState } from "react"
import { useAuth } from "@/src/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useToast } from "@/src/hooks/use-toast"
import SignInForm from "./sign-in-form"
import { SignIn } from "@/src/store/actions/authaction"
import { useAppDispatch } from "@/src/store/hooks"

const LoginComponent = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { loginAsTestUser } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  interface logintype {
    email: string;
    password: string;
  }
  const initialsigninData = {
    email: "",
    password: ""
  }

  const [signInData, setSignInData] = useState<logintype>(initialsigninData);

  const dispatch = useAppDispatch();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)
    const response = await dispatch(SignIn(signInData));
    setIsLoading(false)
    const path = (response?.signIn?.user?.role).toLowerCase()
    if(response.signIn.success){
      router.push(`${path}/dashboard`);
      toast({title:`${response?.signIn?.message}`, variant:"default"})
    }
    else{
      toast({title:`${response?.signIn?.message}`, variant:"destructive"})
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignInForm
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        signInData={signInData}
        setSignInData={setSignInData}
      />
    </div>
  )
}

export default LoginComponent;
