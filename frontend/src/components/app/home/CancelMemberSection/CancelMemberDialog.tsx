import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";
import CancelMemberForm from "./CancelMemberForm";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CancelMemberDialogProps {
  children: ReactNode;
}

function CancelMemberDialog({ children }: CancelMemberDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-h-[50vh] min-w-[50vw] rounded-3xl">
        <ScrollArea className="h-full">
          <CancelMemberForm />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default CancelMemberDialog;
