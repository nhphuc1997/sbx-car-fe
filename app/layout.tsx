import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SBX car",
  description: "SBX car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
