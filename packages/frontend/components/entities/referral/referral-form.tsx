"use client";

import React from "react";
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

const ReferralForm = () => {
  const form = useForm();
  const { control, handleSubmit } = form;

  const onFormSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="flex flex-wrap">
          <FormField
            name="givenName"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Given name</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input type="email" {...field} />
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

        <h2 className="font-medium text-lg mx-2">Address</h2>

        <div className="flex flex-wrap">
          <FormField
            name="addressNumber"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Home name or #</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="addressStreet"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="addressSuburb"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Suburb</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="addressState"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="addressPostcode"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="addressCountry"
            control={control}
            render={({ field }) => (
              <FormItem className="w-full md:p-2 md:w-1/2">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="p-2 text-right">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default ReferralForm;
