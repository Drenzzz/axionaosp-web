import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });

export const metadata: Metadata = {
  title: "AxionAOSP",
  description: "AxionAOSP - Make your android better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} dark`}>
      <body className="bg-neutral-900 text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
