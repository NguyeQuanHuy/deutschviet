"use client";
import { ArrowRight, Mail, Github, Facebook, Youtube } from "lucide-react";

export function CTABanner() {
  return (
    <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0d9488 100%)", position: "relative", overflow: "hidden" }}>
      {/* Blobs */}
      <div style={{ position: "absolute", top: "-30%", right: "-5%", width: 400, height: 400, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "5%", width: 300, height: 300, background: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />

      <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: "relative" }}>
        <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 500, color: "white", marginBottom: "1rem", lineHeight: 1.2 }}>
          Bắt đầu học hôm nay,<br />miễn phí, không cần thẻ
        </h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.6 }}>
          Tham gia cùng 12.000+ người Việt đang sống và học tiếng Đức mỗi ngày.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <a href="#" style={{
            background: "white", color: "var(--sky-700)",
            padding: "0.85rem 2rem", borderRadius: 12, fontWeight: 600, fontSize: "1rem",
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            transition: "transform 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
            Tạo tài khoản miễn phí
            <ArrowRight size={16} />
          </a>
        </div>

        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>
          ✓ Không cần thẻ tín dụng &nbsp;·&nbsp; ✓ Hủy bất cứ lúc nào &nbsp;·&nbsp; ✓ 7 ngày dùng thử Pro miễn phí
        </p>
      </div>
    </section>
  );
}

const footerLinks = {
  "Học tập": ["Tính năng", "Bài học", "AI Tutor", "Flashcard", "Mock Test"],
  "Về chúng tôi": ["Câu chuyện", "Blog", "Báo chí", "Tuyển dụng"],
  "Hỗ trợ": ["Trung tâm hỗ trợ", "Liên hệ", "Cộng đồng Discord", "Góp ý"],
  "Pháp lý": ["Điều khoản", "Bảo mật", "Cookie", "Impressum"],
};

export function Footer() {
  return (
    <footer style={{ background: "var(--slate-900)", color: "white", padding: "4rem 0 2rem" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          
          {/* Brand */}
          <div>
            {/* 
              ─────────────────────────────────
              LOGO FOOTER PLACEHOLDER
              Thay bằng logo màu trắng / light của bạn
              ─────────────────────────────────
            */}
            <div style={{
              width: 130, height: 34,
              border: "1.5px dashed rgba(125,211,252,0.4)",
              borderRadius: 8, marginBottom: "1rem",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 10, color: "rgba(125,211,252,0.7)", fontWeight: 500 }}>LOGO (sáng)</span>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-400)", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: 240 }}>
              Nền tảng học tiếng Đức thực tế dành riêng cho người Việt sống tại Đức.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[Facebook, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--slate-400)", transition: "all 0.15s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(14,165,233,0.2)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "var(--slate-400)"; }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--slate-300)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {section}
              </p>
              {links.map((l) => (
                <a key={l} href="#" style={{ display: "block", fontSize: "0.85rem", color: "var(--slate-500)", textDecoration: "none", marginBottom: "0.6rem", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--sky-400)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--slate-500)")}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.8rem", color: "var(--slate-600)" }}>
            © 2025 DeutschViet. Tất cả quyền được bảo lưu.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--slate-600)" }}>
            Làm với ❤️ cho cộng đồng người Việt tại Đức
          </p>
        </div>
      </div>
    </footer>
  );
}