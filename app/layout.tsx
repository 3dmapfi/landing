import MouseMoveEffect from "@/components/mouse-move-effect";
import { WalletProviderWrapper } from "@/components/wallet-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3DMapFi - Cutting-Edge Map Solutions",
  description:
    "3DMapFi delivers innovative, high-performance maps for businesses of the future.",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <MouseMoveEffect />
        <WalletProviderWrapper>{children}</WalletProviderWrapper>
      </body>
    </html>
  );
}
