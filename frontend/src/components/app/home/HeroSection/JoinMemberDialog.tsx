import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import JoinMemberForm from "./JoinMemberForm";

interface JoinMemberDialogProps {
  children: ReactNode;
}

function JoinMemberDialog({ children }: JoinMemberDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-h-[50vh] min-w-[50vw] rounded-3xl">
        <ScrollArea className="h-full">
          <JoinMemberForm />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default JoinMemberDialog;
