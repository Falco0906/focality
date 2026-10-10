import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import "@fontsource/space-grotesk/500.css";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://focality.space"),
  title: {
    default: "Focality — AI Products for Modern Work",
    template: "%s / Focality",
  },
  description: "Focality builds AI products for modern work, helping businesses turn context into action.",
  applicationName: "Focality",
  openGraph: {
    siteName: "Focality",
    type: "website",
    url: "https://focality.space/",
    title: "Focality — AI Products for Modern Work",
    description: "Focality builds AI products for modern work, helping businesses turn context into action.",
  },
  twitter: {
    card: "summary",
    title: "Focality — AI Products for Modern Work",
    description: "Focality builds AI products for modern work, helping businesses turn context into action.",
  },
  icons: {
    icon: "/images/logo/Artisan_logo.jpg",
    shortcut: "/images/logo/Artisan_logo.jpg",
    apple: "/images/logo/Artisan_logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f5",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Focality",
  url: "https://focality.space/",
  sameAs: ["https://www.linkedin.com/company/focalityspace/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${GeistSans.className} bg-[#faf9f5] text-[#111110] antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
