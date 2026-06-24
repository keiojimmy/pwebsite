export type Lang = "en" | "jp";

export const T = {
  nav: {
    about:    { en: "about",    jp: "about" },
    projects: { en: "projects", jp: "projects" },
    cv:       { en: "cv",       jp: "cv" },
    contact:  { en: "contact",  jp: "contact" },
  },

  home: {
    heroSubtitle: {
      en: "Shaped by strategy consulting, hands-on operations, and entrepreneurship across Japan, Korea, and the U.S., now investing in early-stage companies.",
      jp: "コンサルタント、オペレーター、起業家として日本・韓国・アメリカを渡り歩き、今はアーリーステージのスタートアップに投資している。",
    },
    bioLabel: { en: "bio", jp: "自己紹介" },
    bioQuote: {
      en: "The most interesting things happen at the edges, where people and places collide.",
      jp: "面白いことはいつも、人と場所がぶつかるところに転がっている。",
    },
    bioPara1: {
      en: "In the span of 20 months, I attended preschool in Korea, started kindergarten in Germany, and finished it in Japan. I spent first grade in Tennessee, second in Colorado, third and fourth in Korea, middle school in Texas, and high school back in Seoul. As life continued to ping-pong me between college in the U.S., the army in Korea, and a career in Japan, I came to believe that the most interesting things happen at the edges, where people and places collide.",
      jp: "生まれてから20ヶ月のあいだに、韓国・ドイツ・日本の3カ国を渡った。小学校はテネシーとコロラドと韓国、中学はテキサス、高校はソウル。大学でアメリカへ、兵役で韓国へ、就職で日本へ。気がつけば、人生がひたすら自分を次の国へと運び続けていた。そのうちに、いちばん面白いことは人と場所がぶつかるところにあると、信じるようになった。",
    },
    bioPara2: {
      en: "My career has been built on navigating those exact edges. Strategy consulting at L.E.K. in Tokyo. Managing Cinnabon and Jamba Juice across Japan and Korea. Acting as Chief of Staff at a fast-growing hospitality tech unicorn expanding aggressively across Asia. Getting my hands dirty through COVID when the business had to do a full pivot. Building a startup, an artisanal tea brand that distributed to café chains across Japan, including Godiva. Two years at Harvard Business School confirmed what my operating experience had already suggested.",
      jp: "キャリアもまた、その境界の上で積んできた。東京でL.E.K.のコンサルタントとして、日韓でシナボンとジャンバジュースを運営する事業者として、アジアで急拡大するホスピタリティ・テックのスタートアップでチーフ・オブ・スタッフとして。コロナ禍で事業の全面転換を迫られたときは泥臭く現場に入り、ゴディバカフェを含む日本各地のカフェチェーンに卸す自分のティーブランドも立ち上げた。ハーバード・ビジネス・スクールでの2年間は、現場で掴んでいたものに言葉を与えてくれた。",
    },
    bioPara3: {
      en: "I now back early-stage founders building at those exact edges, where new ideas collide and the path forward is least defined.",
      jp: "今は、その境界の上で挑む創業期の起業家たちに投資している。新しいアイデアがぶつかり合い、誰もまだ答えを知らない、そんな場所にいる人たちだ。",
    },
    pathLabel:     { en: "path",          jp: "歩み" },
    pursuitsLabel: { en: "other pursuits", jp: "好きなこと" },
  },

  work: {
    title:    { en: "projects", jp: "projects" },
    subtitle: {
      en: "selected projects across founding, operations, and business development.",
      jp: "創業、事業運営、事業開発にわたる、代表的なプロジェクト。",
    },
  },

  experience: {
    title:    { en: "cv", jp: "cv" },
    subtitle: {
      en: "roles, education, and the work behind the work.",
      jp: "職歴、学歴、そして仕事の舞台裏。",
    },
    corporate: { en: "corporate", jp: "企業" },
    founder:   { en: "founder",   jp: "創業" },
    education: { en: "education", jp: "学歴" },
  },

  contact: {
    title:    { en: "contact", jp: "contact" },
    subtitle: {
      en: "open to investing, advisory, and interesting conversations.",
      jp: "投資、アドバイザリー、面白い会話。いつでもどうぞ。",
    },
    copy: {
      en: "Always open to conversations about early-stage companies, interesting founders, and the occasional new opportunity. If you think there's something worth talking about, reach out.",
      jp: "アーリーステージの企業のこと、面白い起業家のこと、それに新しい機会の話なら、いつでも歓迎です。話す価値があると思ったら、気軽に連絡を。",
    },
    emailLabel:    { en: "email",    jp: "メール" },
    linkedinLabel: { en: "linkedin", jp: "linkedin" },
    basedInLabel:  { en: "based in", jp: "拠点" },
  },

  footer: {
    designed: { en: "Designed by Jimmy", jp: "デザイン：Jimmy" },
  },

  path: {
    items: [
      {
        index: "I",
        role: { en: "Strategy Consulting",    jp: "戦略コンサルティング" },
        org:  { en: "Consumer & Pharma",       jp: "消費財・製薬" },
        note: {
          en: "Growth strategy, M&A diligence, and financial modeling for companies across APAC and the U.S.",
          jp: "APACと米国の企業を対象に、成長戦略、M&Aデューデリジェンス、財務モデリングを手がけた。",
        },
      },
      {
        index: "II",
        role: { en: "Operator",             jp: "事業運営" },
        org:  { en: "Enterprise & Startups", jp: "大企業・スタートアップ" },
        note: {
          en: "Running global food brands across Asia. Chief of Staff at a fast-growing hospitality tech unicorn.",
          jp: "アジア全域でグローバルフードブランドを運営し、急成長するホスピタリティ・テックスタートアップでチーフ・オブ・スタッフを務めた。",
        },
      },
      {
        index: "III",
        role: { en: "Founder",             jp: "創業者" },
        org:  { en: "Food & Beverage",      jp: "食品・飲料" },
        note: {
          en: "Built a startup — an artisanal tea brand distributed to café chains including Godiva Cafés across Japan.",
          jp: "ゴディバカフェを含む日本各地のカフェチェーンに流通する、こだわりのティーブランドをゼロから立ち上げた。",
        },
      },
      {
        index: "IV",
        role: { en: "Harvard Business School", jp: "ハーバード・ビジネス・スクール" },
        org:  { en: "MBA",                     jp: "MBA" },
        note: {
          en: "Co-chair of the HBS Asia Business Conference — one of the largest student-run business conferences.",
          jp: "HBSアジア・ビジネス・カンファレンスの共同議長。学生が運営する世界最大級のビジネス会議のひとつ。",
        },
      },
      {
        index: "V",
        role: { en: "Investor",        jp: "投資家" },
        org:  { en: "Early Stage VC",   jp: "アーリーステージVC" },
        note: {
          en: "Backing founders at the early stages, in Japan and the U.S.",
          jp: "日本と米国で、創業期の起業家たちに投資している。",
        },
      },
    ],
  },

  pursuits: {
    items: [
      { emoji: "🎵", text: { en: "Music, always — playing and singing", jp: "音楽はずっと。弾いて、歌って" } },
      { emoji: "🏀", text: { en: "Basketball, on a bad ankle",          jp: "バスケ、ひどい足首を抱えながら" } },
      { emoji: "♨️", text: { en: "Onsens and good sashimi",             jp: "温泉と、旨い刺身" } },
      { emoji: "☕", text: { en: "Quiet cafés and something sweet",      jp: "静かなカフェと、甘いもの" } },
      { emoji: "📺", text: { en: "Late-night Korean dramas",            jp: "深夜の韓国ドラマ" } },
    ],
  },
};
