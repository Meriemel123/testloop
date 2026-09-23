export const nav = {
  logo: "Testloop",
  links: [
    { label: "How it helps", href: "#features" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "Questions", href: "#faq" },
  ],
  cta: "Join early access",
};

export const hero = {
  eyebrow: "For independent knit & crochet designers",
  heading: "Pattern tests that",
  headingItalic: "finish on time.",
  lead: "Gather your testers with one link, watch every project grow, share corrections in a single click, and keep every note and finished photo together.",
  cta: "Save my spot",
  note: "Your first test is free. No card needed.",
  annotation: "your whole test, on one calm page",
};

export const demoIntro = {
  annotation: "go on, click around",
};

export const demoTabs = [
  {
    id: "applications",
    label: "Applications",
    caption:
      "One link in your bio. Every maker who applies lands here, ready to review.",
  },
  {
    id: "progress",
    label: "Progress",
    caption:
      "See every project grow, stitch by stitch, and who might need a gentle nudge.",
  },
  {
    id: "corrections",
    label: "Corrections",
    caption: "Fix row 42 once. Every maker gets the new version straight away.",
  },
  {
    id: "feedback",
    label: "Feedback",
    caption:
      "Clear answers you can compare, instead of ten scattered messages.",
  },
  {
    id: "gallery",
    label: "Gallery",
    caption: "Finished pieces, gathered and ready for launch day.",
  },
] as const;

export const beforeAfter = {
  heading: "Your pattern deserves better than",
  headingItalic: "five tabs and a spreadsheet.",
  lead: "Everything you juggle during a test today is replaced by one calm page. You can finally close those tabs.",
  todayLabel: "Today",
  todaySub: "5 tools, 5 tabs",
  withLabel: "With Testloop",
  withSub: "1 page, 1 link",
  rows: [
    {
      before: "Google Forms",
      beforeSub: "to collect applications",
      after: "One application link",
      afterSub: "Makers apply in a minute, you review them in one list.",
    },
    {
      before: "A spreadsheet",
      beforeSub: "to track who is testing what",
      after: "Live progress for every maker",
      afterSub: "Milestones update on their own, no copy-pasting.",
    },
    {
      before: "Email threads",
      beforeSub: "to send pattern corrections",
      after: "Corrections shared once",
      afterSub: "Everyone always has the latest version of your PDF.",
    },
    {
      before: "Instagram DMs",
      beforeSub: "to answer the same questions",
      after: "One thread per test",
      afterSub: "Questions and answers in a single shared place.",
    },
    {
      before: "Folders of photos",
      beforeSub: "to gather finished pieces",
      after: "A ready-made gallery",
      afterSub: "Finished photos, ready for your launch post.",
    },
  ],
  annotation: "and your evenings are yours again",
};

export const features = {
  heading: "Everything your test needs,",
  headingItalic: "nothing to chase.",
  lead: "From the first application to the last finished photo, your whole test lives in one place.",
  items: [
    {
      number: "01",
      bg: "#DCE7D7",
      ink: "#2F5232",
      title: "One link to gather your testers",
      body: "Pop it in your bio, on Ravelry or in your newsletter. Every maker who applies lands in one tidy list.",
    },
    {
      number: "02",
      bg: "#F0E3B4",
      ink: "#5E4F1C",
      title: "Choose your makers with care",
      body: "See each maker's size, skill and past projects. Everyone hears back automatically, so nobody is left wondering.",
    },
    {
      number: "03",
      bg: "#F0DCDA",
      ink: "#7A4526",
      title: "Watch the work grow",
      body: "Testers tick off each milestone, from gauge swatch to final seam. You'll see who needs a hand while there's still time.",
    },
    {
      number: "04",
      bg: "#EFE8DC",
      ink: "#332F28",
      title: "Corrections, shared once",
      body: "Spotted a wrong stitch count on row 42? Upload the fix and every tester gets it. Nobody hooks from an old PDF again.",
    },
    {
      number: "05",
      bg: "#F0E3B4",
      ink: "#5E4F1C",
      title: "Feedback that's easy to read",
      body: "Ask the same gentle questions every time, then compare answers on clarity, sizing and errata side by side.",
    },
    {
      number: "06",
      bg: "#DCE7D7",
      ink: "#2F5232",
      title: "Your favourite makers, remembered",
      body: "Keep private notes on the testers you loved working with, and invite them first to your next design.",
    },
  ],
};

export const gallery = {
  heading: "Every test ends with",
  headingItalic: "something beautiful.",
  lead: "Your makers' finished pieces gather in one gallery, ready for your launch post and your pattern page.",
  tiles: [
    { color: "clay" as const, title: "Harbour Cardigan", caption: "Made by Léa · terracotta, size L" },
    { color: "sage" as const, title: "Harbour Cardigan", caption: "Made by Jo · sage, size S" },
    { color: "ochre" as const, title: "Harbour Cardigan", caption: "Made by Nora · ochre, size 2XL" },
    { color: "rose" as const, title: "Harbour Cardigan", caption: "Made by Aïcha · dusty rose, size M" },
  ],
};

export const community = {
  heading: "Your testers,",
  headingItalic: "your community.",
  lead: "No marketplace and no crowd of other designers. Share your link where your makers already follow you — and the testers you love stay yours, test after test.",
  channelsTitle: "Share your link on",
  channels: ["Instagram", "Ravelry", "Facebook groups", "TikTok", "Your newsletter"],
  needsTitle: "Your makers need",
  needs: [
    { label: "An account or a password", value: "Not at all" },
    { label: "An app to download", value: "Not at all" },
    { label: "Just your link, on any phone", value: "That's it" },
  ],
};

export const howItWorks = {
  heading: "From first draft to launch, ",
  headingItalic: "in three steps.",
  steps: [
    {
      number: "1",
      borderColor: "#567C58",
      numeralColor: "#8F5330",
      title: "Describe your test",
      body: "Your pattern, yarn weight, sizes, dates and how many makers you need.",
    },
    {
      number: "2",
      borderColor: "#7E6A2A",
      numeralColor: "#7E6A2A",
      title: "Share your link",
      body: "Post it once. Applications arrive sorted and ready to read over a cup of tea.",
    },
    {
      number: "3",
      borderColor: "#567C58",
      numeralColor: "#2F5232",
      title: "Guide your makers",
      body: "Progress, corrections, questions, feedback and photos — side by side, on one calm page.",
    },
  ],
};

export const pricing = {
  heading: "Priced for",
  headingItalic: "independent designers.",
  lead: "Try it on a real pattern first. Stay only if it gives you your evenings back.",
  annotation: "early birds keep this price for life",
  free: {
    title: "Your first test",
    subtitle: "See how it fits the way you work",
    price: "Free",
    cta: "Save my spot",
    features: ["One complete pattern test", "Up to 10 makers", "Every feature included"],
  },
  designer: {
    title: "Designer",
    badge: "Early access −50%",
    subtitle: "For designers who test often",
    price: "$3.50",
    priceSuffix: "/ month, for life",
    strikePrice: "$7",
    cta: "Lock in early access pricing",
    features: [
      "Unlimited tests and makers",
      "Corrections shared with everyone at once",
      "Feedback forms and a finished-photo gallery",
      "A private list of your favourite testers",
    ],
  },
};

export const faq = {
  heading: "Good",
  headingItalic: "questions.",
  lead: "Something else on your mind? Write to me at [YOUR EMAIL]. I read every message.",
  items: [
    {
      question: "Do my testers need an account?",
      answer:
        "Not at all. They receive a private link by email and can apply, open your pattern, tick off milestones and share photos from any phone or computer.",
    },
    {
      question: "Is my pattern safe?",
      answer:
        "Only the makers you accept can open it, and you can remove anyone's access at any moment. Earlier versions are archived, never shared.",
    },
    {
      question: "Can I invite testers from Ravelry or Facebook?",
      answer:
        "Of course. Your link works everywhere, and every application lands in the same list, wherever it came from.",
    },
    {
      question: "How is this different from a tester marketplace?",
      answer:
        "Marketplaces charge per call and place you in a shared pool with other designers. Testloop is your own studio, for the makers who already love your work.",
    },
    {
      question: "When can I start?",
      answer:
        "Early access opens [LAUNCH DATE]. Everyone on the list is invited before the public launch.",
    },
  ],
};

export const finalCta = {
  heading: "Know who's making.",
  headingItalic: "Know what to fix.",
  lead: "Join the early access list. Three little questions help me shape it around the way you really work — and early members keep 50% off for life.",
  signature: "— [Your name], crochet designer, who got tired of spreadsheets",
  annotation: "takes 30 seconds, promise",
};

export const signupForm = {
  emailLabel: "Your email",
  emailPlaceholder: "you@yourstudio.com",
  questions: [
    {
      id: "testsPerYear" as const,
      legend: "How many pattern tests do you run each year?",
      options: ["None yet", "1–3", "4–10", "10+"],
    },
    {
      id: "currentTool" as const,
      legend: "How do you organise them today?",
      options: ["Google Forms", "Ravelry", "Yarnpond", "Instagram DMs", "Something else"],
    },
    {
      id: "wouldPay" as const,
      legend: "Would $7 a month feel fair for this?",
      options: ["Yes", "Maybe", "Not really"],
    },
  ],
  submit: "Save my spot",
  privacyNote: "One email when it's ready. Never any spam.",
  successHeading: "Your spot is ",
  successHeadingItalic: "saved.",
  successBody:
    "Thank you. I'll write to you personally before launch. Planning a test soon? Reply to the confirmation email and you'll be among the very first in.",
  changeAnswers: "Change my answers",
};

export const footer = {
  tagline: "Pattern testing, made gentle — for independent knit and crochet designers.",
  copyright: "© 2026 Testloop",
  columns: [
    {
      title: "Product",
      links: [
        { label: "How it helps", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Questions", href: "#faq" },
      ],
    },
    {
      title: "Studio",
      links: [
        { label: "About", href: "#top" },
        { label: "Contact", href: "#top" },
        { label: "Instagram", href: "#top" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#top" },
        { label: "Terms", href: "#top" },
      ],
    },
  ],
};
