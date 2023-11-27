import { Prisma } from "db-prisma/dist/client";
import { ReferralCreateInputSchema } from "db-prisma/src/types";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { createReferral } from "@/entities/referral";

export default async function POST(
  req: Request<Record<string, never>, Prisma.ReferralCreateInput>,
  res: Response,
) {
  try {
    const data = ReferralCreateInputSchema.parse(req.body);
    const referral = await createReferral(data);
    return res.json(referral);
  } catch (err) {
    console.error(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: (err as Error).message });
  }
}
