import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, type MotionValue } from "motion/react";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { Counter, EASE, Eyebrow, Pill, Reveal, SplitHeading, img } from "./primitives";

const STEPS = [
  ["Understand & Diagnose", "Analyze business challenges, technical architectures, and user needs to establish a practical, unvarnished project roadmap.", "HCjYYjTexKt0r1TQmgj5kUcREBY"],
  ["Architect & Plan", "Design scalable digital systems using modern web technologies, modular architectures, and clear security and execution milestones.", "xW7mWNmDb2pifyrrP0WmkpoURzY"],
  ["Build & Empower", "Deliver web applications and digital platforms iteratively while establishing high engineering standards and mentoring technical talent.", "xUfkQ3AvEuRZQ49nQGqyn66JE"],
  ["Scale & Measure", "Track measurable outcomes, system performance, uptime, and business adoption, optimizing continually for sustainable growth.", "X7TMWu97EmYu2pyiDKsqlbwE"],
] as const;

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [step, setStep] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setStep(Math.min(3, Math.floor(v * 4))));
  const bar = useTransform(scrollYProgress, [0, 1], ["6%", "100%"]);
  return (
    <section id="how" ref={ref} className="relative h-[280vh] md:h-[400vh] bg-background">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-16 md:py-0">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 md:gap-14 px-6 sm:px-10 md:px-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Strategic Execution Approach</Eyebrow>
            <SplitHeading text="Four stages of *execution.*" accent="text-brass-deep" className="mt-4 sm:mt-6 max-w-[360px] text-[32px] sm:text-[40px] md:text-[46px] leading-[1.05]" />
            <div className="relative mt-2 sm:mt-4 h-[110px] sm:h-[140px] md:h-[170px] overflow-hidden font-display text-[120px] sm:text-[150px] md:text-[190px] font-medium leading-none tracking-[-0.06em]">
              <span className="text-ink/75">0</span>
              <span className="absolute left-[0.58em] top-0 inline-block text-brass-deep">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span key={step} className="inline-block" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.7, ease: EASE }}>
                    {step + 1}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
            <div className="relative mt-4 sm:mt-6 min-h-[110px] sm:min-h-[130px] md:min-h-[150px] max-w-[372px]">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.45, ease: EASE }}>
                  <h3 className="flex items-baseline gap-3 sm:gap-4 font-display text-[22px] sm:text-[26px] md:text-[30px] font-medium tracking-[-0.03em]">
                    <span className="font-mono text-[11px] sm:text-[12px] text-muted-foreground">0{step + 1}</span>
                    {STEPS[step]?.[0]}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.65] text-muted-foreground">{STEPS[step]?.[1]}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-4 sm:mt-6 h-0.5 max-w-[372px] bg-ink/10">
              <motion.div style={{ width: bar }} className="h-full bg-brass" />
            </div>
          </div>
          <div className="relative aspect-[1.25] sm:aspect-[1.17]">
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 overflow-hidden rounded-xl md:rounded-md"
                animate={{ clipPath: i <= step ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)", rotate: i % 2 ? 1.5 : -1.5, scale: i < step ? 0.96 : 1 }}
                transition={{ duration: 1, ease: EASE }}
                style={{ zIndex: i }}
              >
                <img src={img(s[2])} alt={s[0]} className="h-full w-full object-cover grayscale" />
              </motion.div>
            ))}
            <div className="eyebrow absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10 rounded-full bg-night/70 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[12px] text-bone backdrop-blur">
              0{step + 1} / 04 — {STEPS[step]?.[0]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    category: "CORE ENGINEERING",
    title: "Web Development & Digital Platforms",
    tagline: "Modern, purpose-driven web applications built around real business needs.",
    scope: "FULL-LIFECYCLE",
    domain: "Web & Products",
    body: "Planning, designing, and delivering high-performance web applications using contemporary frameworks, intuitive UX, scalable backend systems, and clean architecture.",
    deliverables: [
      "Modern responsive websites & web apps",
      "Robust backend systems & secure APIs",
      "User experience & frontend engineering",
      "Scalable infrastructure & deployment",
    ],
    cta: "Inquire web projects",
    image: "HCjYYjTexKt0r1TQmgj5kUcREBY",
    featured: true,
  },
  {
    category: "LEADERSHIP & ADVISORY",
    title: "Technology Strategy & CTO Direction",
    tagline: "Aligning technical decisions with organizational objectives and scalability.",
    scope: "STRATEGIC ADVISORY",
    domain: "Executive Leadership",
    body: "Guiding businesses through software architecture planning, digital transformation roadmaps, technical team structuring, and adopting high-impact technologies.",
    deliverables: [
      "Technology strategy & digital transformation",
      "Engineering team leadership & mentoring",
      "Translating business needs into systems",
      "Stakeholder alignment & execution plans",
    ],
    cta: "Request technology advisory",
    image: "NpSrhA2Bm9APpRNWlHhyQ7AMxA",
    featured: false,
  },
  {
    category: "CAPACITY BUILDING",
    title: "Corporate Training & Digital Initiatives",
    tagline: "Empowering talent and organizations with future-ready digital capabilities.",
    scope: "PROGRAMS & WORKSHOPS",
    domain: "Talent & Youth Impact",
    body: "Designing and leading hands-on training ecosystems, developer bootcamps, cybersecurity awareness, and youth empowerment initiatives like YETP and Hunarmand Punjab.",
    deliverables: [
      "Full-stack web development workshops",
      "Cybersecurity awareness & fundamentals",
      "Digital workforce & freelancing readiness",
      "Startup & incubation mentorship",
    ],
    cta: "Explore training programs",
    image: "xUfkQ3AvEuRZQ49nQGqyn66JE",
    featured: false,
  },
];

export function Engagements() {
  return (
    <section id="expertise" className="bg-[#f5efe6] py-20 sm:py-28 md:py-[150px] text-ink">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 sm:pb-16 lg:pb-20">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-mono tracking-[0.22em] uppercase text-[#7c807b]">
              <span className="h-px w-5 bg-[#b57a38]" />
              05. EXPERTISE &amp; SERVICES
            </div>
            <h2 className="mt-5 font-display text-[clamp(44px,6.2vw,86px)] font-medium leading-[0.98] tracking-[-0.045em] text-[#121312]">
              Engineering capabilities. <br />
              <span className="serif-i text-[#9d723b] font-normal italic">Strategic execution.</span>
            </h2>
          </div>
          
          <div className="md:max-w-[440px] lg:max-w-[480px] md:pb-2 lg:pb-3">
            <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#555b56]">
              End-to-end digital thinking: from diagnosing complex institutional challenges to engineering purpose-built platforms, scalable architectures, and empowering high-performance teams.
            </p>
          </div>
        </div>

        {/* 3 Flip Cards */}
        <div className="grid gap-7 lg:grid-cols-3 items-stretch">
          {SERVICES.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.12}>
              <div className="group h-[640px] sm:h-[680px] w-full [perspective:1800px]">
                <div className="relative h-full w-full transition-transform duration-[850ms] [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* FRONT OF CARD */}
                  <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[26px] [backface-visibility:hidden] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] border bg-white text-[#121312] border-black/[0.06]">
                    <div className="h-[300px] sm:h-[340px] w-full overflow-hidden bg-neutral-100 shrink-0">
                      <img
                        src={img(e.image)}
                        alt={e.title}
                        className="h-full w-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-7 sm:p-9">
                      <div>
                        <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#7c807b]">
                          {e.category}
                        </p>
                        <h3 className="mt-3 font-display text-[24px] sm:text-[28px] font-medium leading-[1.12] tracking-[-0.035em] text-[#121312]">
                          {e.title}
                        </h3>
                        <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.5] text-[#696f6a]">
                          {e.tagline}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-black/10 pt-5">
                        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#7c807b]">
                          <span>{e.scope}</span>
                          <span className="font-display text-[15px] sm:text-[17px] font-medium text-[#121312]">{e.domain}</span>
                        </div>

                        <div className="mt-4 flex items-center justify-between pt-1">
                          <span className="text-[10px] font-mono tracking-widest text-[#9aa09a] uppercase">
                            Hover to flip ⟲
                          </span>
                          <span className="text-[12px] font-medium text-[#ab7338] group-hover:underline">
                            Details ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BACK OF CARD */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between rounded-[26px] p-8 sm:p-10 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl ${
                      e.featured ? "bg-[#c99557] text-[#14120e]" : "bg-[#14120e] text-[#f4efe6]"
                    }`}
                  >
                    <div>
                      <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase opacity-75">
                        {e.category}
                      </p>
                      <h3 className="mt-3 font-display text-[24px] sm:text-[28px] font-medium leading-[1.1] tracking-[-0.03em]">
                        {e.title}
                      </h3>
                      <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.65] opacity-85">
                        {e.body}
                      </p>

                      <div className="mt-6 border-t border-current/15 pt-5">
                        <span className="font-mono text-[10px] tracking-widest uppercase opacity-70 block mb-3">
                          Focus Areas &amp; Deliverables:
                        </span>
                        <ul className="space-y-3 font-mono text-[12px] sm:text-[13px]">
                          {e.deliverables.map((l) => (
                            <li key={l} className="flex items-center gap-3">
                              <Check className="h-4 w-4 shrink-0 opacity-80" />
                              <span>{l}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto border-t border-current/15 pt-6">
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="font-display text-[20px] sm:text-[24px] font-medium">{e.domain}</span>
                        <span className="font-mono text-[11px] uppercase tracking-wider opacity-75">{e.scope}</span>
                      </div>
                      <Pill href="#contact" variant={e.featured ? "ink" : "brass"}>
                        {e.cta} ↗
                      </Pill>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional Specialized Areas from PDF Page 6 */}
        <div className="mt-14 pt-10 border-t border-ink/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            ["Digital Transformation", "Adoption of modern digital systems and streamlined workflows"],
            ["Project & Product Execution", "Translating ideas into structured development roadmaps"],
            ["Startup & Innovation", "Nurturing technology-driven business models and ventures"],
            ["Stakeholder Alignment", "Cross-functional leadership bridging business and tech"],
          ].map(([t, d], i) => (
            <div key={i} className="p-4 rounded-xl bg-black/[0.02] border border-black/5">
              <span className="text-[#b57a38] text-[10px] font-mono uppercase block mb-1">Area 0{i + 1}</span>
              <strong className="block font-display text-[16px] text-[#121312] mb-1">{t}</strong>
              <p className="text-[12px] text-[#696f6a] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const CASES = [
  {
    category: "WEB DEVELOPMENT & DIGITAL PLATFORMS",
    who: "CTO & Co-Founder — i3 Group of Companies",
    t: "Unified Enterprise Digital Platform",
    challenge: "Fragmented tech systems and high operational overhead across group businesses.",
    solution: "Engineered scalable modular web platforms, unified APIs, and high-performance digital infrastructure.",
    tech: "Modern Web Stack • Cloud Microservices • Scalable APIs",
    b: "Spearheaded technology strategy, modern web applications, and resilient digital infrastructure enabling seamless multi-entity operations.",
    s: [[<>+<Counter to={100} />%</>, "system uptime & reliability"], [<><Counter to={4} />×</>, "faster feature deployment"]],
    im: "X7TMWu97EmYu2pyiDKsqlbwE",
  },
  {
    category: "TRAINING ECOSYSTEMS & YOUTH EMPOWERMENT",
    who: "COO — Youth Empowerment Training Program (YETP)",
    t: "Scaling Digital Training for 10,000+ Learners",
    challenge: "Expanding accessible, high-quality digital skills training to thousands of youth across multiple cohorts.",
    solution: "Architected centralized learning management portals, progress analytics, and structured IT curriculums.",
    tech: "Student Portals • Learning Analytics • Cloud Infrastructure",
    b: "Led program operations and digital platform delivery, connecting thousands of learners to in-demand IT and tech careers.",
    s: [[<><Counter to={10} />k+</>, "students & youth empowered"], [<><Counter to={95} />%</>, "completion & satisfaction"]],
    im: "4oRyGDG58GnNYE1NKjA8V2BUo6U",
  },
  {
    category: "RESEARCH & ENGINEERING (IEEE PUBLISHED)",
    who: "MAJICC 2021 — Mohammad Ali Jinnah University",
    t: "IoT-Based Monitoring in Smart Farming",
    challenge: "Agricultural resource waste and lack of accessible real-time soil and irrigation telemetry.",
    solution: "Developed an IoT sensing architecture for real-time moisture, climate, and automated precision irrigation.",
    tech: "Internet of Things (IoT) • Sensor Telemetry • Smart Analytics",
    b: "Published IEEE-associated research exploring connected systems to address critical real-world agricultural challenges.",
    s: [[<Counter to={2021} />, "publication at MAJICC"], [<><Counter to={100} />%</>, "peer-reviewed research"]],
    im: "AVs6BQrXnM8hz0pZejOrzTUsw",
  },
  {
    category: "TECHNOLOGY INITIATIVES & DIGITAL EMPOWERMENT",
    who: "Hunarmand Punjab & Cyber Secure Pakistan",
    t: "Provincial Digital Skills & Cybersecurity",
    challenge: "Equipping provincial youth with modern freelancing readiness and raising national cybersecurity awareness.",
    solution: "Executed multi-city training programs, digital curriculum tracks, and cyber awareness workshops.",
    tech: "Workforce Roadmaps • Cyber Defenses • Learning Hubs",
    b: "Contributed strategic direction and execution for nationwide skills development and digital defense readiness.",
    s: [[<><Counter to={20} />+</>, "institutes & hubs engaged"], [<><Counter to={1000} />s</>, "active learners reached"]],
    im: "LXjSe5Iux2mFkU18HiTo0PjAQ",
  },
];

function CaseCard({ c, i, n, p }: { c: (typeof CASES)[number]; i: number; n: number; p: MotionValue<number> }) {
  const scale = useTransform(p, [i / n, 1], [1, 1 - (n - i) * 0.03]);
  const dim = useTransform(p, [i / n, (i + 1) / n], [0, i === n - 1 ? 0 : 0.35]);
  return (
    <div
      className="sticky min-h-[660px] sm:min-h-[620px] md:min-h-[580px] pb-8"
      style={{ top: `calc(90px + ${i * 22}px)` }}
    >
      <motion.article
        style={{ scale }}
        className="relative grid min-h-[580px] md:min-h-[520px] origin-top overflow-hidden rounded-[26px] bg-night text-bone md:grid-cols-[1.1fr_1.3fr] shadow-2xl border border-white/10"
      >
        <div className="relative h-[220px] sm:h-[260px] md:h-full w-full overflow-hidden">
          <img src={img(c.im)} alt="" className="h-full w-full object-cover grayscale contrast-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent md:hidden" />
          <div className="absolute top-4 left-4 z-10 rounded-full bg-night/80 border border-white/15 px-3.5 py-1 text-[10px] font-mono tracking-wider uppercase text-brass backdrop-blur-md">
            {c.category}
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
          <div>
            <p className="eyebrow text-[11px] sm:text-[12px] font-mono tracking-widest text-brass">{c.who}</p>
            <h3 className="mt-3 sm:mt-4 font-display text-[24px] sm:text-[28px] md:text-[34px] font-medium leading-[1.12] tracking-[-0.035em] text-white">
              {c.t}
            </h3>
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[16px] leading-[1.65] text-bone/75">
              {c.b}
            </p>
            
            {/* Tech tag line */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-[#c99557]">
              <span>Tech:</span>
              <span className="text-bone/70">{c.tech}</span>
            </div>
          </div>

          {/* Numbers block with prominent clearance */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8 border-t border-white/15 pt-6">
            {c.s.map(([v, l], k) => (
              <div key={k} className="flex flex-col justify-start">
                <div className="font-display text-[34px] sm:text-[44px] md:text-[48px] font-semibold tracking-tight text-brass leading-none">
                  {v}
                </div>
                <div className="eyebrow mt-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-bone/60 leading-tight uppercase">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-night" />
      </motion.article>
    </div>
  );
}

export function Evidence() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section id="projects" className="bg-fog/60 py-20 sm:py-28 md:py-[150px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        <Eyebrow>06. PROJECTS &amp; VENTURES • 07. ACHIEVEMENTS</Eyebrow>
        <div className="mt-4 sm:mt-6 grid gap-6 sm:gap-10 md:grid-cols-2 md:items-end">
          <SplitHeading text="Proven by *initiatives* delivered." accent="text-brass-deep" className="text-[clamp(32px,5.5vw,72px)] leading-[1.05]" />
          <Reveal>
            <p className="max-w-[460px] text-[15px] sm:text-[17px] leading-[1.6] text-muted-foreground md:justify-self-end">
              &ldquo;For me, achievements are not simply milestones to display. The most meaningful achievements are those that represent progress — a platform successfully launched, a team empowered, a learner supported or an initiative that creates new opportunities.&rdquo;
            </p>
          </Reveal>
        </div>
        <ul className="mt-12 sm:mt-16 grid gap-6 border-y border-ink/15 py-8 sm:py-10 grid-cols-1 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
          {[[<><Counter to={10} />k+</>, "students & youth trained"], [<>+<Counter to={5} /> yrs</>, "technology leadership & execution"], [<><Counter to={2020} /></>, "Governor Award for CTO leadership"]].map(([v, l], i) => (
            <li key={i}>
              <strong className="font-display text-[40px] sm:text-[56px] font-medium tracking-[-0.05em]">{v}</strong>
              <p className="eyebrow text-[10px] sm:text-[11px] text-muted-foreground">{l}</p>
            </li>
          ))}
          <div className="pt-2 sm:pt-0">
            <Pill href="#contact" variant="ghost-light">Connect with Umair</Pill>
          </div>
        </ul>
        <div ref={ref} className="mt-12 sm:mt-16">
          {CASES.map((c, i) => (
            <CaseCard key={i} c={c} i={i} n={CASES.length} p={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
