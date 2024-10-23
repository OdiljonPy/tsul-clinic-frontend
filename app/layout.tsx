/* eslint-disable camelcase */

import type { Metadata } from "next";
import { Albert_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import React from "react";
import SFooter from "@/components/layout/footer/SFooter";
import Head from "next/head";
import { getTranslation } from "@/i18n";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JivoChat from "@/components/JivoChat";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "TSUL CLINIC",
  description: "Your one stop solution for legal matters",
  icons: {
    icon: "/logo_bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = getTranslation();

  return (
    <html lang="en">
      <body
        className={`!overflow-x-hidden ${i18n.language === "uz" ? albertSans.variable : roboto.variable}`}
      >
        <Header />
        {children}
        <JivoChat />
        <SFooter />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
