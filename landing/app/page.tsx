import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";
import { ConsentProvider } from "@/components/site/Consent";
import { ConsentBanner } from "@/components/site/ConsentBanner";
import { Analytics } from "@/components/site/Analytics";
import { Turn } from "@/components/ui/Turn";
import { Hero } from "@/components/sections/Hero";
import { ContextDemo } from "@/components/sections/ContextDemo";
import { TheWeek } from "@/components/sections/TheWeek";
import { Product } from "@/components/sections/Product";
import { Ambition } from "@/components/sections/Ambition";
import { Founders } from "@/components/sections/Founders";
import { Close } from "@/components/sections/Close";
import { week, turnToAmbition } from "@/lib/content";

/**
 * Seven chapters.
 *
 * 01 the hook · 02 how it works · 03 the week · 04 it acts
 * 05 where this goes · 06 the people · 07 the invitation
 *
 * Someone arriving from a story wants to see the thing before they will sit
 * through why it matters, so the mechanism comes straight after the hook and
 * the week follows as the reason it matters. The close is one chapter: the
 * offer, the steps and the form used to be three separate asks.
 */
export default function Page() {
  return (
    <ConsentProvider>
      <Nav />
      <main id="main">
        <Hero />
        <ContextDemo />
        <TheWeek />
        {/* 03 -> 04: out of the week, into what takes it off you */}
        <Turn tone="paper">{week.turn}</Turn>
        <Product />
        {/* 04 -> 05: out of what it does, into what it is for */}
        <Turn tone="warm">{turnToAmbition}</Turn>
        <Ambition />
        <Founders />
        <Close />
      </main>
      <Footer />
      <StickyCta />
      <ConsentBanner />
      <Analytics />
    </ConsentProvider>
  );
}
