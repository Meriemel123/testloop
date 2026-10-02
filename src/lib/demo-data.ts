export type KnitColor = "sage" | "clay" | "ochre" | "rose" | "rust";

export const studio = {
  name: "Mira's Studio",
  link: "testloop.app/mira/harbour",
  makersCount: 48,
  photosCount: 112,
};

export const tests = [
  { id: "harbour", name: "Harbour Cardigan", color: "clay" as KnitColor, active: true },
  { id: "tidepool", name: "Tidepool Shawl", color: "ochre" as KnitColor, active: false },
  { id: "meadow", name: "Meadow Beanie", color: "rose" as KnitColor, active: false },
];

export const activeTest = {
  name: "Harbour Cardigan",
  meta: "Crochet · DK weight · Sizes XS–3XL · 5 makers",
  weekLabel: "Week 2 of 5 · ends 14 Nov",
  progress: 0.4,
  urlPath: "testloop.app/mira/harbour-cardigan",
  color: "clay" as KnitColor,
};

export type Applicant = {
  id: string;
  name: string;
  country: string;
  level: string;
  wantsSize: string;
  garmentsMade: number;
  swatches: KnitColor[];
  accepted: boolean;
};

export const applicants: Applicant[] = [
  {
    id: "a1",
    name: "Aïcha M.",
    country: "Morocco",
    level: "Advanced",
    wantsSize: "M",
    garmentsMade: 14,
    swatches: ["sage", "rose", "ochre"],
    accepted: true,
  },
  {
    id: "a2",
    name: "Léa R.",
    country: "France",
    level: "Intermediate",
    wantsSize: "L",
    garmentsMade: 9,
    swatches: ["clay", "sage", "rust"],
    accepted: true,
  },
  {
    id: "a3",
    name: "Hannah W.",
    country: "United Kingdom",
    level: "Advanced",
    wantsSize: "3XL",
    garmentsMade: 21,
    swatches: ["ochre", "rust", "rose"],
    accepted: false,
  },
  {
    id: "a4",
    name: "Priya S.",
    country: "Canada",
    level: "Confident beginner",
    wantsSize: "XS",
    garmentsMade: 4,
    swatches: ["rose", "clay", "sage"],
    accepted: false,
  },
];

export const applicationFilters = ["All · 23", "Size 2XL–3XL · 4", "Advanced · 9"];
export const spotsTotal = 6;
// The base count of makers already settled outside this mock's 4 visible
// applicants, matching the reference design's `accepted + 3` formula.
export const spotsBaseline = 3;

export const milestones = ["Swatch", "Body", "Sleeves", "Finishing", "Photos"] as const;
export type MilestoneStatus = "done" | "current" | "todo";

export type MakerProgress = {
  id: string;
  name: string;
  size: string;
  lastActive: string;
  status: "on-track" | "finished" | "late";
  milestones: MilestoneStatus[];
};

function stepsFromCount(n: number): MilestoneStatus[] {
  return Array.from({ length: 5 }, (_, k) =>
    k < n ? "done" : k === n ? "current" : "todo"
  );
}

export const makerProgress: MakerProgress[] = [
  {
    id: "lr",
    name: "Léa R.",
    size: "L",
    lastActive: "active 2 min ago",
    status: "on-track",
    milestones: stepsFromCount(3),
  },
  {
    id: "am",
    name: "Aïcha M.",
    size: "M",
    lastActive: "active 1 h ago",
    status: "on-track",
    milestones: stepsFromCount(2),
  },
  {
    id: "jp",
    name: "Jo P.",
    size: "S",
    lastActive: "finished yesterday",
    status: "finished",
    milestones: stepsFromCount(5),
  },
  {
    id: "nb",
    name: "Nora B.",
    size: "2XL",
    lastActive: "active 5 h ago",
    status: "on-track",
    milestones: stepsFromCount(2),
  },
  {
    id: "sk",
    name: "Sam K.",
    size: "XL",
    lastActive: "quiet for 9 days",
    status: "late",
    milestones: stepsFromCount(1),
  },
];

export type Version = {
  id: string;
  label: string;
  timestamp: string;
  note: string;
  archived: boolean;
  dashed?: boolean;
  openedBy?: number;
  openedOf?: number;
  avatars?: string[];
};

export const versionV2: Version = {
  id: "v2",
  label: "v2",
  timestamp: "3 days ago",
  note: "Row 42: 18 sc, not 16. Yardage added for 3XL.",
  archived: false,
  openedBy: 4,
  openedOf: 5,
  avatars: ["LR", "AM", "JP", "NB", "SK"],
};

export const versionV1: Version = {
  id: "v1",
  label: "v1 · First draft",
  timestamp: "",
  note: "",
  archived: true,
  dashed: true,
};

export const correctionDraft = {
  filename: "harbour-cardigan-v3.pdf",
  filesize: "2.4 MB",
  note: "Sleeve decreases: work them every 4th row, not every 3rd.",
};

export const ratings = [
  { label: "Clarity", value: 4.6, percent: 92 },
  { label: "Sizing accuracy", value: 4.2, percent: 84 },
  { label: "Fun to make", value: 4.8, percent: 96 },
];

export type Errata = {
  id: string;
  text: string;
  foundBy: string;
  status: "Fixed in v2" | "To fix";
};

export const errata: Errata[] = [
  { id: "e1", text: "Row 42 stitch count", foundBy: "Found by Sam and Léa", status: "Fixed in v2" },
  { id: "e2", text: "Missing yardage for 3XL", foundBy: "Found by Nora", status: "Fixed in v2" },
  { id: "e3", text: "Sleeve decrease wording", foundBy: "Found by Aïcha", status: "To fix" },
];

export const makerQuotes = [
  {
    quote: "Loved the construction. Row 42 confused me, but the fix arrived the same day.",
    quoteMobile: "Row 42 confused me, but the fix arrived the same day.",
    author: "Léa · size L",
    bg: "#F0DCDA",
  },
  {
    quote: "Clear and joyful to follow. I would test for you again in a heartbeat.",
    author: "Aïcha · size M",
    bg: "#DCE7D7",
  },
];

export type GalleryPhoto = {
  id: string;
  color: KnitColor;
  photo?: string;
  name: string;
  meta: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { id: "g1", color: "sage", photo: "/gallery/sage.jpg", name: "Jo", meta: "Size S · sage" },
  { id: "g2", color: "clay", photo: "/gallery/terracotta.jpg", name: "Léa", meta: "Size L · clay" },
  { id: "g3", color: "ochre", photo: "/gallery/ochre.jpg", name: "Nora", meta: "Size 2XL · ochre" },
  { id: "g4", color: "rose", photo: "/gallery/rose.jpg", name: "Aïcha", meta: "Size M · rose" },
  { id: "g5", color: "rust", name: "Sam", meta: "Size XL · rust" },
];
export const galleryInitiallySelected = new Set(["g1", "g3"]);

export const floatingElements = {
  notification: {
    title: "Léa finished both sleeves",
    subtitle: "Harbour Cardigan · 2 min ago",
  },
  photoCard: {
    title: "Jo's cardigan is finished",
    subtitle: "4 photos added to your gallery",
  },
  pill: "Sam asked about row 42",
};
