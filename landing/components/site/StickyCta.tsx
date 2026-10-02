"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { founding } from "@/lib/config";
import { easeOutSoft } from "@/lib/motion";

/**
 * Phone-only bottom bar. Appears once the hero is behind you and hides again
 * over the form, so it never covers the thing it is pointing at.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);
  const atFormRef = useRef(false);

  useEffect(() => {
    const form = document.getElementById("apply");

    const observer = form
      ? new IntersectionObserver(
          ([entry]) => {
            atFormRef.current = entry.isIntersecting;
            if (entry.isIntersecting) setShow(false);
          },
          { rootMargin: "0px 0px -35% 0px" },
        )
      : null;
    if (form && observer) observer.observe(form);

    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.85;
      setShow(past && !atFormRef.current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          transition={{ duration: 0.4, ease: easeOutSoft }}
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
        >
          <div className="flex items-center gap-3 rounded-[14px] border border-line bg-paper/97 p-2 pl-4 shadow-float backdrop-blur-xl">
            <p className="min-w-0 flex-1 text-[0.8125rem] leading-tight text-body">
              <span className="font-medium text-ink">Founding members</span>
              <br />
              {founding.capShort.toLowerCase()}
            </p>
            <a
              href="#apply"
              className="inline-flex h-11 shrink-0 items-center rounded-[11px] bg-ink px-5 text-[0.9375rem] font-medium text-paper"
            >
              Apply
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
