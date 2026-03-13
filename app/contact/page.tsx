import type { Metadata } from "next";
import { ContactView } from "@/components/views";

export const metadata: Metadata = {
  title: "Let's Connect | Chartered Accountants",
  description:
    "Whether you are an entrepreneur seeking to optimise your tax structure or a corporate entity looking for seamless statutory compliance, we are here to help. Office in Bangalore.",
};

export default function Page() {
  return <ContactView />;
}
