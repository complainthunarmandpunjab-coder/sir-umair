import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Counter, EASE, Eyebrow, Pill, SplitHeading, img } from "./primitives";

const NAV = [
  { name: "About", href: "#about" },
  { name: "Leadership", href: "#leadership" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Contact", href: "#contact" },
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
            TECHNOLOGY LEADER &amp; STRATEGIST
          </span>
        </a>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
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

        {/* Right: Get in Touch Gold Button with dark target dot */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="flex h-9 sm:h-10 items-center gap-2 sm:gap-2.5 rounded-full bg-[#c99557] px-4 sm:px-5 text-[12px] sm:text-[13px] font-medium text-[#14120e] transition-transform duration-200 hover:scale-[1.03] hover:bg-[#d8a76b] whitespace-nowrap shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#14120e] ring-2 ring-[#14120e]/20" />
            Get in Touch
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
  ["His operational leadership at YETP expanded access to modern digital skills and opportunity for youth.", "Executive Council — Youth Empowerment Training Program"],
  ["Pioneering IoT smart farming research bridging engineering and connected systems to real-world challenges.", "MAJICC Conference Committee — MAJICC 2021 / IEEE"],
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
          <span className="h-2 w-2 rounded-full bg-brass ring-2 ring-brass/30 shrink-0" /> TECHNOLOGY LEADER • EXECUTIVE • DIGITAL SOLUTIONS STRATEGIST
        </motion.div>

        {/* Headline exactly matching PDF Page 2 */}
        <h1 className="font-display max-w-[660px] xl:max-w-[740px] text-[clamp(32px,4.8vw,60px)] font-medium leading-[1.06] tracking-[-0.035em] text-white">
          {line(["Engineering", "Digital", "Solutions"], 0.4)}
          <br />
          {line(["That", <span className="serif-i text-brass font-normal italic">Create</span>, "Real-World", "Impact."], 0.65)}
        </h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9, ease: EASE }} className="mt-4 sm:mt-6 max-w-[560px] text-[14px] sm:text-[16px] leading-[1.65] text-[#d6ddd8]">
          I am <strong className="text-white font-medium">Engr. Umair Iftikhar</strong> — a technology professional, executive leader and digital solutions strategist focused on building meaningful digital platforms, leading technology-driven initiatives and transforming ideas into scalable solutions.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.05, ease: EASE }} className="mt-6 sm:mt-8 flex flex-wrap gap-3">
          <Pill href="#projects">Explore My Work</Pill>
          <Pill href="#contact" variant="ghost-dark">Get in Touch</Pill>
        </motion.div>

        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="mt-7 sm:mt-9 grid max-w-[560px] grid-cols-3 border-t border-bone/20 gap-2 sm:gap-0">
          {[
            [<><Counter to={10} />k+</>, "YOUTH & TALENT EMPOWERED"],
            [<><Counter to={2020} /></>, "GOVERNOR CTO AWARD"],
            ["MAJICC", "IEEE / IOT RESEARCH"],
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

const LOGOS = [
  "i3 Group of Companies",
  "Youth Empowerment (YETP)",
  "Hunarmand Punjab",
  "Cyber Secure Pakistan",
  "National E-Commerce Program (NEIP)",
  "The University of Lahore",
  "MAJICC 2021 IEEE",
  "Ministry of IT",
];

export function Logos() {
  return (
    <section className="border-y border-ink/10 bg-[#f4efe6] py-10 sm:py-14 text-ink">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <p className="eyebrow mb-6 sm:mb-8 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#555d58] uppercase">
          Key Affiliations, Ventures &amp; Recognition Involving Engr. Umair Iftikhar
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

const HIGHLIGHTS = [
  {
    num: "01",
    title: "Technology Leadership",
    desc: "Strategic technology direction, digital platforms and solution-focused execution.",
    tag: "Strategy & Vision",
  },
  {
    num: "02",
    title: "Web & Digital Solutions",
    desc: "Modern web applications and scalable digital experiences built around real business needs.",
    tag: "Modern Architecture",
  },
  {
    num: "03",
    title: "Innovation & Initiatives",
    desc: "Technology, skills development, entrepreneurship and youth-focused digital initiatives.",
    tag: "Ecosystem Impact",
  },
  {
    num: "04",
    title: "Research & Engineering",
    desc: "Computer Engineering background supported by IEEE-published academic research.",
    tag: "MAJICC 2021 / IoT",
  },
];

export function QuickHighlights() {
  return (
    <section className="bg-[#0e1210] py-16 sm:py-20 border-b border-white/10 text-bone">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <Eyebrow className="text-bone/60">Core Capabilities</Eyebrow>
            <h2 className="mt-3 font-display text-[28px] sm:text-[38px] font-medium tracking-tight text-white">
              Quick Highlights
            </h2>
          </div>
          <p className="max-w-[460px] text-[14px] sm:text-[15px] leading-relaxed text-[#c3ccc5]">
            Whether leading technology teams, developing digital platforms or supporting large-scale skills initiatives, the focus remains engineering practical solutions for a rapidly evolving digital world.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#c99557]/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-[#9ba39e]">
                  <span>{h.num}</span>
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[#c99557] border border-white/10">
                    {h.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[20px] sm:text-[22px] font-medium text-white group-hover:text-[#c99557] transition-colors">
                  {h.title}
                </h3>
                <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-[#b9c2bb]">
                  {h.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[12px] font-mono text-[#c99557]">
                <span>Explore</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BELIEF: [string, string?][] = [
  ["Great"], ["leadership"], ["is"], ["not"], ["only"], ["about"], ["having"], ["a"], ["vision;"],
  ["it"], ["is"], ["about"], ["creating"], ["the"], ["structure,", "i"], ["confidence"], ["and"], ["momentum"],
  ["required"], ["to"], ["bring"], ["that"], ["vision"], ["to"], ["life."], ["Technology"], ["should"], ["solve", "i"],
  ["real"], ["problems"], ["and"], ["create"], ["measurable"], ["opportunities."],
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
    <section id="leadership" ref={ref} className="relative overflow-hidden bg-background py-20 sm:py-28 md:py-[180px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <Eyebrow>Leadership Philosophy &amp; Executive Vision</Eyebrow>
        <p className="mt-6 sm:mt-10 max-w-[840px] font-display text-[clamp(24px,4.8vw,56px)] font-medium leading-[1.2] sm:leading-[1.1] tracking-[-0.03em] text-ink">
          {BELIEF.map(([w, it], i) => (
            <Word key={i} w={w} it={it} p={scrollYProgress} i={i} n={BELIEF.length} />
          ))}
        </p>
        <p className="eyebrow mt-6 sm:mt-10 text-[11px] sm:text-[12px] text-muted-foreground">
          Brand Statement: &ldquo;I build, lead and support digital solutions that turn potential into progress.&rdquo;
        </p>
      </div>
      <motion.img style={{ y: y1, rotate: r1 }} src={img("nQ1lApEF5N0b1CKgXj9flJrYc")} alt="" className="absolute right-[8%] top-[18%] hidden w-[230px] rounded-sm object-cover grayscale shadow-2xl lg:block" />
      <motion.img style={{ y: y2, rotate: -4 }} src={img("LDXsntWmcYCKrjXMgNxFQrMysaU")} alt="" className="absolute bottom-[6%] right-[20%] hidden w-[190px] rounded-sm object-cover grayscale shadow-2xl lg:block" />
    </section>
  );
}

const KINDS = [
  ["i3 Group of Companies", "CTO & Co-Founder — Technical vision, software development & digital platform systems", "rs5SIFNdctg5E33P9h0yVvwhi8"],
  ["Youth Empowerment (YETP)", "COO & Leadership — Operations, digital training platforms & large-scale youth skills", "DacUzNQu0nh2FZrhAlbJuwuDDDk"],
  ["Hunarmand Punjab", "Digital skills development, freelancing readiness and workforce transformation", "LDXsntWmcYCKrjXMgNxFQrMysaU"],
  ["Cyber Secure Pakistan", "Cybersecurity awareness, digital defense initiatives & nurturing young cyber talent", "Hid0HSBIHRkxCBU9ruRDeYDj5M"],
] as const;

export function Kinds() {
  const [hover, setHover] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <section id="initiatives" className="bg-night-glow relative py-20 sm:py-28 md:py-[160px] text-bone" onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <Eyebrow className="text-bone/55">Key Initiatives &amp; Impact</Eyebrow>
        <SplitHeading text="Four pillars of *progress.*" className="mt-6 sm:mt-8 max-w-[760px] text-[clamp(38px,8vw,112px)] leading-[0.95]" />
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
          <p className="text-bone/55 text-[14px] sm:text-[16px]">Core Contribution: Technology strategy, digital platforms, operational execution &amp; <span className="serif-i text-[18px] sm:text-[20px] text-brass">sustainable innovation.</span></p>
          <Pill href="#how" variant="ghost-dark">See Execution Framework</Pill>
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
