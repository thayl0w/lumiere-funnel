"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  LockKeyhole,
  Mail,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Footer, Header, TrustBar } from "../components";

const times = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const bookingFaqs = [
  ["Is the discovery call really free?", "Yes. The 30-minute discovery call is complimentary and comes with no obligation."],
  ["What if I need to reschedule?", "You can select a new date and time here before confirming. For a booked call, reply to your confirmation email."],
  ["What can I expect on the call?", "We’ll talk through your goals, current routine, and the simplest next steps for your personalized glow plan."],
];

const bookingTestimonials = [
  ["This guide was the perfect first step. I’ve never felt more inspired to take care of me.", "Sarah J.", "New York, NY", "/assets/results-skin.webp"],
  ["Booking my discovery call was so easy. I felt supported from the very first click.", "Emily R.", "Austin, TX", "/assets/call-woman.webp"],
  ["I love how personalized everything is. This isn’t just another program—it’s real.", "Megan L.", "Los Angeles, CA", "/assets/quiz-woman.webp"],
];

export default function Booking() {
  const [monthOffset, setMonthOffset] = useState(0);
  const [day, setDay] = useState(13);
  const [time, setTime] = useState("11:00 AM");
  const [booked, setBooked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calendar = useMemo(() => {
    const date = new Date(2026, 7 + monthOffset, 1);
    const year = date.getFullYear();
    const month = date.getMonth();
    return {
      year,
      month,
      firstDay: new Date(year, month, 1).getDay(),
      totalDays: new Date(year, month + 1, 0).getDate(),
    };
  }, [monthOffset]);

  const changeMonth = (amount: number) => {
    setMonthOffset((value) => value + amount);
    setDay(1);
    setBooked(false);
  };

  return (
    <main className="bookingPage">
      <Header active="Book a Call" />

      <section className="bookingHero">
        <div className="callPortrait" role="img" aria-label="Woman welcoming you to your Lumière glow journey" />
        <div className="callWelcome">
          <p>WELCOME TO YOUR GLOW JOURNEY <Sparkles /></p>
          <h1>You’re In!</h1>
          <h2>Your Glow Guide<br />Is On The Way</h2>
          <span>Thank you for saying YES to you.<br />I’m so excited to support you on your journey<br />to radiant skin, more energy, and total confidence.</span>
          <Heart />
        </div>

        <div className="calendarCard">
          {booked ? (
            <div className="bookedState">
              <span><Check /></span>
              <b>You’re booked!</b>
              <p>Your discovery call is set for<br /><strong>{monthNames[calendar.month]} {day}, {calendar.year} at {time}</strong>.</p>
              <small>Look for your confirmation details in your inbox.</small>
              <button onClick={() => setBooked(false)}><ArrowLeft /> Change date or time</button>
              <Link className="button" href="/">RETURN HOME <ArrowRight /></Link>
            </div>
          ) : (
            <>
              <h2>Book Your<br />Discovery Call <Sparkles /></h2>
              <p>Let’s create your personalized plan<br />and get real results—together.</p>
              <div className="calendarFacts">
                <span><Clock3 /><b>30 Min</b><small>Session</small></span>
                <span><MessagesSquare /><b>One-on-One</b><small>Expert Guidance</small></span>
                <span><ShieldCheck /><b>100% Free</b><small>No Obligation</small></span>
              </div>

              <small className="calendarLabel">1. SELECT A DATE</small>
              <div className="calendar">
                <div className="calendarHead">
                  <button onClick={() => changeMonth(-1)} aria-label="Previous month"><ChevronLeft /></button>
                  <strong>{monthNames[calendar.month]} {calendar.year}</strong>
                  <button onClick={() => changeMonth(1)} aria-label="Next month"><ChevronRight /></button>
                </div>
                <div className="calendarGrid">
                  {dayNames.map((name) => <em key={name}>{name}</em>)}
                  {Array.from({ length: calendar.firstDay }, (_, index) => <i key={`blank-${index}`} />)}
                  {Array.from({ length: calendar.totalDays }, (_, index) => index + 1).map((number) => (
                    <button key={number} className={day === number ? "active" : ""} onClick={() => setDay(number)} aria-pressed={day === number}>{number}</button>
                  ))}
                </div>
              </div>

              <small className="calendarLabel">2. SELECT A TIME</small>
              <div className="timeGrid">
                {times.map((slot) => <button key={slot} className={time === slot ? "active" : ""} onClick={() => setTime(slot)} aria-pressed={time === slot}>{slot}</button>)}
              </div>
              <button className="button bookButton" onClick={() => setBooked(true)}>BOOK MY SESSION <ArrowRight /></button>
              <div className="secure"><LockKeyhole /> Your information is secure &amp; never shared.</div>
            </>
          )}
        </div>
      </section>

      <TrustBar />

      <section className="nextSteps shell">
        <h2>What Happens Next <Sparkles /></h2>
        <div>
          <article><i><Mail /></i><b>01</b><h3>Check Your Email</h3><p>Your Glow Guide is on its way!<br />It should arrive in the next few minutes.</p></article>
          <article><i><CalendarDays /></i><b>02</b><h3>Book Your Call</h3><p>Schedule your free discovery call using<br />the calendar above at a time that works for you.</p></article>
          <article><i><MessagesSquare /></i><b>03</b><h3>We Connect</h3><p>We’ll chat about your goals, challenges,<br />and create a custom plan for your glow.</p></article>
          <article><i><Sparkles /></i><b>04</b><h3>Start Your Glow Journey</h3><p>Get expert guidance, personalized support,<br />and real results that last.</p></article>
        </div>
      </section>

      <section className="bookingGuide">
        <div className="bookingGuideInner shell">
          <img src="/assets/guide.webp" alt="Your free Glow From Within beauty and wellness guide" />
          <div>
            <small>YOUR GUIDE IS ON ITS WAY <Sparkles /></small>
            <h2>Your Free Beauty &amp;<br />Wellness Guide</h2>
            <p>Packed with expert tips, daily rituals, and<br />empowering practices to help you glow<br />from the inside out.</p>
            <ul><li><Check /> Nourish your skin &amp; body</li><li><Check /> Boost energy &amp; confidence</li><li><Check /> Simple rituals for real results</li></ul>
          </div>
        </div>
      </section>

      <section className="bookingReviews shell">
        <h2>Real Women. Real Results. <Sparkles /></h2>
        <div className="bookingReviewGrid">
          {bookingTestimonials.map(([quote, name, place, avatar]) => (
            <article key={name}>
              <div className="stars">★★★★★</div>
              <p>“{quote}”</p>
              <div className="reviewer"><img src={avatar} alt="" /><span><strong>{name}</strong><small>{place}</small></span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bookingCta shell">
        <div>
          <h2>Let’s Make Your Glow Unstoppable <Sparkles /></h2>
          <p>Your next chapter starts with a conversation.<br />I can’t wait to meet you!</p>
          <a className="button" href="#top" onClick={(event) => { event.preventDefault(); document.querySelector(".calendarCard")?.scrollIntoView({ behavior: "smooth", block: "center" }); }}>BOOK MY FREE CALL <ArrowRight /></a>
        </div>
        <img src="/assets/booking-cta-decor.webp" alt="Soft candlelight and pink flowers" />
      </section>

      <section className="bookingFaq shell" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div>
          {bookingFaqs.map(([question, answer], index) => (
            <article className={openFaq === index ? "open" : ""} key={question}>
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<ChevronDown /></button>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
