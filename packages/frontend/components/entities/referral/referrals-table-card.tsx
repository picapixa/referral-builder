"use client";

import React from "react";

import ReferralsTable from "./referrals-table";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetReferralsQuery } from "@/services/referrals";

const ReferralsTableCard = () => {
  const { data, isLoading } = useGetReferralsQuery(null);

  if (isLoading) {
    return (
      <Card className="overflow-hidden divide-y">
        <div className="h-10 px-2 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-slate-400" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="space-y-2 justify-center p-2 md:flex md:justify-start md:items-center md:space-y-0 md:space-x-4 md:py-4"
          >
            <Skeleton className="block h-3 w-40 rounded-full" />
            <Skeleton className="block h-2 w-32 rounded-full md:h-3 md:w-24" />
            <Skeleton className="block h-2 w-32 rounded-full md:h-3 md:w-32" />
            <Skeleton className="hidden h-2 w-32 rounded-full md:h-3 md:w-28 md:block" />
          </div>
        ))}
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <ReferralsTable referrals={data?.data} />
    </Card>
  );
};

export default ReferralsTableCard;
