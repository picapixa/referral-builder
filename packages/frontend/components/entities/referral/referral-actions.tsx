import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { FC } from "react";

import { Button } from "@/components/ui/button";

type ReferralActionsProps = {
  referralId: string;
};

const ReferralActions: FC<ReferralActionsProps> = ({ referralId }) => {
  return (
    <div className="invisible flex gap-1 text-slate-500 justify-end group-hover:visible">
      <Button className="rounded-full" variant="ghost" size="icon">
        <Pencil1Icon />
      </Button>
      <Button className="rounded-full" variant="ghost" size="icon">
        <TrashIcon />
      </Button>
    </div>
  );
};

export default ReferralActions;
