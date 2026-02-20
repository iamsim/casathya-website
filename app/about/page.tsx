import type { Metadata } from "next";
import { AboutView } from "@/components/views";

export const metadata: Metadata = {
  title: "About Us | Chartered Accountants",
  description:
    "Meet our partners—experienced Chartered Accountants offering audit, tax, GST, company law, and advisory services across India.",
};

export default function Page() {
  return <AboutView />;
}
