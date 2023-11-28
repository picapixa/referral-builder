"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import ReferralsTable from "./referrals-table";

import Spinner from "@/components/spinner";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetReferralsQuery } from "@/services/referrals";

const ReferralsTableCard = () => {
  const [areAllItemsLoaded, setAreAllItemsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isFetching } = useGetReferralsQuery({
    page: currentPage,
  });
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!(data?.count || data?.data?.length)) {
      return;
    }

    if (inView && !isFetching && !areAllItemsLoaded) {
      setCurrentPage((prev) => prev + 1);
    }

    if (data.count === data.data.length) {
      setAreAllItemsLoaded(true);
    }
  }, [areAllItemsLoaded, data, inView, isFetching]);

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
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <ReferralsTable referrals={data?.data} />
      </Card>

      {!areAllItemsLoaded && (
        <div ref={ref} className="flex justify-center w-full">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ReferralsTableCard;
