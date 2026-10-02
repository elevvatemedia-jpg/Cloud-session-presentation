"use client";

import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section, Chapter } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { apply } from "@/lib/content";
import { founding } from "@/lib/config";
import { submitApplication } from "@/lib/submit";
import { clsx } from "@/lib/clsx";
import { easeOutSoft } from "@/lib/motion";

type Field = "name" | "company" | "email";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LABELS: Record<Field, string> = {
  name: "Your name",
  company: "Company",
  email: "Work email",
};

function validate(field: Field, value: string): string | undefined {
  const v = value.trim();
  if (field === "email") {
    if (!v) return "Enter your work email so we can reply.";
    if (!EMAIL.test(v)) return "That does not look like an email address.";
    return undefined;
  }
  if (!v) return `Enter your ${field === "name" ? "name" : "company"}.`;
  if (v.length < 2) return "That looks too short.";
  return undefined;
}

export function Apply() {
  const [values, setValues] = useState({ name: "", company: "", email: "" });
  const [pains, setPains] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const setField = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    // Clear an error as soon as the field becomes valid — never nag mid-typing.
    if (errors[field] && !validate(field, value)) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const blurField = (field: Field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validate(field, values[field]) }));
  };

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Errors = {
      name: validate("name", values.name),
      company: validate("company", values.company),
      email: validate("email", values.email),
    };
    setErrors(next);
    setTouched({ name: true, company: true, email: true });

    const failed = (Object.keys(next) as Field[]).filter((k) => next[k]);
    if (failed.length > 0) {
      // Move focus to the summary so a keyboard or screen-reader user lands on it.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setState("sending");
    setFormError(null);
    const result = await submitApplication({ ...values, pains });

    if (result.ok) {
      setState("sent");
      requestAnimationFrame(() => successRef.current?.focus());
    } else {
      setState("idle");
      setFormError(result.message);
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }

  const invalid = (Object.keys(errors) as Field[]).filter(
    (k) => errors[k] && touched[k],
  );

  return (
    <Section id="apply" tone="dark" label="Apply to become a founding member" className="overflow-hidden">
      <div aria-hidden className="warm-glow pointer-events-none absolute inset-0" />

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20">
        {/* ---------------------------------------------------- the pitch */}
        <Reveal>
          <Chapter {...apply.chapter} tone="dark" />
          <h2 className="text-display text-white">
            {apply.headline[0]}
            <br />{" "}
            {apply.headline[1]}
          </h2>
          <p className="mt-7 max-w-[40ch] text-lead text-white/65">{apply.lead}</p>
          <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[0.8125rem] text-white/70">
            <span aria-hidden className="size-1.5 rounded-full bg-gold" />
            {founding.capShort}
          </p>
        </Reveal>

        {/* ----------------------------------------------------- the form */}
        <Reveal tall>
          <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-7">
            <AnimatePresence mode="wait">
              {state === "sent" ? (
                <motion.div
                  key="sent"
                  ref={successRef}
                  tabIndex={-1}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: easeOutSoft }}
                  className="py-8 text-center outline-none sm:py-14"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5, ease: easeOutSoft }}
                    className="mx-auto grid size-14 place-items-center rounded-full border border-gold/40 bg-gold/15 text-gold"
                  >
                    <CheckIcon className="size-6" />
                  </motion.span>
                  <h3 className="mt-5 text-h2 text-white">{apply.successTitle}</h3>
                  <p className="mx-auto mt-3 max-w-[38ch] text-[0.9375rem] leading-relaxed text-white/60">
                    {apply.successBody}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Error summary — focusable, links to each bad field */}
                  <AnimatePresence>
                    {(invalid.length > 0 || formError) && (
                      <motion.div
                        ref={summaryRef}
                        role="alert"
                        tabIndex={-1}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: easeOutSoft }}
                        className="mb-5 overflow-hidden outline-none"
                      >
                        <div className="rounded-[11px] border border-signal-rose/40 bg-signal-rose/10 p-4">
                          <p className="text-[0.875rem] font-medium text-white">
                            {formError ?? "There is a problem"}
                          </p>
                          {invalid.length > 0 && (
                            <ul className="mt-2 space-y-1">
                              {invalid.map((field) => (
                                <li key={field}>
                                  <a
                                    href={`#apply-${field}`}
                                    className="text-[0.875rem] text-white/75 underline underline-offset-4 hover:text-white"
                                  >
                                    {errors[field]}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {(["name", "company"] as const).map((field) => (
                      <TextField
                        key={field}
                        field={field}
                        value={values[field]}
                        error={touched[field] ? errors[field] : undefined}
                        onChange={(v) => setField(field, v)}
                        onBlur={() => blurField(field)}
                        autoComplete={field === "name" ? "name" : "organization"}
                      />
                    ))}
                  </div>

                  <div className="mt-4">
                    <TextField
                      field="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={values.email}
                      error={touched.email ? errors.email : undefined}
                      onChange={(v) => setField("email", v)}
                      onBlur={() => blurField("email")}
                    />
                  </div>

                  {/* ------------------------------------------ pain chips */}
                  <fieldset className="mt-7">
                    <legend className="text-[0.9375rem] font-medium text-white">
                      {apply.painLabel}{" "}
                      <span className="font-normal text-white/60">Optional</span>
                    </legend>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {apply.painOptions.map((option) => {
                        const on = pains.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            aria-pressed={on}
                            onClick={() =>
                              setPains((p) =>
                                on ? p.filter((x) => x !== option) : [...p, option],
                              )
                            }
                            className={clsx(
                              "min-h-11 cursor-pointer rounded-full border px-4 text-[0.875rem] transition-colors duration-200",
                              on
                                ? "border-gold/55 bg-gold/20 text-white"
                                : "border-white/12 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white",
                            )}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={state === "sending"}
                    className="mt-8 w-full"
                  >
                    {state === "sending" ? "Sending…" : apply.submit}
                  </Button>

                  <p className="mt-4 text-center text-[0.8125rem] text-white/60">
                    {apply.reassure}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- field */

function TextField({
  field,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  inputMode,
  autoComplete,
}: {
  field: Field;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  type?: string;
  inputMode?: "email" | "text";
  autoComplete?: string;
}) {
  const id = `apply-${field}`;
  return (
    <div>
      <label htmlFor={id} className="block text-[0.9375rem] font-medium text-white">
        {LABELS[field]}
      </label>
      <input
        id={id}
        name={field}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={clsx(
          "mt-2 h-12 w-full rounded-[11px] border bg-white/[0.04] px-3.5 text-white",
          "transition-colors duration-200 outline-none placeholder:text-white/45",
          "focus:border-gold/60 focus:bg-white/[0.07]",
          error ? "border-signal-rose/60" : "border-white/12 hover:border-white/22",
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[0.8125rem] text-signal-rose">
          {error}
        </p>
      )}
    </div>
  );
}
