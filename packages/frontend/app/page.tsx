import dynamic from "next/dynamic";

import ReferralForm from "@/components/entities/referral/referral-form";
import ReferralsTableCard from "@/components/entities/referral/referrals-table-card";

const AddReferralDialog = dynamic(
  () => import("@/components/entities/referral/add-referral-dialog"),
  { ssr: false },
);

const IndexPage = () => {
  return (
    <div className="relative flex h-full">
      <div className="hidden h-full py-12 px-4 md:block md:w-2/5">
        <h1 className="text-2xl font-semibold tracking-tight mx-2 mb-4">
          Referral Builder
        </h1>
        <ReferralForm />
      </div>
      <div className="flex-1 h-full p-4 bg-slate-200">
        <h1 className="text-2xl font-bold tracking-tight mx-1 mt-6 mb-4 md:hidden">
          Referral builder
        </h1>
        <ReferralsTableCard />
      </div>
      <AddReferralDialog />
    </div>
  );
};

export default IndexPage;
