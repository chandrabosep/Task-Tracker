import React, { Suspense } from "react";
import { currentUser } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import prisma from "@/lib/prisma";
import CreateCollectionBtn from "@/components/CreateCollectionBtn";
import CollectionCard from "@/components/CollectionCard";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
      <Suspense fallback={<CollectionList />}>
        <CollectionList />
      </Suspense>
    </>
  );
}

async function Page() {
  const user = await currentUser();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!user) {
    return <div>error</div>;
  }

  return (
    <div className="flex w-full mb-10">
      <h1 className="text-3xl font-bold">
        Welcome,
        <br /> {user?.firstName} {user?.lastName}
      </h1>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex w-full">
      <h1 className="text-3xl font-bold">
        <Skeleton className="w-[180px] h-5 mb-2" />
        <Skeleton className="w-[250px] h-5" />
      </h1>
    </div>
  );
}

function CollectionLoading() {
  return <Skeleton className="w-full h-32" />;
}

async function CollectionList() {
  const user = await currentUser();
  const collections = await prisma.collection.findMany({
    include: {
     tasks: true, 
    },
    where: {
      userId: user?.id,
    },
  });
  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-5 ">
        <Alert>
          <AlertTitle>No collections yet!</AlertTitle>
          <AlertDescription>
            Create your first collection and get started
          </AlertDescription>
        </Alert>
        <CreateCollectionBtn />
      </div>
    );
  }

  return (
    <>
      <CreateCollectionBtn />
      <div className="flex flex-col gap-4 mt-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </>
  );
}
