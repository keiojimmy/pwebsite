export type Experience = {
  role: string;
  company: string;
  dates: string;
  description: string;
  location?: string;
};

export type Education = {
  degree: string;
  school: string;
  year: string;
  note?: string;
};

export const experiences: Experience[] = [
  {
    role: "Partner",
    company: "[Firm Name]",
    dates: "2023 — Present",
    description:
      "Leading investments in early-stage B2B and fintech companies across Southeast Asia and broader emerging markets.",
    location: "Singapore",
  },
  {
    role: "VP, Strategy & Operations",
    company: "[Company Name]",
    dates: "2021 — 2023",
    description:
      "Built and led the strategy and operations function during a period of rapid growth from Series B to Series D.",
    location: "Singapore",
  },
  {
    role: "Engagement Manager",
    company: "McKinsey & Company",
    dates: "2017 — 2021",
    description:
      "Led client engagements across financial services, consumer, and technology sectors in Southeast Asia and Greater China.",
    location: "Hong Kong",
  },
  {
    role: "Associate",
    company: "Goldman Sachs",
    dates: "2014 — 2016",
    description:
      "Investment Banking Division, covering technology M&A and capital markets transactions across APAC.",
    location: "Hong Kong",
  },
];

export const education: Education[] = [
  {
    degree: "MBA",
    school: "Harvard Business School",
    year: "2017",
    note: "Baker Scholar",
  },
  {
    degree: "B.S. Economics",
    school: "University of Pennsylvania",
    year: "2014",
    note: "Wharton School, magna cum laude",
  },
];
