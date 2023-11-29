import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Referral } from "db-prisma/src/types";
import { ReferralInputSchema } from "db-prisma/src/validators/zod/referral-input.schema";
import isEqual from "lodash/isEqual";

import { env } from "../env";

import { GetReferralsResponse, GetReferralsUrlQuery } from "@/types/referral";

export const referralsApi = createApi({
  reducerPath: "referralsApi",
  baseQuery: fetchBaseQuery({ baseUrl: env.NEXT_PUBLIC_API_BASE_URL }),
  tagTypes: ["Referrals"],
  endpoints: (builder) => ({
    getReferrals: builder.query<GetReferralsResponse, GetReferralsUrlQuery>({
      query: ({ page = 1 }) => `/referrals?page=${page}`,
      providesTags: ["Referrals"],
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (existing, incoming) => {
        existing.page = incoming.page;
        existing.data = [...new Set([...existing.data, ...incoming.data])];
      },
      forceRefetch: ({ currentArg, previousArg }) =>
        isEqual(currentArg, previousArg),
    }),
    createReferral: builder.mutation<Referral, ReferralInputSchema>({
      query: (referral) => ({
        url: "/referrals",
        method: "POST",
        body: referral,
      }),
      invalidatesTags: ["Referrals"],
    }),
    updateReferral: builder.mutation<Referral, ReferralInputSchema>({
      query: (referral) => ({
        url: `/referrals/${referral.id}`,
        method: "PUT",
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
  useUpdateReferralMutation,
  useDeleteReferralMutation,
} = referralsApi;
