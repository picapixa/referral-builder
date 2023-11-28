import { CreateReferralInputSchema } from "db-prisma/src/validators/zod/create-referral.schema";

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
    orderBy: {
      created_at: "asc",
    },
  });
  const count = await prisma.referral.count();

  return {
    referrals,
    count,
  };
};

export const forceGetReferral = async (id: string) =>
  prisma.referral.findUniqueOrThrow({
    where: {
      id,
    },
  });

export const createReferral = async (data: CreateReferralInputSchema) =>
  prisma.referral.create({ data });

export const deleteReferral = async (id: string) =>
  prisma.referral.delete({
    where: {
      id,
    },
  });
