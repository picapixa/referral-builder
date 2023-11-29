import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { FC } from "react";

import DeleteReferralPopover from "./delete-referral.popover";

import { Button } from "@/components/ui/button";

type ReferralActionsProps = {
  referralId: string;
};

const ReferralActions: FC<ReferralActionsProps> = ({ referralId }) => {
  return (
    <div className="flex gap-1 text-slate-500 justify-end md:invisible md:group-hover:visible">
      <Link href={`/?edit=${referralId}`} prefetch={false}>
        <Button className="rounded-full" variant="ghost" size="icon">
          <Pencil1Icon />
        </Button>
      </Link>
      <DeleteReferralPopover referralId={referralId} asChild>
        <Button className="rounded-full" variant="ghost" size="icon">
          <TrashIcon />
        </Button>
      </DeleteReferralPopover>
    </div>
  );
};

export default ReferralActions;
