"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { CreateCollectionSheet } from "./CreateCollectionSheet";

function CreateCollectionBtn() {
  const [open, setOpen] = useState(false);
  const handelOpenChange = (open: boolean) => {
    setOpen(open);
  };
  return (
    <div className="w-full rounded-md bg-gradient-to-r from-red-500 to-orange-500 p-[1px]">
      <Button
        variant="outline"
        className="w-full dark:bg-neutral-950 dark:hover:bg-neutral-900 bg-white"
        onClick={() => handelOpenChange(true)}
      >
        <span className="bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-700 bg-clip-text text-transparent">
          Create collection
        </span>
      </Button>
      <CreateCollectionSheet open={open} handelOpenChange={handelOpenChange} />
    </div>
  );
}

export default CreateCollectionBtn;
