import ReferralForm from "@/components/entities/referral/referral-form";

const IndexPage = () => {
  return (
    <div className="flex h-full">
      <div className="h-full py-12 px-4 md:w-2/5">
        <h1 className="text-xl font-semibold tracking-tight mx-2">
          Referral Builder
        </h1>
        <ReferralForm />
      </div>
      <div className="flex-1 h-full bg-slate-200">
        <h1>Hi</h1>
      </div>
    </div>
  );
};

export default IndexPage;
