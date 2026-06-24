export type Lang = "en" | "jp";

export const T = {
  nav: {
    about:    { en: "about",    jp: "について" },
    projects: { en: "projects", jp: "仕事" },
    cv:       { en: "cv",       jp: "経歴" },
    contact:  { en: "contact",  jp: "連絡" },
  },

  home: {
    heroSubtitle: {
      en: "Shaped by strategy consulting, hands-on operations, and entrepreneurship across Japan, Korea, and the U.S., now investing in early-stage companies.",
      jp: "戦略コンサルティング、現場運営、そして起業を日本・韓国・米国で経験し、現在はアーリーステージ企業への投資に取り組んでいる。",
    },
    bioLabel:  { en: "bio",            jp: "自己紹介" },
    bioQuote: {
      en: "The most interesting things happen at the edges, where people and places collide.",
      jp: "面白いことはいつも、境界線の上で起きる。",
    },
    bioPara1: {
      en: "In the span of 20 months, I attended preschool in Korea, started kindergarten in Germany, and finished it in Japan. I spent first grade in Tennessee, second in Colorado, third and fourth in Korea, middle school in Texas, and high school back in Seoul. As life continued to ping-pong me between college in the U.S., the army in Korea, and a career in Japan, I came to believe that the most interesting things happen at the edges, where people and places collide.",
      jp: "生まれてから20ヶ月のあいだに、韓国で幼稚園に入り、ドイツで小学校が始まり、日本でそれを終えた。テネシー、コロラド、韓国、テキサス、ソウルと転校を繰り返すうちに、境界線の上で生きることが当たり前になっていった。大学は米国、軍は韓国、キャリアは日本。点と点がつながる前に、次の国へと移っていく人生だった。",
    },
    bioPara2: {
      en: "My career has been built on navigating those exact edges. Strategy consulting at L.E.K. in Tokyo. Managing Cinnabon and Jamba Juice across Japan and Korea. Acting as Chief of Staff at a fast-growing hospitality tech unicorn expanding aggressively across Asia. Getting my hands dirty through COVID when the business had to do a full pivot. Building a startup, an artisanal tea brand that distributed to café chains across Japan, including Godiva. Two years at Harvard Business School confirmed what my operating experience had already suggested.",
      jp: "キャリアも、その境界線の上で積み上げてきた。東京でL.E.K.のコンサルタント、日韓でシナボンやジャンバジュースの運営責任者、急成長するホスピタリティ系スタートアップのチーフ・オブ・スタッフ。コロナ禍のフルピボット、日本中のカフェチェーンに流通した自分のお茶ブランドの立ち上げ。ハーバード・ビジネス・スクールでのMBAは、現場で積んできた直感を言語化してくれた。",
    },
    bioPara3: {
      en: "I now back early-stage founders building at those exact edges, where new ideas collide and the path forward is least defined.",
      jp: "今は、そんな境界線の上に挑んでいる起業家たちに投資している。まだ誰も歩いていない道を、一緒に切り拓く仕事だ。",
    },
    pathLabel:     { en: "path",          jp: "歩み" },
    pursuitsLabel: { en: "other pursuits", jp: "その他" },
  },

  work: {
    title:    { en: "projects", jp: "プロジェクト" },
    subtitle: {
      en: "selected projects across founding, operations, and business development.",
      jp: "創業・運営・事業開発にわたる、主要プロジェクト。",
    },
  },

  experience: {
    title:    { en: "cv",  jp: "経歴" },
    subtitle: {
      en: "roles, education, and the work behind the work.",
      jp: "職歴、学歴、そして現場の実態。",
    },
    corporate: { en: "corporate", jp: "企業" },
    founder:   { en: "founder",   jp: "起業家" },
    education: { en: "education", jp: "学歴" },
  },

  contact: {
    title:    { en: "contact", jp: "連絡" },
    subtitle: {
      en: "open to investing, advisory, and interesting conversations.",
      jp: "投資、アドバイザリー、面白い話、いつでも。",
    },
    copy: {
      en: "Always open to conversations about early-stage companies, interesting founders, and the occasional new opportunity. If you think there's something worth talking about, reach out.",
      jp: "アーリーステージの会社、面白い起業家、そして新しいチャレンジについての話はいつでも歓迎。話す価値があると思ったら、気軽に連絡してください。",
    },
    emailLabel:    { en: "email",    jp: "メール" },
    linkedinLabel: { en: "linkedin", jp: "linkedin" },
    basedInLabel:  { en: "based in", jp: "拠点" },
  },

  footer: {
    designed: { en: "Designed by Jimmy", jp: "Jimmyによるデザイン" },
  },

  path: {
    items: [
      {
        index: "I",
        role: { en: "Strategy Consulting",     jp: "コンサルティング" },
        org:  { en: "Consumer & Pharma",        jp: "消費財・製薬" },
        note: {
          en: "Growth strategy, M&A diligence, and financial modeling for companies across APAC and the U.S.",
          jp: "APACおよび米国の企業を対象に、成長戦略・M&Aデューデリジェンス・財務モデリングを提供。",
        },
      },
      {
        index: "II",
        role: { en: "Operator",              jp: "オペレーター" },
        org:  { en: "Enterprise & Startups",  jp: "大企業・スタートアップ" },
        note: {
          en: "Running global food brands across Asia. Chief of Staff at a fast-growing hospitality tech unicorn.",
          jp: "アジア全域でグローバルフードブランドを運営。急成長するホスピタリティ系スタートアップのチーフ・オブ・スタッフを歴任。",
        },
      },
      {
        index: "III",
        role: { en: "Founder",              jp: "起業家" },
        org:  { en: "Food & Beverage",       jp: "食品・飲料" },
        note: {
          en: "Built a startup — an artisanal tea brand distributed to café chains including Godiva Cafés across Japan.",
          jp: "日本全国のカフェチェーン（ゴディバカフェを含む）に流通する紅茶ブランドをゼロから立ち上げた。",
        },
      },
      {
        index: "IV",
        role: { en: "Harvard Business School", jp: "ハーバード・ビジネス・スクール" },
        org:  { en: "MBA",                     jp: "MBA" },
        note: {
          en: "Co-chair of the HBS Asia Business Conference — one of the largest student-run business conferences.",
          jp: "HBSアジアビジネスカンファレンスの共同議長。世界最大級の学生主体ビジネス会議のひとつ。",
        },
      },
      {
        index: "V",
        role: { en: "Investor",          jp: "投資家" },
        org:  { en: "Early Stage VC",     jp: "アーリーステージVC" },
        note: {
          en: "Backing founders at the early stages, in Japan and the U.S.",
          jp: "日本・米国で、創業期の起業家たちをバックアップ。",
        },
      },
    ],
  },

  pursuits: {
    items: [
      { emoji: "🎵", text: { en: "Music, always — playing and singing", jp: "音楽、ずっと続けてる（弾いて歌って）" } },
      { emoji: "🏀", text: { en: "Basketball, on a bad ankle",          jp: "バスケ、壊れた足首で" } },
      { emoji: "♨️", text: { en: "Onsens and good sashimi",             jp: "温泉と、旨い刺身" } },
      { emoji: "☕", text: { en: "Quiet cafés and something sweet",      jp: "静かなカフェと、甘いもの" } },
      { emoji: "📺", text: { en: "Late-night Korean dramas",            jp: "深夜の韓国ドラマ" } },
    ],
  },
};
