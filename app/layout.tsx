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
    icon: "/logo_white.png",
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
      <body
        className={`${i18n.language === "uz" ? albertSans.variable : roboto.variable}`}
      >
        <Header />
        {children}
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
