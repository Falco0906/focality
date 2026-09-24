"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const darkPage = pathname !== "/" && pathname !== "/contact" && pathname !== "/blog";

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setProductsOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const ink = darkPage ? "text-[#ededed]" : "text-[#111110]";
  const muted = darkPage ? "text-[#a1a1aa] hover:text-white" : "text-[#57564f] hover:text-[#111110]";

  return (
    <header className={`focality-header ${sticky ? "focality-header-sticky" : ""} ${darkPage ? "focality-header-dark" : ""}`}>
      <div className="focality-shell focality-header-inner">
        <Link href="/" className={`footer-brand ${ink}`} onClick={() => setOpen(false)}>
          <Image src="/images/logo/Artisan_logo.jpg" alt="" width={30} height={30} className="footer-brand-mark" />
          <span className="focality-wordmark">Focality</span>
        </Link>
        <button className={`focality-menu-toggle ${ink}`} aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /> <span />
        </button>
        <nav ref={navRef} className={`focality-nav ${open ? "focality-nav-open" : ""}`} aria-label="Primary navigation">
          {menuData.map((item) => item.submenu ? (
            <div key={item.id} className={`focality-nav-dropdown ${productsOpen ? "is-open" : ""}`}>
              <button type="button" className={muted} aria-expanded={productsOpen} onClick={() => setProductsOpen(!productsOpen)}>{item.title} <span className="submenu-chevron" aria-hidden="true" /></button>
              <div className="focality-submenu">
                {item.submenu.map((subitem) => (
                  subitem.path ? (
                    <Link key={subitem.id} href={subitem.path} target={subitem.newTab ? "_blank" : undefined} rel={subitem.newTab ? "noreferrer" : undefined} onClick={() => { setOpen(false); setProductsOpen(false); }} className={muted}>{subitem.title}</Link>
                  ) : (
                    <span key={subitem.id} className="focality-submenu-label">{subitem.title}</span>
                  )
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.id} href={item.path!} onClick={() => setOpen(false)} className={muted}>{item.title}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
