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
    title: "Built an Artisanal Tea Brand",
    category: "Founder",
    company: "Startup · Tokyo",
    year: "2021–2022",
    description:
      "Built an artisanal tea brand from the ground up in Tokyo — developing the product line, building relationships with tea farms and suppliers, and securing distribution into café chains across Japan, including Godiva Cafés. Handled everything from packaging and positioning to negotiating and structuring international franchise deals, pitching to potential partners across Asia.",
    photos: 4,
  },
  {
    id: "own-consulting",
    title: "Started My Own Consulting Firm",
    category: "Founder",
    company: "Independent · Tokyo",
    year: "2020–2021",
    description:
      "Founded and ran an independent consulting practice in Tokyo, sourcing and serving clients directly. Engagements included marketing strategy for Godiva Japan — working on brand positioning and customer engagement in a competitive premium market — and marketing and business development support for Kaefer in partnership with the JR Group, one of Japan's largest infrastructure and real estate operators.",
    photos: 3,
  },
  {
    id: "cinnabon-digital",
    title: "Built Cinnabon's Japan E-Commerce Channel",
    category: "Operations & BD",
    company: "Cinnabon · Japan",
    year: "2019–2020",
    description:
      "Led the launch of Cinnabon Japan's first e-commerce and social media channels, building both digital operations from zero. The e-commerce build required solving the logistics of delivering a perishable baked product — something the brand had never attempted in Japan. Alongside it, developed and ran SNS content and campaigns to drive awareness and online sales, establishing a new direct-to-consumer presence for the brand.",
    photos: 3,
  },
  {
    id: "field-operations",
    title: "Introduced the Frozen Proof Oven (FPO) to Japan",
    category: "Operations & BD",
    company: "Auntie Anne's · Seattle's Best Coffee · Japan",
    year: "2018–2020",
    description:
      "Drove the introduction of the Frozen Proof Oven (FPO) to Japan — the first deployment of the system outside the United States — working directly with factories and equipment suppliers through the full rollout. Alongside this, completed formal brand training for Cinnabon, Auntie Anne's, and Seattle's Best Coffee, and worked directly in stores across all three brands to understand operations from the ground up.",
    photos: 4,
  },
  {
    id: "cinnabon-rescue",
    title: "Saved Cinnabon from Closing in Japan",
    category: "Operations & BD",
    company: "Cinnabon · Japan",
    year: "2019–2020",
    description:
      "When Cinnabon Japan faced the prospect of closing, stepped in to restructure the franchise relationship and stabilize the business. Worked across operations, franchisee negotiations, and brand alignment to keep the brand alive in the market — navigating the pressure from the U.S. parent brand while managing the realities on the ground in Japan.",
    photos: 2,
  },
  {
    id: "dickeys-jamba-japan",
    title: "Brought Dickey's BBQ and Jamba Juice to Japan",
    category: "Operations & BD",
    company: "Dickey's Barbecue Pit · Jamba Juice · Japan",
    year: "2018–2019",
    description:
      "Led the effort to bring two American brands into Japan. For Dickey's Barbecue Pit, took prospective franchisees on a site visit to Dubai to observe international operations firsthand before closing the franchise agreement for the Japan market. For Jamba Juice, structured and closed the franchise agreement by navigating the gap between the American brand's expectations and the realities of the Japanese market.",
    photos: 2,
  },
];
