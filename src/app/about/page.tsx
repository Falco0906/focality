import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Focality",
  description: "Focality builds AI-native software around real problems.",
};

const AboutPage = () => (
  <main className="focality-about-page">
    <section className="about-page-hero"><div className="focality-shell"><p className="about-page-kicker">About Focality</p><h1>Software built around intelligence.</h1><p className="about-page-lede">Focality is an AI company focused on building software around intelligence.</p></div></section>
    <section className="about-page-copy"><div className="focality-shell about-page-grid"><p className="about-page-side-label">What we&apos;re building</p><div className="about-page-prose"><p>We started with a simple observation: much of the software people use every day still depends on them doing the thinking, sorting, searching, and moving information between systems themselves. AI makes it possible to build software differently — software that can understand context, reason through information, and take meaningful action alongside the people using it.</p><p>That&apos;s what we&apos;re interested in building.</p><p>Our primary focus is our own products: AI-native software designed around real problems rather than existing interfaces. Our first product, Loqi, is built around lead generation and automated outreach, helping businesses discover relevant prospects, understand the signals around them, and turn that information into outreach.</p><p>Alongside our products, we also work with companies that have problems that don&apos;t fit neatly into an existing product. We build specific AI software, automations, internal tools, and intelligent workflows where custom work makes sense. The work is different, but the principle is the same: build software around the work, not the other way around.</p></div></div></section>
    <section className="about-page-principles"><div className="focality-shell about-page-grid"><p className="about-page-side-label">How we work</p><div className="about-page-prose"><p>We&apos;re still a small company, and that&apos;s intentional. It lets us experiment, build quickly, stay close to the products we make, and spend our time on problems we actually find interesting. We&apos;re not trying to put AI everywhere. We&apos;re trying to figure out where intelligence can make software genuinely more useful — and then build it.</p></div></div></section>
    <section className="about-page-closing"><div className="focality-shell"><p>Focality is building toward a world where software doesn&apos;t just wait for instructions. It understands enough to help.</p></div></section>
  </main>
);

export default AboutPage;
