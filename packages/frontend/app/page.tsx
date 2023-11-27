import ReferralForm from "@/components/entities/referral/referral-form";
import ReferralsTableCard from "@/components/entities/referral/referrals-table-card";

const IndexPage = () => {
  return (
    <div className="flex h-full">
      <div className="h-full py-12 px-4 md:w-2/5">
        <h1 className="text-2xl font-semibold tracking-tight mx-2 mb-4">
          Referral Builder
        </h1>
        <ReferralForm />
      </div>
      <div className="flex-1 h-full p-4 bg-slate-200">
        <ReferralsTableCard />
      </div>
    </div>
  );
};

export default IndexPage;
