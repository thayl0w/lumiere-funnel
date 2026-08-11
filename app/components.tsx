"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";

const navItems = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Programs", "/#programs"],
  ["Results", "/#results"],
  ["Blog", "/#guide"],
  ["Book a Call", "/booking"],
  ["Contact", "/#contact"],
];

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " inverse" : ""}`} href="/" aria-label="Lumière Beauty and Wellness home">
      LUMIÈRE
      <span>BEAUTY &amp; WELLNESS</span>
    </Link>
  );
}

export function Header({ active = "Home" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="siteHeader">
      <div className="headerInner shell">
        <Brand />
        <button
          className="menuButton"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "open" : ""} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={label} className={active === label ? "active" : ""} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button headerCta" href="/quiz">
          JOIN NOW <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

const trustItems = [
  [Users, "Trusted by 10,000+", "women"],
  [Star, "4.9/5 average", "rating"],
  [ShieldCheck, "Expert-backed", "wellness"],
  [Leaf, "Simple daily", "rituals"],
  [Heart, "Personalized", "wellness"],
] as const;

export function TrustBar() {
  return (
    <section className="trustBar" aria-label="Lumière customer trust highlights">
      <div className="shell trustInner">
        {trustItems.map(([Icon, lineOne, lineTwo]) => (
          <div className="trustItem" key={lineOne}>
            <Icon aria-hidden="true" />
            <span>{lineOne}<br />{lineTwo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [legal, setLegal] = useState<"privacy" | "terms" | null>(null);

  return (
    <footer id="contact" className="siteFooter">
      <div className="shell footerGrid">
        <div className="footerIntro">
          <Brand />
          <p>Empowering women to look, feel,<br />and live beautifully every day.</p>
          <div className="socialLinks" aria-label="Social links">
            <a href="https://www.instagram.com/" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.facebook.com/" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.youtube.com/" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>
        <div className="footerLinks">
          <b>EXPLORE</b>
          <Link href="/#about">About Us</Link>
          <Link href="/#programs">Programs</Link>
          <Link href="/#results">Success Stories</Link>
          <Link href="/#guide">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="footerLinks">
          <b>RESOURCES</b>
          <Link href="/#guide">Beauty Guide</Link>
          <Link href="/#guide">Wellness Tips</Link>
          <Link href="/quiz">Glow Quiz</Link>
          <Link href="/#faq">FAQs</Link>
          <Link href="/#contact">Privacy Policy</Link>
        </div>
        <div className="footerConnect">
          <b>STAY CONNECTED</b>
          <p>Get weekly tips, exclusive content,<br />and special offers.</p>
          {joined ? (
            <div className="newsletterSuccess"><Sparkles size={16} /> You’re on the list—welcome!</div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); if (email) setJoined(true); }}>
              <label className="srOnly" htmlFor="footer-email">Email address</label>
              <input id="footer-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" />
              <button aria-label="Join the Lumière newsletter"><ArrowRight /></button>
            </form>
          )}
        </div>
      </div>
      <div className="shell footerBottom">
        <span>© 2026 Lumière Beauty &amp; Wellness. All Rights Reserved.</span>
        <span><button onClick={() => setLegal("privacy")}>Privacy Policy</button><button onClick={() => setLegal("terms")}>Terms of Use</button></span>
      </div>
      {legal && (
        <div className="legalOverlay" role="presentation" onMouseDown={() => setLegal(null)}>
          <section className="legalDialog" role="dialog" aria-modal="true" aria-labelledby="legal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="legalClose" onClick={() => setLegal(null)} aria-label="Close legal information"><X /></button>
            <small>LUMIÈRE BEAUTY &amp; WELLNESS</small>
            <h2 id="legal-title">{legal === "privacy" ? "Privacy Policy" : "Terms of Use"}</h2>
            {legal === "privacy" ? (
              <p>This portfolio experience only uses information you enter to demonstrate the on-page quiz, guide, and booking interactions. It does not transmit or store your personal information. Connect your approved email, analytics, and scheduling services before using the site with real customers.</p>
            ) : (
              <p>This is a front-end demonstration of the Lumière customer journey. Guide delivery, consultation availability, customer accounts, payments, and professional advice require the appropriate live services and business policies before public use.</p>
            )}
            <button className="button" onClick={() => setLegal(null)}>GOT IT</button>
          </section>
        </div>
      )}
    </footer>
  );
}
