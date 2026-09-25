"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = ["loqi", "custom", "coming"] as const;
type Slide = (typeof slides)[number];

export default function ProductGallery() {
  const [position, setPosition] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const active = position === 4 ? 0 : position === 0 ? 2 : position - 1;

  const next = () => setPosition((current) => Math.min(current + 1, 4));
  const previous = () => setPosition((current) => Math.max(current - 1, 0));

  useEffect(() => {
    if (isHovered) return;
    const timer = window.setInterval(next, 5000);
    return () => window.clearInterval(timer);
  }, [isHovered]);

  const handleTransitionEnd = () => {
    if (position !== 0 && position !== 4) return;
    const track = trackRef.current;
    const resetPosition = position === 0 ? 3 : 1;
    if (track) {
      track.style.transition = "none";
      track.style.transform = `translate3d(-${resetPosition * 20}%, 0, 0)`;
      track.offsetHeight;
      window.requestAnimationFrame(() => {
        track.style.transition = "";
      });
    }
    setPosition(resetPosition);
  };

  const renderSlide = (slide: Slide, key: string) => {
    if (slide === "loqi") {
      return (
        <div className="product-gallery-slide product-gallery-loqi" key={key}>
          <img className="product-gallery-background" src="/images/gallery/tropical-green-leaves-background.jpg" alt="" />
          <div className="product-gallery-content">
            <h2>Loqi</h2>
            <p className="product-gallery-loqi-tagline">From finding leads to reaching them.</p>
            <p className="product-gallery-loqi-description">Discover prospects, understand the opportunity, and automate the first touch.</p>
            <a className="product-gallery-contact" href="https://www.tryloqi.com/" target="_blank" rel="noreferrer">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      );
    }

    if (slide === "custom") {
      return (
          <div className="product-gallery-slide product-gallery-custom" key={key}>
          <img className="product-gallery-background" src="/images/gallery/b-927.jpg" alt="" />
          <div className="product-gallery-content">
            <h2>Custom intelligence<br />for specific work.</h2>
            <p>We also build custom automations and AI software for companies with problems that need a system of their own.</p>
            <Link className="product-gallery-contact" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      );
    }

    return (
      <div className="product-gallery-slide product-gallery-coming" key={key}>
        <img className="product-gallery-background" src="/images/gallery/img-2317.jpg" alt="" />
        <div className="product-gallery-content">
          <h2>More products<br />coming soon.</h2>
          <p>We&apos;re working on more software for work that benefits from a better understanding of context.</p>
        </div>
      </div>
    );
  };

  return (
    <section className="product-gallery" id="products" aria-label="Focality products">
      <div className="product-gallery-stage" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div ref={trackRef} className="product-gallery-track is-animated" style={{ transform: `translate3d(-${position * 20}%, 0, 0)` }} onTransitionEnd={handleTransitionEnd}>
          {renderSlide("coming", "clone-coming")}
          {renderSlide("loqi", "loqi")}
          {renderSlide("custom", "custom")}
          {renderSlide("coming", "coming")}
          {renderSlide("loqi", "clone-loqi")}
        </div>
        <button className="product-gallery-arrow product-gallery-arrow-left" type="button" onClick={previous} aria-label="Previous product">←</button>
        <button className="product-gallery-arrow product-gallery-arrow-right" type="button" onClick={next} aria-label="Next product">→</button>
      </div>
      <div className="product-gallery-dots" aria-label="Product slides">
        {slides.map((slide, index) => (
          <button key={slide} type="button" className={index === active ? "is-active" : ""} onClick={() => setPosition(index + 1)} aria-label={`Show ${slide} slide`} aria-current={index === active ? "true" : undefined} />
        ))}
      </div>
    </section>
  );
}
