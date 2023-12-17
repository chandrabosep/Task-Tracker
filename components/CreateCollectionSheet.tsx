import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Props {
  open: boolean;
  handelOpenChange: (open: boolean) => void;
}

export const CreateCollectionSheet = ({ open, handelOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={handelOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add new collection</SheetTitle>
          <SheetDescription>
            Collection are a way to group your tasks
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
