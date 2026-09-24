import Link from "next/link";
import Contact from "@/components/Contact";
import ProductGallery from "./ProductGallery";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function FocalityHome() {
  return (
    <main>
      <section className="focality-hero" id="home">
        <div className="focality-shell">
          <div className="focality-hero-copy">
            <h1>
              AI <span className="hero-underline">products</span> for work that<br />
              shouldn&apos;t feel like software.
            </h1>
            <p className="focality-intro">
              We create intelligent software for the way people and businesses actually work.
            </p>
            <a className="focality-button" href="#contact">
              Talk to us <Arrow />
            </a>
          </div>
        </div>
      </section>

      <ProductGallery />

      <section className="focality-thesis">
        <div className="focality-shell thesis-grid">
          <h2>We don&apos;t add AI to software.<br />We build software around the intelligence you need.</h2>
          <div className="thesis-copy">
            <p>Most software waits for you to tell it what to do. We think some software should understand the work, figure out what matters, and help move it forward.</p>
            <p className="thesis-signoff">That&apos;s what we&apos;re trying to build at Focality.</p>
          </div>
        </div>
      </section>

      <section className="focality-next" aria-labelledby="next-title">
        <div className="focality-shell next-grid">
          <div>
            <h2 id="next-title">More products in development.</h2>
            <p>We&apos;re exploring software for work that benefits from a better understanding of context, not another layer of busywork.</p>
          </div>
        </div>
      </section>

      <section className="focality-applied" id="applied-ai" aria-labelledby="applied-title">
        <div className="focality-shell applied-grid">
          <div>
            <h2 id="applied-title">We build our own products. Sometimes, we build with others.</h2>
          </div>
          <div className="applied-copy">
            <p>When a company has a problem that doesn&apos;t fit neatly into an existing product, we can help build the intelligence around it.</p>
            <ul aria-label="Capabilities">
              <li>Custom AI software</li>
              <li>Intelligent internal tools</li>
              <li>Workflow automation and agentic systems</li>
              <li>AI integrations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="focality-about" id="about" aria-labelledby="about-title">
        <div className="focality-shell about-grid">
          <div className="about-copy">
            <h2 id="about-title">A small team building useful, intelligent software.</h2>
            <p>We&apos;re interested in what AI-native products can become when they are made with care, technical depth, and a point of view.</p>
          </div>
          <div id="contact"><Contact /></div>
        </div>
      </section>

      <section className="focality-closing">
        <div className="focality-shell">
          <h2>Let&apos;s build what comes next.</h2>
        </div>
      </section>
    </main>
  );
}
