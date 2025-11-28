"use client"

import type React from "react"
import { useState } from "react"
import SignUpComponent from "@/src/components/signup/sign-up-form"
import { signUp } from "@/src/store/actions/authaction"
import { useRouter } from "next/navigation"

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const initialForm = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
    phone: ""
  }
  const [formData, setFormData] = useState(initialForm)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await signUp({ 
      ...formData,
      role: formData.role.toUpperCase()
    });
    if(response.signUp.success){ 
      router.push("/login")
    }
    else{
      alert(response.signUp.message)
    }


  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignUpComponent
        formData={formData}
        setFormData={setFormData}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Signup;