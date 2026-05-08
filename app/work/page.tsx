"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

const CaseIllustration = ({ type }: { type: "fintech" | "saas" | "health" | "ecom" }) => {
  const configs = {
    fintech: {
      color1: "#6366F1",
      color2: "#8B5CF6",
      bars: [60, 80, 65, 90, 75, 95],
    },
    saas: {
      color1: "#10B981",
      color2: "#34D399",
      bars: [40, 55, 70, 65, 80, 88],
    },
    health: {
      color1: "#F59E0B",
      color2: "#FCD34D",
      bars: [70, 65, 75, 80, 70, 85],
    },
    ecom: {
      color1: "#EC4899",
      color2: "#F472B6",
      bars: [50, 60, 55, 75, 80, 92],
    },
  };
  const c = configs[type];

  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 160 }}>
      <defs>
        <linearGradient id={`bg-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.color1} stopOpacity="0.06" />
          <stop offset="100%" stopColor={c.color2} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="280" height="160" rx="10" fill={`url(#bg-${type})`} />

      {/* Grid lines */}
      {[40, 70, 100, 130].map((y) => (
        <line key={y} x1="20" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}

      {/* Bars */}
      {c.bars.map((h, i) => (
        <g key={i}>
          <rect
            x={28 + i * 38}
            y={140 - h}
            width="22"
            height={h}
            rx="4"
            fill={c.color1}
            opacity={0.3 + i * 0.12}
          />
        </g>
      ))}

      {/* Trend line */}
      <polyline
        points={c.bars.map((h, i) => `${39 + i * 38},${140 - h}`).join(" ")}
        stroke={c.color1}
        strokeWidth="2"
        fill="none"
      />
      {c.bars.map((h, i) => (
        <circle key={i} cx={39 + i * 38} cy={140 - h} r="3" fill={c.color1} />
      ))}
    </svg>
  );
};

const caseStudies = [
  {
    id: "meridian-finance",
    title: "Automated compliance reporting with LangChain agents",
    company: "Meridian Finance",
    industry: "Fintech",
    service: "ProCode Development",
    serviceSlug: "development",
    illustration: "fintech" as const,
    result: "97% time saved on regulatory reporting",
    metrics: [
      { value: "97%", label: "Time saved" },
      { value: "6 wks", label: "Build time" },
      { value: "Zero", label: "Compliance gaps" },
    ],
    tags: ["LangChain", "Python", "FastAPI", "PostgreSQL"],
    summary:
      "Manual compliance processing across 6 data sources — 14 hours per week — replaced by a multi-agent pipeline that runs in under 20 minutes.",
  },
  {
    id: "axiom-health",
    title: "Clinical documentation assistant for a healthtech platform",
    company: "Axiom Health",
    industry: "Healthcare",
    service: "ProCode Development",
    serviceSlug: "development",
    illustration: "health" as const,
    result: "3x faster clinical note generation",
    metrics: [
      { value: "3×", label: "Faster documentation" },
      { value: "8 wks", label: "Build time" },
      { value: "12k+", label: "Notes generated/month" },
    ],
    tags: ["OpenAI", "Next.js", "TypeScript", "Supabase"],
    summary:
      "Physicians were spending 30% of their day on documentation. We built an AI assistant that drafts structured notes from voice input, cutting that to under 10%.",
  },
  {
    id: "fluxion-labs",
    title: "ML pipeline engineer embedded for Series A product launch",
    company: "Fluxion Labs",
    industry: "SaaS",
    service: "Expert Consulting",
    serviceSlug: "consulting",
    illustration: "saas" as const,
    result: "Launched on schedule with zero critical bugs",
    metrics: [
      { value: "On time", label: "Delivery" },
      { value: "3 days", label: "Time to place engineer" },
      { value: "4 months", label: "Engagement length" },
    ],
    tags: ["Python", "PyTorch", "AWS SageMaker", "Docker"],
    summary:
      "A niche ML expertise gap threatened a $3M product launch. We placed a senior ML engineer within 72 hours who embedded with the team and owned the recommendation system end-to-end.",
  },
  {
    id: "cartflo",
    title: "Real-time inventory sync engine across 8 sales channels",
    company: "CartFlo",
    industry: "E-Commerce",
    service: "ProCode Development",
    serviceSlug: "development",
    illustration: "ecom" as const,
    result: "400ms sync latency across all channels",
    metrics: [
      { value: "400ms", label: "Avg sync latency" },
      { value: "99.97%", label: "Uptime" },
      { value: "8", label: "Channels integrated" },
    ],
    tags: ["Node.js", "Redis", "PostgreSQL", "Webhooks"],
    summary:
      "Overselling cost CartFlo $80k in refunds in one quarter. We rebuilt their inventory system with event-driven architecture and real-time sync across Shopify, Amazon, eBay, and 5 other channels.",
  },
  {
    id: "veloz-logistics",
    title: "Route optimisation dashboard for a last-mile delivery operator",
    company: "Veloz Logistics",
    industry: "Logistics",
    service: "ProCode Development",
    serviceSlug: "development",
    illustration: "fintech" as const,
    result: "22% reduction in fuel costs within 90 days",
    metrics: [
      { value: "22%", label: "Fuel cost reduction" },
      { value: "340+", label: "Daily routes optimised" },
      { value: "10 wks", label: "Build time" },
    ],
    tags: ["Python", "FastAPI", "Next.js", "Maps API"],
    summary:
      "Dispatchers were manually planning 340+ routes daily using spreadsheets. We built an optimisation engine with a real-time dashboard that cut fuel costs by 22% in the first quarter.",
  },
  {
    id: "stackcraft",
    title: "Full-stack lead on internal DevOps tooling platform",
    company: "StackCraft",
    industry: "Developer Tools",
    service: "Expert Consulting",
    serviceSlug: "consulting",
    illustration: "saas" as const,
    result: "Internal tooling shipped 6 weeks ahead of plan",
    metrics: [
      { value: "6 wks", label: "Ahead of schedule" },
      { value: "2 days", label: "Onboarding time" },
      { value: "6 months", label: "Engagement" },
    ],
    tags: ["TypeScript", "Next.js", "Kubernetes", "Go"],
    summary:
      "A specialist full-stack engineer needed to own a high-priority internal platform while the core team focused on the product. We embedded someone who hit the ground running and delivered ahead of plan.",
  },
];

const serviceColors: Record<string, { bg: string; border: string; text: string }> = {
  "ProCode Development": { bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.2)", text: "#818CF8" },
  "Expert Consulting": { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)", text: "#34D399" },
};

export default function WorkPage() {
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
            backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)",
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
            Case Studies
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              marginBottom: 16,
              maxWidth: 640,
            }}
          >
            Work that speaks for itself
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.65 }}>
            Real problems, real solutions, measurable outcomes. Every project has a clear before and after.
          </p>
        </div>
      </section>

      {/* ── CASE STUDY GRID ── */}
      <section style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {caseStudies.map((cs) => {
              const sc = serviceColors[cs.service];
              return (
                <div
                  key={cs.id}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Illustration */}
                  <div style={{ padding: "20px 20px 0" }}>
                    <CaseIllustration type={cs.illustration} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* Tags row */}
                    <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "3px 10px",
                          background: sc.bg,
                          border: `1px solid ${sc.border}`,
                          color: sc.text,
                          borderRadius: 100,
                          fontSize: 11,
                          fontWeight: 600,
                        }}
                      >
                        {cs.service}
                      </span>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "3px 10px",
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border)",
                          color: "var(--text-muted)",
                          borderRadius: 100,
                          fontSize: 11,
                          fontWeight: 500,
                        }}
                      >
                        {cs.industry}
                      </span>
                    </div>

                    <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 8 }}>
                      {cs.company}
                    </div>

                    <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.4, marginBottom: 12, flex: 0 }}>
                      {cs.title}
                    </h3>

                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
                      {cs.summary}
                    </p>

                    {/* Metrics */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 20 }}>
                      {cs.metrics.map((m) => (
                        <div
                          key={m.label}
                          style={{
                            padding: "10px 8px",
                            background: "var(--bg-elevated)",
                            borderRadius: 8,
                            border: "1px solid var(--border)",
                            textAlign: "center",
                          }}
                        >
                          <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", color: "#6366F1", marginBottom: 2 }}>{m.value}</div>
                          <div style={{ fontSize: 10, color: "var(--text-muted)", lineHeight: 1.3 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "3px 9px",
                            background: "var(--bg-elevated)",
                            border: "1px solid var(--border)",
                            borderRadius: 5,
                            fontSize: 11,
                            color: "var(--text-muted)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-surface)",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Want results like these?
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.65 }}>
            Every case study started with a single conversation. Let&apos;s have one.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              background: "#6366F1",
              color: "white",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#818CF8";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(99,102,241,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#6366F1";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
