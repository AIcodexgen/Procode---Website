"use client";

import Link from "next/link";

// ─── HERO FLOW DIAGRAM ─────────────────────────────────────────────────────────
const HeroFlowDiagram = () => (
  <svg viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <radialGradient id="hg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(139,92,246,0.18)" />
        <stop offset="100%" stopColor="rgba(139,92,246,0)" />
      </radialGradient>
      <radialGradient id="hg2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(249,115,22,0.14)" />
        <stop offset="100%" stopColor="rgba(249,115,22,0)" />
      </radialGradient>
      <filter id="glow-purple">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="glow-orange">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient id="line-grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(139,92,246,0.6)" />
        <stop offset="100%" stopColor="rgba(249,115,22,0.4)" />
      </linearGradient>
      <linearGradient id="line-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(139,92,246,0.3)" />
        <stop offset="100%" stopColor="rgba(139,92,246,0.8)" />
      </linearGradient>
      <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="rgba(139,92,246,0.12)" />
      </pattern>
    </defs>

    {/* Background dot grid */}
    <rect width="560" height="420" fill="url(#dot-grid)" />

    {/* Glow blobs */}
    <ellipse cx="280" cy="210" rx="200" ry="150" fill="url(#hg1)" />
    <ellipse cx="420" cy="280" rx="120" ry="100" fill="url(#hg2)" />

    {/* ─ Node: Data Source ─ */}
    <g>
      <rect x="20" y="160" width="100" height="60" rx="10" fill="#0F0F20" stroke="rgba(139,92,246,0.35)" strokeWidth="1.5" />
      <rect x="20" y="160" width="100" height="4" rx="2" fill="rgba(139,92,246,0.5)" />
      <text x="70" y="188" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="700">DATA SOURCE</text>
      <text x="70" y="203" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9">APIs / DBs / Files</text>
      {/* Pulse ring */}
      <circle cx="120" cy="190" r="6" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.6)" strokeWidth="1" />
      <circle cx="120" cy="190" r="3" fill="#8B5CF6" />
    </g>

    {/* ─ Node: LangChain Agent ─ (center-left) */}
    <g>
      <rect x="165" y="120" width="120" height="70" rx="12" fill="#0F0F20" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" filter="url(#glow-purple)" />
      <rect x="165" y="120" width="120" height="4" rx="2" fill="url(#line-grad1)" />
      <text x="225" y="148" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="800">LANGCHAIN</text>
      <text x="225" y="162" textAnchor="middle" fill="#FAFAFA" fontSize="12" fontWeight="700">AI Agent</text>
      <text x="225" y="178" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">Reasoning · Memory</text>
      <circle cx="285" cy="155" r="6" fill="rgba(249,115,22,0.3)" stroke="rgba(249,115,22,0.7)" strokeWidth="1" />
      <circle cx="285" cy="155" r="3" fill="#F97316" />
    </g>

    {/* ─ Node: Automation ─ */}
    <g>
      <rect x="165" y="220" width="120" height="60" rx="12" fill="#0F0F20" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" />
      <rect x="165" y="220" width="120" height="4" rx="2" fill="rgba(249,115,22,0.5)" />
      <text x="225" y="248" textAnchor="middle" fill="#FB923C" fontSize="10" fontWeight="700">AUTOMATION</text>
      <text x="225" y="263" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9">Pipeline Engine</text>
      <circle cx="285" cy="250" r="6" fill="rgba(249,115,22,0.3)" stroke="rgba(249,115,22,0.6)" strokeWidth="1" />
      <circle cx="285" cy="250" r="3" fill="#F97316" />
    </g>

    {/* ─ Node: API Layer ─ */}
    <g>
      <rect x="20" y="260" width="100" height="60" rx="10" fill="#0F0F20" stroke="rgba(16,185,129,0.35)" strokeWidth="1.5" />
      <rect x="20" y="260" width="100" height="4" rx="2" fill="rgba(16,185,129,0.5)" />
      <text x="70" y="288" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">API LAYER</text>
      <text x="70" y="303" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">REST · GraphQL</text>
    </g>

    {/* ─ Node: Output / Product ─ (right side) */}
    <g>
      <rect x="335" y="80" width="130" height="80" rx="14" fill="#0F0F20" stroke="rgba(139,92,246,0.5)" strokeWidth="2" filter="url(#glow-purple)" />
      <rect x="335" y="80" width="130" height="4" rx="2" fill="url(#line-grad1)" />
      {/* Mini UI mockup inside */}
      <rect x="345" y="95" width="110" height="8" rx="4" fill="rgba(139,92,246,0.4)" />
      <rect x="345" y="108" width="80" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="345" y="119" width="95" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="345" y="132" width="60" height="16" rx="5" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
      <text x="375" y="144" textAnchor="middle" fill="#A78BFA" fontSize="9" fontWeight="700">Ship It →</text>
    </g>

    {/* ─ Node: Monitoring ─ */}
    <g>
      <rect x="335" y="190" width="130" height="70" rx="12" fill="#0F0F20" stroke="rgba(16,185,129,0.35)" strokeWidth="1.5" />
      <rect x="335" y="190" width="130" height="4" rx="2" fill="rgba(16,185,129,0.4)" />
      <text x="400" y="215" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">MONITORING</text>
      {/* Mini graph */}
      <polyline points="345,248 362,238 379,243 396,230 413,236 430,222 447,228 455,220" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="455" cy="220" r="3" fill="#10B981" />
    </g>

    {/* ─ Node: Expert Team ─ */}
    <g>
      <rect x="335" y="290" width="130" height="65" rx="12" fill="#0F0F20" stroke="rgba(249,115,22,0.35)" strokeWidth="1.5" />
      <rect x="335" y="290" width="130" height="4" rx="2" fill="rgba(249,115,22,0.4)" />
      <text x="400" y="315" textAnchor="middle" fill="#FB923C" fontSize="10" fontWeight="700">EXPERT TEAM</text>
      {/* Avatar group */}
      {[355, 372, 389].map((x, i) => (
        <circle key={x} cx={x} cy="337" r="10" fill={["rgba(139,92,246,0.6)", "rgba(249,115,22,0.6)", "rgba(16,185,129,0.6)"][i]} stroke="#0F0F20" strokeWidth="1.5" />
      ))}
      <text x="420" y="341" fill="rgba(255,255,255,0.4)" fontSize="9">+8 more</text>
    </g>

    {/* ─ Animated connection paths ─ */}
    {/* Source → LangChain */}
    <path d="M120 175 C145 175 140 155 165 155" stroke="url(#line-grad2)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash" />
    {/* Source → Automation */}
    <path d="M120 200 C145 200 145 250 165 250" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash" />
    {/* API → Automation */}
    <path d="M120 280 C145 280 145 260 165 260" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash-reverse" />
    {/* LangChain → Product */}
    <path d="M285 145 C310 145 310 120 335 120" stroke="url(#line-grad1)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash" />
    {/* Automation → Monitoring */}
    <path d="M285 250 C310 250 310 225 335 225" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-dash" />
    {/* LangChain → Expert */}
    <path d="M285 165 C320 165 320 322 335 322" stroke="rgba(139,92,246,0.25)" strokeWidth="1" strokeDasharray="5 4" className="animate-dash-reverse" />

    {/* Floating labels */}
    <g className="animate-float">
      <rect x="480" y="100" width="70" height="28" rx="7" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
      <text x="515" y="119" textAnchor="middle" fill="#A78BFA" fontSize="11" fontWeight="700">340%↑</text>
    </g>
    <g style={{ animation: "float 5s 1s ease-in-out infinite" }}>
      <rect x="30" y="340" width="80" height="28" rx="7" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />
      <text x="70" y="359" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">6 wk ship</text>
    </g>
    <g style={{ animation: "float 4.5s 0.5s ease-in-out infinite" }}>
      <rect x="460" y="370" width="88" height="28" rx="7" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
      <text x="504" y="389" textAnchor="middle" fill="#FB923C" fontSize="10" fontWeight="700">98% uptime</text>
    </g>
  </svg>
);

// ─── BEFORE / AFTER ILLUSTRATION ──────────────────────────────────────────────
const BeforeAfterIllustration = ({ type }: { type: "before" | "after" }) => {
  if (type === "before") return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 200 }}>
      {/* Chaotic scatter */}
      {[
        { x: 30, y: 40, w: 70, label: "Figma", c: "rgba(255,255,255,0.06)" },
        { x: 120, y: 20, w: 60, label: "Notion", c: "rgba(255,255,255,0.04)" },
        { x: 200, y: 50, w: 65, label: "Agency", c: "rgba(255,255,255,0.06)" },
        { x: 20, y: 110, w: 75, label: "Freelancer", c: "rgba(255,255,255,0.04)" },
        { x: 130, y: 100, w: 55, label: "Jira", c: "rgba(255,255,255,0.05)" },
        { x: 200, y: 130, w: 65, label: "Spreadsheet", c: "rgba(255,255,255,0.04)" },
        { x: 50, y: 160, w: 80, label: "Manual Work", c: "rgba(255,99,99,0.08)" },
        { x: 170, y: 165, w: 90, label: "No visibility", c: "rgba(255,99,99,0.08)" },
      ].map((item, i) => (
        <g key={i}>
          <rect x={item.x} y={item.y} width={item.w} height={28} rx="6" fill={item.c} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x={item.x + item.w / 2} y={item.y + 18} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="10">{item.label}</text>
        </g>
      ))}
      {/* X marks */}
      {[[90, 90], [160, 60], [60, 70]].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x + 8} y2={y + 8} stroke="rgba(255,99,99,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={x + 8} y1={y} x2={x} y2={y + 8} stroke="rgba(255,99,99,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );

  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 200 }}>
      <defs>
        <linearGradient id="after-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(139,92,246,0.12)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.08)" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="260" height="180" rx="14" fill="url(#after-grad)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />

      {/* Clean pipeline */}
      {[
        { x: 25, y: 35, label: "Discovery", c: "#8B5CF6" },
        { x: 90, y: 35, label: "Build", c: "#8B5CF6" },
        { x: 155, y: 35, label: "QA", c: "#8B5CF6" },
        { x: 213, y: 35, label: "Launch", c: "#10B981" },
      ].map((step, i) => (
        <g key={i}>
          <rect x={step.x} y={step.y} width={56} height={30} rx="7" fill={`${step.c}20`} stroke={`${step.c}50`} strokeWidth="1" />
          <text x={step.x + 28} y={step.y + 19} textAnchor="middle" fill={step.c} fontSize="9" fontWeight="700">{step.label}</text>
          {i < 3 && <path d={`M${step.x + 56} ${step.y + 15}L${step.x + 65} ${step.y + 15}`} stroke={`${step.c}50`} strokeWidth="1.5" strokeLinecap="round" />}
        </g>
      ))}

      {/* Metrics */}
      {[
        { x: 25, y: 90, value: "6 wks", label: "Avg. ship time", c: "#8B5CF6" },
        { x: 115, y: 90, value: "97%", label: "On-time delivery", c: "#10B981" },
        { x: 195, y: 90, value: "Zero", label: "Hidden costs", c: "#F97316" },
      ].map((m, i) => (
        <g key={i}>
          <rect x={m.x} y={m.y} width={80} height={55} rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x={m.x + 40} y={m.y + 26} textAnchor="middle" fill={m.c} fontSize="18" fontWeight="800">{m.value}</text>
          <text x={m.x + 40} y={m.y + 40} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">{m.label}</text>
        </g>
      ))}

      {/* Checkmarks */}
      {[40, 100, 160, 220].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="165" r="10" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
          <path d={`M${x - 4} ${165}L${x - 1} ${168}L${x + 5} ${162}`} stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
    </svg>
  );
};

// ─── INTEGRATION ICONS GRID ────────────────────────────────────────────────────
const techItems = [
  { name: "Python", dot: "#3776AB" },
  { name: "LangChain", dot: "#8B5CF6" },
  { name: "OpenAI", dot: "#10A37F" },
  { name: "Next.js", dot: "#FAFAFA" },
  { name: "FastAPI", dot: "#009688" },
  { name: "PostgreSQL", dot: "#336791" },
  { name: "TypeScript", dot: "#3178C6" },
  { name: "Docker", dot: "#2496ED" },
  { name: "AWS", dot: "#FF9900" },
  { name: "Pinecone", dot: "#1C17FF" },
  { name: "Redis", dot: "#DC382D" },
  { name: "Node.js", dot: "#68A063" },
  { name: "Supabase", dot: "#3ECF8E" },
  { name: "Kubernetes", dot: "#326CE5" },
  { name: "Anthropic", dot: "#8B5CF6" },
  { name: "HuggingFace", dot: "#FFD21E" },
];

// ─── STATS DATA ───────────────────────────────────────────────────────────────
const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "5+", label: "Years building" },
  { value: "98%", label: "Client retention" },
  { value: "3 days", label: "Avg engineer placement" },
  { value: "12+", label: "Industries served" },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "ProCode built our entire LangChain pipeline in 6 weeks. What our team estimated as a 6-month project shipped on time and under budget. Zero excuses, just results.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Axiom Health",
    initials: "SC",
    color: "#8B5CF6",
  },
  {
    quote: "We needed a senior ML engineer embedded with our team within a week. ProCode placed someone in 72 hours who knew our stack cold. It was like they'd been there for months.",
    name: "Marcus Webb",
    role: "VP Engineering",
    company: "Fluxion Labs",
    initials: "MW",
    color: "#F97316",
  },
  {
    quote: "The automation system they built reduced our manual data processing from 14 hours a week to 20 minutes. That ROI paid for the entire project in the first month.",
    name: "Priya Nair",
    role: "Head of Operations",
    company: "Meridian Finance",
    initials: "PN",
    color: "#10B981",
  },
];

// ─── CASE STUDY CARDS ─────────────────────────────────────────────────────────
const featuredCases = [
  {
    company: "Meridian Finance",
    tag: "LangChain · Fintech",
    result: "97% time saved on compliance reporting",
    metric: "97%",
    metricLabel: "Time saved",
    accent: "#8B5CF6",
    desc: "14 hours of manual regulatory work per week → 20-minute automated pipeline.",
  },
  {
    company: "Axiom Health",
    tag: "AI · Healthcare",
    result: "3× faster clinical documentation",
    metric: "3×",
    metricLabel: "Faster notes",
    accent: "#F97316",
    desc: "Voice-to-structured-note AI assistant for physicians. Zero hallucinations in production.",
  },
  {
    company: "Fluxion Labs",
    tag: "Consulting · SaaS",
    result: "Series A launch shipped on schedule",
    metric: "72h",
    metricLabel: "To place engineer",
    accent: "#10B981",
    desc: "Critical ML expertise gap closed in 3 days. Product launched on time, no compromises.",
  },
];

// ─── FEATURE SECTION DATA ─────────────────────────────────────────────────────
const features = [
  {
    tag: "ProCode Development",
    tagColor: "#8B5CF6",
    headline: "Ship products that\nactually work in production",
    body: "Most agencies can build a demo. We build software that handles edge cases, scales under load, and your team can maintain after we're gone. AI systems, automation pipelines, and full products — all production-grade from day one.",
    points: ["LangChain & multi-agent pipelines", "Zero-to-production in weeks, not months", "Clean code your team can own"],
    accent: "#8B5CF6",
    illustration: (
      <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 260 }}>
        <defs>
          <linearGradient id="feat1-grad" x1="0" y1="0" x2="340" y2="260">
            <stop offset="0%" stopColor="rgba(139,92,246,0.08)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.02)" />
          </linearGradient>
        </defs>
        <rect width="340" height="260" rx="16" fill="url(#feat1-grad)" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
        {/* Terminal header */}
        <rect x="0" y="0" width="340" height="36" rx="16" fill="rgba(139,92,246,0.08)" />
        <rect x="16" y="13" width="10" height="10" rx="5" fill="#FF5F57" />
        <rect x="32" y="13" width="10" height="10" rx="5" fill="#FEBC2E" />
        <rect x="48" y="13" width="10" height="10" rx="5" fill="#28C840" />
        <text x="170" y="22" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10">agent_pipeline.py</text>
        {/* Code lines */}
        <rect x="20" y="52" width="60" height="7" rx="3.5" fill="rgba(139,92,246,0.5)" />
        <rect x="90" y="52" width="100" height="7" rx="3.5" fill="rgba(255,255,255,0.07)" />
        <rect x="20" y="67" width="40" height="7" rx="3.5" fill="rgba(249,115,22,0.4)" />
        <rect x="70" y="67" width="140" height="7" rx="3.5" fill="rgba(255,255,255,0.06)" />
        <rect x="30" y="82" width="80" height="7" rx="3.5" fill="rgba(255,255,255,0.08)" />
        <rect x="120" y="82" width="60" height="7" rx="3.5" fill="rgba(16,185,129,0.4)" />
        <rect x="30" y="97" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.06)" />
        <rect x="20" y="112" width="50" height="7" rx="3.5" fill="rgba(139,92,246,0.4)" />
        <rect x="80" y="112" width="90" height="7" rx="3.5" fill="rgba(255,255,255,0.06)" />
        <rect x="30" y="127" width="100" height="7" rx="3.5" fill="rgba(255,255,255,0.05)" />
        <rect x="180" y="127" width="40" height="7" rx="3.5" fill="rgba(249,115,22,0.3)" />
        {/* Blinking cursor */}
        <rect x="20" y="142" width="8" height="13" rx="2" fill="rgba(139,92,246,0.8)" style={{ animation: "blink 1.2s ease-in-out infinite" }} />
        {/* Output section */}
        <rect x="10" y="168" width="320" height="1" fill="rgba(255,255,255,0.04)" />
        <text x="20" y="186" fill="rgba(16,185,129,0.6)" fontSize="9" fontWeight="600">✓ Agent pipeline initialized</text>
        <text x="20" y="200" fill="rgba(16,185,129,0.5)" fontSize="9">✓ RAG index connected (12,847 docs)</text>
        <text x="20" y="214" fill="rgba(16,185,129,0.5)" fontSize="9">✓ Tool registry loaded (8 tools)</text>
        <text x="20" y="228" fill="rgba(139,92,246,0.7)" fontSize="9" fontWeight="600">→ Running compliance check...</text>
        <text x="20" y="242" fill="rgba(249,115,22,0.7)" fontSize="9">⚡ Completed in 18.4s (was 14hrs)</text>
      </svg>
    ),
  },
  {
    tag: "Expert Consulting",
    tagColor: "#F97316",
    headline: "Senior engineers, embedded\nin your team in days",
    body: "The recruitment process for a senior engineer takes 8–16 weeks. We place specialists within 72 hours — engineers who've shipped real products at scale and can contribute from day one without hand-holding.",
    points: ["AI/ML, full-stack, backend & infra", "From 72 hours to first line of code", "Flexible embed, sprint, or retainer"],
    accent: "#F97316",
    illustration: (
      <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 260 }}>
        <defs>
          <linearGradient id="feat2-grad" x1="0" y1="0" x2="340" y2="260">
            <stop offset="0%" stopColor="rgba(249,115,22,0.08)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0.02)" />
          </linearGradient>
        </defs>
        <rect width="340" height="260" rx="16" fill="url(#feat2-grad)" stroke="rgba(249,115,22,0.15)" strokeWidth="1" />
        {/* Team sprint board */}
        <text x="20" y="30" fill="rgba(255,255,255,0.25)" fontSize="10" fontWeight="700" letterSpacing="0.06em">SPRINT BOARD</text>
        <text x="270" y="30" fill="rgba(249,115,22,0.6)" fontSize="10" fontWeight="700">Week 2 of 8</text>
        <rect x="10" y="36" width="320" height="1" fill="rgba(255,255,255,0.04)" />
        {/* Columns */}
        {[
          { x: 15, label: "Backlog", items: ["Auth service", "DB schema", "Rate limits"], itemColor: "rgba(255,255,255,0.1)" },
          { x: 115, label: "In Progress", items: ["ML pipeline", "API endpoints"], itemColor: "rgba(249,115,22,0.12)" },
          { x: 215, label: "Done", items: ["RAG setup", "Data ingestion", "Embeddings"], itemColor: "rgba(16,185,129,0.1)" },
        ].map((col) => (
          <g key={col.x}>
            <text x={col.x + 40} y="58" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontWeight="700">{col.label}</text>
            {col.items.map((item, j) => (
              <g key={j}>
                <rect x={col.x} y={68 + j * 36} width="86" height="28" rx="6" fill={col.itemColor} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <text x={col.x + 43} y={68 + j * 36 + 17} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">{item}</text>
              </g>
            ))}
          </g>
        ))}
        {/* Embedded engineer card */}
        <rect x="10" y="190" width="320" height="58" rx="10" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.2)" strokeWidth="1" />
        <circle cx="38" cy="219" r="14" fill="rgba(249,115,22,0.4)" />
        <text x="38" y="224" textAnchor="middle" fill="white" fontSize="10" fontWeight="800">AR</text>
        <text x="60" y="212" fill="#FAFAFA" fontSize="12" fontWeight="700">Alex Rodriguez</text>
        <text x="60" y="227" fill="rgba(255,255,255,0.35)" fontSize="10">Senior ML Engineer · Embedded Day 1</text>
        <rect x="62" y="233" width="60" height="8" rx="4" fill="rgba(16,185,129,0.3)" />
        <text x="92" y="240" textAnchor="middle" fill="#34D399" fontSize="7" fontWeight="700">● ACTIVE</text>
      </svg>
    ),
  },
];

// ─── LOGO SCROLL ──────────────────────────────────────────────────────────────
const clientLogos = [
  "Meridian Finance", "Axiom Health", "Fluxion Labs", "CartFlo",
  "Veloz Logistics", "StackCraft", "NovaPay", "Helios AI",
  "Meridian Finance", "Axiom Health", "Fluxion Labs", "CartFlo",
  "Veloz Logistics", "StackCraft", "NovaPay", "Helios AI",
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ paddingTop: 68 }}>

      {/* ════════════════════════════════ HERO ════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "calc(100vh - 68px)", display: "flex", alignItems: "center" }}>
        {/* Background */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.15) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        {/* Decorative orbs */}
        <div style={{ position: "absolute", top: "15%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)", animation: "float-slow 8s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.07), transparent 70%)", animation: "float-slow 10s 2s ease-in-out infinite", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px", position: "relative", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">

            {/* Left */}
            <div style={{ animation: "slide-up 0.7s ease-out forwards" }}>
              {/* Badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", borderRadius: 100, padding: "5px 14px", marginBottom: 28 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981", animation: "pulse-glow 2s ease-in-out infinite" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#A78BFA", letterSpacing: "0.06em", textTransform: "uppercase" }}>Available for new projects</span>
              </div>

              {/* Headline */}
              <h1 style={{ fontSize: "clamp(40px, 5.5vw, 64px)", fontWeight: 900, lineHeight: 1.04, letterSpacing: "-0.045em", marginBottom: 20 }}>
                Build the product.
                <br />
                <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 35%, #F97316 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 4s linear infinite" }}>
                  Scale the team.
                </span>
              </h1>

              <p style={{ fontSize: 18, color: "#A1A1AA", lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
                End-to-end product development and on-demand engineering talent. We ship AI systems, automation pipelines, and complex products — or embed directly into your team.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
                <Link href="/services/development"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "linear-gradient(135deg,#8B5CF6,#7C3AED)", color: "white", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(139,92,246,0.35)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(139,92,246,0.5)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(139,92,246,0.35)"; }}>
                  Build My Product
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/services/consulting"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "rgba(249,115,22,0.1)", color: "#FB923C", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(249,115,22,0.3)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(249,115,22,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(249,115,22,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  Get Expert Help
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>

              {/* Social proof strip */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex" }}>
                  {[["SC", "#8B5CF6"], ["MW", "#F97316"], ["PN", "#10B981"], ["AR", "#3B82F6"]].map(([initials, color], i) => (
                    <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", background: color as string, border: "2px solid #06060E", marginLeft: i === 0 ? 0 : -10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: "white" }}>{initials}</div>
                  ))}
                </div>
                <div>
                  <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
                    {[0,1,2,3,4].map(i => <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#F97316"><path d="M6 1L7.545 4.09L11 4.545L8.5 7L9.09 10.5L6 8.91L2.91 10.5L3.5 7L1 4.545L4.455 4.09L6 1Z" /></svg>)}
                  </div>
                  <span style={{ fontSize: 12, color: "#71717A" }}>Trusted by <strong style={{ color: "#A1A1AA" }}>40+ companies</strong></span>
                </div>
              </div>
            </div>

            {/* Right: animated diagram */}
            <div style={{ animation: "fade-in 1s 0.3s ease-out both" }} className="hero-diagram">
              <HeroFlowDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ LOGO SCROLL ════════════════════════════ */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "24px 0", background: "rgba(255,255,255,0.015)", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 0 }}>
          <div style={{ display: "flex", gap: 0, animation: "marquee 28s linear infinite", flexShrink: 0 }}>
            {clientLogos.map((name, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 36px", borderRight: "1px solid rgba(255,255,255,0.04)", flexShrink: 0 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ["#8B5CF6", "#F97316", "#10B981", "#3B82F6"][i % 4] }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.2)", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ STATS ════════════════════════════════ */}
      <section style={{ padding: "72px 0", background: "var(--bg-surface)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }} className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} style={{ padding: "32px 24px", textAlign: "center", background: "var(--bg-card)", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(139,92,246,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-card)")}>
                <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.05em", background: "linear-gradient(135deg, #A78BFA, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 6 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: "#52525B", fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ BEFORE / AFTER ════════════════════════════ */}
      <section style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#52525B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>The ProCode Difference</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              From scattered to{" "}
              <span style={{ background: "linear-gradient(135deg,#A78BFA,#F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>shipped</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 0, alignItems: "center" }} className="before-after-grid">
            {/* Before */}
            <div style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 28, transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,99,99,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,99,99,0.12)", border: "1px solid rgba(255,99,99,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2L10 10M10 2L2 10" stroke="rgba(255,99,99,0.8)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,99,99,0.7)" }}>Before ProCode</span>
              </div>
              <BeforeAfterIllustration type="before" />
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Months of back-and-forth with agencies", "Juniors billed as seniors", "No ownership, no accountability", "Projects that outlive their budget"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#52525B" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3L11 11M11 3L3 11" stroke="rgba(255,99,99,0.5)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* VS divider */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <div style={{ width: 1, flex: 1, background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.3), transparent)" }} />
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#A78BFA" }}>VS</div>
              <div style={{ width: 1, flex: 1, background: "linear-gradient(to bottom, transparent, rgba(249,115,22,0.3), transparent)" }} />
            </div>

            {/* After */}
            <div style={{ background: "rgba(139,92,246,0.03)", border: "1px solid rgba(139,92,246,0.15)", borderRadius: 16, padding: 28, transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.15)")}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#A78BFA" }}>With ProCode</span>
              </div>
              <BeforeAfterIllustration type="after" />
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Scoped proposal within 24 hours", "Senior engineers only, always", "Clear timelines and weekly demos", "IP yours on day one of launch"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#A1A1AA" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(139,92,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#A78BFA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURE SECTIONS ══════════════════════════════ */}
      {features.map((feat, idx) => (
        <section key={idx} style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", background: idx % 2 === 1 ? "var(--bg-surface)" : "transparent" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: idx % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: 64, alignItems: "center" }} className="feat-grid">

              {/* Text — alternates sides */}
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${feat.accent}15`, border: `1px solid ${feat.accent}35`, borderRadius: 100, padding: "4px 12px", marginBottom: 22 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: feat.accent }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: feat.tagColor, letterSpacing: "0.06em", textTransform: "uppercase" }}>{feat.tag}</span>
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.12, marginBottom: 16, whiteSpace: "pre-line" }}>
                  {feat.headline}
                </h2>
                <p style={{ fontSize: 16, color: "#A1A1AA", lineHeight: 1.72, marginBottom: 28, maxWidth: 440 }}>{feat.body}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {feat.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "#FAFAFA" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${feat.accent}18`, border: `1px solid ${feat.accent}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke={feat.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href={idx === 0 ? "/services/development" : "/services/consulting"}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: `${feat.accent}15`, border: `1px solid ${feat.accent}35`, color: feat.tagColor, borderRadius: 9, fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = `${feat.accent}25`; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = `${feat.accent}15`; e.currentTarget.style.transform = "translateY(0)"; }}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>

              {/* Illustration */}
              <div style={{ order: idx % 2 === 0 ? 2 : 1, borderRadius: 16, overflow: "hidden" }} className="feat-illustration">
                {feat.illustration}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════ CASE STUDIES STRIP ═══════════════════════════ */}
      <section style={{ padding: "96px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#52525B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Results</div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1 }}>Work that speaks for itself</h2>
            </div>
            <Link href="/work"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: "#8B5CF6", textDecoration: "none", transition: "gap 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}>
              View all case studies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="cases-grid">
            {featuredCases.map((cs) => (
              <div key={cs.company}
                style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 16, transition: "all 0.25s", cursor: "default" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cs.accent}40`; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${cs.accent}12`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                {/* Top: company + tag */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: "#FAFAFA" }}>{cs.company}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: cs.accent, background: `${cs.accent}15`, border: `1px solid ${cs.accent}30`, padding: "2px 8px", borderRadius: 100 }}>{cs.tag}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.6 }}>{cs.desc}</p>
                </div>
                {/* Metric */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-0.04em", color: cs.accent }}>{cs.metric}</span>
                  <span style={{ fontSize: 13, color: "#52525B" }}>{cs.metricLabel}</span>
                </div>
                <p style={{ fontSize: 13, color: "#71717A", lineHeight: 1.5, fontStyle: "italic" }}>&ldquo;{cs.result}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TECH STACK GRID ══════════════════════════════ */}
      <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", background: "var(--bg-surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#52525B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Technology</div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 12 }}>
              Plug into{" "}
              <span style={{ background: "linear-gradient(135deg,#A78BFA,#F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>any stack</span>
            </h2>
            <p style={{ fontSize: 16, color: "#71717A", maxWidth: 400, margin: "0 auto" }}>
              We work across the modern AI and engineering ecosystem — no tech lock-in, no ramp-up tax.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", maxWidth: 900, margin: "0 auto" }}>
            {techItems.map((tech, i) => (
              <div key={tech.name}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", background: "var(--bg-elevated)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, transition: "all 0.2s", cursor: "default", animation: `fade-in 0.5s ${i * 0.03}s ease-out both` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${tech.dot}50`; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = `${tech.dot}08`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--bg-elevated)"; }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: tech.dot, boxShadow: `0 0 6px ${tech.dot}60` }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#A1A1AA" }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ══════════════════════════════ */}
      <section style={{ padding: "96px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#52525B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Client Feedback</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, letterSpacing: "-0.04em" }}>
              Don&apos;t take our word for it
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name}
                style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 20, transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                {/* Stars */}
                <div style={{ display: "flex", gap: 3 }}>
                  {[0,1,2,3,4].map(i => <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F97316"><path d="M7 1L8.8 5.27L13.5 5.73L10.25 8.77L11.22 13.5L7 10.7L2.78 13.5L3.75 8.77L0.5 5.73L5.2 5.27L7 1Z" /></svg>)}
                </div>
                <p style={{ fontSize: 15, color: "#A1A1AA", lineHeight: 1.72, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "white", flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#FAFAFA" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#52525B" }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ FINAL CTA ══════════════════════════════ */}
      <section style={{ padding: "96px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: 24, padding: "80px 48px", textAlign: "center", background: "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(12,12,26,0.8) 50%, rgba(249,115,22,0.08) 100%)", border: "1px solid rgba(139,92,246,0.2)" }}>
            {/* BG dot pattern */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.07) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            {/* Decorative rings */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(139,92,246,0.08)", animation: "spin-slow 25s linear infinite" }} />
            <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(249,115,22,0.06)", animation: "spin-slow 30s reverse linear infinite" }} />

            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Get Started</div>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.06, marginBottom: 18 }}>
                Ready to build
                <br />
                <span style={{ background: "linear-gradient(135deg,#A78BFA,#8B5CF6,#F97316)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 4s linear infinite" }}>
                  something?
                </span>
              </h2>
              <p style={{ fontSize: 18, color: "#A1A1AA", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.65 }}>
                Tell us what you need. We respond within one business day with a clear plan and honest pricing.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px", background: "linear-gradient(135deg,#8B5CF6,#7C3AED)", color: "white", borderRadius: 12, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 24px rgba(139,92,246,0.4)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(139,92,246,0.55)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(139,92,246,0.4)"; }}>
                  Let&apos;s Talk
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9H15M10 4.5L15 9L10 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/work"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 36px", background: "rgba(255,255,255,0.04)", color: "#FAFAFA", borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-diagram { display: none !important; }
          .before-after-grid { grid-template-columns: 1fr !important; }
          .before-after-grid > div:nth-child(2) { display: none !important; }
          .feat-grid { grid-template-columns: 1fr !important; }
          .feat-illustration { order: 1 !important; }
          .feat-grid > div:first-child { order: 2 !important; }
          .cases-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
