import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "CV — Jimmy Cho",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
