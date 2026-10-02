import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { ContextDemo } from "@/components/sections/ContextDemo";
import { Product } from "@/components/sections/Product";
import { Membership } from "@/components/sections/Membership";
import { Founders } from "@/components/sections/Founders";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Apply } from "@/components/sections/Apply";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Problem -> proof -> product -> offer -> people -> process -> objections -> ask */}
        <Hero />
        <Problem />
        <ContextDemo />
        <Product />
        <Membership />
        <Founders />
        <Process />
        <Faq />
        <Apply />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
