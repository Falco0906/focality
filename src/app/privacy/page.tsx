import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy / Focality",
  description: "How Focality handles information relating to its website and communications.",
};

const PrivacyPage = () => (
  <main className="focality-legal-page">
    <header className="legal-hero">
      <div className="focality-shell">
        <p className="legal-kicker">Focality / Privacy</p>
        <h1>Privacy Policy</h1>
        <p className="legal-intro">How we handle information relating to the Focality website and the people who interact with it.</p>
        <p className="legal-updated">Effective date: [EFFECTIVE DATE]</p>
      </div>
    </header>

    <div className="focality-shell legal-layout">
      <nav className="legal-contents" aria-label="Privacy Policy contents">
        <p>Contents</p>
        <a href="#who-we-are">Who we are</a>
        <a href="#information-we-collect">Information we collect</a>
        <a href="#how-we-use">How we use information</a>
        <a href="#sharing">Sharing and providers</a>
        <a href="#retention-security">Retention and security</a>
        <a href="#your-rights">Your rights</a>
        <a href="#other">Other important information</a>
        <a href="#contact">Contact</a>
      </nav>

      <article className="legal-prose">
        <p className="legal-notice">This policy is intended as practical website information and should be reviewed by qualified legal counsel before being treated as final legal advice.</p>

        <section id="who-we-are"><h2>1. Who Focality is</h2><p>Focality is an AI product company. We build our own AI products and, where appropriate, work with companies on applied AI projects. In this policy, “Focality,” “we,” “us,” and “our” refer to [LEGAL ENTITY NAME]. Our registered address is [REGISTERED ADDRESS].</p></section>
        <section id="information-we-collect"><h2>2. Information we collect</h2><p>We collect information that is provided to us through the website and information generated through its ordinary operation. The information we collect depends on how you use the site.</p><h3>Information you provide</h3><p>This may include your name, email address, company details, the contents of a message or inquiry, and any other information you choose to include when you contact us or submit a form. We may also receive information you provide when discussing a prospective client, partner, collaboration, application, or other business relationship.</p><h3>Information collected automatically</h3><p>Our hosting and web infrastructure may receive ordinary technical information such as an IP address, browser and device information, approximate location derived from an IP address, referring page, pages requested, and dates and times of requests. We use this information as needed to operate, secure, and troubleshoot the website.</p></section>
        <section id="how-we-use"><h2>3. How we use information</h2><p>We may use information to respond to messages and inquiries, evaluate prospective work or collaborations, communicate about Focality, maintain and improve the website, understand basic website usage, prevent abuse or security incidents, keep business records, and meet legal or administrative obligations.</p><p>We do not use this website to create or operate a Loqi product account. Information processed inside a Focality product is governed by the terms and privacy policy applicable to that product.</p></section>
        <section><h2>4. Communications</h2><p>If you contact us, we may use the information you provide to reply, follow up on a request, or continue a business conversation. We do not treat an inquiry as consent to send unrelated marketing. You can ask us to stop non-essential communications at any time.</p></section>
        <section><h2>5. Cookies and website usage</h2><p>We do not currently intentionally use advertising cookies, analytics pixels, or similar marketing trackers on this website. The site may still use technologies required by hosting, security, or browser operation. If that changes, we will update this policy and, where required, provide an appropriate notice or choice.</p></section>
        <section id="sharing"><h2>6. Sharing and website providers</h2><p>We may share information with service providers that help us host, secure, operate, or communicate through the website. When you submit the website contact form, the submitted information is sent through FormSubmit, the form-delivery provider used by the site, and may be delivered to Focality email recipients. We do not sell personal information.</p><p>We may also disclose information where reasonably necessary to comply with law, respond to lawful requests, protect people or property, investigate misuse, or support a business transaction such as a merger or acquisition.</p></section>
        <section id="retention-security"><h2>7. Retention</h2><p>We keep information only for as long as reasonably necessary for the purpose for which it was collected, to maintain a business record, resolve a dispute, enforce an agreement, or meet a legal obligation. Actual retention can vary by the type of inquiry and the systems involved; we have not assigned a single retention period to every category.</p><h2>8. Security</h2><p>We use reasonable administrative and technical measures appropriate to the nature of the information and the website. No online transmission or storage system can be guaranteed to be completely secure, so please avoid sending sensitive information through a general website inquiry form.</p></section>
        <section id="your-rights"><h2>9. Your privacy rights and requests</h2><p>Depending on where you live and the law that applies, you may have rights to request access to, correction of, deletion of, or restrictions on the use of personal information, or to object to certain processing. You may also ask questions about how we handle your information or raise a grievance. Send a request to [PRIVACY EMAIL]. We may need to verify your identity and clarify the scope of a request before responding.</p></section>
        <section><h2>10. International visitors and transfers</h2><p>Focality is based in India, and the website may be accessed from other countries. Information may be processed in India or in another country where Focality or a service provider operates. Applicable safeguards and response options may depend on the law that applies to your request.</p></section>
        <section id="other"><h2>11. Children&apos;s privacy</h2><p>The website is intended for a general business audience and is not directed to children. We do not knowingly request personal information from children. If you believe a child has provided information to us, contact [PRIVACY EMAIL].</p><h2>12. Third-party links</h2><p>The website may link to third-party websites, including Focality products and external services. Their privacy practices are separate from ours. Review the privacy policy of any external site before providing information.</p><h2>13. Product-specific policies</h2><p>Focality products may collect and process information within their own environments. Loqi, for example, has its own Privacy Policy and Terms of Service. Those product-specific documents apply to the relevant product and are not replaced by this website policy.</p><h2>14. Changes to this policy</h2><p>We may update this policy as the website, our practices, or applicable requirements change. The updated version will be posted on this page with a revised effective date. Please check this page periodically.</p></section>
        <section id="contact"><h2>15. Contact</h2><p>Questions, requests, or privacy concerns can be sent to [PRIVACY EMAIL]. You may also write to [LEGAL ENTITY NAME] at [REGISTERED ADDRESS].</p></section>
      </article>
    </div>
  </main>
);

export default PrivacyPage;
