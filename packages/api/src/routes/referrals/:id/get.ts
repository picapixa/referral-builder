import { PrismaClientKnownRequestError } from "db-prisma/dist/client/runtime/library";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { forceGetReferral } from "@/entities/referral";

export default async function GET(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const referral = await forceGetReferral(id);
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
