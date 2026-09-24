"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Home / Focality</title>
        <meta name="description" content="Focality builds AI products for work that shouldn't feel like software." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#faf9f5" />
        <link rel="icon" href="/images/logo/Artisan_logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/logo/Artisan_logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo/Artisan_logo.jpg" />
      </head>

      <body className={`${GeistSans.className} bg-[#faf9f5] text-[#111110] antialiased`}>
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
