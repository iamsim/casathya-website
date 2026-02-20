import type { Metadata } from "next";
import { ContactView } from "@/components/views";

export const metadata: Metadata = {
  title: "Contact Us | Chartered Accountants",
  description:
    "Visit our office in Mumbai, or get in touch by email, phone, or contact form. We respond within 24 hours.",
};

export default function Page() {
  return <ContactView />;
}
