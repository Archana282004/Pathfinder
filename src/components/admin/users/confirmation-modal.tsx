"use client";

import { Button } from "@/src/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";

interface ConfirmationModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    active_status: boolean;
    handleStatusToggle: () => void;
}

const ConfirmationModal = ({
    open,
    setOpen,
    active_status,
    handleStatusToggle
}: ConfirmationModalProps) => {

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>
                        {active_status ? "Deactivate User" : "Activate User"}
                    </DialogTitle>
                    <p className="text-muted-foreground text-sm">
                        Are you sure you want to {active_status ? "deactivate" : "activate"} this user?
                    </p>
                </DialogHeader>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        className="bg-lime-700 text-white hover:bg-lime-800"
                        onClick={() => {
                            handleStatusToggle();
                            setOpen(false); 
                        }}
                    >
                        {active_status ? "Deactivate" : "Activate"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmationModal;
