import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ListOrderDialogProps {
  children: ReactNode;
}

function ListOrderDialog({ children }: ListOrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn(
          "flex min-h-[80vh] min-w-[80vw] flex-col items-center rounded-3xl p-5",
          "md:p-10"
        )}
      >
        <h1 className="text-4xl font-bold">List Order</h1>
        <Table className="h-full w-full">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>PRODUCT</TableHead>
              <TableHead>ADDRESS</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>00001</TableCell>
              <TableCell>Ring Burung</TableCell>
              <TableCell>
                Jl. Perkutut Permai no 13, Kel. Sugihwaras, kec, wates, malang,
                jawatimur
              </TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge className="px-4 py-3" variant={"success"}>
                  Completed
                </Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>00002</TableCell>
              <TableCell>Pakan Burung</TableCell>
              <TableCell>
                Jl. Perkutut Permai no 13, Kel. Sugihwaras, kec, wates, malang,
                jawatimur
              </TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge className="px-4 py-3" variant={"pending"}>
                  Shipping
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}

export default ListOrderDialog;
