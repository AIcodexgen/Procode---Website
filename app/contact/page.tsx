"use client";

import { useState } from "react";
import { ArrowRight, MailIcon, CalendarIcon, CheckIcon } from "@/components/Icons";

const ContactIllustration = () => (
  <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxHeight: 320 }}>
    <defs>
      <pattern id="contact-dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="rgba(99,102,241,0.1)" />
      </pattern>
    </defs>
    <rect width="420" height="320" fill="url(#contact-dots)" />

    {/* Central envelope / message flow */}
    <rect x="90" y="80" width="240" height="160" rx="16" fill="rgba(14,18,32,0.8)" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" />

    {/* Email lines */}
    <rect x="110" y="110" width="160" height="8" rx="4" fill="rgba(99,102,241,0.4)" />
    <rect x="110" y="126" width="120" height="6" rx="3" fill="rgba(255,255,255,0.07)" />
    <rect x="110" y="142" width="140" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
    <rect x="110" y="158" width="100" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
    <rect x="110" y="174" width="130" height="6" rx="3" fill="rgba(255,255,255,0.05)" />

    {/* Send button indicator */}
    <rect x="110" y="200" width="80" height="24" rx="6" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.35)" strokeWidth="1" />
    <text x="150" y="217" textAnchor="middle" fill="#818CF8" fontSize="11" fontWeight="700">Send</text>

    {/* Check mark bubble (response) */}
    <circle cx="330" cy="120" r="32" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5" />
    <path d="M318 120L325 127L342 113" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Clock bubble (timing) */}
    <circle cx="90" cy="230" r="28" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
    <circle cx="90" cy="230" r="14" stroke="rgba(99,102,241,0.4)" strokeWidth="1" fill="none" />
    <path d="M90 223V230L95 235" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="90" y="272" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="9" fontWeight="600">1 business day</text>

    {/* Calendar bubble */}
    <circle cx="340" cy="240" r="28" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
    <rect x="328" y="232" width="24" height="20" rx="3" stroke="rgba(139,92,246,0.5)" strokeWidth="1" fill="none" />
    <path d="M328 237H352" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
    <path d="M333 229V233M347 229V233" stroke="rgba(139,92,246,0.5)" strokeWidth="1" strokeLinecap="round" />
    <text x="340" y="272" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="9" fontWeight="600">Book a call</text>

    {/* Connector lines */}
    <line x1="330" y1="152" x2="310" y2="168" stroke="rgba(16,185,129,0.15)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="118" y1="216" x2="112" y2="202" stroke="rgba(99,102,241,0.15)" strokeWidth="1" strokeDasharray="4 3" />
  </svg>
);

const quickFaqs = [
  {
    q: "How quickly will you respond?",
    a: "Within 1 business day, always. Usually much faster.",
  },
  {
    q: "What if I don't have a clear brief yet?",
    a: "That's fine. The discovery call is for figuring that out together.",
  },
  {
    q: "Do you work with early-stage companies?",
    a: "Yes. We work with everyone from seed-stage founders to Series C engineering teams.",
  },
];

const devFields = [
  { id: "projectType", label: "What are you building?", type: "select", placeholder: "", options: ["SaaS / Web Application", "AI / LangChain System", "Automation Pipeline", "API / Integration", "Mobile App", "Other"] },
  { id: "timeline", label: "When do you want to start?", type: "select", placeholder: "", options: ["Immediately", "Within 2 weeks", "Within a month", "Planning phase"] },
  { id: "budget", label: "Approximate budget range", type: "select", placeholder: "", options: ["Under $15,000", "$15,000 – $40,000", "$40,000 – $100,000", "$100,000+", "Not sure yet"] },
];

const consultFields = [
  { id: "expertiseNeeded", label: "What expertise do you need?", type: "select", placeholder: "", options: ["AI / ML Engineer", "Full-Stack Engineer", "Backend Engineer", "Frontend Engineer", "DevOps / Infra", "Not sure — let's talk"] },
  { id: "engagement", label: "Preferred engagement type", type: "select", placeholder: "", options: ["Full-Time Embed", "Part-Time", "Short Sprint (2–6 weeks)", "Long-Term Retainer"] },
  { id: "startDate", label: "When do you need them?", type: "select", placeholder: "", options: ["ASAP", "Within 1 week", "Within 2 weeks", "This month"] },
];

export default function ContactPage() {
  const [serviceType, setServiceType] = useState<"development" | "consulting">("development");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const dynamicFields = serviceType === "development" ? devFields : consultFields;

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "80px 0 60px",
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
            Get a Quote
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              marginBottom: 16,
              maxWidth: 560,
            }}
          >
            Let&apos;s build something together
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", maxWidth: 480, lineHeight: 1.65 }}>
            Fill in the form and we&apos;ll respond within one business day. No automated screening — a real person reads every message.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="contact-grid">

            {/* LEFT: Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: 16,
                    padding: 48,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.12)",
                      border: "2px solid rgba(16,185,129,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                      color: "#10B981",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M6 14L11 19L22 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>
                    Message received
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    We&apos;ll get back to you within one business day. If your need is urgent, email us directly at{" "}
                    <a href="mailto:hello@procode.dev" style={{ color: "#6366F1" }}>hello@procode.dev</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 16,
                      padding: "36px 32px",
                    }}
                  >
                    <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 28 }}>
                      Tell us about your project
                    </h2>

                    {/* Service type toggle */}
                    <div style={{ marginBottom: 24 }}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 10 }}>
                        What do you need?
                      </label>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border)",
                          borderRadius: 10,
                          padding: 4,
                        }}
                      >
                        {(["development", "consulting"] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setServiceType(type)}
                            style={{
                              padding: "10px 16px",
                              borderRadius: 7,
                              border: "none",
                              background: serviceType === type ? "#6366F1" : "transparent",
                              color: serviceType === type ? "white" : "var(--text-secondary)",
                              fontWeight: 700,
                              fontSize: 14,
                              cursor: "pointer",
                              transition: "background 0.15s, color 0.15s",
                            }}
                          >
                            {type === "development" ? "Build a Product" : "Hire an Expert"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Base fields */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                        <div>
                          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 7 }}>
                            First name
                          </label>
                          <input type="text" placeholder="Alex" required />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 7 }}>
                            Last name
                          </label>
                          <input type="text" placeholder="Chen" required />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 7 }}>
                          Work email
                        </label>
                        <input type="email" placeholder="you@company.com" required />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 7 }}>
                          Company
                        </label>
                        <input type="text" placeholder="Acme Inc." />
                      </div>

                      {/* Dynamic fields */}
                      {dynamicFields.map((field) => (
                        <div key={field.id}>
                          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 7 }}>
                            {field.label}
                          </label>
                          {field.type === "select" ? (
                            <select>
                              <option value="">Select an option...</option>
                              {field.options?.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : (
                            <input type={field.type} placeholder={field.placeholder} />
                          )}
                        </div>
                      ))}

                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 7 }}>
                          Tell us more
                        </label>
                        <textarea
                          rows={4}
                          placeholder={
                            serviceType === "development"
                              ? "Describe the product you want to build, the problem it solves, and any specific requirements..."
                              : "Describe the role, the team setup, the challenge you're trying to solve, and any technical context..."
                          }
                          style={{ resize: "vertical" }}
                        />
                      </div>

                      <button
                        type="submit"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          padding: "14px 28px",
                          background: "#6366F1",
                          color: "white",
                          border: "none",
                          borderRadius: 8,
                          fontWeight: 700,
                          fontSize: 15,
                          cursor: "pointer",
                          transition: "background 0.15s, transform 0.1s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#818CF8";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#6366F1";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        Send Message <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT: Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {/* Illustration */}
              <ContactIllustration />

              {/* Response promise */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: 12,
                  padding: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(16,185,129,0.1)",
                    color: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CalendarIcon size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>We respond within 1 business day</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Usually much sooner. Every message is read by a person.</div>
                </div>
              </div>

              {/* Direct contact */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16 }}>
                  Direct Contact
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <a
                    href="mailto:hello@procode.dev"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    <MailIcon size={16} />
                    hello@procode.dev
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.333 2H2.667C2.3 2 2 2.3 2 2.667v10.666C2 13.7 2.3 14 2.667 14h10.666C13.7 14 14 13.7 14 13.333V2.667C14 2.3 13.7 2 13.333 2zM5.667 11.667H4.333V6.667h1.334v5zM5 5.667a.667.667 0 110-1.334.667.667 0 010 1.334zm6.667 6H10.333v-2.6c0-.6-.01-1.367-.833-1.367-.833 0-.967.65-.967 1.325v2.642H7.2V6.667h1.266v.683h.017c.175-.333.608-.683 1.25-.683 1.333 0 1.583.875 1.583 2.017l-.017 2.983z" />
                    </svg>
                    linkedin.com/company/procode
                  </a>
                </div>
              </div>

              {/* Quick FAQ */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16 }}>
                  Quick Answers
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {quickFaqs.map((faq) => (
                    <div key={faq.q}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
                        <div style={{ color: "#6366F1", marginTop: 2, flexShrink: 0 }}>
                          <CheckIcon size={12} />
                        </div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{faq.q}</div>
                      </div>
                      <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.55, paddingLeft: 20 }}>{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        input, textarea, select {
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 14px;
          width: 100%;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
          font-family: inherit;
        }
        input:focus, textarea:focus, select:focus {
          border-color: rgba(99,102,241,0.5);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.08);
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted);
        }
        select option {
          background: #151929;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
