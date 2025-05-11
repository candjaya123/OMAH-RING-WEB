import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";
import ReviewForm from "./ReviewForm";

interface ReviewDialogProps {
  children: ReactNode;
}

function ReviewDialog({ children }: ReviewDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-h-[50vh] min-w-[50vw] rounded-3xl">
        <ScrollArea className="h-full">
          <ReviewForm />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default ReviewDialog;
