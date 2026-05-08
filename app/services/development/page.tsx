"use client";

import Link from "next/link";
import { ArrowRight, CheckIcon, BuildIcon, AIIcon, AutomationIcon, APIIcon } from "@/components/Icons";

const ProcessStep = ({ num, title, desc }: { num: number; title: string; desc: string }) => (
  <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(99,102,241,0.1)",
        border: "1px solid rgba(99,102,241,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#818CF8",
        fontWeight: 800,
        fontSize: 14,
        flexShrink: 0,
      }}
    >
      {num}
    </div>
    <div style={{ paddingTop: 8 }}>
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>{desc}</div>
    </div>
  </div>
);

const WhatWeBuildCard = ({
  icon,
  title,
  desc,
  items,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  items: string[];
  accent: string;
}) => (
  <div
    style={{
      background: "var(--bg-surface)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      padding: 28,
      transition: "border-color 0.2s, transform 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${accent}55`;
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <div
      style={{
        display: "inline-flex",
        width: 44,
        height: 44,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        background: `${accent}18`,
        color: accent,
        marginBottom: 18,
      }}
    >
      {icon}
    </div>
    <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 18 }}>{desc}</p>
    <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
          <div style={{ color: accent, flexShrink: 0 }}>
            <CheckIcon size={12} />
          </div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const DevelopmentIllustration = () => (
  <svg viewBox="0 0 440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxHeight: 320 }}>
    <defs>
      <linearGradient id="dev-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Pipeline visual */}
    {/* Step 1: Discovery */}
    <rect x="20" y="80" width="80" height="60" rx="10" fill="rgba(14,18,32,0.9)" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
    <text x="60" y="106" textAnchor="middle" fill="#818CF8" fontSize="10" fontWeight="700">DISCOVERY</text>
    <rect x="30" y="115" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />
    <rect x="30" y="124" width="45" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />

    {/* Arrow */}
    <path d="M100 110L120 110" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
    <path d="M116 106L122 110L116 114" fill="none" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Step 2: Build */}
    <rect x="120" y="80" width="80" height="60" rx="10" fill="rgba(14,18,32,0.9)" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
    <text x="160" y="106" textAnchor="middle" fill="#818CF8" fontSize="10" fontWeight="700">BUILD</text>
    <rect x="130" y="115" width="60" height="5" rx="2.5" fill="rgba(99,102,241,0.25)" />
    <rect x="130" y="124" width="45" height="5" rx="2.5" fill="rgba(99,102,241,0.15)" />

    {/* Arrow */}
    <path d="M200 110L220 110" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
    <path d="M216 106L222 110L216 114" fill="none" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Step 3: QA */}
    <rect x="220" y="80" width="80" height="60" rx="10" fill="rgba(14,18,32,0.9)" stroke="rgba(139,92,246,0.35)" strokeWidth="1.5" />
    <text x="260" y="106" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="700">QA & TEST</text>
    <rect x="230" y="115" width="60" height="5" rx="2.5" fill="rgba(139,92,246,0.2)" />
    <rect x="230" y="124" width="45" height="5" rx="2.5" fill="rgba(139,92,246,0.12)" />

    {/* Arrow */}
    <path d="M300 110L320 110" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
    <path d="M316 106L322 110L316 114" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Step 4: Launch */}
    <rect x="320" y="80" width="100" height="60" rx="10" fill="rgba(14,18,32,0.9)" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
    <text x="370" y="106" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">LAUNCH</text>
    <rect x="330" y="115" width="70" height="5" rx="2.5" fill="rgba(16,185,129,0.3)" />
    <rect x="330" y="124" width="55" height="5" rx="2.5" fill="rgba(16,185,129,0.15)" />

    {/* AI Agent visual below */}
    <rect x="80" y="190" width="280" height="100" rx="12" fill="rgba(14,18,32,0.6)" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
    <text x="220" y="215" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="11" fontWeight="600">LangChain Agent Pipeline</text>

    {/* Agent nodes */}
    {[120, 180, 220, 260, 320].map((x, i) => (
      <g key={x}>
        <circle cx={x} cy="248" r="18" fill="rgba(14,18,32,0.95)" stroke={["rgba(99,102,241,0.35)", "rgba(139,92,246,0.3)", "rgba(16,185,129,0.3)", "rgba(99,102,241,0.25)", "rgba(16,185,129,0.35)"][i]} strokeWidth="1.5" />
        <text x={x} y="253" textAnchor="middle" fill={["#818CF8", "#A78BFA", "#34D399", "#8B5CF6", "#10B981"][i]} fontSize="9" fontWeight="700">
          {["Ingest", "Parse", "Chain", "Agent", "Output"][i]}
        </text>
        {i < 4 && <line x1={x + 18} y1="248" x2={[120, 180, 220, 260, 320][i + 1] - 18} y2="248" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 2" />}
      </g>
    ))}
  </svg>
);

const engagementModels = [
  {
    name: "Fixed-Price Project",
    desc: "Clear scope, clear budget. Best for defined products with known requirements.",
    features: ["Scoped requirements doc", "Milestone-based payments", "Fixed delivery date", "IP transferred on completion"],
    badge: "Most Popular",
    badgeColor: "#8B5CF6",
  },
  {
    name: "Milestone-Based",
    desc: "We build in phases, you review and approve before the next begins.",
    features: ["Phase-by-phase delivery", "Built-in feedback loops", "Adjustable roadmap", "Transparent progress tracking"],
    badge: null,
    badgeColor: "",
  },
  {
    name: "Retainer",
    desc: "Ongoing development partnership. Best for evolving products that need continuous improvement.",
    features: ["Monthly hour allocation", "Priority response", "Architecture guidance", "Quarterly roadmap planning"],
    badge: "Best Value",
    badgeColor: "#10B981",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "MVP builds typically take 6–12 weeks. Larger systems — especially multi-agent AI pipelines — can run 3–5 months. We scope everything in discovery so you have a realistic timeline before we start.",
  },
  {
    q: "Who owns the code when the project is done?",
    a: "You do. 100%. On project completion, all IP, source code, and assets transfer to you with no ongoing licensing fees.",
  },
  {
    q: "Do you handle maintenance after launch?",
    a: "Yes. We offer 30 days of warranty support on every project, plus optional monthly retainer packages for ongoing maintenance, monitoring, and feature development.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Absolutely. We do codebase audits as part of discovery for integration or extension projects. We've worked with dozens of legacy systems and modern stacks alike.",
  },
  {
    q: "How do you price projects?",
    a: "We charge fixed-price for well-scoped projects, and time-and-materials for complex or exploratory work. We never do retainer-only pricing for project work — you always know what you're paying for.",
  },
];

export default function DevelopmentPage() {
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
            backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div style={{ position: "absolute", top: -60, right: -60, width: 400, height: 400, background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
            className="dev-hero-grid"
          >
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
                ProCode Development
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
                We build the products{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #8B5CF6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  you&apos;ve been dreaming of
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
                From AI-powered systems to full SaaS products, we take your idea and deliver production-ready software — on time, with clean code, and zero hand-holding required from your end.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    background: "#8B5CF6",
                    color: "white",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#818CF8";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#8B5CF6";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link
                  href="/work"
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
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                    e.currentTarget.style.background = "rgba(99,102,241,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  See Our Work
                </Link>
              </div>
            </div>
            <div>
              <DevelopmentIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
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
              Service Categories
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>What we build</h2>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", marginTop: 12, maxWidth: 520, margin: "12px auto 0" }}>
              Four core areas where we deliver consistently. Not a menu — these are the categories we&apos;ve gone deep on.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <WhatWeBuildCard
              icon={<BuildIcon size={22} />}
              title="Software Products"
              accent="#8B5CF6"
              desc="SaaS platforms, internal tools, web apps, and mobile-ready products built to scale."
              items={["SaaS & web applications", "Internal ops tools", "Customer portals", "B2B platforms"]}
            />
            <WhatWeBuildCard
              icon={<AIIcon size={22} />}
              title="AI & LangChain Systems"
              accent="#8B5CF6"
              desc="Multi-agent pipelines, RAG systems, and LLM-powered workflows that solve real business problems."
              items={["LangChain agent pipelines", "RAG knowledge bases", "Document processing", "AI-assisted workflows"]}
            />
            <WhatWeBuildCard
              icon={<AutomationIcon size={22} />}
              title="Automation Pipelines"
              accent="#F59E0B"
              desc="Replace manual processes with reliable, observable automation. From data pipelines to business workflow engines."
              items={["Data ingestion pipelines", "Reporting automation", "Business process automation", "Scheduled job systems"]}
            />
            <WhatWeBuildCard
              icon={<APIIcon size={22} />}
              title="APIs & Integrations"
              accent="#10B981"
              desc="Backend APIs and third-party integrations that connect your systems cleanly and reliably."
              items={["REST & GraphQL APIs", "Third-party integrations", "Webhook infrastructure", "Data sync systems"]}
            />
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="process-grid">
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                The Process
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
                How we work
              </h2>
              <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 40 }}>
                No black boxes. You see exactly what we&apos;re doing at every stage, and you have a decision point before we move forward.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <ProcessStep num={1} title="Discovery Call" desc="We learn your product, your users, and your constraints. We ask hard questions. This session shapes the entire project." />
                <ProcessStep num={2} title="Scoping & Proposal" desc="We write a detailed scope doc with timelines, tech choices, and pricing. You approve before any code is written." />
                <ProcessStep num={3} title="Development Sprints" desc="Two-week sprints with deployed previews. You test real builds, not demos. Feedback is incorporated immediately." />
                <ProcessStep num={4} title="QA & Hardening" desc="Automated tests, security review, performance profiling. We don't ship until we'd put our name on it." />
                <ProcessStep num={5} title="Launch & Handover" desc="We handle the deployment, write documentation, and transfer all access. Post-launch support included." />
                <ProcessStep num={6} title="Ongoing Support" desc="30-day warranty on all projects. Optional retainer for continued development and maintenance." />
              </div>
            </div>

            <div>
              {/* Tech Stack */}
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24 }}>
                Tech Stack
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { label: "AI & ML", items: ["LangChain", "OpenAI", "Anthropic Claude", "Pinecone", "HuggingFace"] },
                  { label: "Backend", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis"] },
                  { label: "Frontend", items: ["Next.js", "TypeScript", "React", "Tailwind CSS"] },
                  { label: "Infrastructure", items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Supabase"] },
                ].map((group) => (
                  <div key={group.label}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 10 }}>{group.label}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {group.items.map((item) => (
                        <span
                          key={item}
                          style={{
                            padding: "5px 12px",
                            background: "var(--bg-elevated)",
                            border: "1px solid var(--border)",
                            borderRadius: 6,
                            fontSize: 13,
                            fontWeight: 500,
                            color: "var(--text-secondary)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
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
              Engagement Models
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              How you can engage us
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {engagementModels.map((model) => (
              <div
                key={model.name}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: 28,
                  position: "relative",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                {model.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: 20,
                      background: model.badgeColor,
                      color: "white",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {model.badge}
                  </div>
                )}
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{model.name}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 20 }}>{model.desc}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {model.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-muted)" }}>
                      <div style={{ color: "#8B5CF6", flexShrink: 0 }}>
                        <CheckIcon size={12} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              Common Questions
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Questions we get a lot
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{faq.q}</div>
                <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{faq.a}</div>
              </div>
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
            Ready to start a project?
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.65 }}>
            Tell us what you want to build. We&apos;ll come back with a proposal, timeline, and honest pricing within 24 hours.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              background: "#8B5CF6",
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
              e.currentTarget.style.background = "#8B5CF6";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .dev-hero-grid { grid-template-columns: 1fr !important; }
          .dev-hero-grid > div:last-child { display: none; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
