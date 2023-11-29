"use client";

import { Referral } from "db-prisma/dist/client";
import { ReferralInputSchema } from "db-prisma/src/validators/zod/referral-input.schema";
import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface InputSchema extends ReferralInputSchema, FieldValues {}

type ReferralFormProps<TSchema extends InputSchema> = {
  form: UseFormReturn<InputSchema>;
  referral?: Referral | null;
  resetButtonText?: string;
  submitButtonText: string;
  onReset?: () => void;
  onSubmit?: (data: TSchema) => void;
};

const ReferralForm = ({
  form,
  resetButtonText = "Reset",
  submitButtonText,
  onReset,
  onSubmit,
}: ReferralFormProps<InputSchema>) => {
  const { control, handleSubmit, reset } = form;

  const onResetButtonClick = () => {
    reset();
    onReset?.();
  };

  const onFormSubmit = async (data: InputSchema) => {
    onSubmit?.(data);
    reset();
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

        <div className="py-4 flex justify-between">
          <Button variant="secondary" onClick={onResetButtonClick}>
            {resetButtonText}
          </Button>
          <Button variant="success" type="submit">
            {submitButtonText}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReferralForm;
