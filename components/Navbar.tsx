"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Tính năng", href: "#features" },
  { label: "Bài học", href: "#lessons" },
  { label: "Học phí", href: "#pricing" },
  { label: "Cộng đồng", href: "#community" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* ─────────────────────────────────────────────────
              LOGO PLACEHOLDER
              Thay dòng dưới bằng:
              <Image src="/logo.svg" alt="DeutschViet" width={140} height={36} />
              hoặc component logo của bạn.
          ───────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2">
            <div style={{
              width: 144, height: 38,
              border: "1.5px dashed #7dd3fc",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(240,249,255,0.8)",
            }}>
              <span style={{ fontSize: 11, color: "#0369a1", fontWeight: 500, letterSpacing: "0.03em" }}>
                ✦ LOGO CỦA BẠN
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} style={{
                fontSize: "0.88rem", color: "var(--slate-600)",
                fontWeight: 400, textDecoration: "none", transition: "color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--sky-600)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--slate-600)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="btn-secondary" style={{ padding: "0.5rem 1.1rem", fontSize: "0.88rem" }}>
              Đăng nhập
            </a>
            <a href="#pricing" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}>
              Học miễn phí
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--slate-700)", background: "none", border: "none", cursor: "pointer" }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.75rem",
        }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1.4rem", color: "var(--slate-700)", fontWeight: 400, textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            <a href="#" className="btn-secondary">Đăng nhập</a>
            <a href="#pricing" className="btn-primary" onClick={() => setMenuOpen(false)}>Học miễn phí</a>
          </div>
        </div>
      )}
    </>
  );
}