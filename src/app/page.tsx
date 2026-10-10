import FocalityHome from "@/components/Home/FocalityHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Focality — AI Products for Modern Work" },
  description: "Focality builds AI products for modern work, helping businesses turn context into action.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Focality — AI Products for Modern Work",
    description: "Focality builds AI products for modern work, helping businesses turn context into action.",
    url: "https://focality.space/",
  },
  twitter: {
    title: "Focality — AI Products for Modern Work",
    description: "Focality builds AI products for modern work, helping businesses turn context into action.",
  },
};

export default function Home() {
  return (
    <FocalityHome />
  );
}
