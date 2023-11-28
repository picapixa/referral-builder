import {
  CreateReferralInputSchema,
  createReferralInputSchema,
} from "db-prisma/src/validators/zod/create-referral.schema";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { createReferral } from "@/entities/referral";

export default async function POST(
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateReferralInputSchema
  >,
  res: Response,
) {
  try {
    const data = createReferralInputSchema.parse(req.body);
    const referral = await createReferral(data);
    return res.json(referral);
  } catch (err) {
    console.error(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: (err as Error).message });
  }
}
