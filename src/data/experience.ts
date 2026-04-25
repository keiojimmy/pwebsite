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
    role: "Senior Investment Director",
    company: "DEEPCORE",
    dates: "2025 – Present",
    description:
      "Leading investments at an AI and deep tech-focused VC fund anchored by SoftBank, backing founders primarily in Japan and the U.S. Sourcing, evaluating, and executing deals across the fund's portfolio, with co-investors including General Catalyst, SUSA, and NEA.",
    location: "Tokyo",
  },
  {
    role: "Deputy Head of New Fintech Business · Head of Business Development",
    company: "Digital Garage",
    dates: "2024 – 2025",
    description:
      "Drove new fintech business creation and strategic partnerships at a TSE-listed internet and payments company. Led business development efforts to identify, structure, and close partnerships that expanded the company's fintech footprint, navigating the intersection of legacy infrastructure and new digital finance opportunities in Japan.",
    location: "Tokyo",
  },
  {
    role: "Summer Associate",
    company: "McKinsey & Company",
    dates: "Summer 2023",
    description:
      "Consulting internship between the first and second year of HBS, working on strategy engagements for clients in the Tokyo office. Received a full-time offer.",
    location: "Tokyo",
  },
  {
    role: "Summer Venture Capitalist",
    company: "DEEPCORE",
    dates: "Summer 2022",
    description:
      "VC internship prior to HBS, evaluating early-stage investment opportunities across AI and deep tech in Japan. Received a full-time offer.",
    location: "Tokyo",
  },
  {
    role: "Associate Director of Strategy",
    company: "JR Kyushu Fast Foods",
    dates: "2020 – 2022",
    description:
      "Acted as a Chief of Staff within a fast-growing hospitality and food operations company, working directly alongside senior leadership through a period of aggressive expansion and a COVID-era pivot. Owned cross-functional strategy work, restructuring operations, navigating the business through disruption, and identifying new directions when the original model no longer held.",
    location: "Tokyo",
  },
  {
    role: "Japan Country Manager",
    company: "FOCUS BRANDS",
    dates: "2018 – 2020",
    description:
      "Managed the Japan operations for Cinnabon, Auntie Anne's, and Seattle's Best Coffee, overseeing franchise relationships, brand compliance, and local business development. Launched Cinnabon Japan's first e-commerce and social media channels, introduced the Frozen Proof Oven system to Japan for the first time outside the U.S., and led the effort to restructure and stabilize the Cinnabon franchise when it faced potential closure.",
    location: "Tokyo",
  },
  {
    role: "Associate",
    company: "L.E.K. Consulting",
    dates: "2016 – 2018",
    description:
      "Strategy consulting in the Tokyo office, focused on consumer and healthcare clients across APAC and the U.S. Engagements spanned growth strategy, M&A due diligence, and financial modeling across multiple industries and geographies.",
    location: "Tokyo",
  },
];

export const education: Education[] = [
  {
    degree: "MBA",
    school: "Harvard Business School",
    year: "2022 – 2024",
    note: "Co-chair, HBS Asia Business Conference",
  },
  {
    degree: "B.S. Chemical Engineering",
    school: "Washington University in St. Louis",
    year: "2015",
  },
];
