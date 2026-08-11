"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  LockKeyhole,
  Mail,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";
import { Footer, Header, TrustBar } from "./components";

const pillars = [
  ["/assets/pillar-nourish.png", "Nourish Your Body", "Simple, feel-good nutrition that fuels your glow."],
  ["/assets/pillar-radiant.png", "Radiant Skin", "Proven skincare rituals for a natural, healthy glow."],
  ["/assets/pillar-calm.png", "Calm Your Mind", "Reduce stress and build habits that last."],
  ["/assets/pillar-confident.png", "Confident You", "Elevate your mindset and become your best self."],
] as const;

const testimonials = [
  ["This guide changed my mornings, my skin, and my entire mindset. I finally feel like me again!", "Sarah J.", "New York, NY", "/assets/results-skin.webp"],
  ["I love how simple and realistic everything is. I’ve never been more consistent or confident.", "Emily R.", "Austin, TX", "/assets/call-woman.webp"],
  ["The quiz was so fun and the guide is full of easy tips that actually work. My glow is unreal!", "Megan L.", "Los Angeles, CA", "/assets/quiz-woman.webp"],
];

const faqs = [
  ["Is the guide really free?", "Yes—completely free. No credit card is needed, and you can start your personalized Glow Quiz immediately."],
  ["Is this for all ages and skin types?", "Yes. Your guide is personalized around your goals, current routine, lifestyle, and comfort level."],
  ["How long does it take to see results?", "Many women notice small shifts in consistency, energy, and confidence within the first few weeks of following their rituals."],
  ["How will I receive my guide?", "Complete the Glow Quiz and enter your email. Your personalized results and free guide will be ready right away."],
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const startQuiz = (event: React.FormEvent) => {
    event.preventDefault();
    if (email) window.location.href = `/quiz?email=${encodeURIComponent(email)}`;
  };

  return (
    <main>
      <Header />

      <section className="homeHero" id="top">
        <div className="homeHeroInner shell">
          <div className="heroCopy">
            <p className="eyebrow">SELF-CARE. CONFIDENCE. RADIANCE. <Sparkles /></p>
            <h1>Glow From <em>Within</em></h1>
            <p className="heroLead">Transform your beauty, your habits, and your life<br />with simple rituals that create lasting results.</p>
            <div className="heroBenefits">
              <span><Zap /> More Energy</span>
              <span><Sparkles /> Clearer Skin</span>
              <span><Heart /> Unshakable Confidence</span>
            </div>
          </div>

          <div className="heroWoman" role="img" aria-label="Woman enjoying a calm beauty and wellness ritual" />

          <form className="leadCard" onSubmit={startQuiz}>
            <img src="/assets/guide.webp" alt="Glow From Within beauty and wellness guide mockup" />
            <small>FREE GUIDE + QUIZ</small>
            <h2>Discover Your Glow<br /><em>in 60 Seconds</em></h2>
            <p>Take the quiz and get our Free Beauty &amp; Wellness Guide tailored to you.</p>
            <label>
              <Mail aria-hidden="true" />
              <span className="srOnly">Email address</span>
              <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email address" />
            </label>
            <button className="button" type="submit">TAKE THE QUIZ <ArrowRight /></button>
            <div className="secure"><LockKeyhole /> 100% FREE. No spam, ever.</div>
          </form>
        </div>
      </section>

      <TrustBar />

      <section className="contentSection shell" id="programs">
        <h2 className="sectionTitle">Feel Beautiful. Inside &amp; Out.</h2>
        <div className="pillarGrid">
          {pillars.map(([icon, title, description]) => (
            <article key={title}>
              <img className="pillarIcon" src={icon} alt="" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection testimonialSection" id="about">
        <div className="shell">
          <h2 className="sectionTitle">Real Women. Real Results. <Sparkles /></h2>
          <div className="testimonialGrid">
            {testimonials.map(([quote, name, place, avatar]) => (
              <article key={name}>
                <div className="quoteMark">“</div>
                <p>{quote}</p>
                <div className="stars" aria-label="Five star review">★★★★★</div>
                <div className="reviewer">
                  <img src={avatar} alt="" />
                  <span><strong>{name}</strong><small>{place}</small></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contentSection resultsSection shell" id="results">
        <h2 className="sectionTitle">Real Results. Real Transformations.</h2>
        <div className="resultGrid">
          <img src="/assets/results-skin.webp" alt="Before and after skin transformation" />
          <div className="resultCopy">
            <h3>Clearer Skin<br />Brighter You</h3>
            <p>Visible results in just<br />4 weeks.</p>
            <ul><li>Fewer breakouts</li><li>More even tone</li><li>Natural glow</li></ul>
          </div>
          <img src="/assets/results-body.webp" alt="Before and after wellness transformation" />
          <div className="resultCopy">
            <h3>More Energy<br />Stronger You</h3>
            <p>Feel lighter, stronger<br />and unstoppable.</p>
            <ul><li>Boosted energy</li><li>Better digestion</li><li>Healthy habits</li></ul>
          </div>
        </div>
      </section>

      <section className="guideOffer shell" id="guide">
        <div className="offerImage"><img src="/assets/guide.webp" alt="Free Glow From Within guide and mobile preview" /></div>
        <div className="offerHeadline">
          <small>LIMITED TIME OFFER</small>
          <h2>Your Free Beauty &amp;<br />Wellness Guide Awaits</h2>
          <p>Join thousands of women transforming their lives<br />with simple daily rituals.</p>
        </div>
        <div className="offerBenefits">
          <ul>
            <li><Check /> Personalized tips just for you</li>
            <li><Check /> Easy-to-follow beauty &amp; wellness routines</li>
            <li><Check /> Science-backed &amp; expert-approved</li>
            <li><Check /> Instant access to your free guide</li>
          </ul>
          <a className="button" href="/quiz">GET MY FREE GUIDE <ArrowRight /></a>
          <small><LockKeyhole /> No credit card required. 100% free.</small>
        </div>
      </section>

      <section className="faqSection shell" id="faq">
        <h2>Frequently Asked Questions <WandSparkles /></h2>
        <div className="faqGrid">
          {faqs.map(([question, answer], index) => (
            <article className={openFaq === index ? "open" : ""} key={question}>
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                {question}<ChevronDown />
              </button>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
