import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const onest = Onest({ 
  subsets: ["latin"], 
  variable: "--font-onest",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "AxionAOSP",
  description: "AxionAOSP - Make your android better",
  keywords: "AxionAOSP, Android ROM, AOSP, Custom ROM",
  robots: "index,follow",
  openGraph: {
    title: "AxionAOSP - Make your android better",
    description: "AxionAOSP - Make your android better",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} dark`}>
      <head>
        <link
          rel="preload"
          href="/img/home.png"
          as="image"
          type="image/png"
        />
        <link rel="dns-prefetch" href="//raw.githubusercontent.com" />
        <link rel="dns-prefetch" href="//www.quantamagazine.org" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-neutral-900 text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
