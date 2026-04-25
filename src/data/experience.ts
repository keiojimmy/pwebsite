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
      "Leading investments at an AI and deep tech VC fund anchored by SoftBank, backing founders in Japan and the U.S. alongside co-investors including General Catalyst, SUSA, and Neo.",
  },
  {
    role: "Deputy Head of New Fintech Business",
    company: "Digital Garage",
    dates: "2024 – 2025",
    description:
      "Promoted from Executive Manager to Deputy Head within the year, driving new fintech business creation and partnerships at a TSE-listed internet company that operates one of Japan's leading PSPs and owns subsidiaries including Kakaku.com (Tabelog).",
  },
  {
    role: "Summer Associate",
    company: "McKinsey & Company",
    dates: "Summer 2023",
    description:
      "Strategy consulting internship between HBS years, with the Tokyo office. Received a full-time offer.",
  },
  {
    role: "Summer Venture Capitalist",
    company: "DEEPCORE",
    dates: "Summer 2022",
    description:
      "VC internship prior to HBS, evaluating early-stage AI and deep tech opportunities in Japan. Received a full-time offer.",
  },
  {
    role: "Associate Director of Strategy",
    company: "JR Kyushu Fast Foods",
    dates: "2020 – 2022",
    description:
      "Chief of Staff at a fast-growing hospitality and food operations company. Led cross-functional strategy and operational restructuring through aggressive expansion and a full COVID-era pivot.",
  },
  {
    role: "Japan Country Manager",
    company: "FOCUS BRANDS",
    dates: "2018 – 2020",
    description:
      "Ran Japan operations for Cinnabon, Auntie Anne's, and Seattle's Best Coffee. Launched Cinnabon Japan's e-commerce, introduced the Frozen Proof Oven to Japan for the first time outside the U.S., and rescued the Cinnabon franchise from closure.",
  },
  {
    role: "Associate",
    company: "L.E.K. Consulting",
    dates: "2016 – 2018",
    description:
      "Strategy consulting in the Tokyo office, working on growth strategy, M&A due diligence, and financial modeling for consumer and healthcare clients across APAC and the U.S.",
  },
];

export const ventures: Experience[] = [
  {
    role: "Founder",
    company: "Artisanal Tea Brand",
    dates: "2018 – 2022",
    description:
      "Built an artisanal tea brand from the ground up in Tokyo, developing the product line with farms and suppliers and securing distribution into café chains across Japan including Godiva Cafés.",
  },
  {
    role: "Founder",
    company: "Boutique Consulting Firm",
    dates: "2018 – 2023",
    description:
      "Founded a boutique consulting firm in Tokyo serving clients directly. Engagements spanned marketing strategy for Godiva Japan, business development for a German gourmet food and catering brand with JR Group, and healthcare and life sciences work for clients including IQVIA.",
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
