"use client";

import React from "react";

import ReferralsTable from "./referrals-table";

import { Card } from "@/components/ui/card";
import { useGetReferralsQuery } from "@/services/referrals";

const ReferralsTableCard = () => {
  const { data } = useGetReferralsQuery(null);

  return (
    <Card className="overflow-hidden">
      <ReferralsTable referrals={data?.data} />
    </Card>
  );
};

export default ReferralsTableCard;
