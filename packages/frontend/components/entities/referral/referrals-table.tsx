"use client";

import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Referral } from "db-prisma/src/types/index";
import React, { FC } from "react";
import { useMedia } from "react-use";

import ReferralActions from "./referral-actions";

import DataTable from "@/components/data-table";

const columnHelper = createColumnHelper<Referral>();

const mobileColumns: ColumnDef<Referral>[] = [
  columnHelper.display({
    id: "referral",
    header: "Referral",
    cell: ({ row }) => (
      <div className="flex">
        <div className="flex-1 space-y-1">
          <div className="font-semibold">
            {row.original.given_name} {row.original.surname}
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <EnvelopeClosedIcon className="w-3 h-3" />
            {row.original.email}
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <MobileIcon className="w-3 h-3" />
            {row.original.phone}
          </div>
        </div>
        <ReferralActions referralId={row.original.id} />
      </div>
    ),
  }),
];

const desktopColumns: ColumnDef<Referral>[] = [
  {
    accessorKey: "given_name",
    header: "Given Name",
  },
  {
    accessorKey: "surname",
    header: "Surname",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => <ReferralActions referralId={row.original.id} />,
  }),
];

type ReferralsTableProps = {
  referrals: Referral[] | undefined;
};

const ReferralsTable: FC<ReferralsTableProps> = ({ referrals }) => {
  // TODO: explore making this derived from Tailwind config
  const isTablet = useMedia(`(min-width: 768px)`, false);
  const columns = isTablet ? desktopColumns : mobileColumns;

  return <DataTable data={referrals} columns={columns} />;
};

export default ReferralsTable;
