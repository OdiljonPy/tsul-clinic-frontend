/* eslint-disable camelcase */

import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/shared/Header";
import React from "react";
import SFooter from "@/components/layout/footer/SFooter";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "TSUL CLINIC",
  description: "Your one stop solution for legal matters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable}`}>
        <Header />
        {children}
        <SFooter />
        <Toaster />
      </body>
    </html>
  );
}
