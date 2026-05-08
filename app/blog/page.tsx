"use client";

import Link from "next/link";
import { ArrowRight, ClockIcon } from "@/components/Icons";

const ArticleIllustration = ({ type }: { type: "ai" | "automation" | "engineering" | "business" }) => {
  const configs = {
    ai: { c1: "#6366F1", c2: "#8B5CF6", label: "AI" },
    automation: { c1: "#10B981", c2: "#34D399", label: "⚡" },
    engineering: { c1: "#F59E0B", c2: "#FCD34D", label: "{}" },
    business: { c1: "#EC4899", c2: "#F472B6", label: "$" },
  };
  const c = configs[type];

  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 180 }}>
      <defs>
        <linearGradient id={`article-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.c1} stopOpacity="0.12" />
          <stop offset="100%" stopColor={c.c2} stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#article-${type})`} />

      {/* Grid pattern */}
      <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <line x1="0" y1="120" x2="320" y2="120" strokeWidth="1" stroke="rgba(255,255,255,0.03)" />
      <line x1="107" y1="0" x2="107" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <line x1="214" y1="0" x2="214" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

      {/* Central icon */}
      <circle cx="160" cy="90" r="48" fill={`${c.c1}10`} stroke={`${c.c1}20`} strokeWidth="1.5" />
      <text x="160" y="100" textAnchor="middle" fill={c.c1} fontSize="32" fontWeight="800">{c.label}</text>

      {/* Decorative dots */}
      {[
        [50, 40], [270, 40], [50, 140], [270, 140],
        [120, 30], [200, 30], [120, 150], [200, 150],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={c.c1} opacity={0.2 + (i % 3) * 0.1} />
      ))}
    </svg>
  );
};

const categories = ["All", "AI & LangChain", "Automation", "Engineering", "Business"];

const articles = [
  {
    slug: "langchain-agents-production",
    category: "AI & LangChain",
    illustration: "ai" as const,
    title: "What nobody tells you about running LangChain agents in production",
    summary:
      "Multi-agent pipelines are powerful. They're also fragile in ways that don't show up in demos. Here's what we've learned shipping 8 production agent systems.",
    author: "Riku Tanaka",
    authorInitials: "RT",
    authorColor: "#8B5CF6",
    date: "Apr 28, 2026",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "automation-roi-calculation",
    category: "Automation",
    illustration: "automation" as const,
    title: "How to actually calculate ROI on an automation project before you build it",
    summary:
      "Most teams greenlight automation projects on vibes. Here's a framework for putting real numbers on it — and the questions to ask before you commit budget.",
    author: "James Okafor",
    authorInitials: "JO",
    authorColor: "#6366F1",
    date: "Apr 14, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "rag-vs-finetuning",
    category: "AI & LangChain",
    illustration: "ai" as const,
    title: "RAG vs fine-tuning: a practical guide for product teams",
    summary:
      "Stop debating the theory. Here's how we decide between RAG and fine-tuning for specific use cases, with examples from real client projects.",
    author: "Riku Tanaka",
    authorInitials: "RT",
    authorColor: "#8B5CF6",
    date: "Mar 30, 2026",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "hiring-vs-consulting",
    category: "Business",
    illustration: "business" as const,
    title: "The real cost of hiring a senior engineer (the number most founders get wrong)",
    summary:
      "The salary is the obvious part. The recruitment cost, onboarding time, ramp-up period, benefits, and attrition risk add up to a figure most companies have never actually calculated.",
    author: "Sofia Reyes",
    authorInitials: "SR",
    authorColor: "#F59E0B",
    date: "Mar 15, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "api-design-principles",
    category: "Engineering",
    illustration: "engineering" as const,
    title: "5 API design decisions that will haunt you a year from now",
    summary:
      "Versioning. Error formats. Pagination. The decisions that feel trivial at the start become painful when you have 30 clients depending on your API.",
    author: "Aisha Mensah",
    authorInitials: "AM",
    authorColor: "#10B981",
    date: "Feb 28, 2026",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "mvp-scope-mistakes",
    category: "Business",
    illustration: "business" as const,
    title: "The most expensive word in product development: 'while we're at it'",
    summary:
      "Scope creep rarely announces itself. It arrives as a reasonable-sounding extension to what you're already building. Here's how to spot it early and push back professionally.",
    author: "James Okafor",
    authorInitials: "JO",
    authorColor: "#6366F1",
    date: "Feb 12, 2026",
    readTime: "6 min read",
    featured: false,
  },
];

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  "AI & LangChain": { bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.2)", text: "#818CF8" },
  "Automation": { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)", text: "#34D399" },
  "Engineering": { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)", text: "#FCD34D" },
  "Business": { bg: "rgba(236,72,153,0.1)", border: "rgba(236,72,153,0.2)", text: "#F472B6" },
};

export default function BlogPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "80px 0 64px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#818CF8",
              padding: "4px 12px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Blog & Insights
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              marginBottom: 16,
              maxWidth: 580,
            }}
          >
            Technical writing from people who build for a living
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.65, marginBottom: 32 }}>
            No marketing content. Just hard-won lessons from shipping AI systems, automation pipelines, and products across 40+ projects.
          </p>

          {/* Category filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map((cat, i) => (
              <button
                key={cat}
                style={{
                  padding: "7px 16px",
                  background: i === 0 ? "#6366F1" : "var(--bg-surface)",
                  color: i === 0 ? "white" : "var(--text-secondary)",
                  border: i === 0 ? "1px solid #6366F1" : "1px solid var(--border)",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      {featured && (
        <section style={{ padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24 }}>
              Featured Article
            </div>
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                transition: "border-color 0.2s",
              }}
              className="featured-grid"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div>
                <ArticleIllustration type={featured.illustration} />
              </div>
              <div style={{ padding: "36px 36px 36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                {(() => {
                  const cc = categoryColors[featured.category];
                  return (
                    <span
                      style={{
                        display: "inline-flex",
                        alignSelf: "flex-start",
                        padding: "3px 10px",
                        background: cc.bg,
                        border: `1px solid ${cc.border}`,
                        color: cc.text,
                        borderRadius: 100,
                        fontSize: 11,
                        fontWeight: 600,
                        marginBottom: 16,
                      }}
                    >
                      {featured.category}
                    </span>
                  );
                })()}
                <h2 style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: 14 }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 24 }}>
                  {featured.summary}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: featured.authorColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {featured.authorInitials}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{featured.author}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
                      {featured.date}
                      <span>·</span>
                      <ClockIcon size={12} />
                      {featured.readTime}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "11px 22px",
                    background: "#6366F1",
                    color: "white",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    alignSelf: "flex-start",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#818CF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#6366F1")}
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ARTICLE GRID ── */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
            {rest.map((article) => {
              const cc = categoryColors[article.category];
              return (
                <div
                  key={article.slug}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <ArticleIllustration type={article.illustration} />
                  <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignSelf: "flex-start",
                        padding: "3px 10px",
                        background: cc.bg,
                        border: `1px solid ${cc.border}`,
                        color: cc.text,
                        borderRadius: 100,
                        fontSize: 11,
                        fontWeight: 600,
                        marginBottom: 14,
                      }}
                    >
                      {article.category}
                    </span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.4, marginBottom: 10, flex: 0 }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
                      {article.summary}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            background: article.authorColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "white",
                            flexShrink: 0,
                          }}
                        >
                          {article.authorInitials}
                        </div>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600 }}>{article.author}</div>
                          <div style={{ fontSize: 11, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                            <ClockIcon size={10} />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${article.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#6366F1",
                          textDecoration: "none",
                          transition: "gap 0.15s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.gap = "8px")}
                        onMouseLeave={(e) => (e.currentTarget.style.gap = "4px")}
                      >
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-surface)",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
            Newsletter
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
            Technical insights in your inbox
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 28 }}>
            New articles every 2–3 weeks. No marketing. No fluff. Just technical writing worth reading.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "12px 16px",
                fontSize: 15,
                color: "var(--text-primary)",
                outline: "none",
              }}
            />
            <button
              style={{
                padding: "12px 22px",
                background: "#6366F1",
                color: "white",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#818CF8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#6366F1")}
            >
              Subscribe
            </button>
          </div>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 10 }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
