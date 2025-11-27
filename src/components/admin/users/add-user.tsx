import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/src/components/ui/dialog"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { GraduationCap, Users } from "lucide-react"

interface UserFormProps{
    open:any;
    setOpen:any;
    mode:"create"| "edit"
}
const UserForm = ({ open, setOpen,mode }: UserFormProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="flex flex-col gap-8">
                <DialogHeader>
                    <DialogTitle>{mode=="create" ? "Create an User" : "Edit an User"}</DialogTitle>
                    <p className="text-muted-foreground text-sm">Get started with Pathfinder today</p>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-2 w-full">
                        <Label className="flex items-center gap-2 border p-2 rounded-md cursor-pointer text-sm text-muted-foreground flex-1 text-color-white">
                            <Input type="radio" name="role" value="student" className="w-4 h-14" />
                            <GraduationCap className="h-4" />
                            Student
                        </Label>

                        <Label className="flex items-center gap-2 border p-2 rounded-md cursor-pointer text-sm text-muted-foreground flex-1 text-color-white">
                            <Input type="radio" name="role" value="educator" className="w-4 h-4" />
                            <Users className="h-4"/>
                            Educator
                        </Label>
                    </div>


                    <div className="flex flex-col gap-2">
                        <Label>First Name</Label>
                        <Input type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Last Name</Label>
                        <Input type="text" placeholder="Enter your last name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Password</Label>
                        <Input type="text" placeholder="Enter your password" />
                    </div>
                </div>

                <DialogFooter>
                    <Button type="submit" className="w-full">{mode=="create" ?"Create account" : "Edit account"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default UserForm
