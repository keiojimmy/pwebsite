export type Project = {
  id: string;
  title: string;
  title_jp: string;
  category: string;
  category_jp: string;
  company: string;
  year: string;
  description: string;
  description_jp: string;
  photos: number;
};

export const projects: Project[] = [
  {
    id: "tea-brand",
    title: "Built an Artisanal Tea Brand",
    title_jp: "こだわりのティーブランドを立ち上げた",
    category: "Founder",
    category_jp: "創業",
    company: "Startup · Tokyo",
    year: "2021–2022",
    description:
      "Built an artisanal tea brand from the ground up in Tokyo — developing the product line, building relationships with tea farms and suppliers, and securing distribution into café chains across Japan, including Godiva Cafés. Handled everything from packaging and positioning to negotiating and structuring international franchise deals, pitching to potential partners across Asia.",
    description_jp:
      "東京でこだわりのティーブランドをゼロから作り上げた。商品ライン開発、茶農家・仕入れ先との関係づくり、ゴディバカフェを含む日本各地のカフェチェーンへの流通確保まで、すべて自分で担った。パッケージ・ポジショニングから国際フランチャイズ契約の設計と交渉、アジア各地のパートナーへのピッチまで一貫して携わった。",
    photos: 4,
  },
  {
    id: "own-consulting",
    title: "Started My Own Consulting Firm",
    title_jp: "コンサルティングファームを立ち上げた",
    category: "Founder",
    category_jp: "創業",
    company: "Independent · Tokyo",
    year: "2020–2021",
    description:
      "Founded and ran an independent consulting practice in Tokyo, sourcing and serving clients directly. Engagements included marketing strategy for Godiva Japan — working on brand positioning and customer engagement in a competitive premium market — and marketing and business development support for Kaefer in partnership with the JR Group, one of Japan's largest infrastructure and real estate operators.",
    description_jp:
      "東京で独立系コンサルティングを立ち上げ、自ら顧客を開拓して支援した。主な案件はゴディバジャパンのブランドポジショニングと顧客エンゲージメントの強化、そしてJRグループと組んだドイツのグルメ食品ブランドのマーケティング・事業開発支援など。",
    photos: 3,
  },
  {
    id: "cinnabon-digital",
    title: "Built Cinnabon's Japan E-Commerce Channel",
    title_jp: "シナボン・ジャパンのECチャンネルを立ち上げた",
    category: "Operations & Biz Dev",
    category_jp: "事業運営・開発",
    company: "Cinnabon · Japan",
    year: "2019–2020",
    description:
      "Led the launch of Cinnabon Japan's first e-commerce and social media channels, building both digital operations from zero. The e-commerce build required solving the logistics of delivering a perishable baked product — something the brand had never attempted in Japan. Alongside it, developed and ran SNS content and campaigns to drive awareness and online sales, establishing a new direct-to-consumer presence for the brand.",
    description_jp:
      "シナボン・ジャパン初のECとSNSチャンネルをゼロから立ち上げた。最大の課題は、鮮度が命の焼き菓子を届けるための物流を解決することで、日本では前例がなかった。SNSのコンテンツやキャンペーンも並行して企画・運用し、ブランドとして新たなD2C接点をつくった。",
    photos: 3,
  },
  {
    id: "field-operations",
    title: "Introduced the Frozen Proof Oven (FPO) to Japan",
    title_jp: "フローズン・プルーフ・オーブンを日本に初導入した",
    category: "Operations & Biz Dev",
    category_jp: "事業運営・開発",
    company: "Auntie Anne's · Seattle's Best Coffee · Japan",
    year: "2018–2020",
    description:
      "Drove the introduction of the Frozen Proof Oven (FPO) to Japan — the first deployment of the system outside the United States — working directly with factories and equipment suppliers through the full rollout. Alongside this, completed formal brand training for Cinnabon, Auntie Anne's, and Seattle's Best Coffee, and worked directly in stores across all three brands to understand operations from the ground up.",
    description_jp:
      "米国外初となるフローズン・プルーフ・オーブン（FPO）の日本導入を主導。工場・機器メーカーと直接連携しながら全工程を推進した。シナボン、アンティ・アンズ、シアトルズ・ベスト・コーヒーの正式ブランドトレーニングも修了し、3ブランドの店舗に実際に立ってオペレーションを現場から学んだ。",
    photos: 4,
  },
  {
    id: "cinnabon-rescue",
    title: "Saved Cinnabon from Closing in Japan",
    title_jp: "撤退の危機にあったシナボンを救った",
    category: "Operations & Biz Dev",
    category_jp: "事業運営・開発",
    company: "Cinnabon · Japan",
    year: "2019–2020",
    description:
      "When Cinnabon Japan faced the prospect of closing, stepped in to restructure the franchise relationship and stabilize the business. Worked across operations, franchisee negotiations, and brand alignment to keep the brand alive in the market — navigating the pressure from the U.S. parent brand while managing the realities on the ground in Japan.",
    description_jp:
      "撤退の危機に瀕したシナボン・ジャパンを立て直すため乗り込んだ。オペレーション改善、フランチャイジーとの交渉、米国本社との方針調整を同時に動かし、日本市場でのブランド存続を実現した。",
    photos: 2,
  },
  {
    id: "dickeys-jamba-japan",
    title: "Brought Dickey's BBQ and Jamba Juice to Japan",
    title_jp: "ディッキーズBBQとジャンバジュースを日本に持ち込んだ",
    category: "Operations & Biz Dev",
    category_jp: "事業運営・開発",
    company: "Dickey's Barbecue Pit · Jamba Juice · Japan",
    year: "2018–2019",
    description:
      "Led the effort to bring two American brands into Japan. For Dickey's Barbecue Pit, took prospective franchisees on a site visit to Dubai to observe international operations firsthand before closing the franchise agreement for the Japan market. For Jamba Juice, structured and closed the franchise agreement by navigating the gap between the American brand's expectations and the realities of the Japanese market.",
    description_jp:
      "アメリカの2ブランドの日本参入を主導した。ディッキーズ・バーベキューでは、フランチャイジー候補をドバイへ連れ出し、現地の運営を直に見せてから日本のフランチャイズ契約を締結。ジャンバジュースでは、米国側の期待と日本の現実のギャップを調整しながら契約をまとめた。",
    photos: 2,
  },
];
