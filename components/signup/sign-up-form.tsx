import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { UserRole } from "@/lib/types"
import Link from "next/link"
import { GraduationCap, Users, Shield } from "lucide-react"

type User = "student" | "educator" | "admin";

interface SignupFormProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    role: User;
    setRole: React.Dispatch<React.SetStateAction<User>>;
    isLoading: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
const SignUpForm =({ name, setName, email, setEmail, password, setPassword, role, setRole, isLoading, handleSubmit }: SignupFormProps)=> {
    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                <CardDescription>Get started with Pathfinder today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={8}
                        />
                    </div>

                    <div className="space-y-3">
                        <Label>I am a...</Label>
                        <RadioGroup value={role} onValueChange={(value) => setRole(value as UserRole)}>
                            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 cursor-pointer">
                                <RadioGroupItem value="student" id="student" />
                                <Label htmlFor="student" className="flex items-center gap-2 cursor-pointer flex-1">
                                    <GraduationCap className="w-4 h-4" />
                                    <span>Student</span>
                                </Label>
                            </div>
                            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 cursor-pointer">
                                <RadioGroupItem value="educator" id="educator" />
                                <Label htmlFor="educator" className="flex items-center gap-2 cursor-pointer flex-1">
                                    <Users className="w-4 h-4" />
                                    <span>Educator / Counselor</span>
                                </Label>
                            </div>
                            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 cursor-pointer">
                                <RadioGroupItem value="admin" id="admin" />
                                <Label htmlFor="admin" className="flex items-center gap-2 cursor-pointer flex-1">
                                    <Shield className="w-4 h-4" />
                                    <span>Admin / Staff</span>
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Create account"}
                    </Button>
                </form>

                <div className="text-center text-sm">
                    {"Already have an account? "}
                    <Link href="/login" className="text-primary hover:underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

export default SignUpForm;