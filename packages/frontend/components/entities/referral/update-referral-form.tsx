"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Referral } from "db-prisma/dist/client";
import {
  ReferralInputSchema,
  referralInputSchema,
} from "db-prisma/src/validators/zod/referral-input.schema";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

import ReferralForm from "./referral-form";

import { useUpdateReferralMutation } from "@/services/referrals";

type UpdateReferralFormProps = {
  referral: Referral;
  onReset?: () => void;
  onUpdated?: (data: Referral) => void;
};

const UpdateReferralForm: FC<UpdateReferralFormProps> = ({
  referral,
  onReset,
  onUpdated,
}) => {
  const form = useForm<ReferralInputSchema>({
    values: referral,
    resolver: zodResolver(referralInputSchema),
  });

  const [updateReferral] = useUpdateReferralMutation();

  const onFormSubmit = async (data: ReferralInputSchema) => {
    const referral = await updateReferral(data).unwrap();
    onUpdated?.(referral);
  };

  return (
    <ReferralForm
      form={form}
      submitButtonText="Update referral"
      onReset={onReset}
      onSubmit={onFormSubmit}
    />
  );
};

export default UpdateReferralForm;
