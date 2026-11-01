"use client";

import { Nav, Hero, Logos, QuickHighlights, Belief, Kinds } from "@/components/site/top";
import { HowItWorks, Engagements, Evidence } from "@/components/site/middle";
import { Voices, About, Insights, Faq, Cta, Footer } from "@/components/site/bottom";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <QuickHighlights />
      <Logos />
      <Belief />
      <Kinds />
      <HowItWorks />
      <Engagements />
      <Evidence />
      <Voices />
      <Insights />
      <About />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
