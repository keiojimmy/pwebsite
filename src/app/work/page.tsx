import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Projects — Jimmy Cho",
};

export default function WorkPage() {
  return <WorkContent />;
}
