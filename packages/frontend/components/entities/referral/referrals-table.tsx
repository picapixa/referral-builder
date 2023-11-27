import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Referral } from "db-prisma/src/types/index";
import React, { FC } from "react";

import ReferralActions from "./referral-actions";

import DataTable from "@/components/data-table";

const columnHelper = createColumnHelper<Referral>();

const columns: ColumnDef<Referral>[] = [
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
    cell: ({ row }) => <ReferralActions referralId={row.id} />,
  }),
];

type ReferralsTableProps = {
  referrals: Referral[] | undefined;
};

const ReferralsTable: FC<ReferralsTableProps> = ({ referrals }) => {
  return <DataTable data={referrals} columns={columns} />;
};

export default ReferralsTable;
