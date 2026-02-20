import type { Metadata } from "next";
import { ServicesView } from "@/components/views";

export const metadata: Metadata = {
  title: "Our Services | Chartered Accountants",
  description:
    "Indian chartered accountancy services: statutory audit, tax, GST, ROC compliance, company incorporation, accounting, Ind AS, IBC, due diligence, and transfer pricing.",
};

export default function Page() {
  return <ServicesView />;
}
