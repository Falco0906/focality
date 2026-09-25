import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service / Focality",
  description: "Terms governing use of the Focality website and general company interactions.",
};

const TermsPage = () => (
  <main className="focality-legal-page">
    <header className="legal-hero">
      <div className="focality-shell">
        <p className="legal-kicker">Focality / Terms</p>
        <h1>Terms of Service</h1>
        <p className="legal-intro">Terms for using the Focality public website and interacting with Focality as a company.</p>
        <p className="legal-updated">Effective date: [EFFECTIVE DATE]</p>
      </div>
    </header>

    <div className="focality-shell legal-layout">
      <nav className="legal-contents" aria-label="Terms of Service contents">
        <p>Contents</p>
        <a href="#agreement">Agreement</a>
        <a href="#using-site">Using the website</a>
        <a href="#content">Content and IP</a>
        <a href="#submissions">Submissions and inquiries</a>
        <a href="#products-services">Products and client work</a>
        <a href="#third-party">Third-party links</a>
        <a href="#disclaimers">Disclaimers</a>
        <a href="#liability">Liability</a>
        <a href="#changes-contact">Changes and contact</a>
      </nav>

      <article className="legal-prose">
        <p className="legal-notice">These Terms are intended as practical website terms and should be reviewed by qualified legal counsel before being treated as final legal advice.</p>

        <section id="agreement"><h2>1. About these Terms</h2><p>These Terms of Service govern access to and use of the Focality public website. “Focality,” “we,” “us,” and “our” refer to [LEGAL ENTITY NAME], with a registered address at [REGISTERED ADDRESS]. By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the website.</p></section>
        <section id="using-site"><h2>2. Using the website</h2><p>You may use the website for lawful, genuine informational, business, and communication purposes. You are responsible for making sure that your use complies with applicable law and these Terms.</p><p>You must not misuse the website, attempt to gain unauthorized access, probe or compromise its security, interfere with its operation, introduce malicious code, impersonate another person or organization, or use automated means to access, scrape, copy, or monitor the website where that activity is prohibited or would place an unreasonable burden on the site.</p></section>
        <section id="content"><h2>3. Website content</h2><p>The website may contain information about Focality, its products, applied AI work, capabilities, ideas, and areas of interest. Content is provided for general information and may change without notice. It is not a professional, legal, financial, technical, or other tailored recommendation.</p><p>We try to keep information useful and current, but we do not promise that every description, statement, image, link, or other content is complete, current, or free from error.</p><h3>Intellectual property</h3><p>Focality or its licensors own or control the website and its content, including its text, visual design, branding, logos, imagery, graphics, code, and other materials, unless stated otherwise. You may view and use the website for its intended purpose. You may not reproduce, modify, distribute, publicly display, sell, create derivative works from, or commercially exploit website content without appropriate permission.</p><p>“Focality,” its logos, and other marks are not licensed by these Terms. Any third-party names or marks belong to their respective owners.</p></section>
        <section id="submissions"><h2>4. Contacting Focality and submitting information</h2><p>If you contact us, submit a form, make an inquiry, apply, or provide other information through the website, you represent that the information is accurate to the best of your knowledge and that you have the right to share it.</p><p>You should not send confidential, sensitive, regulated, or proprietary information through a general website form unless we have specifically asked for it and agreed how it will be handled. Sending information does not create a client, employment, partnership, or other formal relationship with Focality.</p><p>You retain ownership of information you submit. You give Focality permission to use and process it as reasonably necessary to respond, evaluate an inquiry, operate the website, and pursue the conversation you initiated, subject to our <a href="/privacy">Privacy Policy</a> and any separate written agreement.</p></section>
        <section id="products-services"><h2>5. Products and applied AI work</h2><p>Focality primarily builds its own AI products and may also work with selected companies on applied AI projects, including custom software, AI systems, automations, internal tools, workflows, and related technical work.</p><p>Descriptions of products, capabilities, or services on this website are not an offer, promise of availability, or guarantee of a particular outcome. Specific client engagements may be governed by a separate contract, statement of work, proposal, or other written terms. Those terms will govern the relevant engagement.</p><p>Certain Focality products and services may also be governed by separate terms applicable to those products or services. Where separate terms apply, they will govern the relevant product or service. For example, Loqi has its own Terms of Service and Privacy Policy; these website Terms do not replace them.</p></section>
        <section id="third-party"><h2>6. Third-party websites and services</h2><p>The website may link to third-party websites, products, or services, including Focality products and external providers. Links are provided for convenience and do not mean that Focality endorses or controls those sites. Third-party terms and privacy policies apply to your use of third-party websites and services.</p></section>
        <section id="disclaimers"><h2>7. Disclaimers</h2><p>To the extent permitted by applicable law, the website and its content are provided on an “as available” and “as is” basis. We do not guarantee that the website will always be available, uninterrupted, secure, timely, or error-free, or that it will meet a particular purpose.</p><p>References to AI technologies, products, research, or capabilities do not create a guarantee about accuracy, performance, reliability, availability, business outcomes, or suitability for a particular use. Any express commitments for a product or engagement must appear in the separate terms or written agreement that applies to it.</p></section>
        <section id="liability"><h2>8. Limitation of liability</h2><p>To the extent permitted by applicable law, Focality and its directors, employees, contractors, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive losses, or for loss of data, revenue, profits, business, or goodwill, arising from or related to your use of or inability to use the website.</p><p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited. Where a limitation is not permitted, it will apply only to the maximum extent allowed by applicable law.</p></section>
        <section><h2>9. Changes to the website</h2><p>We may update, suspend, restrict, or discontinue any part of the website, including content and functionality, at any time. We may also remove information or restrict access where reasonably necessary to operate the site, protect its security, or comply with law.</p></section>
        <section id="changes-contact"><h2>10. Changes to these Terms</h2><p>We may revise these Terms as the website, our business, or applicable requirements change. The updated version will be posted on this page with a revised effective date. Your continued use of the website after an update means you accept the revised Terms.</p><h2>11. Governing law and jurisdiction</h2><p>These Terms are intended to be governed by the laws of [GOVERNING LAW / JURISDICTION], without regard to conflict-of-law principles. Courts or other forums in that jurisdiction will have the jurisdiction specified by applicable law, subject to any mandatory rights you may have.</p><h2>12. Contact</h2><p>Questions about these Terms can be sent to [LEGAL CONTACT EMAIL] or by post to [LEGAL ENTITY NAME], [REGISTERED ADDRESS].</p></section>
      </article>
    </div>
  </main>
);

export default TermsPage;
