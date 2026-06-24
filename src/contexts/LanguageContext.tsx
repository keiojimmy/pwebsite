"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "jp";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };

const LanguageContext = createContext<LangCtx>({ lang: "en", setLang: () => {} });

function applyLangClass(l: Lang) {
  document.documentElement.classList.toggle("lang-jp", l === "jp");
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "jp") {
      setLangState("jp");
      applyLangClass("jp");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    applyLangClass(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
