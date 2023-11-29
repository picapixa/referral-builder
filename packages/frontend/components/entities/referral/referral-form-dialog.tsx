"use client";

import { PlusIcon } from "@radix-ui/react-icons";
import { Referral } from "db-prisma/dist/client";
import React, { FC, useState } from "react";
import { Drawer } from "vaul";

import AddReferralForm from "./add-referral-form";
import UpdateReferralForm from "./update-referral-form";

import { Button } from "@/components/ui/button";

type ReferralFormDialogProps = {
  referral?: Referral;
};

const ReferralFormDialog: FC<ReferralFormDialogProps> = ({ referral }) => {
  const mode = referral ? "update" : "create";

  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const onFormSubmit = () => {
    setIsOpen(() => false);
  };

  return (
    <Drawer.Root
      shouldScaleBackground
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <Drawer.Trigger asChild>
        <Button className="fixed rounded-full w-12 h-12 bottom-4 right-4 md:hidden">
          <PlusIcon className="text-white" />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 p-2">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
          <div className="p-4 overflow-y-auto">
            <h1 className="text-xl font-semibold tracking-tighter">
              {mode === "create" && "Add new referral"}
              {mode === "update" && "Update referral"}
            </h1>
            {mode === "create" && <AddReferralForm onCreated={onFormSubmit} />}
            {mode === "update" && referral && (
              <UpdateReferralForm
                referral={referral}
                onUpdated={onFormSubmit}
              />
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ReferralFormDialog;
