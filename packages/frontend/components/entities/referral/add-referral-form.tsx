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

import { useCreateReferralMutation } from "@/services/referrals";

type AddReferralFormProps = {
  onCreated?: (data: Referral) => void;
  onReset?: () => void;
};

const AddReferralForm: FC<AddReferralFormProps> = ({ onCreated, onReset }) => {
  const form = useForm<ReferralInputSchema>({
    defaultValues: {
      given_name: "",
      surname: "",
      email: "",
      phone: "",
      address_number: "",
      address_street: "",
      address_suburb: "",
      address_state: "",
      address_postcode: "",
      address_country: "",
    },
    resolver: zodResolver(referralInputSchema),
  });

  const [createReferral] = useCreateReferralMutation();

  const onFormSubmit = async (data: ReferralInputSchema) => {
    const referral = await createReferral(data).unwrap();
    onCreated?.(referral);
  };

  return (
    <ReferralForm
      form={form}
      submitButtonText="Add referral"
      onReset={onReset}
      onSubmit={onFormSubmit}
    />
  );
};

export default AddReferralForm;
