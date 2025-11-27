"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/src/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useToast } from "@/src/hooks/use-toast"
import SignInForm from "./sign-in-form"

const LoginComponent = ()=> {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login, loginAsTestUser } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await login(email, password)
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      })
      router.push("/")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleTestUserLogin = (role: "student" | "educator" | "admin") => {
    loginAsTestUser(role)
    toast({
      title: "Logged in as test user",
      description: `You are now logged in as a test ${role}.`,
    })
    router.push("/")
  }

  const handleOAuthLogin = (provider: string) => {
    toast({
      title: "Coming soon",
      description: `${provider} login will be available soon.`,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SignInForm 
      handleTestUserLogin={handleTestUserLogin}
      handleOAuthLogin={handleOAuthLogin}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      />
    </div>
  )
}

export default LoginComponent;
