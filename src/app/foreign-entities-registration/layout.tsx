import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foreign Entities Registration",
  description:
    "Legal services for foreign company branch registration, NGO establishment, commercial agencies, and residency/work permits in Iraq.",
};

export default function ForeignEntitiesRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
