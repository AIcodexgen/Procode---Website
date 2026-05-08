import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ProCode — Build Faster. Scale Smarter.",
  description:
    "End-to-end product development and expert consulting for companies that need to move fast. AI systems, automation pipelines, and battle-tested engineers on demand.",
  openGraph: {
    title: "ProCode — Build Faster. Scale Smarter.",
    description:
      "End-to-end product development and expert consulting. LangChain, AI systems, and senior engineers when you need them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "var(--bg-base)", color: "var(--text-primary)" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
