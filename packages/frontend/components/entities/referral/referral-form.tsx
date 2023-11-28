"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateReferralInputSchema,
  createReferralInputSchema,
} from "db-prisma/src/validators/zod/create-referral.schema";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateReferralMutation } from "@/services/referrals";

type ReferralFormProps = {
  onSubmit?: () => void;
};

const ReferralForm: FC<ReferralFormProps> = ({ onSubmit }) => {
  const form = useForm<CreateReferralInputSchema>({
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
    resolver: zodResolver(createReferralInputSchema),
    mode: "all",
  });
  const { control, handleSubmit } = form;

  const [createReferral, {}] = useCreateReferralMutation();

  const onFormSubmit = async (data: CreateReferralInputSchema) => {
    await createReferral(data);
    onSubmit?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <h2 className="font-medium text-slate-500 text-xs uppercase tracking-wider pt-4 pb-2 border-b">
          Personal details
        </h2>
        <div className="flex flex-wrap">
          <FormField
            name="given_name"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Given name</FormLabel>
                <FormControl>
                  <Input autoComplete="given-name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="surname"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Surname</FormLabel>
                <FormControl>
                  <Input autoComplete="family-name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <h2 className="font-medium text-slate-500 text-xs uppercase tracking-wider pt-4 pb-2 border-b">
          Address
        </h2>

        <div className="flex flex-wrap">
          <FormField
            name="address_number"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Home name or #</FormLabel>
                <FormControl>
                  <Input autoComplete="address-line1" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="address_street"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input autoComplete="address-line-2" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="address_suburb"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Suburb</FormLabel>
                <FormControl>
                  <Input autoComplete="address-level2" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="address_state"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input autoComplete="address-level1" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="address_postcode"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input autoComplete="postal-code" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="address_country"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input autoComplete="country" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="p-2 text-right">
          <Button variant="success" type="submit">
            Create Referral
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReferralForm;
