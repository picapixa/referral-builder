import { Referral } from "db-prisma/src/types";

export type GetReferralsUrlQuery = {
  page?: number;
  limit?: number;
};

export type GetReferralsResponse = {
  count: number;
  data: Array<Referral>;
  page: number;
  limit: number;
};
