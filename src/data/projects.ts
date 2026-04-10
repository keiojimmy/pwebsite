export type Project = {
  id: string;
  title: string;
  category: string;
  company: string;
  year: string;
  description: string;
  photos: number;
};

export const projects: Project[] = [
  {
    id: "tea-brand",
    title: "Artisanal Tea Brand",
    category: "Founder",
    company: "Startup · Tokyo",
    year: "2021–2022",
    description:
      "Built an artisanal tea brand from the ground up in Tokyo — developing the product line, building relationships with tea farms and suppliers, and securing distribution into café chains across Japan, including Godiva Cafés. Handled everything from packaging and positioning to negotiating and structuring international franchise deals, pitching to potential partners across Asia.",
    photos: 4,
  },
  {
    id: "own-consulting",
    title: "Brand & Marketing Consulting",
    category: "Own Consulting Firm",
    company: "Independent · Tokyo",
    year: "2020–2021",
    description:
      "Founded and ran an independent consulting practice in Tokyo, sourcing and serving clients directly. Engagements included marketing strategy for Godiva Japan — working on brand positioning and customer engagement in a competitive premium market — and marketing and business development support for Kaefer in partnership with the JR Group, one of Japan's largest infrastructure and real estate operators.",
    photos: 3,
  },
  {
    id: "cinnabon-digital",
    title: "E-Commerce & SNS Channel Launch",
    category: "Operations",
    company: "Cinnabon · Japan",
    year: "2019–2020",
    description:
      "Led the launch of Cinnabon Japan's first e-commerce and social media channels, building both digital operations from zero. The e-commerce build required solving the logistics of delivering a perishable baked product — something the brand had never attempted in Japan. Alongside it, developed and ran SNS content and campaigns to drive awareness and online sales, establishing a new direct-to-consumer presence for the brand.",
    photos: 3,
  },
  {
    id: "field-operations",
    title: "Field Operations & Brand Training",
    category: "Operations",
    company: "Cinnabon · Auntie Anne's · Seattle's Best Coffee · Japan",
    year: "2018–2020",
    description:
      "Drove the introduction of Cinnabon's Frozen Proof Oven (FPO) to Japan — the first deployment of the system outside the United States — working directly with factories and equipment suppliers through the full rollout. Alongside this, completed formal brand training for Cinnabon, Auntie Anne's, and Seattle's Best Coffee, and worked directly in stores across all three brands to understand operations from the ground up.",
    photos: 4,
  },
  {
    id: "franchise-deals",
    title: "International Franchise Deals",
    category: "Business Development",
    company: "Multiple Brands · Japan",
    year: "2018–2020",
    description:
      "Closed and structured international franchise agreements across multiple American food brands entering Japan — including Cinnabon, Jamba Juice, and Seattle's Best Coffee. Also helped orchestrate the entry of Dickey's Barbecue Pit into Japan, taking prospective franchisees on a site visit to Dubai to observe international operations firsthand. Each deal required navigating the gap between American brand expectations and the realities of the Japanese franchise market.",
    photos: 3,
  },
];
