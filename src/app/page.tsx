import FocalityHome from "@/components/Home/FocalityHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home / Focality",
  description: "Focality builds AI products for work that shouldn't feel like software.",
};

export default function Home() {
  return (
    <FocalityHome />
  );
}
