"use client";

import { useActionState, useRef, useState, startTransition } from "react";
import { track } from "@vercel/analytics";
import { submitWaitlist, type WaitlistState } from "@/lib/waitlist";
import { signupForm } from "@/lib/content";

type Answers = {
  testsPerYear: string;
  currentTool: string[];
  wouldPay: string;
};

const initialState: WaitlistState = { status: "idle" };

export function SignupForm() {
  const [state, formAction, pending] = useActionState(submitWaitlist, initialState);
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    testsPerYear: "",
    currentTool: [],
    wouldPay: "",
  });
  const [source] = useState(() => {
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams(window.location.search);
    return params.get("utm_source") || params.get("ref") || "";
  });
  const [emailError, setEmailError] = useState<string | null>(null);
  const startedTracking = useRef(false);

  function trackStart() {
    if (!startedTracking.current) {
      startedTracking.current = true;
      track("form_start");
    }
  }

  function selectSingle(id: "testsPerYear" | "wouldPay", value: string) {
    trackStart();
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function toggleMulti(id: "currentTool", value: string) {
    trackStart();
    setAnswers((prev) => {
      const current = prev[id];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [id]: next };
    });
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit =
    isValidEmail && answers.testsPerYear && answers.currentTool.length > 0 && answers.wouldPay;

  function handleSubmit(formData: FormData) {
    if (!isValidEmail) {
      setEmailError("Enter a valid email address.");
      return;
    }
    setEmailError(null);
    track("form_submit");
    startTransition(() => {
      formAction(formData);
    });
  }

  if (state.status === "success") {
    return (
      <div className="flex flex-col gap-4">
        <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#DCE7D7]">
          <svg width="20" height="20" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#2F5232" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
          {signupForm.successHeading}
          <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
            {signupForm.successHeadingItalic}
          </span>
        </span>
        <p className="text-[15px] leading-[1.6] text-[#6E675C] sm:text-[16px]">
          {signupForm.successBody}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="h-11 w-fit rounded-full border border-[#DDD3C3] bg-[#F7F3EC] px-4 text-[14px] font-medium text-ink"
        >
          {signupForm.changeAnswers}
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
      <input type="hidden" name="source" value={source} />

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[14px] font-medium text-ink">
          {signupForm.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError(null);
            trackStart();
          }}
          placeholder={signupForm.emailPlaceholder}
          aria-invalid={emailError ? true : undefined}
          aria-describedby={emailError ? "email-error" : undefined}
          className="h-[50px] rounded-[14px] border border-[#D5CABA] bg-[#F7F3EC] px-4 text-[15px] text-ink placeholder:text-[#7A7266] focus-visible:outline-2 focus-visible:outline-sage"
        />
        {emailError && (
          <p id="email-error" className="text-[13px] text-[#8F5330]">
            {emailError}
          </p>
        )}
      </div>

      {signupForm.questions.map((q) => {
        const isMulti = q.id === "currentTool";
        const hiddenValue = isMulti ? answers.currentTool.join(", ") : answers[q.id as "testsPerYear" | "wouldPay"];
        return (
          <fieldset key={q.id} className="m-0 flex flex-col border-0 p-0">
            <legend className="mb-2.5 p-0 text-[14px] font-medium text-ink">{q.legend}</legend>
            <input type="hidden" name={q.id} value={hiddenValue} />
            <div className="flex flex-wrap gap-1.5">
              {q.options.map((option) => {
                const selected = isMulti
                  ? answers.currentTool.includes(option)
                  : answers[q.id as "testsPerYear" | "wouldPay"] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      isMulti
                        ? toggleMulti("currentTool", option)
                        : selectSingle(q.id as "testsPerYear" | "wouldPay", option)
                    }
                    className={`h-11 rounded-full px-4 text-[14px] font-medium ${
                      selected
                        ? "border border-sage bg-sage text-[#FFFDF8]"
                        : "border border-[#DDD3C3] bg-[#F7F3EC] text-ink"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>
        );
      })}

      {state.status === "error" && (
        <p role="alert" className="text-[14px] text-[#8F5330]">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit || pending}
        className="h-[54px] rounded-full bg-sage text-[15px] font-medium text-[#FFFDF8] disabled:opacity-50"
      >
        {pending ? "Saving…" : signupForm.submit}
      </button>

      <span className="text-center text-[13px] text-[#6E675C]">{signupForm.privacyNote}</span>
    </form>
  );
}
