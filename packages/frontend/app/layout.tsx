import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";

import "./globals.css";

import RootProviders from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Referral Builder",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
};

export default RootLayout;
