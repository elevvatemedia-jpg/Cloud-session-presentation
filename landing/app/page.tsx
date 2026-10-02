import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";
import { Turn } from "@/components/ui/Turn";
import { Hero } from "@/components/sections/Hero";
import { TheWeek } from "@/components/sections/TheWeek";
import { TheIdea } from "@/components/sections/TheIdea";
import { ContextDemo } from "@/components/sections/ContextDemo";
import { Product } from "@/components/sections/Product";
import { Ambition } from "@/components/sections/Ambition";
import { Founders } from "@/components/sections/Founders";
import { Membership } from "@/components/sections/Membership";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Apply } from "@/components/sections/Apply";
import { week, turnToAmbition } from "@/lib/content";

/**
 * Eleven chapters, read in order.
 *
 * 01 the hook · 02 the week · 03 the idea · 04 it knows · 05 it acts
 * 06 where this goes · 07 the people · 08 the invitation
 * 09 what happens next · 10 questions · 11 the ask
 *
 * Tone alternates paper / warm so no two neighbours feel the same, and the
 * three dark chapters land on the three beats the deck reserves them for:
 * the turn (03), the offer (08) and the close (11).
 */
export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TheWeek />
        {/* 02 -> 03: the line that makes the whole argument turn */}
        <Turn tone="warm">{week.turn}</Turn>
        <TheIdea />
        <ContextDemo />
        <Product />
        {/* 05 -> 06: out of what it does, into what it is for */}
        <Turn tone="warm">{turnToAmbition}</Turn>
        <Ambition />
        <Founders />
        <Membership />
        <Process />
        <Faq />
        <Apply />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
