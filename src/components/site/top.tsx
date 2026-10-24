import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Counter, EASE, Eyebrow, Pill, SplitHeading, img } from "./primitives";

const NAV = [
  { name: "Coaching", href: "#experience" },
  { name: "Results", href: "#results" },
  { name: "About", href: "#about" },
  { name: "Insights", href: "#insights" },
  { name: "Speaking", href: "#contact" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
      className="fixed inset-x-0 top-4 sm:top-6 z-50 px-4 sm:px-6 md:px-10 pointer-events-none"
    >
      {/* Floating Olive Capsule Pill Bar matching Screenshot */}
      <div className="mx-auto flex h-[58px] sm:h-[64px] max-w-[1240px] items-center justify-between rounded-full bg-[#3d4239] px-4 sm:px-6 md:px-7 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.35)] border border-white/10 pointer-events-auto backdrop-blur-md">
        
        {/* Left: Diamond icon + Name + Title */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 text-[#f4efe6] group">
          <span className="text-[#c99557] text-[11px] sm:text-[13px] shrink-0">◆</span>
          <span className="font-display text-[15px] sm:text-[17px] font-semibold tracking-[-0.02em] whitespace-nowrap text-[#f4efe6]">
            Umair Iftikhar
          </span>
          <span className="hidden md:inline text-[11px] font-mono tracking-[0.2em] uppercase text-[#a2a89c] pl-2 border-l border-white/20 whitespace-nowrap">
            CTO &amp; CO-FOUNDER
          </span>
        </a>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV.map((n) => (
            <a
              key={n.name}
              href={n.href}
              className="text-[13px] sm:text-[14px] text-[#cfd4c8] transition-colors duration-200 hover:text-white"
            >
              {n.name}
            </a>
          ))}
        </nav>

        {/* Right: Book a call Gold Button with dark target dot */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="flex h-9 sm:h-10 items-center gap-2 sm:gap-2.5 rounded-full bg-[#c99557] px-4 sm:px-5 text-[12px] sm:text-[13px] font-medium text-[#14120e] transition-transform duration-200 hover:scale-[1.03] hover:bg-[#d8a76b] whitespace-nowrap shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#14120e] ring-2 ring-[#14120e]/20" />
            Book a call
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-[#f4efe6] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-[1240px] rounded-[24px] border border-white/15 bg-[#3d4239] p-5 shadow-2xl backdrop-blur-xl md:hidden pointer-events-auto"
          >
            <nav className="flex flex-col gap-3.5">
              {NAV.map((n) => (
                <a
                  key={n.name}
                  href={n.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-[16px] font-medium text-[#e8eee4] hover:text-[#c99557] py-1 border-b border-white/10"
                >
                  {n.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

const QUOTES = [
  ["A technology leader who pairs deep technical architecture with commercial execution.", "Former Governor Chaudhry Sarwar — CTO Recognition 2020"],
  ["His work at YETP transformed how thousands of youth access modern IT & digital skills.", "Executive Board — Youth Empowerment Training Program"],
  ["Pioneering IoT smart farming research that bridges academic rigor with agricultural impact.", "MAJICC Conference Committee — Research Review 2021"],
] as const;
const BARS = [64, 0, 96, 0, 72, 20].map((t, i) => ({ l: i * 79, t, d: 0.1 + i * 0.15 }));

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const [q, setQ] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setQ((x) => (x + 1) % QUOTES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const line = (words: React.ReactNode[], base: number) =>
    words.map((w, i) => (
      <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
        <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1.1, delay: base + i * 0.08, ease: EASE }}>
          {w}
        </motion.span>
        {"\u00a0"}
      </span>
    ));

  return (
    <section ref={ref} className="bg-night-glow relative min-h-[720px] sm:min-h-[820px] md:min-h-[920px] overflow-hidden text-bone pt-24 sm:pt-28 md:pt-0">
      {/* Background image on tablet/desktop with rich emerald/green shadow overlay */}
      <motion.div
        style={{ y: imgY }}
        className="absolute right-0 lg:right-4 xl:right-[calc(50%-700px)] top-0 hidden h-full w-[490px] xl:w-[520px] md:block opacity-60 lg:opacity-100"
      >
        {BARS.map((b, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 overflow-hidden"
            style={{ left: b.l * 1.05, width: 84, top: b.t }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, delay: b.d, ease: EASE }}
          >
            <img
              src="/umair-portrait.png"
              alt="Engr. Umair Iftikhar"
              className="absolute h-[940px] w-[520px] max-w-none object-cover brightness-95 contrast-105"
              style={{ left: -b.l * 1.05, top: -b.t }}
            />
          </motion.div>
        ))}

        {/* Rich Green Emerald Shadow / Glow Over Portrait */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-[#142e20]/45 to-night" />
        <div className="pointer-events-none absolute inset-0 bg-radial from-[#1e442f]/35 via-transparent to-transparent mix-blend-screen" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-[#1b432e]/40 blur-3xl" />
      </motion.div>

      {/* Subtle portrait overlay for mobile phones with green tint */}
      <div className="absolute inset-0 pointer-events-none md:hidden opacity-30 overflow-hidden">
        <img
          src="/umair-portrait.png"
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-[#0d1c14]/85 to-night" />
      </div>

      <div className="relative mx-auto flex min-h-[720px] sm:min-h-[820px] md:min-h-[920px] max-w-[1440px] flex-col justify-end px-6 sm:px-10 md:px-16 pb-8 sm:pb-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="eyebrow mb-5 sm:mb-7 flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] text-bone/80">
          <span className="h-2 w-2 rounded-full bg-brass ring-2 ring-brass/30 shrink-0" /> CTO & Co-Founder — i3 Group · COO — YETP
        </motion.div>

        {/* Refined Headline: smaller font size & tight max-width so it never touches the portrait image */}
        <h1 className="font-display max-w-[620px] xl:max-w-[680px] text-[clamp(30px,4.6vw,56px)] font-medium leading-[1.08] tracking-[-0.035em] text-white">
          {line(["Building", "technology.", "Empowering"], 0.4)}
          <br />
          {line(["people.", <span className="serif-i text-brass font-normal italic">Creating</span>, "digital", "impact."], 0.65)}
        </h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9, ease: EASE }} className="mt-4 sm:mt-6 max-w-[500px] text-[14px] sm:text-[16px] leading-[1.65] text-[#d6ddd8]">
          I’m Engr. Umair Iftikhar, a technology leader, software engineer, and entrepreneur passionate about building scalable digital solutions, leading engineering teams, and driving large-scale digital transformation.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.05, ease: EASE }} className="mt-6 sm:mt-8 flex flex-wrap gap-3">
          <Pill href="#experience">Explore My Work</Pill>
          <Pill href="#contact" variant="ghost-dark">Let’s Connect</Pill>
        </motion.div>

        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="mt-7 sm:mt-9 grid max-w-[540px] grid-cols-3 border-t border-bone/20 gap-2 sm:gap-0">
          {[
            [<><Counter to={10} />k+</>, "STUDENTS & YOUTH TRAINED"],
            [<><Counter to={2020} /></>, "GOVERNOR CTO AWARD"],
            ["MAJICC", "IEEE / IOT PUBLISHED"],
          ].map(([n, l], i) => (
            <li key={i} className={`pt-3.5 sm:pt-4 ${i ? "border-l border-bone/20 pl-3 sm:pl-5" : ""}`}>
              <div className="font-display text-[24px] sm:text-[32px] font-semibold text-white tracking-[-0.04em]">{n}</div>
              <div className="eyebrow mt-1 text-[9px] sm:text-[10px] text-[#9ba39e] font-mono tracking-[0.16em] leading-tight">{l}</div>
            </li>
          ))}
        </motion.ul>

        {/* Floating quotes card with green glassmorphic tint */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4, ease: EASE }} className="mt-6 w-full rounded-2xl border border-bone/20 bg-[#0d1812]/85 p-5 sm:p-6 backdrop-blur-md lg:absolute lg:bottom-[80px] lg:left-[calc(50%+40px)] xl:left-[calc(50%+80px)] lg:mt-0 lg:w-[320px] xl:w-[340px] shadow-2xl">
          <span className="serif-i absolute right-5 top-2 text-[38px] sm:text-[48px] text-brass">“</span>
          <AnimatePresence mode="wait">
            <motion.div key={q} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.5, ease: EASE }}>
              <p className="pr-6 text-[13px] sm:text-[14px] leading-[1.55] text-[#eceee6]">{QUOTES[q]?.[0]}</p>
              <p className="eyebrow mt-3 text-[10px] sm:text-[11px] text-[#8e9791] font-mono tracking-widest">{QUOTES[q]?.[1]}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 flex gap-1.5">
            {QUOTES.map((_, i) => (
              <span key={i} className={`h-0.5 transition-all duration-500 ${i === q ? "w-9 bg-brass" : "w-4 bg-bone/30"}`} />
            ))}
          </div>
        </motion.div>

        <div className="eyebrow absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-[11px] text-bone/40 [writing-mode:vertical-rl] xl:flex">
          Scroll <span className="h-10 w-px bg-bone/30" />
        </div>
      </div>
    </section>
  );
}

const LOGOS = ["i3 Group of Companies", "YETP", "Hunarmand Punjab", "Cyber Secure Pakistan", "The University of Lahore", "MAJICC IEEE 2021", "Jang Media Group", "Ministry of IT"];

export function Logos() {
  return (
    <section className="border-y border-ink/10 bg-[#f4efe6] py-10 sm:py-14 text-ink">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <p className="eyebrow mb-6 sm:mb-8 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#555d58] uppercase">
          Organizations, Ventures &amp; Recognition Involving Engr. Umair Iftikhar
        </p>
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex w-max items-center gap-10 sm:gap-16">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12">
              <span className={`whitespace-nowrap text-[22px] sm:text-[28px] md:text-[32px] font-medium text-[#111413] tracking-[-0.03em] ${i % 2 ? "serif-i font-normal" : "font-display"}`}>
                {l}
              </span>
              <span className="h-2 w-2 rotate-45 bg-[#b57a38] opacity-70 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BELIEF: [string, string?][] = [
  ["Technology"], ["is"], ["most"], ["valuable"], ["when"], ["it"], ["solves"], ["practical"], ["problems,", "i"],
  ["improves"], ["how"], ["organizations"], ["scale,"], ["and"], ["creates"], ["lasting"], ["opportunities"], ["for"], ["people"], ["to"], ["participate"], ["in"], ["the"], ["global", "i"], ["digital"], ["economy."],
];

function Word({ w, it, p, i, n }: { w: string; it?: string | undefined; p: any; i: number; n: number }) {
  const o = useTransform(p, [i / n, (i + 1) / n], [0.22, 1]);
  return (
    <motion.span style={{ opacity: o }} className={it ? "serif-i text-brass-deep" : ""}>
      {w}{" "}
    </motion.span>
  );
}

export function Belief() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const r1 = useTransform(scrollYProgress, [0, 1], [8, -6]);
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [220, -60]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-20 sm:py-28 md:py-[180px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <Eyebrow>Leadership Philosophy</Eyebrow>
        <p className="mt-6 sm:mt-10 max-w-[840px] font-display text-[clamp(24px,4.8vw,56px)] font-medium leading-[1.2] sm:leading-[1.1] tracking-[-0.03em] text-ink">
          {BELIEF.map(([w, it], i) => (
            <Word key={i} w={w} it={it} p={scrollYProgress} i={i} n={BELIEF.length} />
          ))}
        </p>
        <p className="eyebrow mt-6 sm:mt-10 text-[11px] sm:text-[12px] text-muted-foreground">Engr. Umair Iftikhar — Innovation with Purpose</p>
      </div>
      <motion.img style={{ y: y1, rotate: r1 }} src={img("nQ1lApEF5N0b1CKgXj9flJrYc")} alt="" className="absolute right-[8%] top-[18%] hidden w-[230px] rounded-sm object-cover grayscale shadow-2xl lg:block" />
      <motion.img style={{ y: y2, rotate: -4 }} src={img("LDXsntWmcYCKrjXMgNxFQrMysaU")} alt="" className="absolute bottom-[6%] right-[20%] hidden w-[190px] rounded-sm object-cover grayscale shadow-2xl lg:block" />
    </section>
  );
}

const KINDS = [
  ["i3 Group of Companies", "CTO & Co-Founder driving software engineering, tech strategy and digital scalability", "rs5SIFNdctg5E33P9h0yVvwhi8"],
  ["Youth Empowerment (YETP)", "Chief Operating Officer connecting digital platforms, operations & workforce education", "DacUzNQu0nh2FZrhAlbJuwuDDDk"],
  ["Hunarmand Punjab", "Contributing digital skills training, learning platforms and provincial reach", "LDXsntWmcYCKrjXMgNxFQrMysaU"],
  ["Cyber Secure Pakistan", "Cybersecurity awareness, digital defenses and cultivating upcoming cyber talent", "Hid0HSBIHRkxCBU9ruRDeYDj5M"],
] as const;

export function Kinds() {
  const [hover, setHover] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <section id="ventures" className="bg-night-glow relative py-20 sm:py-28 md:py-[160px] text-bone" onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <Eyebrow className="text-bone/55">Featured Ventures & Leadership</Eyebrow>
        <SplitHeading text="Four pillars of *impact.*" className="mt-6 sm:mt-8 max-w-[760px] text-[clamp(38px,8vw,112px)] leading-[0.95]" />
        <ul className="mt-14 sm:mt-24 md:mt-32 border-t border-bone/15">
          {KINDS.map(([t, s], i) => (
            <li key={t} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <a href="#experience" className="group flex flex-col md:grid md:grid-cols-[96px_1fr_1fr_40px] gap-2 md:gap-y-2 border-b border-bone/15 py-6 sm:py-8 md:py-10 transition-colors">
                <span className="font-mono text-[12px] sm:text-[13px] text-bone/40">0{i + 1}</span>
                <span className="font-display text-[22px] sm:text-[28px] md:text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.035em] transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:text-brass">
                  {t}
                </span>
                <span className="text-[14px] sm:text-[16px] text-bone/65 leading-relaxed">{s}</span>
                <ArrowUpRight className="hidden h-7 w-7 text-bone/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-brass md:block" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-bone/55 text-[14px] sm:text-[16px]">Core Focus: Scalable software architectures, education, and <span className="serif-i text-[18px] sm:text-[20px] text-brass">sustainable innovation.</span></p>
          <Pill href="#how" variant="ghost-dark">See How The Work Runs</Pill>
        </div>
      </div>
      <AnimatePresence>
        {hover !== null && (
          <motion.img
            key={hover}
            src={img(KINDS[hover]?.[2] ?? "")}
            alt=""
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -3, x: pos.x - 130, y: pos.y - 170 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.45, ease: EASE, x: { duration: 0.6 }, y: { duration: 0.6 } }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[340px] w-[260px] rounded-md object-cover grayscale md:block"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
