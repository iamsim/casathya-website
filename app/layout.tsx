import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chartered Accountants | Audit, Tax & Advisory",
  description:
    "Professional chartered accountancy and advisory services—audit, tax planning, compliance, and business consulting. Trusted expertise for businesses and individuals.",
  openGraph: {
    title: "Chartered Accountants | Audit, Tax & Advisory",
    description:
      "Professional chartered accountancy and advisory services. Trusted expertise for businesses and individuals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
