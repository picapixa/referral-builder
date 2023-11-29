import { Express } from "express";

import referralsRouter from "./referrals";

export default function (app: Express) {
  app.use("/referrals", referralsRouter);
}
