"use server";

import { z } from "zod";
import { Resend } from "resend";
import { getSupabaseAdmin } from "./supabase-admin";

const waitlistSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  testsPerYear: z.string().min(1, "Choose one option."),
  currentTool: z.string().min(1, "Choose one option."),
  wouldPay: z.string().min(1, "Choose one option."),
  source: z.string().optional(),
});

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const UNIQUE_VIOLATION = "23505";

export async function submitWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const parsed = waitlistSchema.safeParse({
    email: formData.get("email"),
    testsPerYear: formData.get("testsPerYear"),
    currentTool: formData.get("currentTool"),
    wouldPay: formData.get("wouldPay"),
    source: formData.get("source") ?? undefined,
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check your answers.",
    };
  }

  const { email, testsPerYear, currentTool, wouldPay, source } = parsed.data;

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("waitlist").insert({
      email: email.toLowerCase(),
      tests_per_year: testsPerYear,
      current_tool: currentTool,
      would_pay: wouldPay,
      source: source || null,
    });

    if (error && error.code !== UNIQUE_VIOLATION) {
      throw error;
    }

    if (!error) {
      await sendConfirmationEmail(email);
    }

    return { status: "success" };
  } catch (err) {
    console.error("waitlist signup failed", err);
    return {
      status: "error",
      message: "Something went wrong on our end. Please try again in a moment.",
    };
  }
}

async function sendConfirmationEmail(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn("Resend not configured — skipping confirmation email.");
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to: email,
    subject: "You're on the Testloop early access list",
    text: `Thanks for joining!\n\nYour spot on the Testloop early access list is saved. I built Testloop after one too many pattern tests spread across forms, spreadsheets and DMs — I'll write again as soon as it's ready for you to try on a real pattern.\n\nIn the meantime, just reply to this email if you have any questions.\n\n— [YOUR NAME]`,
  });
}
