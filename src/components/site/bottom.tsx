import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { EASE, Eyebrow, Pill, Reveal, SplitHeading, img } from "./primitives";

const VOICES = [
  {
    quote: "Umair bridged deep technical architecture with execution discipline. Our enterprise platforms achieved 99.9% uptime and streamlined delivery under his CTO leadership.",
    name: "Tariq Mahmood",
    initials: "TM",
    role: "GROUP MANAGING DIRECTOR",
    color: "bg-[#c99557] text-[#14120e]", // Honey mustard / brass (exact screenshot hero card)
    quoteColor: "text-[#14120e]",
    avatarBg: "bg-[#14120e] text-[#c99557]",
  },
  {
    quote: "Recognizing his dynamic leadership as Chief Technology Officer in promoting IT, technical entrepreneurship, and youth innovation across the province.",
    name: "Ch. Mohammad Sarwar",
    initials: "MS",
    role: "FORMER GOVERNOR OF PUNJAB",
    color: "bg-[#213327] text-[#f4efe6]", // Deep pine green
    quoteColor: "text-[#d6a56b]",
    avatarBg: "bg-white/10 text-[#d6a56b]",
  },
  {
    quote: "His operational leadership as COO scaled YETP to train over 10,000 students in cutting-edge digital technologies with proven market readiness.",
    name: "Executive Council",
    initials: "EC",
    role: "YOUTH EMPOWERMENT TRAINING PROGRAM",
    color: "bg-[#141715] text-[#f4efe6]", // Jet black
    quoteColor: "text-[#d6a56b]",
    avatarBg: "bg-white/10 text-[#f4efe6]",
  },
  {
    quote: "The smart farming research presented at MAJICC solved real precision-irrigation issues using cost-effective IoT telemetry. Remarkable technical depth.",
    name: "Dr. A. Rehman",
    initials: "AR",
    role: "IEEE / MAJICC SESSION CHAIR",
    color: "bg-[#3e4842] text-[#f4efe6]", // Charcoal sage
    quoteColor: "text-[#d6a56b]",
    avatarBg: "bg-black/30 text-[#f4efe6]",
  },
  {
    quote: "From mentoring junior engineers to structuring robust React & Node microservices, Umair sets an exceptional bar for modern engineering teams.",
    name: "Saad Qureshi",
    initials: "SQ",
    role: "VP OF ENGINEERING — i3 GROUP",
    color: "bg-[#524433] text-[#f4efe6]", // Warm espresso
    quoteColor: "text-[#d6a56b]",
    avatarBg: "bg-black/30 text-[#d6a56b]",
  },
] as const;

export function Voices() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(VOICES.length - 1, Math.floor(latest * VOICES.length));
    setActiveStep(idx);
  });  return (
    <section ref={sectionRef} className="relative h-[300vh] sm:h-[320vh] bg-[#f4eee5] text-[#121312]">
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-8 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.32fr] items-center gap-6 sm:gap-10 lg:gap-16">
            
            {/* Left Column */}
            <div className="max-w-[500px]">
              <div className="flex items-center gap-2.5 text-[10px] sm:text-[12px] font-mono tracking-[0.22em] uppercase text-[#7c807b]">
                <span className="h-px w-5 bg-[#7c807b]" />
                IN THEIR WORDS
              </div>

              <h2 className="mt-3 sm:mt-5 font-display text-[clamp(28px,5vw,78px)] font-medium leading-[1.05] tracking-[-0.04em] text-[#121312]">
                What principals say when I am <span className="serif-i text-[#ab7338] font-normal italic">not</span> in the room.
              </h2>

              <p className="mt-2.5 sm:mt-5 text-[13px] sm:text-[15px] leading-[1.5] text-[#696f6a] max-w-[420px]">
                Names are shortened at clients&apos; request. References are available after a chemistry call.
              </p>

              <div className="mt-3 sm:mt-6 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#7c807b]">
                05 VOICES
              </div>
            </div>

            {/* Right Column: Exact Framer Stacked Card Deck */}
            <div className="relative w-full max-w-[640px] h-[320px] sm:h-[380px] md:h-[430px] lg:h-[460px] mx-auto lg:mx-0">
              {/* Stack background visual deck behind active card */}
              <div className="pointer-events-none absolute inset-x-8 -top-5 sm:-top-6 h-full rounded-[22px] sm:rounded-[28px] bg-[#9aa09a]/40 shadow-sm" />
              <div className="pointer-events-none absolute inset-x-5 -top-3 sm:-top-3.5 h-full rounded-[22px] sm:rounded-[28px] bg-[#2b3a30] shadow-md" />
              <div className="pointer-events-none absolute inset-x-2 -top-1.5 h-full rounded-[22px] sm:rounded-[28px] bg-[#1a1e1b] shadow-lg" />

              {/* Animated Interactive cards on scroll */}
              {VOICES.map((v, i) => {
                const isCurrent = i === activeStep;
                const isPassed = i < activeStep;
                const offset = i - activeStep;

                return (
                  <motion.div
                    key={i}
                    className={`absolute inset-0 rounded-[22px] sm:rounded-[28px] p-5 sm:p-8 md:p-11 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35)] flex flex-col justify-between ${v.color}`}
                    initial={false}
                    animate={{
                      y: isPassed ? -40 * (activeStep - i) : offset * 6,
                      scale: isPassed ? 0.92 : 1 - Math.max(0, offset) * 0.02,
                      opacity: isPassed ? 0 : 1,
                      zIndex: isCurrent ? 30 : 25 - i,
                      rotate: isPassed ? -2 : 0,
                    }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Double quotation icon */}
                    <div>
                      <span className={`block font-serif text-[38px] sm:text-[54px] md:text-[68px] leading-[0.7] select-none ${v.quoteColor}`}>
                        “
                      </span>
                      <blockquote className="mt-3 sm:mt-5 font-display text-[16px] sm:text-[22px] md:text-[28px] font-medium leading-[1.28] tracking-[-0.03em]">
                        {v.quote}
                      </blockquote>
                    </div>

                    {/* Bottom Author Row */}
                    <div className="flex items-center justify-between border-t border-current/15 pt-3 sm:pt-5 mt-2">
                      <div className="flex items-center gap-2.5 sm:gap-3.5">
                        <span className={`grid h-8 w-8 sm:h-11 sm:w-11 place-items-center rounded-full font-mono text-[10px] sm:text-[12px] font-bold select-none shrink-0 ${v.avatarBg}`}>
                          {v.initials}
                        </span>
                        <div>
                          <strong className="block text-[12px] sm:text-[14px] font-medium tracking-tight leading-tight">
                            {v.name}
                          </strong>
                          <span className="text-[9px] sm:text-[11px] font-mono tracking-wider opacity-75 uppercase leading-tight block mt-0.5">
                            {v.role}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-[10px] sm:text-[11px] opacity-65 tracking-widest shrink-0">
                        0{i + 1} / 05
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Stage 1 -> Stage 2 transitions:
  // "Meet Umair" text fades out and scales away as user scrolls
  const titleOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.28], [1, 0.92]);
  const titleY = useTransform(scrollYProgress, [0, 0.28], ["0%", "-20%"]);

  // The central arch expands to full screen background
  // Starts with arched top portal: giving extra vertical room and centered framing
  const clip = useTransform(
    scrollYProgress,
    [0.1, 0.55],
    [
      "inset(18% 30% 6% 30% round 260px 260px 0px 0px)",
      "inset(0% 0% 0% 0% round 0px)",
    ]
  );

  const imageScale = useTransform(scrollYProgress, [0, 0.55], [1.08, 1]);
  const imageDarken = useTransform(scrollYProgress, [0.35, 0.65], [0.15, 0.68]);

  // Stage 2 content appears over the expanded backdrop
  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.72], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.45, 0.72], [40, 0]);

  return (
    <section id="about" ref={ref} className="relative h-[280vh] md:h-[350vh] bg-[#0c0d0c] text-[#f4efe6]">
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center overflow-hidden">
        
        {/* Full container backdrop */}
        <div className="absolute inset-0 bg-[#0c0d0c]" />

        {/* The expanding central portrait image with arched portal */}
        <motion.div
          style={{ clipPath: clip }}
          className="absolute inset-0 z-0 h-full w-full overflow-hidden"
        >
          <motion.img
            style={{ scale: imageScale }}
            src="/umair-portrait.png"
            alt="Engr. Umair Iftikhar"
            className="h-full w-full object-cover object-[center_12%] grayscale brightness-95 contrast-105"
          />
          {/* Dynamic dark gradient overlay so text remains razor sharp in stage 2 */}
          <motion.div
            style={{ opacity: imageDarken }}
            className="absolute inset-0 bg-gradient-to-t from-[#0c0d0c] via-[#0c0d0c]/80 to-[#0c0d0c]/40"
          />
        </motion.div>

        {/* STAGE 1: Giant "Meet Umair" typography matching Image 1 */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-6 sm:px-12 md:px-20 lg:px-28 select-none"
        >
          <div className="font-display text-[clamp(60px,12vw,180px)] font-medium tracking-[-0.05em] text-[#9a9e9a]">
            Meet
          </div>
          <div className="serif-i text-[clamp(60px,12vw,180px)] font-normal tracking-[-0.03em] text-[#c99557]">
            Umair
          </div>
        </motion.div>

        {/* STAGE 2: Content overlay matching Image 2 */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-10 md:px-16 pt-24 sm:pt-16 pb-8 md:py-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-6 sm:gap-10 lg:gap-20">
            
            {/* Left Column: Eyebrow + Bold statement */}
            <div>
              <div className="flex items-center gap-2.5 text-[10px] sm:text-[12px] font-mono tracking-[0.24em] uppercase text-[#c99557]">
                <span className="h-px w-6 bg-[#c99557]" />
                ABOUT
              </div>

              <h2 className="mt-3 sm:mt-6 font-display text-[clamp(28px,4.5vw,74px)] font-medium leading-[1.05] tracking-[-0.04em] text-[#f4efe6]">
                Years inside <span className="serif-i text-[#c99557] font-normal italic">systems</span> like yours.
              </h2>
            </div>

            {/* Right Column: Narrative + Key Accreditations + Signature */}
            <div className="max-w-[560px] lg:justify-self-end">
              <p className="text-[13px] sm:text-[16px] leading-[1.6] text-[#c2c7c2]">
                As CTO &amp; Co-Founder of i3 Group of Companies and COO of YETP, I lead software engineering, scale microservices, and deploy high-impact technical programs. I know what production pressure feels like — and how to engineer lasting systems.
              </p>

              {/* Bullet Points with Diamond Icons matching screenshot */}
              <ul className="mt-5 sm:mt-8 space-y-2.5 sm:space-y-3.5 border-t border-white/10 pt-4 sm:pt-6 font-mono text-[10px] sm:text-[12px] tracking-wider uppercase text-[#c2c7c2]">
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[#c99557] text-[8px] sm:text-[9px]">◆</span>
                  <span>BS COMPUTER ENGINEERING — THE UNIVERSITY OF LAHORE</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[#c99557] text-[8px] sm:text-[9px]">◆</span>
                  <span>CTO RECOGNITION AWARD — FORMER GOVERNOR PUNJAB (2020)</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[#c99557] text-[8px] sm:text-[9px]">◆</span>
                  <span>MAJICC 2021 RESEARCH ON IOT-BASED SMART FARMING</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <span className="text-[#c99557] text-[8px] sm:text-[9px]">◆</span>
                  <span>COO — YOUTH EMPOWERMENT TRAINING PROGRAM (YETP)</span>
                </li>
              </ul>

              {/* Bottom Signature and Action button */}
              <div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 sm:pt-6">
                <span className="serif-i text-[22px] sm:text-[32px] md:text-[36px] text-[#c99557]">
                  Engr. Umair Iftikhar
                </span>

                <div className="flex items-center gap-4">
                  <Pill href="#contact" variant="brass">
                    Get in touch ↗
                  </Pill>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

const POSTS = [
  ["Research", "MAJICC 2021 · IEEE", "IoT Based Monitoring in Smart Farming", "Exploring how sensor automation and connected telemetry optimize soil metrics, water management, and agricultural yield.", "BvE0UdZxDKSGoGIwN0uOxbvc5E"],
  ["Technology", "Software · React & Node", "Modern Scalable Web Architectures", "How reactive frontends paired with modular Node.js microservices allow fast scaling for emerging technology companies.", "qNu5vvbm5fbXRo9QelIr0erM0"],
  ["Education", "Workforce · YETP", "Empowering Youth for the Global Economy", "Key operational lessons from equipping over 10,000 students with market-relevant IT, programming, and freelance skills.", "nQ1lApEF5N0b1CKgXj9flJrYc"],
  ["Security", "Cyber Secure Pakistan", "Cybersecurity Literacy in Modern Digital Systems", "Why foundational digital hygiene and cyber talent pipelines are vital for both startups and state infrastructure.", "z5MQSE0EqfjxmDrgOPiYdNc"],
] as const;

export function Insights() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth horizontal scroll transform for 4 cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);
  const barWidth = useTransform(scrollYProgress, [0, 1], ["25%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(3, Math.floor(latest * 4));
    setActiveIdx(idx);
  });

  return (
    <section ref={sectionRef} id="insights" className="relative h-[300vh] bg-[#f5efe6] text-ink">
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden pt-24 sm:pt-28 md:pt-24 pb-12 sm:pb-16">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-16">
          {/* Header section with Eyebrow, Heading, Dynamic Counter and All Insights Pill */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-ink/10">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-[#7a817b]">
                <span className="h-px w-5 bg-[#b57a38]" />
                INSIGHTS
              </div>
              <h2 className="mt-4 font-display text-[clamp(36px,5.8vw,76px)] font-medium leading-[1.02] tracking-[-0.045em] text-[#111413]">
                Notes from the <span className="serif-i text-[#b57a38] font-normal">corridor.</span>
              </h2>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 self-start md:self-end">
              <div className="flex items-baseline text-[#111413]">
                <span className="font-display text-[48px] sm:text-[64px] font-medium leading-none tracking-[-0.06em]">
                  0{activeIdx + 1}
                </span>
                <span className="text-[14px] text-[#858d87] font-mono ml-2">/ 04</span>
              </div>
              <a
                href="#insights"
                className="inline-flex h-11 items-center gap-2.5 rounded-full border border-ink/20 bg-transparent px-6 text-[13px] sm:text-[14px] font-medium text-ink transition-all duration-300 hover:bg-ink hover:text-[#f5efe6]"
              >
                All insights
                <span className="text-[15px]">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll-linked Edge-aligned Horizontal Cards */}
        <div className="w-full mt-10">
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 pl-[max(20px,calc(50%-670px+32px))] pr-14"
          >
            {POSTS.map(([cat, meta, t, d, im], i) => (
              <article
                key={t}
                className="group flex flex-col w-[300px] sm:w-[380px] md:w-[440px] shrink-0"
              >
                {/* Image Container with Floating Pill Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-stone/20">
                  <img
                    src={img(im)}
                    alt={t}
                    className="h-full w-full object-cover transition-transform duration-700 [transition-timing-function:var(--ease-out)] group-hover:scale-105"
                  />
                  {/* Top-Left Category Badge Tag */}
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-white/95 px-4 py-1.5 text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-[#1a201c] shadow-sm backdrop-blur-md">
                    {cat}
                  </div>
                </div>

                {/* Meta & Typography */}
                <div className="pt-6 flex flex-col flex-1">
                  <p className="font-mono text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-[#7d857f]">
                    {meta}
                  </p>
                  <h3 className="mt-3 font-display text-[22px] sm:text-[25px] md:text-[27px] font-medium leading-[1.18] tracking-[-0.035em] text-[#111413] group-hover:text-[#b57a38] transition-colors duration-300">
                    {t}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.65] text-[#555d57] line-clamp-3">
                    {d}
                  </p>

                  {/* Read Link */}
                  <div className="mt-5 pt-2 flex items-center gap-2">
                    <span className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-[#111413] group-hover:text-[#b57a38] transition-colors">
                      READ
                    </span>
                    <span className="text-[14px] text-[#111413] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#b57a38]">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>

          {/* Scroll Progress Indicator Bar linked to scroll */}
          <div className="mx-auto max-w-[1340px] px-5 sm:px-8 md:px-14 mt-8">
            <div className="h-0.5 w-full bg-ink/10 max-w-[320px]">
              <motion.div
                style={{ width: barWidth }}
                className="h-full bg-[#b57a38]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  ["What is Engr. Umair Iftikhar’s primary focus?", "He focuses on the intersection of technology leadership, software engineering (React.js, Node.js), operations management, and IT education through i3 Group of Companies and YETP."],
  ["What research has he published?", "He published research titled 'IoT Based Monitoring and Control in Smart Farming' presented in connection with the Mohammad Ali Jinnah University International Conference on Computing (MAJICC 2021)."],
  ["What recognition has he received?", "He received an official CTO recognition award from former Governor of Punjab Chaudhry Muhammad Sarwar in 2020, as well as recognition at a Cyber Secure Pakistan conference with the Federal Minister for IT."],
  ["Can organizations engage him for corporate IT training?", "Yes. Alongside executive technology leadership, he conducts corporate IT workshops, bootcamps on modern web technologies, and digital transformation sessions."],
  ["What are his educational credentials?", "He holds a Bachelor of Science (BS) in Computer Engineering from The University of Lahore."],
  ["How can we discuss a project or collaboration?", "You can connect directly via email or LinkedIn to discuss technology partnerships, CTO advisory, corporate training, or project delivery."],
] as const;

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-fog/60 py-20 sm:py-28 md:py-[150px]">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:gap-16 px-6 sm:px-10 md:px-16 md:grid-cols-[1fr_1.3fr]">
        <div className="md:sticky md:top-32 md:self-start">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <SplitHeading text="Clear answers about my *work & roles.*" accent="text-brass-deep" className="mt-4 sm:mt-6 text-[clamp(32px,4.5vw,56px)] leading-[1.05]" />
          <p className="mt-4 sm:mt-6 max-w-[360px] text-[14px] sm:text-[16px] leading-[1.6] text-muted-foreground">For speaking invitations, consulting advisory, or joint ventures, feel free to reach out directly.</p>
          <div className="mt-6 sm:mt-8"><Pill href="#contact">Get in Touch</Pill></div>
        </div>
        <ul className="border-t border-ink/15">
          {FAQ.map(([q, a], i) => (
            <li key={q} className="border-b border-ink/15">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center gap-4 sm:gap-6 py-5 sm:py-7 text-left">
                <span className="font-mono text-[11px] sm:text-[12px] text-muted-foreground">0{i + 1}</span>
                <span className="flex-1 font-display text-[17px] sm:text-[21px] font-medium tracking-[-0.025em]">{q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.4, ease: EASE }} className={`grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full shrink-0 ${open === i ? "bg-brass text-night" : "border border-ink/20"}`}>
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="overflow-hidden">
                    <p className="max-w-[560px] pb-5 sm:pb-7 pl-6 sm:pl-[42px] text-[14px] sm:text-[16px] leading-[1.65] text-muted-foreground">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section id="contact" className="relative min-h-[750px] sm:min-h-[850px] overflow-hidden bg-[#0c100e] text-bone flex flex-col justify-center py-20 sm:py-28 md:py-36">
      {/* Background with user portrait image from hero section with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/umair-portrait.png"
          alt="Engr. Umair Iftikhar"
          className="h-full w-full object-cover object-center grayscale contrast-125 opacity-35"
        />
        {/* Cinematic emerald-night gradient tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f0d]/95 via-[#0b0f0d]/80 to-[#0b0f0d]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d] via-transparent to-[#0b0f0d]/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-16">
        <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-bone/70">
          <span className="h-px w-5 bg-brass" />
          ACCEPTING COLLABORATIONS &amp; ADVISORY — Q4 2026
        </div>

        <h2 className="mt-8 font-display text-[clamp(44px,7.5vw,104px)] font-medium leading-[1.0] tracking-[-0.045em] text-white max-w-[920px]">
          Start with <br />
          <span className="font-normal text-white">twenty-five </span>
          <span className="serif-i text-brass font-normal">minutes.</span>
        </h2>

        <p className="mt-8 max-w-[540px] text-[15px] sm:text-[17px] leading-[1.65] text-[#d6ddd8]">
          No deck, no pitch. You talk, I listen, and we both find out whether I am the right partner for the next phase of your technology vision.
        </p>

        {/* Floating circular spinning / badge button from reference image */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            <Pill href="mailto:engrumairiftikhar@gmail.com">Book a Call</Pill>
            <Pill href="https://linkedin.com" variant="ghost-dark">LinkedIn Profile</Pill>
          </div>

          <a
            href="mailto:engrumairiftikhar@gmail.com"
            className="group relative flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-[#dfa86a] text-night transition-transform duration-500 hover:scale-105 shadow-2xl"
          >
            {/* Circular rotating text */}
            <svg
              className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]"
              viewBox="0 0 160 160"
            >
              <path
                id="circlePath"
                d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                fill="none"
              />
              <text className="font-mono text-[9px] font-medium tracking-[0.22em] uppercase fill-night">
                <textPath href="#circlePath" startOffset="0%">
                  • BOOK A CALL • LET’S CONNECT • ENGAGE • ADVISORY
                </textPath>
              </text>
            </svg>
            <span className="text-[26px] sm:text-[32px] font-light transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-[#0a0d0c] text-bone pt-20 sm:pt-28 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        {/* Top 4-column layout matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-14 lg:gap-16 pb-16 sm:pb-24">
          {/* Column 1: Short Bio */}
          <div className="max-w-[260px]">
            <p className="text-[14px] sm:text-[15px] leading-[1.6] text-bone/65">
              Technology leadership, software engineering, and digital transformation for growing organizations.
            </p>
          </div>

          {/* Column 2: Navigation Links 1 */}
          <div className="flex flex-col gap-4">
            <a href="#ventures" className="font-display text-[22px] sm:text-[26px] font-medium text-bone hover:text-brass transition-colors">
              Ventures
            </a>
            <a href="#about" className="font-display text-[22px] sm:text-[26px] font-medium text-bone hover:text-brass transition-colors">
              About
            </a>
            <a href="#how" className="font-display text-[22px] sm:text-[26px] font-medium text-bone hover:text-brass transition-colors">
              Framework
            </a>
          </div>

          {/* Column 3: Navigation Links 2 */}
          <div className="flex flex-col gap-4">
            <a href="#experience" className="font-display text-[22px] sm:text-[26px] font-medium text-bone hover:text-brass transition-colors">
              Experience
            </a>
            <a href="#insights" className="font-display text-[22px] sm:text-[26px] font-medium text-bone hover:text-brass transition-colors">
              Insights
            </a>
            <a href="#contact" className="font-display text-[22px] sm:text-[26px] font-medium text-bone hover:text-brass transition-colors">
              Book a call
            </a>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-6">
            <div>
              <p className="eyebrow text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-bone/40 mb-2">
                CONTACT
              </p>
              <a href="mailto:engrumairiftikhar@gmail.com" className="block text-[14px] sm:text-[15px] text-bone hover:text-brass transition-colors">
                engrumairiftikhar@gmail.com
              </a>
              <p className="mt-1 text-[13px] text-bone/50 font-mono">
                Lahore, Pakistan
              </p>
            </div>

            <div>
              <p className="eyebrow text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-bone/40 mb-2">
                ELSEWHERE
              </p>
              <div className="flex flex-col gap-1.5 text-[14px] text-bone/80">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">
                  GitHub
                </a>
                <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">
                  MAJICC Research Paper
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Signature Name on a single line */}
        <div className="border-t border-bone/10 pt-10 sm:pt-16 pb-4 overflow-hidden flex justify-center">
          <h1 className="select-none text-center font-display text-[clamp(44px,11.5vw,168px)] font-medium leading-none tracking-[-0.05em] text-white whitespace-nowrap">
            Umair <span className="serif-i text-brass font-normal">Iftikhar</span>
          </h1>
        </div>

        {/* Bottom Bar: Copyright, Time, Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-bone/10 pt-6 text-[11px] font-mono text-bone/45">
          <p>© 2026 ENGR. UMAIR IFTIKHAR. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            <span>PAKISTAN GMT+5</span>
          </div>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-bone">PRIVACY</a>
            <a href="#" className="hover:text-bone">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
