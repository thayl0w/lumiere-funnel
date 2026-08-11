"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Droplets,
  Gift,
  Heart,
  Leaf,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  SunMedium,
  UserRound,
  Users,
  WandSparkles,
} from "lucide-react";
import { Brand } from "../components";

const questions = [
  {
    title: "How would you describe your skin right now?",
    options: [
      ["Clear & Balanced", "Pretty happy overall, just want to maintain my glow."],
      ["Oily / Acne-Prone", "I struggle with breakouts, oiliness, or clogged pores."],
      ["Dry / Dull", "My skin feels dry, tight, or lacks radiance."],
      ["Sensitive / Reactive", "My skin gets red, irritated, or reacts easily."],
      ["Mature / Aging", "I’m noticing fine lines, loss of firmness, or dullness."],
    ],
  },
  {
    title: "What would you most love to improve?",
    options: [
      ["Clearer Skin", "A calm, smooth, more even-looking complexion."],
      ["More Energy", "Steadier energy that carries me through the day."],
      ["Better Digestion", "A lighter, more comfortable daily rhythm."],
      ["Less Stress", "More calm, clarity, and room to breathe."],
      ["More Confidence", "To feel radiant and at home in my body."],
    ],
  },
  {
    title: "How much time can you give yourself daily?",
    options: [
      ["5 Minutes", "A quick ritual I can do even on busy days."],
      ["10 Minutes", "A simple morning or evening reset."],
      ["15 Minutes", "Enough time for a complete daily routine."],
      ["20 Minutes", "I’m ready to protect this time for myself."],
      ["Whatever It Takes", "I’m committed to building lasting habits."],
    ],
  },
  {
    title: "What best describes your current routine?",
    options: [
      ["Just Starting", "I’m ready for clear, beginner-friendly steps."],
      ["Simple Basics", "I have a few rituals that already work for me."],
      ["On And Off", "I need a routine that is easier to stay with."],
      ["Very Consistent", "I want to refine and personalize what I do."],
      ["Ready For A Reset", "I’m open to a fresh start that feels good."],
    ],
  },
  {
    title: "What does your ideal glow feel like?",
    options: [
      ["Calm", "Grounded, rested, and at ease."],
      ["Radiant", "Fresh, bright, and naturally luminous."],
      ["Energized", "Strong, focused, and ready for my day."],
      ["Balanced", "Supported from the inside out."],
      ["Confident", "Comfortable, capable, and fully myself."],
    ],
  },
] as const;

const optionIcons = [Smile, Droplets, SunMedium, ShieldCheck, Heart] as const;
const skinIcons = [
  "/assets/skin-clear.png",
  "/assets/skin-oily.png",
  "/assets/skin-dry.png",
  "/assets/skin-sensitive.png",
  "/assets/skin-mature.png",
] as const;
const trustItems = [
  [Users, "10,000+", "Happy Women"],
  [Star, "4.9/5", "Average Rating"],
  [ShieldCheck, "Expert-Backed", "Wellness"],
  [Heart, "Female Founded", "& Led"],
  [Leaf, "Science + Nature", "Combined"],
] as const;

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(() => typeof window === "undefined" ? "" : new URLSearchParams(window.location.search).get("email") || "");
  const [quizComplete, setQuizComplete] = useState(false);
  const [resultsReady, setResultsReady] = useState(false);
  const selected = answers[step];

  const choose = (value: string) => {
    const nextAnswers = [...answers];
    nextAnswers[step] = value;
    setAnswers(nextAnswers);
  };

  const next = () => {
    if (!selected) return;
    if (step < questions.length - 1) {
      setStep((value) => value + 1);
      return;
    }
    setQuizComplete(true);
    window.setTimeout(() => document.querySelector("#personalize")?.scrollIntoView({ behavior: "smooth", block: "center" }), 180);
  };

  const back = () => {
    if (step > 0) {
      setStep((value) => value - 1);
      setQuizComplete(false);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <main className="quizPage">
      <header className="quizHeader shell">
        <Brand />
        <p>JOIN 10,000+ WOMEN GLOWING FROM WITHIN <Sparkles /></p>
      </header>

      <section className="quizHero">
        <div className="quizPortrait" role="img" aria-label="Woman beginning her personalized Glow Quiz" />
        <div className="quizIntro">
          <h1>Take the<br /><em>Glow</em> Quiz <Sparkles /></h1>
          <h2>FIND YOUR PERSONALIZED WELLNESS PLAN</h2>
          <p>Discover what your body truly needs to glow from within — and get a custom plan tailored just for you.</p>
          <div className="quizPerks">
            <span><Clock3 /><small>2-Minute Quiz</small></span>
            <span><WandSparkles /><small>Personalized<br />Results</small></span>
            <span><Gift /><small>Free Guide<br />Included</small></span>
            <span><ShieldCheck /><small>100% Private<br />No Spam</small></span>
          </div>
        </div>
      </section>

      <section className={`questionCard${quizComplete ? " complete" : ""}`}>
        <div className="stepLabel">STEP {step + 1} OF {questions.length}</div>
        <div className="quizProgress" aria-label={`Quiz progress: step ${step + 1} of ${questions.length}`}>
          <div className="progressLine"><i style={{ width: `${(step / (questions.length - 1)) * 100}%` }} /></div>
          {questions.map((_, index) => <span key={index} className={index <= step ? "active" : ""} />)}
        </div>

        <div className="questionSwap" key={step}>
          <h2>{questions[step].title}</h2>
          <p>Choose the option that feels most like you.</p>
          <div className="answerGrid">
            {questions[step].options.map(([label, description], index) => {
              const Icon = optionIcons[index];
              const isSelected = selected === label;
              return (
                <button key={label} className={isSelected ? "selected" : ""} onClick={() => choose(label)} aria-pressed={isSelected}>
                  {isSelected && <b className="selectedCheck"><Check /></b>}
                  <span className={`answerIcon${step === 0 ? " illustrated" : ""}`}>
                    {step === 0 ? <img src={skinIcons[index]} alt="" /> : <Icon />}
                  </span>
                  <strong>{label}</strong>
                  <small>{description}</small>
                </button>
              );
            })}
          </div>
        </div>

        <div className="quizControls">
          <button onClick={back}><ArrowLeft /> Back</button>
          <button className="button" disabled={!selected} onClick={next}>
            {step === questions.length - 1 ? "COMPLETE QUIZ" : "NEXT"} <ArrowRight />
          </button>
        </div>
        {quizComplete && <div className="quizDone"><Sparkles /> Quiz complete—your personalized plan is ready below.</div>}
      </section>

      <section className="resultsCapture shell" id="personalize">
        <img src="/assets/personal-plan.webp" alt="Your Personal Glow Plan guide and mobile preview" />
        <form onSubmit={(event) => { event.preventDefault(); if (name && email) setResultsReady(true); }}>
          <h2>Almost there! Let’s personalize your results.</h2>
          <p>Enter your details to receive your custom glow plan and exclusive wellness guide.</p>
          {resultsReady ? (
            <div className="resultSuccess">
              <b><Sparkles /> Your glow plan is ready!</b>
              <span>We’ve personalized your first steps. Book your complimentary call to continue your glow journey.</span>
              <a className="button" href="/booking">BOOK MY FREE CALL <ArrowRight /></a>
            </div>
          ) : (
            <>
              <label><UserRound /><span className="srOnly">First name</span><input required value={name} onChange={(event) => setName(event.target.value)} placeholder="First Name" /></label>
              <label><Mail /><span className="srOnly">Email address</span><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email Address" /></label>
              <button className="button">GET MY RESULTS <ArrowRight /></button>
              <small><LockKeyhole /> We respect your privacy. No spam, ever.</small>
            </>
          )}
        </form>
      </section>

      <section className="planProof shell">
        <article>
          <h2>Your Personalized Plan Will Help You:</h2>
          <ul>
            <li><Check /> Reveal clearer, brighter, more radiant skin</li>
            <li><Check /> Balance your routine &amp; boost your natural energy</li>
            <li><Check /> Improve gut health &amp; digestion</li>
            <li><Check /> Reduce stress, bloating &amp; inflammation</li>
            <li><Check /> Build healthy habits that actually last</li>
          </ul>
        </article>
        <article className="quizReview">
          <div className="quoteMark">“</div>
          <p>“This quiz was a total game-changer! I finally understand what my body needs and my skin has never looked better.”</p>
          <div className="stars">★★★★★</div>
          <div className="reviewer"><img src="/assets/results-skin.webp" alt="" /><span><strong>Sarah J.</strong><small>Austin, TX</small></span></div>
        </article>
      </section>

      <section className="quizTrust">
        <h2>Trusted by Thousands of Women</h2>
        <div className="shell">
          {trustItems.map(([Icon, title, subtitle]) => (
            <span key={title}><Icon /><b>{title}</b><small>{subtitle}</small></span>
          ))}
        </div>
      </section>
    </main>
  );
}
