import React, { FC, PropsWithChildren } from "react";

import StoreProvider from "./providers/StoreProvider";

const RootProviders: FC<PropsWithChildren> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default RootProviders;
