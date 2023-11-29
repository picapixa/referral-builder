import { NextPage } from "next";
import dynamic from "next/dynamic";

import ReferralForm from "@/components/entities/referral/referral-form";
import ReferralsTableCard from "@/components/entities/referral/referrals-table-card";

const ReferralFormDialog = dynamic(
  () => import("@/components/entities/referral/referral-form-dialog"),
  { ssr: false },
);

type IndexPageProps = {
  searchParams: {
    edit?: string;
  };
};

const IndexPage: NextPage<IndexPageProps> = async ({}) => {
  return (
    <div className="relative flex h-full">
      <div className="hidden h-full py-12 px-4 md:block md:w-2/5">
        <h1 className="text-2xl font-semibold tracking-tight mx-2 mb-4">
          Referral Builder
        </h1>
        <ReferralForm />
      </div>
      <div className="flex-1 h-full p-4 bg-slate-200 md:overflow-auto">
        <h1 className="text-2xl font-bold tracking-tight mx-1 mt-6 mb-4 md:hidden">
          Referral builder
        </h1>
        <ReferralsTableCard />
      </div>
      <ReferralFormDialog />
    </div>
  );
};

export default IndexPage;
