"use client";

import React, { FC, PropsWithChildren, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteReferralMutation } from "@/services/referrals";

type DeleteReferralPopoverProps = PropsWithChildren & {
  asChild?: boolean;
  referralId: string;
};

const DeleteReferralPopover: FC<DeleteReferralPopoverProps> = ({
  asChild,
  children,
  referralId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const [deleteReferral, { error }] = useDeleteReferralMutation();

  useEffect(() => {
    if (error) {
      toast({
        description: "There was an error deleting the referral.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const onPopoverOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const onDeleteButtonClick = async () => {
    await deleteReferral(referralId);
    setIsOpen(() => false);
  };

  return (
    <Popover open={isOpen} onOpenChange={onPopoverOpenChange}>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent align="end" className="space-y-4">
        <h1 className="text-lg font-semibold">Remove this referral?</h1>
        <Button
          variant="destructive"
          className="w-full"
          onClick={onDeleteButtonClick}
        >
          Delete
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default DeleteReferralPopover;
