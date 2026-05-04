import type { Metadata } from "next";
import { ServicesView } from "@/components/views";

export const metadata: Metadata = {
  title: "Our Expertise | Chartered Accountants",
  description:
    "A synergy of Big 4 rigour and boutique-style accountability across international taxation, domestic tax planning, GST, audit, governance, and corporate advisory.",
};

export default function Page() {
  return <ServicesView />;
}
