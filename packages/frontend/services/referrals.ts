import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Referral } from "db-prisma/src/types";
import { CreateReferralInputSchema } from "db-prisma/src/validators/zod/create-referral.schema";

import { env } from "../env";

import { GetReferralsResponse } from "@/types/referral";

export const referralsApi = createApi({
  reducerPath: "referralsApi",
  baseQuery: fetchBaseQuery({ baseUrl: env.NEXT_PUBLIC_API_BASE_URL }),
  tagTypes: ["Referrals"],
  endpoints: (builder) => ({
    getReferrals: builder.query<GetReferralsResponse, null>({
      query: () => "/referrals",
      providesTags: ["Referrals"],
    }),
    createReferral: builder.mutation<Referral, CreateReferralInputSchema>({
      query: (referral) => ({
        url: "/referrals",
        method: "POST",
        body: referral,
      }),
      invalidatesTags: ["Referrals"],
    }),
    deleteReferral: builder.mutation<Referral, string>({
      query: (id) => ({
        url: `/referrals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Referrals"],
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          referralsApi.util.updateQueryData("getReferrals", id, (draft) => {
            draft.data = draft.data.filter((referral) => referral.id !== id);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
          dispatch(referralsApi.util.invalidateTags(["Referrals"]));
        }
      },
    }),
  }),
});

export const {
  useGetReferralsQuery,
  useCreateReferralMutation,
  useDeleteReferralMutation,
} = referralsApi;
