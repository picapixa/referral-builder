import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { env } from "../env";

import { GetReferralsResponse } from "@/types/referral";

export const referralsApi = createApi({
  reducerPath: "referralsApi",
  baseQuery: fetchBaseQuery({ baseUrl: env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getReferrals: builder.query<GetReferralsResponse, null>({
      query: () => "/referrals",
    }),
  }),
});

export const { useGetReferralsQuery } = referralsApi;
