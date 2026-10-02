"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { readConsent, writeConsent, type ConsentStatus } from "@/lib/consent";
import { hasTracking } from "@/lib/config";

type ConsentValue = {
  status: ConsentStatus;
  /** True while the banner is on screen, so other fixed bars can stand aside. */
  asking: boolean;
  accept: () => void;
  decline: () => void;
  reopen: () => void;
};

const Ctx = createContext<ConsentValue>({
  status: "unknown",
  asking: false,
  accept: () => {},
  decline: () => {},
  reopen: () => {},
});

export const useConsent = () => useContext(Ctx);

export function ConsentProvider({ children }: { children: ReactNode }) {
  // Starts "unknown" on both server and client so the markup matches; the
  // stored choice is read after mount.
  const [status, setStatus] = useState<ConsentStatus>("unknown");
  const [ready, setReady] = useState(false);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    setStatus(readConsent());
    setReady(true);
  }, []);

  const set = useCallback((next: "granted" | "denied") => {
    writeConsent(next);
    setStatus(next);
    setReopened(false);
  }, []);

  const value = useMemo<ConsentValue>(
    () => ({
      status,
      // Nothing to ask about until there is a pixel to ask about.
      asking: hasTracking && ready && (status === "unknown" || reopened),
      accept: () => set("granted"),
      decline: () => set("denied"),
      reopen: () => setReopened(true),
    }),
    [status, ready, reopened, set],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
