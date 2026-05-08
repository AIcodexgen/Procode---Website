"use client";

import Link from "next/link";
import { ArrowRight, CheckIcon, ConsultIcon } from "@/components/Icons";

const ConsultingIllustration = () => (
  <svg viewBox="0 0 440 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxHeight: 300 }}>
    {/* Team visualization */}
    {[
      { cx: 100, cy: 100, color: "#6366F1", label: "Your Team", initials: "YT" },
      { cx: 220, cy: 60, color: "#10B981", label: "ProCode", initials: "PC" },
      { cx: 340, cy: 100, color: "#8B5CF6", label: "Expert", initials: "EX" },
    ].map((node) => (
      <g key={node.label}>
        <circle cx={node.cx} cy={node.cy} r="42" fill={`${node.color}12`} stroke={`${node.color}30`} strokeWidth="1.5" />
        <circle cx={node.cx} cy={node.cy - 10} r="16" fill={`${node.color}25`} stroke={`${node.color}45`} strokeWidth="1.5" />
        <path
          d={`M${node.cx - 20} ${node.cy + 28}C${node.cx - 20} ${node.cy + 14} ${node.cx - 10} ${node.cy + 8} ${node.cx} ${node.cy + 8}C${node.cx + 10} ${node.cy + 8} ${node.cx + 20} ${node.cy + 14} ${node.cx + 20} ${node.cy + 28}`}
          stroke={`${node.color}40`}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <text x={node.cx} y={node.cy + 52} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10" fontWeight="600">
          {node.label}
        </text>
      </g>
    ))}

    {/* Connection lines */}
    <line x1="142" y1="90" x2="178" y2="72" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeDasharray="5 3" />
    <line x1="262" y1="72" x2="298" y2="88" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" strokeDasharray="5 3" />

    {/* Shared workspace */}
    <rect x="60" y="165" width="320" height="100" rx="12" fill="rgba(14,18,32,0.8)" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
    <text x="220" y="188" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10" fontWeight="700" letterSpacing="0.08em">SHARED WORKSPACE</text>

    {/* Sprint board */}
    {[
      { x: 80, label: "Backlog", color: "rgba(255,255,255,0.08)", count: 8 },
      { x: 180, label: "In Progress", color: "rgba(99,102,241,0.15)", count: 3 },
      { x: 280, label: "Review", color: "rgba(139,92,246,0.12)", count: 2 },
      { x: 340, label: "Done", color: "rgba(16,185,129,0.15)", count: 12 },
    ].map((col) => (
      <g key={col.label}>
        <rect x={col.x} y="200" width="62" height="40" rx="6" fill={col.color} />
        <text x={col.x + 31} y="215" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontWeight="600">{col.label}</text>
        <text x={col.x + 31} y="232" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="13" fontWeight="800">{col.count}</text>
      </g>
    ))}
  </svg>
);

const experts = [
  {
    name: "Alex Rodriguez",
    role: "Senior AI/ML Engineer",
    initials: "AR",
    color: "#6366F1",
    exp: "8 years",
    stack: ["LangChain", "Python", "PyTorch", "FastAPI"],
    bio: "Built AI systems for Series A–C startups and Fortune 500s. Specialises in production LLM pipelines and agent architecture.",
  },
  {
    name: "Yemi Okonkwo",
    role: "Full-Stack Engineer",
    initials: "YO",
    color: "#10B981",
    exp: "7 years",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    bio: "Shipped 20+ consumer and B2B products. Equally strong on frontend architecture and backend API design.",
  },
  {
    name: "Dana Kovács",
    role: "Backend & Infra Engineer",
    initials: "DK",
    color: "#8B5CF6",
    exp: "9 years",
    stack: ["Python", "AWS", "Docker", "Kubernetes"],
    bio: "Focused on data-intensive systems and cloud infrastructure. Designed pipelines processing 50M+ events per day.",
  },
];

const engagementOptions = [
  {
    name: "Full-Time Embed",
    days: "5 days / week",
    desc: "Your engineer works entirely within your team. Daily standups, full sprint participation, Slack/Jira/GitHub — whatever your workflow.",
    ideal: "Teams that need to move fast on a major build",
    color: "#6366F1",
  },
  {
    name: "Part-Time Embed",
    days: "2–3 days / week",
    desc: "Dedicated focus, without the full-time cost. Ideal for ongoing feature development or architecture oversight.",
    ideal: "Steady-state product teams with targeted needs",
    color: "#8B5CF6",
  },
  {
    name: "Sprint Engagement",
    days: "2–6 week sprints",
    desc: "Focused delivery of a defined scope. The expert comes in, ships the work, leaves clean documentation behind.",
    ideal: "One-time problems or high-priority deliverables",
    color: "#F59E0B",
  },
  {
    name: "Long-Term Retainer",
    days: "Ongoing",
    desc: "A consistent monthly commitment. Your expert is available for architecture reviews, code reviews, mentoring, and feature delivery.",
    ideal: "Growing engineering teams that need senior leverage",
    color: "#10B981",
  },
];

const onboardingSteps = [
  { title: "Scoping Call", desc: "30 minutes. You describe the role, the team, and the goal. We ask about tech stack, working style, and timeline.", duration: "Day 0" },
  { title: "Expert Match", desc: "We identify the right engineer from our bench. You receive a profile, portfolio links, and a technical brief — no CV spam.", duration: "Day 1–2" },
  { title: "Intro Session", desc: "A 45-minute call with your team and the expert. Direct conversation — no sales layer in the middle.", duration: "Day 2–3" },
  { title: "Contract & Start", desc: "Simple contract, clear terms, and an agreed start date. Most experts can begin within a week of the scoping call.", duration: "Day 3–7" },
];

const whyNotHire = [
  { metric: "Time to hire", hiring: "8–16 weeks", procode: "Under 1 week" },
  { metric: "Total cost (annual)", hiring: "$180k–$240k+", procode: "Pay for what you need" },
  { metric: "Ramp-up time", hiring: "1–3 months", procode: "2–3 days" },
  { metric: "Commitment", hiring: "Long-term", procode: "Flexible" },
  { metric: "Risk if poor fit", hiring: "High — severance, legal", procode: "End engagement, no penalty" },
];

export default function ConsultingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "88px 0 72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div style={{ position: "absolute", top: -80, left: -80, width: 400, height: 400, background: "radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="consult-hero-grid">
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  color: "#34D399",
                  padding: "4px 12px",
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                Expert Consulting
              </div>
              <h1
                style={{
                  fontSize: "clamp(34px, 5vw, 52px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  marginBottom: 20,
                }}
              >
                Hire battle-tested engineers{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  without the overhead
                </span>
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 36,
                  maxWidth: 460,
                }}
              >
                Your team has a gap — bandwidth, specialisation, or experience. We place a senior engineer directly into your workflow. No recruitment theatre. They contribute from day one.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    background: "#10B981",
                    color: "white",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#34D399";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#10B981";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Book a Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
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
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                    e.currentTarget.style.background = "rgba(16,185,129,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Meet the Team
                </Link>
              </div>
            </div>
            <div>
              <ConsultingIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-surface)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              Who It&apos;s For
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Three scenarios where we help
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              {
                title: "Scaling your team fast",
                desc: "You just closed a funding round and need to double output immediately — but hiring takes months. We place experts in days.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                ),
                color: "#6366F1",
              },
              {
                title: "Missing a critical skill",
                desc: "You need someone who knows LangChain, or Rust, or distributed systems deeply — not someone you need to train for 6 months.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                color: "#10B981",
              },
              {
                title: "Surge capacity for a deadline",
                desc: "A product launch, a compliance deadline, a migration. You need extra senior firepower for 4–8 weeks, not a permanent hire.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3L21 21M3 21L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
                color: "#8B5CF6",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: 28,
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${card.color}55`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: `${card.color}18`,
                    color: card.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR EXPERTS ── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              The Team
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Who you&apos;re getting
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
              No juniors staffed as seniors. Every consultant has shipped real products in production.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {experts.map((expert) => (
              <div
                key={expert.name}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: 28,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: expert.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 800,
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {expert.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{expert.name}</div>
                    <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{expert.role}</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{expert.exp} experience</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 18 }}>{expert.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {expert.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "3px 10px",
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 500,
                        color: "var(--text-muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT OPTIONS ── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-surface)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              Engagement Options
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Work with us your way
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {engagementOptions.map((opt) => (
              <div
                key={opt.name}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: 24,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${opt.color}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    background: `${opt.color}15`,
                    border: `1px solid ${opt.color}35`,
                    borderRadius: 100,
                    fontSize: 11,
                    fontWeight: 700,
                    color: opt.color,
                    marginBottom: 14,
                  }}
                >
                  {opt.days}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{opt.name}</h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 14 }}>{opt.desc}</p>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  <span style={{ fontWeight: 600 }}>Ideal for: </span>
                  {opt.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONBOARDING PROCESS ── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              The Onboarding Process
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              From call to code in under a week
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 19,
                top: 20,
                bottom: 20,
                width: 2,
                background: "linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(16,185,129,0.2))",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {onboardingSteps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 24 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--bg-elevated)",
                      border: "2px solid rgba(99,102,241,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#818CF8",
                      fontWeight: 800,
                      fontSize: 14,
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ paddingTop: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ fontWeight: 700, fontSize: 16 }}>{step.title}</span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#10B981",
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.2)",
                          padding: "2px 8px",
                          borderRadius: 100,
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NOT HIRE FULL-TIME? ── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-surface)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              The Real Cost
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Consulting vs. full-time hire
            </h2>
          </div>

          <div
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                padding: "14px 24px",
                background: "rgba(99,102,241,0.06)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.07em" }}>Factor</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.07em" }}>Full-Time Hire</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.07em" }}>ProCode</span>
            </div>
            {whyNotHire.map((row, i) => (
              <div
                key={row.metric}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr",
                  padding: "16px 24px",
                  borderBottom: i < whyNotHire.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600 }}>{row.metric}</span>
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{row.hiring}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#34D399" }}>{row.procode}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{ fontSize: 13, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>
              Industries we&apos;ve worked in
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {["Fintech", "SaaS", "Healthcare", "E-Commerce", "Logistics", "Insurance", "EdTech", "Legal Tech", "Media", "Developer Tools"].map((industry) => (
              <span
                key={industry}
                style={{
                  padding: "8px 18px",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                {industry}
              </span>
            ))}
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
            Ready to augment your team?
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.65 }}>
            Tell us the gap. We&apos;ll match you with the right engineer and have them ready to start within days.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              background: "#10B981",
              color: "white",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#34D399";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(16,185,129,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#10B981";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .consult-hero-grid { grid-template-columns: 1fr !important; }
          .consult-hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </>
  );
}
