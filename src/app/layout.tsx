"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Home / Focality</title>
        <meta name="description" content="Focality builds intelligent automations, agentic workflows, websites, and AI/ML research solutions to help businesses grow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/images/logo/Artisan_logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/logo/Artisan_logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo/Artisan_logo.jpg" />
      </head>

      <body className={`bg-[#050505] text-[#ededed] antialiased ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

