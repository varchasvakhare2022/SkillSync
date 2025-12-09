import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - SkillSync",
  description:
    "Comprehensive guide to using SkillSync's programming learning platform with YouTube integration and AI assistance.",
  icons: {
    icon: "/assets/SkillSynclogo.png",
    shortcut: "/assets/SkillSynclogo.png",
    apple: "/assets/SkillSynclogo.png",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
