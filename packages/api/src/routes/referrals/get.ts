import { Request, Response } from "express";

import { getReferals } from "@/entities/referral";

export default async function GET(req: Request, res: Response) {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const { referrals: data, count } = await getReferals({ page, limit });

  return res.json({ count, data, page, limit });
}
