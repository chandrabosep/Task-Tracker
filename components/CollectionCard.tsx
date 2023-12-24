"use client";
import { Collection } from "@prisma/client";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { CaretDownIcon } from "@radix-ui/react-icons";

interface Props {
  collection: Collection;
}

export default function CollectionCard({ collection }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <Button
            variant={"ghost"}
            className={
              (cn("flex w-full justify-between p-6"),
              CollectionColors[collection.color as CollectionColor])
            }
          >
            <span className="terxt-white font-bold">{collection.name}</span>
            {!isOpen && <CaretDownIcon className="w-6 h-6" />}
            {isOpen && <CaretDownIcon className="w-6 h-6" />}
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
