import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact / Focality",
  description: "Get in touch with Focality.",
};

const ContactPage = () => (
  <main className="focality-contact-page">
    <div className="focality-shell">
      <div className="focality-contact-layout">
        <div className="focality-contact-intro">
          <p className="focality-contact-kicker">Focality</p>
          <h1>Let&apos;s talk about what you&apos;re building.</h1>
          <p>We build our own products, and work with a small number of teams on problems that need a thoughtful AI system.</p>
        </div>
        <Contact />
      </div>
    </div>
  </main>
);

export default ContactPage;
