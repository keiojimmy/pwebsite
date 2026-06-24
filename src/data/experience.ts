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
      "ソフトバンクを主要LPとするAI・ディープテックVCファンドで投資をリード。General Catalyst、SUSA、Neoなどの共同投資家と連携しながら、日本・米国の創業者を支援している。",
  },
  {
    role: "Deputy Head of New Fintech Business",
    role_jp: "フィンテック新規事業 副部長",
    company: "Digital Garage",
    dates: "2024 – 2025",
    description:
      "Promoted from Executive Manager to Deputy Head within the year, driving new fintech business creation and partnerships at a TSE-listed internet company that operates one of Japan's leading PSPs and owns subsidiaries including Kakaku.com (Tabelog).",
    description_jp:
      "日本有数のPSPを運営し、カカク.com（食べログ）など複数の子会社を持つ東証上場企業にて、新規フィンテック事業の創出とパートナーシップを推進。1年以内にエグゼクティブマネージャーから副部長に昇進。",
  },
  {
    role: "Summer Associate",
    role_jp: "サマーアソシエイト",
    company: "McKinsey & Company",
    dates: "Summer 2023",
    description:
      "Strategy consulting internship between HBS years, with the Tokyo office. Received a full-time offer.",
    description_jp:
      "HBS在学中のサマーインターンとして東京オフィスに参加。フルタイムオファーを獲得。",
  },
  {
    role: "Summer Venture Capitalist",
    role_jp: "サマーVCインターン",
    company: "DEEPCORE",
    dates: "Summer 2022",
    description:
      "VC internship prior to HBS, evaluating early-stage AI and deep tech opportunities in Japan. Received a full-time offer.",
    description_jp:
      "HBS入学前のインターンとして、日本のAI・ディープテック領域のアーリーステージ案件を評価。フルタイムオファーを獲得。",
  },
  {
    role: "Associate Director of Strategy",
    role_jp: "戦略担当 アソシエイト・ディレクター",
    company: "JR Kyushu Fast Foods",
    dates: "2020 – 2022",
    description:
      "Chief of Staff at a fast-growing hospitality and food operations company. Led cross-functional strategy and operational restructuring through aggressive expansion and a full COVID-era pivot.",
    description_jp:
      "急成長する飲食・ホスピタリティ企業にてチーフ・オブ・スタッフを担当。積極的な事業拡大とコロナ禍でのフルピボットを通じ、横断的な戦略立案と組織改革を主導した。",
  },
  {
    role: "Japan Country Manager",
    role_jp: "ジャパン・カントリーマネージャー",
    company: "FOCUS BRANDS",
    dates: "2018 – 2020",
    description:
      "Ran Japan operations for Cinnabon, Auntie Anne's, and Seattle's Best Coffee. Launched Cinnabon Japan's e-commerce, introduced the Frozen Proof Oven to Japan for the first time outside the U.S., and rescued the Cinnabon franchise from closure.",
    description_jp:
      "シナボン、アンティ・アンズ、シアトルズ・ベスト・コーヒーの日本オペレーションを統括。シナボン・ジャパンのEC立ち上げ、FPOの日本初導入、そして撤退危機にあったシナボンフランチャイズの立て直しを実現した。",
  },
  {
    role: "Associate",
    role_jp: "アソシエイト",
    company: "L.E.K. Consulting",
    dates: "2016 – 2018",
    description:
      "Strategy consulting in the Tokyo office, working on growth strategy, M&A due diligence, and financial modeling for consumer and healthcare clients across APAC and the U.S.",
    description_jp:
      "東京オフィスで戦略コンサルティングに従事。APAC・米国の消費財・ヘルスケアクライアントに対し、成長戦略、M&Aデューデリジェンス、財務モデリングを提供した。",
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
      "東京でゼロから紅茶ブランドを立ち上げ、茶農家・サプライヤーと連携しながら商品ラインを開発。ゴディバカフェをはじめとする日本全国のカフェチェーンへの流通を確立した。",
  },
  {
    role: "Founder",
    role_jp: "創業者",
    company: "Boutique Consulting Firm",
    dates: "2018 – 2023",
    description:
      "Founded a boutique consulting firm in Tokyo serving clients directly. Engagements spanned marketing strategy for Godiva Japan, business development for a German gourmet food and catering brand with JR Group, and healthcare and life sciences work for clients including IQVIA.",
    description_jp:
      "東京で独立系コンサルティングファームを設立し、自ら顧客を開拓して支援。ゴディバジャパンのマーケティング戦略、JRグループとのドイツ系グルメ食品・ケータリングブランドの事業開発、IQVIAをはじめとするヘルスケア・ライフサイエンス企業向けプロジェクトなど、多岐にわたる案件を手がけた。",
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
    school_jp: "ワシントン大学（セントルイス）",
    year: "2015",
  },
];
