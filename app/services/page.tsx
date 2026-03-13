import type { Metadata } from "next";
import { ServicesView } from "@/components/views";

export const metadata: Metadata = {
  title: "Our Expertise | Chartered Accountants",
  description:
    "A synergy of global standards and local mastery: international taxation & global mobility, strategic domestic taxation & GST, audit, assurance and governance.",
};

export default function Page() {
  return <ServicesView />;
}
