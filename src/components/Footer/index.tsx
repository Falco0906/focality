import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="focality-footer">
    <div className="focality-shell">
      <div className="footer-top">
        <Link href="/" className="footer-brand">
          <Image src="/images/logo/Artisan_logo.jpg" alt="" width={30} height={30} className="footer-brand-mark" />
          <span className="focality-wordmark">focality</span>
        </Link>
        <div className="footer-links">
          <Link href="/#products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} focality</p>
        <a href="https://www.linkedin.com/company/focalityspace" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      </div>
    </div>
  </footer>
);

export default Footer;
