import { Referral } from "db-prisma/dist/client";
import { ReferralSchema } from "db-prisma/src/types";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import AddReferralForm from "@/components/entities/referral/add-referral-form";
import ReferralsTableCard from "@/components/entities/referral/referrals-table-card";
import UpdateReferralForm from "@/components/entities/referral/update-referral-form";
import { env } from "@/env";

const ReferralFormDialog = dynamic(
  () => import("@/components/entities/referral/referral-form-dialog"),
  { ssr: false },
);

type IndexPageProps = {
  searchParams: {
    edit?: string;
  };
};

const IndexPage: NextPage<IndexPageProps> = async ({ searchParams }) => {
  const { edit: referralId } = searchParams;

  let referral: Referral | undefined = undefined;
  if (referralId) {
    try {
      const response = await fetch(
        `${env.API_BASE_URL}/referrals/${referralId}`,
        {
          cache: "no-cache",
        },
      );
      const data = ReferralSchema.parse(await response.json());
      referral = data;
    } catch (err) {
      console.error(err);
      referral = undefined;
    }
  }

  return (
    <div className="relative flex h-full">
      <div className="hidden h-full py-12 px-4 overflow-auto md:block md:w-2/5">
        <h1 className="text-2xl font-semibold tracking-tight mx-2 mb-4">
          Referral Builder
        </h1>
        {referral ? (
          <UpdateReferralForm referral={referral} />
        ) : (
          <AddReferralForm />
        )}
      </div>
      <div className="flex-1 h-full p-4 bg-slate-200 overflow-auto pb-8 md:pb-4">
        <h1 className="text-2xl font-bold tracking-tight mx-1 mt-6 mb-4 md:hidden">
          Referral builder
        </h1>
        <ReferralsTableCard />
      </div>
      <ReferralFormDialog
        referral={referral}
        open={!!referralId && !!referral}
      />
    </div>
  );
};

export default IndexPage;
