"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LogoMark = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect width="30" height="30" rx="7" fill="url(#logo-grad)" />
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="30" y2="30">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
    </defs>
    <path d="M8 11L13 15.5L8 20" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 19.5H22" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const navLinks = [
  {
    label: "Services",
    children: [
      { label: "ProCode Development", href: "/services/development", desc: "Build products, AI systems & automation" },
      { label: "Expert Consulting", href: "/services/consulting", desc: "Embedded senior engineers on demand" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(6,6,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <LogoMark />
            <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.04em", color: "#FAFAFA" }}>
              Pro<span style={{ background: "linear-gradient(135deg,#A78BFA,#F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Code</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden md:flex">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    style={{
                      display: "flex", alignItems: "center", gap: 5,
                      padding: "8px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                      color: servicesOpen ? "#FAFAFA" : "#A1A1AA",
                      background: "transparent", border: "none", cursor: "pointer",
                      transition: "color 0.15s",
                    }}
                  >
                    {item.label}
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ transition: "transform 0.15s", transform: servicesOpen ? "rotate(180deg)" : "none" }}>
                      <path d="M2 4L5.5 7.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)",
                      background: "#0F0F20", border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 14, padding: 8, minWidth: 290,
                      boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(139,92,246,0.1)",
                    }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href} href={child.href}
                          style={{ display: "block", padding: "12px 16px", borderRadius: 10, textDecoration: "none", transition: "background 0.15s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(139,92,246,0.1)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <div style={{ fontWeight: 700, fontSize: 14, color: "#FAFAFA", marginBottom: 3 }}>{child.label}</div>
                          <div style={{ fontSize: 12, color: "#71717A" }}>{child.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label} href={item.href!}
                  style={{
                    padding: "8px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                    color: isActive(item.href!) ? "#FAFAFA" : "#A1A1AA",
                    textDecoration: "none", transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAFA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive(item.href!) ? "#FAFAFA" : "#A1A1AA")}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden md:flex">
            <Link href="/contact" style={{ padding: "9px 18px", fontSize: 13, fontWeight: 600, color: "#A1A1AA", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAFA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A1A1AA")}>
              Sign in
            </Link>
            <Link
              href="/contact"
              style={{
                padding: "9px 20px", fontSize: 14, fontWeight: 700,
                background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                color: "white", borderRadius: 9, textDecoration: "none",
                transition: "opacity 0.15s, transform 0.15s, box-shadow 0.2s",
                boxShadow: "0 2px 16px rgba(139,92,246,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(139,92,246,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(139,92,246,0.3)";
              }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", color: "#FAFAFA", cursor: "pointer", padding: 4 }}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0C0C1A", padding: "16px 24px 24px" }} className="md:hidden">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#52525B", textTransform: "uppercase", letterSpacing: "0.08em", padding: "12px 0 6px" }}>{item.label}</div>
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "10px 0", color: "#FAFAFA", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.label} href={item.href!} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "12px 0", color: "#FAFAFA", textDecoration: "none", fontSize: 15, fontWeight: 500, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                {item.label}
              </Link>
            )
          )}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              style={{ display: "block", textAlign: "center", padding: "13px", background: "linear-gradient(135deg,#8B5CF6,#7C3AED)", color: "white", borderRadius: 9, fontWeight: 700, textDecoration: "none" }}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
