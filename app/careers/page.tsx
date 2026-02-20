import type { Metadata } from "next";
import { CareersView } from "@/components/views";

export const metadata: Metadata = {
  title: "Careers | Chartered Accountants",
  description:
    "Explore open positions at our CA firm. We are looking for talented professionals in audit, tax, GST, and secretarial practice.",
};

export default function Page() {
  return <CareersView />;
}
