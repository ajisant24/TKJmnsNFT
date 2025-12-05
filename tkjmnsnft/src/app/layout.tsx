import type { Metadata } from "next";
import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

export const metadata: Metadata = {
  title: "TKJmnsNFT - Karya Anak TKJ",
  description: "Galeri NFT karya anak TKJ seluruh Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <ThirdwebProvider activeChain={Sepolia}>
        <body>{children}</body>
      </ThirdwebProvider>
    </html>
  );
}