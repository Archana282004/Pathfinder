import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";

const ConfirmationModal = ({open, setOpen}:any) =>{
    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>
                    Deactivate User
                </DialogTitle>
                <p className="text-muted-foreground text-sm">Are you sure you want to deactivate this user?</p>
                <DialogFooter>
                    <Button className="bg-transparent text-color-white border border-color-orange hover:bg-transparent text-color-white">Cancel</Button>
                    <Button className="bg-lime-700 text-color-white hover:bg-lime-700 text-color-white">Deactivate</Button>
                     <Button size="sm" asChild>
                  </Button>
                </DialogFooter>
            </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmationModal;