"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Referral } from "db-prisma/dist/client";
import {
  ReferralInputSchema,
  referralInputSchema,
} from "db-prisma/src/validators/zod/referral-input.schema";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const form = useForm<ReferralInputSchema>({
    values: referral,
    resolver: zodResolver(referralInputSchema),
  });

  const [updateReferral] = useUpdateReferralMutation();

  const onFormReset = () => {
    router.replace("/");
    onReset?.();
  };

  const onFormSubmit = async (data: ReferralInputSchema) => {
    const referral = await updateReferral(data).unwrap();
    onUpdated?.(referral);
  };

  return (
    <ReferralForm
      form={form}
      resetButtonText="Cancel"
      submitButtonText="Update referral"
      onReset={onFormReset}
      onSubmit={onFormSubmit}
    />
  );
};

export default UpdateReferralForm;
