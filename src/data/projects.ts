export type Project = {
  id: string;
  title: string;
  category: string;
  company: string;
  year: string;
  description: string;
  photos: number; // number of placeholder slots until real photos are swapped in
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
    id: "cinnabon-ec",
    title: "Cinnabon E-Commerce Launch",
    category: "Operations",
    company: "Cinnabon · Japan",
    year: "2019–2020",
    description:
      "Led the launch of Cinnabon Japan's first e-commerce channel — building the full digital operation from scratch, including storefront setup, last-mile logistics, and marketing. The project required navigating the complexity of bringing a perishable baked good into e-commerce for the first time in the Japanese market, a channel the brand had never attempted domestically or internationally.",
    photos: 3,
  },
  {
    id: "cinnabon-fpo",
    title: "Frozen Proof Oven — First Outside the U.S.",
    category: "Operations",
    company: "Cinnabon · Japan",
    year: "2019–2020",
    description:
      "Drove the introduction of Cinnabon's Frozen Proof Oven (FPO) technology to Japan, making it the first deployment of the system outside the United States. Worked directly with factories and equipment suppliers to adapt the product for the Japanese operational environment, overseeing the end-to-end rollout from specification through installation.",
    photos: 4,
  },
  {
    id: "dickeys-japan",
    title: "Dickey's Barbecue Pit — Japan Market Entry",
    category: "Business Development",
    company: "Franchise · Tokyo → Dubai",
    year: "2020",
    description:
      "Helped orchestrate the entry of Dickey's Barbecue Pit into the Japanese market, identifying and cultivating potential local franchise partners. Took prospective franchisees on a site visit to Dubai to observe the brand's international operations firsthand — a key part of building conviction and closing the deal. Navigating the cultural and operational gap between Texas BBQ and the Japanese consumer took equal parts persistence and creativity.",
    photos: 3,
  },
  {
    id: "godiva-consulting",
    title: "Marketing Strategy",
    category: "Consulting",
    company: "Godiva · Japan",
    year: "2020",
    description:
      "Provided marketing strategy consulting to Godiva Japan, working on brand positioning and customer engagement in a highly competitive premium confectionery market. Focused on how the brand could deepen its resonance with Japanese consumers while maintaining the equity of a globally recognized luxury name.",
    photos: 3,
  },
  {
    id: "kaefer-jr",
    title: "Marketing & Business Development",
    category: "Consulting",
    company: "Kaefer × JR Group · Japan",
    year: "2020",
    description:
      "Supported Kaefer's marketing and business development efforts in Japan, with a focus on the JR Group — one of the country's largest infrastructure and real estate operators. Work spanned opportunity mapping, stakeholder engagement, and helping a European firm navigate the relationship-driven dynamics of doing business in Japan.",
    photos: 3,
  },
];
