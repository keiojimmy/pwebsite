export type Experience = {
  role: string;
  role_jp?: string;
  company: string;
  dates: string;
  description: string;
  description_jp?: string;
  location?: string;
};

export type Education = {
  degree: string;
  degree_jp?: string;
  school: string;
  school_jp?: string;
  year: string;
  note?: string;
};

export const experiences: Experience[] = [
  {
    role: "Senior Investment Director",
    role_jp: "上席投資責任者",
    company: "DEEPCORE",
    dates: "2025 – Present",
    description:
      "Leading investments at an AI and deep tech VC fund anchored by SoftBank, backing founders in Japan and the U.S. alongside co-investors including General Catalyst, SUSA, and Neo.",
    description_jp:
      "ソフトバンクを主要LPとするAI・ディープテック特化のVC。General Catalyst、SUSA、Neoと共同で、日米の創業者への投資をリードしている。",
  },
  {
    role: "Deputy Head of New Fintech Business",
    role_jp: "新規フィンテック事業 副責任者",
    company: "Digital Garage",
    dates: "2024 – 2025",
    description:
      "Promoted from Executive Manager to Deputy Head within the year, driving new fintech business creation and partnerships at a TSE-listed internet company that operates one of Japan's leading PSPs and owns subsidiaries including Kakaku.com (Tabelog).",
    description_jp:
      "カカク.com（食べログ）などを傘下に持ち、日本有数のPSPを運営する東証上場企業で、新規フィンテック事業の創出とパートナーシップ開拓を担当。入社から1年以内にエグゼクティブ・マネージャーから副責任者へ昇進した。",
  },
  {
    role: "Summer Associate",
    role_jp: "サマーアソシエイト",
    company: "McKinsey & Company",
    dates: "Summer 2023",
    description:
      "Strategy consulting internship between HBS years, with the Tokyo office. Received a full-time offer.",
    description_jp:
      "HBS在学中のサマーインターン。東京オフィスで戦略コンサルティングに従事し、フルタイムのオファーを受けた。",
  },
  {
    role: "Summer Venture Capitalist",
    role_jp: "サマーVCインターン",
    company: "DEEPCORE",
    dates: "Summer 2022",
    description:
      "VC internship prior to HBS, evaluating early-stage AI and deep tech opportunities in Japan. Received a full-time offer.",
    description_jp:
      "HBS入学前のインターン。日本のアーリーステージのAI・ディープテック領域で投資機会を評価し、フルタイムのオファーを受けた。",
  },
  {
    role: "Associate Director of Strategy",
    role_jp: "戦略担当 アソシエイト・ディレクター",
    company: "JR Kyushu Fast Foods",
    dates: "2020 – 2022",
    description:
      "Chief of Staff at a fast-growing hospitality and food operations company. Led cross-functional strategy and operational restructuring through aggressive expansion and a full COVID-era pivot.",
    description_jp:
      "急拡大する外食・ホスピタリティ企業でチーフ・オブ・スタッフを担当。積極的な事業拡大と、コロナ禍での全面的な方針転換を通じ、部門横断の戦略立案と組織再編を主導した。",
  },
  {
    role: "Japan Country Manager",
    role_jp: "ジャパン・カントリーマネージャー",
    company: "FOCUS BRANDS",
    dates: "2018 – 2020",
    description:
      "Ran Japan operations for Cinnabon, Auntie Anne's, and Seattle's Best Coffee. Launched Cinnabon Japan's e-commerce, introduced the Frozen Proof Oven to Japan for the first time outside the U.S., and rescued the Cinnabon franchise from closure.",
    description_jp:
      "シナボン、アンティ・アンズ、シアトルズ・ベスト・コーヒーの日本事業を統括。シナボンのEC立ち上げ、米国外初のフローズン・プルーフ・オーブン日本導入、撤退危機にあったフランチャイズの立て直しを実現した。",
  },
  {
    role: "Associate",
    role_jp: "アソシエイト",
    company: "L.E.K. Consulting",
    dates: "2016 – 2018",
    description:
      "Strategy consulting in the Tokyo office, working on growth strategy, M&A due diligence, and financial modeling for consumer and healthcare clients across APAC and the U.S.",
    description_jp:
      "東京オフィスで戦略コンサルティングに従事。APAC・米国の消費財・ヘルスケアクライアントに対し、成長戦略、M&Aデューデリジェンス、財務モデリングを手がけた。",
  },
];

export const ventures: Experience[] = [
  {
    role: "Founder",
    role_jp: "創業者",
    company: "Artisanal Tea Brand",
    dates: "2018 – 2022",
    description:
      "Built an artisanal tea brand from the ground up in Tokyo, developing the product line with farms and suppliers and securing distribution into café chains across Japan including Godiva Cafés.",
    description_jp:
      "東京でこだわりのティーブランドをゼロから立ち上げ、茶農家・サプライヤーと組んで商品ラインを開発。ゴディバカフェを含む日本各地のカフェチェーンへの流通を実現した。",
  },
  {
    role: "Founder",
    role_jp: "創業者",
    company: "Boutique Consulting Firm",
    dates: "2018 – 2023",
    description:
      "Founded a boutique consulting firm in Tokyo serving clients directly. Engagements spanned marketing strategy for Godiva Japan, business development for a German gourmet food and catering brand with JR Group, and healthcare and life sciences work for clients including IQVIA.",
    description_jp:
      "東京で独立系コンサルティングファームを立ち上げ、自ら顧客を獲得して支援。ゴディバジャパンのマーケティング戦略、JRグループと組んだドイツのグルメ食品ブランドの事業開発、IQVIAをはじめとするヘルスケア・ライフサイエンス領域の案件など。",
  },
];

export const education: Education[] = [
  {
    degree: "MBA",
    degree_jp: "MBA",
    school: "Harvard Business School",
    school_jp: "ハーバード・ビジネス・スクール",
    year: "2022 – 2024",
  },
  {
    degree: "B.S. Chemical Engineering",
    degree_jp: "化学工学 学士",
    school: "Washington University in St. Louis",
    school_jp: "セントルイス・ワシントン大学",
    year: "2015",
  },
];
