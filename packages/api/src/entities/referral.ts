import { prisma } from "@/lib/prisma";

type GetReferralsInput = {
  page?: number;
  limit?: number;
};

export const getReferrals = async ({
  page = 1,
  limit = 10,
}: GetReferralsInput) => {
  const skip = (page - 1) * limit;

  const referrals = await prisma.referral.findMany({
    take: limit,
    skip: skip,
  });
  const count = await prisma.referral.count();

  return {
    referrals,
    count,
  };
};
