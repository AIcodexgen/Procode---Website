"use client";

import Link from "next/link";
import { ArrowRight, CheckIcon, LinkedInIcon, GitHubIcon } from "@/components/Icons";

const TeamMemberCard = ({
  name,
  role,
  bio,
  initials,
  color,
  stack,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
  stack: string[];
}) => (
  <div
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
    <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${color}, ${color}aa)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 800,
          color: "white",
          flexShrink: 0,
        }}
      >
        {initials}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{name}</div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>{role}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-muted)", transition: "color 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-muted)", transition: "color 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
          >
            <GitHubIcon size={16} />
          </a>
        </div>
      </div>
    </div>
    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 14 }}>{bio}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {stack.map((t) => (
        <span
          key={t}
          style={{
            padding: "3px 10px",
            background: "var(--bg-elevated)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 500,
            color: "var(--text-muted)",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const TimelineIllustration = () => (
  <svg viewBox="0 0 480 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxHeight: 280 }}>
    {/* Timeline line */}
    <line x1="40" y1="40" x2="440" y2="40" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />

    {[
      { x: 80, year: "2019", label: "Founded", color: "#8B5CF6" },
      { x: 180, year: "2021", label: "First AI product", color: "#8B5CF6" },
      { x: 280, year: "2023", label: "Expert bench launched", color: "#10B981" },
      { x: 400, year: "2025", label: "40+ clients", color: "#8B5CF6" },
    ].map((milestone) => (
      <g key={milestone.x}>
        <circle cx={milestone.x} cy="40" r="8" fill={milestone.color} />
        <circle cx={milestone.x} cy="40" r="14" fill={`${milestone.color}20`} />

        {/* Vertical connector */}
        <line x1={milestone.x} y1="54" x2={milestone.x} y2="80" stroke={`${milestone.color}40`} strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Box */}
        <rect x={milestone.x - 55} y="80" width="110" height="65" rx="8" fill="rgba(14,18,32,0.8)" stroke={`${milestone.color}25`} strokeWidth="1" />
        <text x={milestone.x} y="101" textAnchor="middle" fill={milestone.color} fontSize="14" fontWeight="800">{milestone.year}</text>
        <text x={milestone.x} y="118" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">{milestone.label}</text>
      </g>
    ))}

    {/* Stats below */}
    {[
      { x: 100, value: "40+", label: "Products" },
      { x: 220, value: "5+", label: "Years" },
      { x: 340, value: "12+", label: "Industries" },
    ].map((stat) => (
      <g key={stat.x}>
        <rect x={stat.x - 40} y="190" width="80" height="60" rx="8" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
        <text x={stat.x} y="218" textAnchor="middle" fill="#818CF8" fontSize="20" fontWeight="800">{stat.value}</text>
        <text x={stat.x} y="238" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11">{stat.label}</text>
      </g>
    ))}
  </svg>
);

const values = [
  {
    title: "Blunt honesty",
    desc: "We say what we think. If your idea has a flaw, we tell you before we start — not after we've spent your budget.",
    color: "#8B5CF6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3V11M11 15V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Outcomes over outputs",
    desc: "Code is the means, not the end. We measure ourselves by the business result, not the line count or the cleverness of the architecture.",
    color: "#10B981",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 14L8 10L12 12L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 18H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "No surprises",
    desc: "Weekly updates, shared dashboards, real progress. You should never have to ask 'where are we?' — we tell you before you wonder.",
    color: "#8B5CF6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9H19" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 3V6M14 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Deep over broad",
    desc: "We don't try to be everything to everyone. We work in areas we know cold — AI systems, automation, product development — and we say no to things outside that.",
    color: "#F59E0B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L19 7V11C19 15 15.5 18.5 11 20C6.5 18.5 3 15 3 11V7L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Code that lasts",
    desc: "We write software that your team can maintain, extend, and understand. We don't ship clever code that only we understand.",
    color: "#EC4899",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M7 8L3 11L7 14M15 8L19 11L15 14M13 5L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const teamMembers = [
  {
    name: "James Okafor",
    role: "Founder & Technical Lead",
    initials: "JO",
    color: "#8B5CF6",
    bio: "Former engineering lead at a Series C fintech. Built AI systems and automation pipelines across finance, healthcare, and SaaS. Founded ProCode in 2019 after seeing how badly most agencies handle technical complexity.",
    stack: ["LangChain", "Python", "System Architecture", "AWS"],
  },
  {
    name: "Aisha Mensah",
    role: "Head of Engineering",
    initials: "AM",
    color: "#10B981",
    bio: "10 years shipping full-stack products. Joined ProCode in 2021 and has led delivery on 20+ projects. Exceptionally strong on frontend architecture, developer experience, and making sure nothing gets shipped that isn't ready.",
    stack: ["TypeScript", "Next.js", "React", "Node.js"],
  },
  {
    name: "Riku Tanaka",
    role: "AI/ML Lead",
    initials: "RT",
    color: "#8B5CF6",
    bio: "PhD in machine learning, 6 years in applied AI. Specialises in production-grade LLM systems — not experiments. Built RAG systems, multi-agent pipelines, and fine-tuned models deployed at scale for clients across 4 industries.",
    stack: ["LangChain", "PyTorch", "OpenAI API", "Pinecone"],
  },
  {
    name: "Sofia Reyes",
    role: "Consulting Director",
    initials: "SR",
    color: "#F59E0B",
    bio: "Runs the expert consulting arm. Ex-recruiter turned engineer turned operations lead. She matches clients to consultants, manages engagement quality, and is the person who makes sure the right expert walks in the door on day one.",
    stack: ["Operations", "Engagement Management", "Team Building"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "88px 0 72px",
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
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", position: "relative" }}>
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
            About ProCode
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
            We&apos;re a technical team that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              actually delivers
            </span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: 0,
              maxWidth: 580,
            }}
          >
            ProCode started because the agencies we saw couldn&apos;t handle real technical complexity — they&apos;d oversell, underdeliver, and disappear after launch. We built a different model: small, senior, and accountable.
          </p>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="story-grid">
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
                The Origin
              </div>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Why we built ProCode
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Our founder James spent 8 years inside engineering organisations before going independent. He watched dozens of software agencies win contracts by showing polished decks, then staff projects with junior developers while billing for seniors.
                </p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  ProCode was founded on a single principle: only senior engineers on every project, no exceptions. Not because it sounds good in a pitch — because it&apos;s the only way to build complex systems reliably.
                </p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  We added the consulting arm in 2023 after seeing a pattern: good engineering teams needed senior leverage without the overhead of a full-time hire. Same principle, different model.
                </p>
              </div>
            </div>
            <div>
              <TimelineIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
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
              The Team
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Who you work with
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
              Small and deliberate. Every person here has shipped real products in production and can stand behind the work.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              How We Work
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Principles we don&apos;t compromise on
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: 28,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${v.color}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div
                  style={{
                    display: "inline-flex",
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${v.color}15`,
                    color: v.color,
                    marginBottom: 18,
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT PROMISE ── */}
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
              The Client Promise
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              What we commit to on every engagement
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Senior engineers on every project, every time — no bait and switch",
              "A scoping document with clear timelines and pricing before any work starts",
              "Weekly progress updates with real demos, not status meetings",
              "Complete IP transfer on project completion — you own everything",
              "30-day post-launch warranty on all development work",
              "We tell you if we think you&apos;re making a mistake — even if it costs us the project",
            ].map((promise) => (
              <div
                key={promise}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "16px 20px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(99,102,241,0.12)",
                    color: "#8B5CF6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <CheckIcon size={12} />
                </div>
                <span
                  style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.5 }}
                  dangerouslySetInnerHTML={{ __html: promise }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Work with people who care about the outcome
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.65 }}>
            We respond to every inquiry personally. No automated screening. Just a real conversation.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
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
              Get in Touch <ArrowRight size={16} />
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
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .story-grid > div:last-child { display: none; }
        }
      `}</style>
    </>
  );
}
