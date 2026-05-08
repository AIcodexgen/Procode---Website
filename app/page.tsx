"use client";

import Link from "next/link";
import { ArrowRight, CheckIcon, StarIcon, QuoteIcon, BuildIcon, ConsultIcon, AIIcon, AutomationIcon, APIIcon } from "@/components/Icons";

// --- SVG Illustrations ---

const HeroIllustration = () => (
  <svg viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", maxHeight: 400 }}>
    {/* Background grid */}
    <defs>
      <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
      </pattern>
      <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
        <stop offset="100%" stopColor="rgba(99,102,241,0)" />
      </radialGradient>
    </defs>
    <rect width="520" height="400" fill="url(#hero-grid)" />
    <ellipse cx="260" cy="200" rx="180" ry="140" fill="url(#hero-glow)" />

    {/* Central code terminal */}
    <rect x="110" y="80" width="300" height="200" rx="12" fill="rgba(14,18,32,0.9)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
    {/* Terminal dots */}
    <circle cx="132" cy="101" r="5" fill="#FF5F57" />
    <circle cx="150" cy="101" r="5" fill="#FEBC2E" />
    <circle cx="168" cy="101" r="5" fill="#28C840" />
    {/* Terminal line */}
    <line x1="110" y1="115" x2="410" y2="115" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
    {/* Code lines */}
    <rect x="130" y="130" width="80" height="8" rx="4" fill="rgba(99,102,241,0.6)" />
    <rect x="220" y="130" width="40" height="8" rx="4" fill="rgba(139,92,246,0.4)" />
    <rect x="270" y="130" width="60" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
    <rect x="145" y="150" width="120" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
    <rect x="275" y="150" width="50" height="8" rx="4" fill="rgba(16,185,129,0.5)" />
    <rect x="130" y="170" width="55" height="8" rx="4" fill="rgba(99,102,241,0.35)" />
    <rect x="195" y="170" width="90" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
    <rect x="145" y="190" width="160" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
    <rect x="315" y="190" width="30" height="8" rx="4" fill="rgba(16,185,129,0.4)" />
    <rect x="130" y="210" width="70" height="8" rx="4" fill="rgba(139,92,246,0.5)" />
    <rect x="210" y="210" width="110" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
    {/* Cursor blink */}
    <rect x="330" y="210" width="8" height="8" rx="1" fill="rgba(99,102,241,0.8)" />
    <rect x="130" y="235" width="180" height="8" rx="4" fill="rgba(255,255,255,0.04)" />
    <rect x="320" y="235" width="60" height="8" rx="4" fill="rgba(16,185,129,0.25)" />

    {/* Floating nodes */}
    <circle cx="80" cy="130" r="22" fill="rgba(14,18,32,0.95)" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
    <path d="M72 130L78 136L90 124" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

    <circle cx="440" cy="160" r="22" fill="rgba(14,18,32,0.95)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" />
    <path d="M432 160L438 154L448 166" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

    <circle cx="78" cy="290" r="18" fill="rgba(14,18,32,0.95)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
    <path d="M71 290L74.5 293.5L85 283" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

    <circle cx="444" cy="310" r="18" fill="rgba(14,18,32,0.95)" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
    <text x="444" y="316" textAnchor="middle" fill="#6366F1" fontSize="14" fontWeight="700">AI</text>

    {/* Connecting lines */}
    <line x1="102" y1="140" x2="110" y2="150" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="418" y1="160" x2="410" y2="165" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="96" y1="283" x2="110" y2="260" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="426" y1="303" x2="410" y2="270" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" />

    {/* Bottom labels */}
    <rect x="150" y="320" width="90" height="28" rx="6" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
    <text x="195" y="339" textAnchor="middle" fill="#818CF8" fontSize="11" fontWeight="600">LangChain</text>
    <rect x="258" y="320" width="80" height="28" rx="6" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
    <text x="298" y="339" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="600">Python</text>
    <rect x="352" y="320" width="70" height="28" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
    <text x="387" y="339" textAnchor="middle" fill="#A78BFA" fontSize="11" fontWeight="600">Next.js</text>
  </svg>
);

const ServiceSplitIllustration = ({ type }: { type: "build" | "consult" }) =>
  type === "build" ? (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 160, height: 128 }}>
      <rect x="20" y="20" width="60" height="50" rx="8" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
      <rect x="30" y="35" width="40" height="6" rx="3" fill="rgba(99,102,241,0.5)" />
      <rect x="30" y="47" width="28" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="30" y="59" width="35" height="6" rx="3" fill="rgba(255,255,255,0.08)" />

      <rect x="100" y="20" width="60" height="50" rx="8" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" />
      <rect x="110" y="35" width="40" height="6" rx="3" fill="rgba(16,185,129,0.5)" />
      <rect x="110" y="47" width="28" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="110" y="59" width="35" height="6" rx="3" fill="rgba(255,255,255,0.08)" />

      <path d="M80 45L100 45" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />

      <rect x="20" y="90" width="140" height="50" rx="8" fill="rgba(14,18,32,0.95)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
      <rect x="30" y="100" width="55" height="6" rx="3" fill="rgba(99,102,241,0.4)" />
      <rect x="30" y="112" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
      <rect x="30" y="122" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
      <circle cx="148" cy="115" r="10" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.35)" strokeWidth="1" />
      <path d="M144 115L147 118L153 112" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 160, height: 128 }}>
      <circle cx="50" cy="60" r="28" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="12" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
      <path d="M30 78C30 68 38 62 50 62C62 62 70 68 70 78" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" strokeLinecap="round" />

      <circle cx="110" cy="60" r="28" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
      <circle cx="110" cy="50" r="12" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
      <path d="M90 78C90 68 98 62 110 62C122 62 130 68 130 78" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeLinecap="round" />

      <circle cx="160" cy="60" r="28" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
      <circle cx="160" cy="50" r="12" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
      <path d="M140 78C140 68 148 62 160 62C172 62 180 68 180 78" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" strokeLinecap="round" />

      <rect x="20" y="108" width="160" height="28" rx="6" fill="rgba(14,18,32,0.95)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
      <rect x="30" y="118" width="60" height="5" rx="2.5" fill="rgba(99,102,241,0.35)" />
      <rect x="100" y="118" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
    </svg>
  );

const CaseStudyIllustration = () => (
  <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="bar-grad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
    </defs>

    {/* Chart bg */}
    <rect width="400" height="240" rx="12" fill="rgba(14,18,32,0.6)" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />

    {/* Grid lines */}
    {[60, 100, 140, 180].map((y) => (
      <line key={y} x1="40" y1={y} x2="380" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    ))}

    {/* Bars */}
    <rect x="60" y="120" width="30" height="80" rx="4" fill="url(#bar-grad)" opacity="0.5" />
    <rect x="110" y="90" width="30" height="110" rx="4" fill="url(#bar-grad)" opacity="0.65" />
    <rect x="160" y="70" width="30" height="130" rx="4" fill="url(#bar-grad)" opacity="0.8" />
    <rect x="210" y="50" width="30" height="150" rx="4" fill="url(#bar-grad)" />
    <rect x="260" y="60" width="30" height="140" rx="4" fill="url(#bar-grad2)" opacity="0.7" />
    <rect x="310" y="40" width="30" height="160" rx="4" fill="url(#bar-grad2)" />

    {/* Trend line */}
    <polyline
      points="75,145 125,115 175,90 225,65 275,75 325,55"
      stroke="#6366F1"
      strokeWidth="2"
      fill="none"
      strokeDasharray="0"
    />
    {[75, 125, 175, 225, 275, 325].map((x, i) => {
      const ys = [145, 115, 90, 65, 75, 55];
      return <circle key={x} cx={x} cy={ys[i]} r="4" fill="#6366F1" />;
    })}

    {/* Stats overlay */}
    <rect x="240" y="16" width="140" height="34" rx="6" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.25)" strokeWidth="1" />
    <text x="254" y="38" fill="#818CF8" fontSize="20" fontWeight="700">+340%</text>

    {/* X-axis labels */}
    {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((q, i) => (
      <text key={q} x={75 + i * 50} y="215" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="11">
        {q}
      </text>
    ))}
    <text x="20" y="215" fill="rgba(255,255,255,0.15)" fontSize="10">Growth</text>
  </svg>
);

// --- Section Components ---

const techStack = [
  { name: "Python", color: "#3776AB" },
  { name: "LangChain", color: "#6366F1" },
  { name: "Next.js", color: "#F1F5F9" },
  { name: "Node.js", color: "#68A063" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "FastAPI", color: "#009688" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "Pinecone", color: "#1C17FF" },
  { name: "Redis", color: "#DC382D" },
];

const TechIcon = ({ name, color }: { name: string; color: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 16px",
      background: "var(--bg-elevated)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      flexShrink: 0,
      transition: "border-color 0.2s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)")}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
  >
    <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{name}</span>
  </div>
);

const testimonials = [
  {
    quote: "ProCode built our entire LangChain pipeline in 6 weeks. What our internal team estimated as a 6-month project shipped on time and under budget.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Axiom Health",
    initials: "SC",
    color: "#6366F1",
  },
  {
    quote: "We needed a senior ML engineer embedded with our team for a critical sprint. ProCode placed someone within 72 hours who knew our stack cold.",
    name: "Marcus Webb",
    role: "VP Engineering",
    company: "Fluxion Labs",
    initials: "MW",
    color: "#10B981",
  },
  {
    quote: "The automation system they built reduced our manual data processing from 14 hours a week to under 20 minutes. That ROI paid for itself in the first month.",
    name: "Priya Nair",
    role: "Head of Operations",
    company: "Meridian Finance",
    initials: "PN",
    color: "#8B5CF6",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        {/* Background dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.6,
          }}
        />
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 400,
            background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left: copy */}
            <div>
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
                  marginBottom: 24,
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981" }} />
                Available for new projects
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px, 5vw, 58px)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  marginBottom: 20,
                }}
              >
                Build the product.{" "}
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #10B981 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Scale the team.
                </span>
              </h1>

              <p
                style={{
                  fontSize: 18,
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: 36,
                  maxWidth: 460,
                }}
              >
                End-to-end product development and on-demand engineering talent. We ship AI systems, automation pipelines, and complex products — or embed directly into your team.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <Link
                  href="/services/development"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    background: "#6366F1",
                    color: "white",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#818CF8";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#6366F1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Build My Product <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services/consulting"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 28px",
                    background: "transparent",
                    color: "var(--text-primary)",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    border: "1px solid var(--border)",
                    letterSpacing: "-0.01em",
                    transition: "border-color 0.2s, background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                    e.currentTarget.style.background = "rgba(99,102,241,0.06)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Get Expert Help <ArrowRight size={16} />
                </Link>
              </div>

              {/* Social proof mini */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* Avatars */}
                <div style={{ display: "flex" }}>
                  {["#6366F1", "#10B981", "#8B5CF6", "#F59E0B"].map((color, i) => (
                    <div
                      key={i}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: color,
                        border: "2px solid var(--bg-base)",
                        marginLeft: i === 0 ? 0 : -8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {["SC", "MW", "PN", "AR"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} size={12} />
                    ))}
                  </div>
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    Trusted by <strong style={{ color: "var(--text-secondary)" }}>40+ companies</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: illustration */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "28px 0",
          background: "var(--bg-surface)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 24,
              textAlign: "center",
            }}
          >
            {[
              { value: "40+", label: "Products Shipped" },
              { value: "5+", label: "Years Building" },
              { value: "98%", label: "Client Retention" },
              { value: "12+", label: "Industries Served" },
              { value: "3 days", label: "Avg. Engineer Placement" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    background: "linear-gradient(135deg, #6366F1, #818CF8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: 4,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2-SERVICE SPLIT ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
              }}
            >
              What We Do
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              Two ways to work with us
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="services-grid">
            {/* ProCode Dev card */}
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 40,
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(99,102,241,0.12)",
                  color: "#6366F1",
                  marginBottom: 24,
                }}
              >
                <BuildIcon size={24} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>ProCode Development</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 24 }}>
                We take your idea from zero to production. Products, AI-powered systems, automation pipelines, and integrations built by a focused team that moves fast and ships clean code.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {["Full product development", "LangChain & AI/ML systems", "Process automation", "API integrations"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-secondary)" }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(99,102,241,0.15)",
                        color: "#6366F1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckIcon size={10} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/development"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#6366F1",
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
              >
                Explore Development Services <ArrowRight size={14} />
              </Link>
            </div>

            {/* Consulting card */}
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 40,
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(16,185,129,0.35)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(16,185,129,0.1)",
                  color: "#10B981",
                  marginBottom: 24,
                }}
              >
                <ConsultIcon size={24} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Expert Consulting</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 24 }}>
                Your team needs a specialist. We place battle-tested senior engineers directly into your workflow. No ramp-up theatre — they contribute from day one.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {["Senior engineers on demand", "Full-time or part-time embed", "Sprint & retainer models", "AI, backend, full-stack specialists"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-secondary)" }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(16,185,129,0.12)",
                        color: "#10B981",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckIcon size={10} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/consulting"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#10B981",
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
              >
                Explore Consulting Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ── */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
                Featured Case Study
              </div>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                340% efficiency gain for a Series B fintech
              </h2>
            </div>
            <Link
              href="/work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                fontWeight: 600,
                color: "#6366F1",
                textDecoration: "none",
              }}
            >
              View all case studies <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }} className="case-grid">
            <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "5/3" }}>
              <CaseStudyIllustration />
            </div>
            <div>
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
                  marginBottom: 20,
                }}
              >
                ProCode Development · Fintech
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 14 }}>
                Automated compliance reporting with LangChain agents
              </h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 24 }}>
                Meridian Finance was spending 14 hours per week manually processing regulatory reports across 6 data sources. We built a multi-agent LangChain system that ingests, normalises, and generates compliant reports automatically.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                {[
                  { value: "97%", label: "Time saved on reporting" },
                  { value: "< 20 min", label: "Processing time (was 14h)" },
                  { value: "6 wks", label: "From kickoff to production" },
                  { value: "Zero", label: "Compliance violations post-launch" },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      padding: "14px 16px",
                      background: "var(--bg-elevated)",
                      borderRadius: 10,
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em", color: "#6366F1", marginBottom: 3 }}>{m.value}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["LangChain", "Python", "FastAPI", "PostgreSQL"].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 12px",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: 500,
                      color: "var(--text-muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 13, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>
              Technology stack we work with daily
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {techStack.map((tech) => (
              <TechIcon key={tech.name} name={tech.name} color={tech.color} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{
          padding: "96px 0",
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              Client Feedback
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              What our clients say
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: 28,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{ color: "rgba(99,102,241,0.3)", marginBottom: 16 }}>
                  <QuoteIcon />
                </div>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 50%, rgba(16,185,129,0.06) 100%)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: 20,
              padding: "72px 48px",
              textAlign: "center",
            }}
          >
            {/* Background pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#818CF8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
                Get Started
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4.5vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Ready to build something?
              </h2>
              <p style={{ fontSize: 18, color: "var(--text-secondary)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
                Tell us what you need. We&apos;ll respond within one business day with a clear plan and honest pricing.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "16px 32px",
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
                <Link
                  href="/work"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "15px 32px",
                    background: "transparent",
                    color: "var(--text-primary)",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 16,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.15)",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                    e.currentTarget.style.background = "rgba(99,102,241,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
          .services-grid { grid-template-columns: 1fr !important; }
          .case-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
