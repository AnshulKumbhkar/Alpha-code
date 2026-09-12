"use client";
import { useTRPC } from "@/trpc/client"
import { dehydrate, useQuery,HydrationBoundary } from "@tanstack/react-query";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";

const Page = async ()=>{

 const queryClient = getQueryClient();
   void queryClient.prefetchQuery(trpc.hello.queryOptions({text:"anshul prefetch"}))


  return(
    <>
    <HydrationBoundary state = {dehydrate(queryClient)}>
      <Client/> 
    </HydrationBoundary>
    </>
  );
}

export default Page;