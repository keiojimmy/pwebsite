export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "sea-market-entry",
    title: "Southeast Asia Market Entry Strategy",
    category: "Strategy",
    description:
      "Developed and led execution of a 3-market entry strategy for a high-growth consumer tech company, resulting in $40M ARR within 18 months.",
    year: "2024",
    tags: ["Strategy", "Growth", "Consumer Tech"],
    featured: true,
  },
  {
    id: "fintech-portfolio",
    title: "Fintech Portfolio — Seed & Series A",
    category: "Investing",
    description:
      "Led origination, diligence, and board representation for 6 fintech investments across payments infrastructure and embedded finance.",
    year: "2023",
    tags: ["Investing", "Fintech", "Venture"],
    featured: true,
  },
  {
    id: "saas-turnaround",
    title: "Operational Turnaround — B2B SaaS",
    category: "Operating",
    description:
      "Stepped in as interim COO during a post-Series B reset; rebuilt the GTM team, re-segmented the customer base, and drove a 40% reduction in churn.",
    year: "2022",
    tags: ["Operations", "SaaS", "GTM"],
    featured: true,
  },
  {
    id: "climate-fund-thesis",
    title: "Climate Infrastructure Fund Thesis",
    category: "Investing",
    description:
      "Authored investment thesis for a $200M climate infrastructure fund, mapping opportunities across grid modernization, industrial decarbonization, and carbon markets.",
    year: "2022",
    tags: ["Investing", "Climate", "Infrastructure"],
    featured: false,
  },
  {
    id: "apac-partnership",
    title: "Strategic Partnership — APAC Distribution",
    category: "Business Development",
    description:
      "Structured and closed a distribution partnership across 4 APAC markets, unlocking $25M in incremental revenue within the first year.",
    year: "2021",
    tags: ["BD", "Partnerships", "APAC"],
    featured: false,
  },
  {
    id: "enterprise-saas-founding",
    title: "Zero to One — Enterprise SaaS",
    category: "Founding",
    description:
      "Co-founded and scaled an enterprise SaaS company from concept to $8M ARR, building out product, engineering, and commercial functions.",
    year: "2019",
    tags: ["Founding", "SaaS", "0-to-1"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
