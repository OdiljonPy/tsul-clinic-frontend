/* eslint-disable camelcase */

import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/shared/Header";
import React from "react";
import SFooter from "@/components/layout/footer/SFooter";
import Head from "next/head";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "TSUL CLINIC",
  description: "Your one stop solution for legal matters",
  icons: {
    icon: "/logo_white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/66d1ab4250c10f7a00a20440/1i6hg9vgr';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();`,
          }}
        ></script>
      </Head>
      <body className={`${albertSans.variable}`}>
        <Header />
        {children}
        <SFooter />
        <Toaster />
      </body>
    </html>
  );
}
