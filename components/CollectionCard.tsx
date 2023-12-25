"use client";
import { Collection } from "@prisma/client";
import React, { useState, useTransition } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { CaretDownIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { deleteCollection } from "@/actions/collections";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface Props {
  collection: Collection;
}

export default function CollectionCard({ collection }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const tasks: string[] = ["task 1", "task 2"];
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();

  const removeCollection = async () => {
    try {
      await deleteCollection(collection.id);
      toast({
        title: "Success",
        description: "Collection deleted successfully",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again",
        variant: "destructive",
      });
    }
  };
  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
              "flex w-full justify-between p-5",
              isOpen && "rounded-b-none",
              CollectionColors[collection.color as CollectionColor]
            )}
          >
            <span className="terxt-white font-bold">{collection.name}</span>
            {!isOpen && <CaretDownIcon className="w-6 h-6" />}
            {isOpen && <CaretDownIcon className="w-6 h-6" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex rounded-b-md flex-col dark:bg-neutral-900 shadow-lg">
          {tasks.length === 0 && <div>No tasks</div>}
          {tasks.length > 0 && (
            <>
              <Progress className="rounded-none" value={50} />
              <div className="p-4 gap-3 flex flex-col">
                {tasks.map((task) => (
                  <div>mocked task</div>
                ))}
              </div>
            </>
          )}
          <Separator />
          <footer className="h-[40px] px-4 p-[2px] text-sx text-neutral-500 flex items-center justify-between">
            <p>Created at {collection.createdAt.toLocaleDateString("en-IN")}</p>
            {isLoading && <div>Deleting...</div>}
            {!isLoading && (
              <div>
                <div>
                  <Button variant={"ghost"} size={"icon"}>
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant={"ghost"} size={"icon"}>
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your collection and all of its tasks.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="flex gap-4">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            startTransition(removeCollection);
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            )}
          </footer>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
