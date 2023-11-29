import {
  ReferralInputSchema,
  referralInputSchema,
} from "db-prisma/src/validators/zod/referral-input.schema";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { createReferral } from "@/entities/referral";

export default async function POST(
  req: Request<
    Record<string, never>,
    Record<string, never>,
    ReferralInputSchema
  >,
  res: Response,
) {
  try {
    const data = referralInputSchema.parse(req.body);
    const referral = await createReferral(data);
    return res.json(referral);
  } catch (err) {
    console.error(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: (err as Error).message });
  }
}
