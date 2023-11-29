import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Referral } from "db-prisma/src/types";
import { ReferralInputSchema } from "db-prisma/src/validators/zod/referral-input.schema";
import isEqual from "lodash/isEqual";

import { env } from "../env";

import { GetReferralsResponse, GetReferralsUrlQuery } from "@/types/referral";

export const referralsApi = createApi({
  reducerPath: "referralsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.NEXT_PUBLIC_API_BASE_URL,
    cache: "no-store",
  }),
  tagTypes: ["Referrals"],
  endpoints: (builder) => ({
    getReferrals: builder.query<GetReferralsResponse, GetReferralsUrlQuery>({
      query: ({ page = 1 }) => `/referrals?page=${page}`,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Referrals" as const,
                id,
              })),
              "Referrals",
            ]
          : ["Referrals"],
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (existing, incoming) => {
        return {
          ...existing,
          ...incoming,
          data: !isEqual(existing, incoming)
            ? [...new Set([...existing.data, ...incoming.data])]
            : existing.data,
        };
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
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
      invalidatesTags: (result, error, { id }) => [{ type: "Referrals", id }],
      onQueryStarted: async (referral, { dispatch, queryFulfilled }) => {
        let patchResult = null;
        try {
          const { data: updatedReferral } = await queryFulfilled;
          patchResult = dispatch(
            referralsApi.util.updateQueryData("getReferrals", {}, (draft) => {
              const index = draft.data.findIndex(
                (referral) => referral.id === updatedReferral.id,
              );
              draft.data[index] = updatedReferral;
            }),
          );
        } catch {
          patchResult?.undo();
          dispatch(referralsApi.util.invalidateTags(["Referrals"]));
        }
      },
    }),
    deleteReferral: builder.mutation<Referral, string>({
      query: (id) => ({
        url: `/referrals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Referrals"],
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          referralsApi.util.updateQueryData("getReferrals", {}, (draft) => {
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
