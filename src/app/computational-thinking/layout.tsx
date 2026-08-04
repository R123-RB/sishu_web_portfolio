import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computational Thinking | Dr. Sishu Shankar Muni",
  description:
    "Introduction to Computational Thinking — lecture slides and core concepts by Dr. Sishu Shankar Muni at Digital University Kerala.",
};

export default function ComputationalThinkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
