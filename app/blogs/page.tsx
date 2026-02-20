import type { Metadata } from "next";
import { BlogsView } from "@/components/views";

export const metadata: Metadata = {
  title: "Blogs | Chartered Accountants",
  description:
    "Insights and updates on tax, compliance, GST, and business advisory from our team.",
};

export default function Page() {
  return <BlogsView />;
}
