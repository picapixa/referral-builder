import { PrismaClientKnownRequestError } from "db-prisma/dist/client/runtime/library";
import { referralInputSchema } from "db-prisma/src/validators/zod/referral-input.schema";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { updateReferral } from "@/entities/referral";

export default async function PUT(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = referralInputSchema.parse(req.body);

    const referral = await updateReferral(id, data);

    return res.json(referral);
  } catch (err) {
    console.error(err);

    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        return res.status(StatusCodes.NOT_FOUND).json();
      }
      if (err.code === "P2023") {
        return res.status(StatusCodes.BAD_REQUEST).json();
      }
    }

    return res.status(500).json({ message: "Internal server error" });
  }
}
