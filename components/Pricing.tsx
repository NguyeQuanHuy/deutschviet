"use client";
import { Check, Zap, ExternalLink } from "lucide-react";

const plans = [
  {
    name: "Miễn phí",
    price: "0€",
    period: "/ tháng",
    desc: "Bắt đầu học ngay, không cần thẻ tín dụng",
    features: [
      "5 bài học / ngày",
      "Flashcard cơ bản",
      "Streak & XP tracking",
      "Forum cộng đồng",
      "Từ điển Việt–Đức",
    ],
    notIncluded: ["AI Tutor hội thoại", "Upload giấy tờ Đức", "Mock test TELC/Goethe"],
    cta: "Học ngay miễn phí",
    featured: false,
  },
  {
    name: "Pro",
    price: "6,99€",
    period: "/ tháng",
    desc: "Dành cho người nghiêm túc muốn hòa nhập nhanh",
    badge: "Phổ biến nhất",
    features: [
      "Bài học không giới hạn",
      "AI Tutor hội thoại 24/7",
      "Luyện phát âm AI",
      "Upload & dịch giấy tờ Đức",
      "Mock test TELC / Goethe",
      "Streak bảo vệ (3 lần / tháng)",
      "Không quảng cáo",
    ],
    cta: "Bắt đầu 7 ngày miễn phí",
    featured: true,
  },
  {
    name: "Luyện thi",
    price: "24,99€",
    period: "/ 3 tháng",
    desc: "Tập trung 100% vào kỳ thi TELC / Goethe",
    features: [
      "Tất cả tính năng Pro",
      "Lộ trình ôn thi cá nhân hóa",
      "Mock exam có chấm điểm chi tiết",
      "Giải đáp 1:1 với gia sư",
      "Chứng chỉ hoàn thành",
      "Hỗ trợ đăng ký thi",
    ],
    cta: "Bắt đầu luyện thi",
    featured: false,
  },
];

// ─── Affiliate / Resource slots ──────────────────────────────
// Đây là khu vực để thêm liên kết affiliate, tài liệu, khóa học đối tác.
// Thay href="#" bằng link affiliate thực tế.
const affiliateItems = [
  {
    emoji: "📘",
    title: "Sách TELC Deutsch B2",
    desc: "Bộ sách luyện thi chính thức, bán chạy nhất",
    price: "ab 18€",
    href: "#",  // ← Thay bằng affiliate link Amazon / Thalia
    tag: "Affiliate",
  },
  {
    emoji: "🎧",
    title: "Khóa Aussprache nâng cao",
    desc: "Luyện giọng chuẩn Hochdeutsch với native speaker",
    price: "39€",
    href: "#",  // ← Thay bằng link khóa học đối tác
    tag: "Khóa học",
  },
  {
    emoji: "📋",
    title: "Bộ flashcard PDF A1–B2",
    desc: "2.000 từ vựng theo chủ đề, download ngay",
    price: "4,99€",
    href: "#",  // ← Thay bằng link bán tài liệu (Gumroad, Digistore...)
    tag: "Tài liệu",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "6rem 0", background: "var(--slate-50)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            💳 Học phí
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, color: "var(--slate-900)", marginBottom: "1rem" }}>
            Rẻ hơn một buổi học gia sư —{" "}
            <span className="gradient-text">giá trị cả tháng</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--slate-500)", maxWidth: 500, margin: "0 auto" }}>
            Hủy bất cứ lúc nào. Không hợp đồng dài hạn.
          </p>
        </div>

        {/* Plan cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "4rem", alignItems: "start" }}>
          {plans.map((p, i) => (
            <div key={i} className={`pricing-card ${p.featured ? "featured" : ""}`} style={{ position: "relative" }}>
              {p.badge && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, var(--sky-500), var(--teal-500))",
                  color: "white", fontSize: "0.75rem", fontWeight: 600,
                  padding: "4px 14px", borderRadius: 99,
                  boxShadow: "0 4px 12px rgba(14,165,233,0.35)",
                  whiteSpace: "nowrap",
                }}>
                  ✦ {p.badge}
                </div>
              )}

              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: p.featured ? "var(--sky-700)" : "var(--slate-500)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {p.name}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                <span className="font-display" style={{ fontSize: "2.4rem", fontWeight: 500, color: "var(--slate-900)" }}>{p.price}</span>
                <span style={{ fontSize: "0.85rem", color: "var(--slate-400)" }}>{p.period}</span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginBottom: "1.5rem", lineHeight: 1.5 }}>{p.desc}</p>

              <div style={{ marginBottom: "1.5rem" }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <Check size={14} color={p.featured ? "var(--sky-500)" : "var(--teal-500)"} strokeWidth={2.5} />
                    <span style={{ fontSize: "0.88rem", color: "var(--slate-600)" }}>{f}</span>
                  </div>
                ))}
                {p.notIncluded?.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, opacity: 0.35 }}>
                    <div style={{ width: 14, height: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 10, height: 1, background: "var(--slate-400)" }} />
                    </div>
                    <span style={{ fontSize: "0.88rem", color: "var(--slate-500)" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="#" className={p.featured ? "btn-primary" : "btn-secondary"}
                style={{ width: "100%", justifyContent: "center", padding: "0.8rem" }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────
            KHOẢNG TRỐNG AFFILIATE / TÀI LIỆU / KHÓA HỌC
            Thêm link affiliate, bán tài liệu, hoặc khóa học đối tác tại đây.
            Mỗi item có slot `href` để bạn chèn link.
        ───────────────────────────────────────────────────────── */}
        <div style={{ borderTop: "1px solid var(--sky-100)", paddingTop: "3rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--slate-700)", marginBottom: 4 }}>
              📦 Tài liệu & khóa học được đề xuất
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--slate-400)" }}>
              Tuyển chọn kỹ — phù hợp để học song song với DeutschViet
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {affiliateItems.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: "none" }}>
                <div style={{
                  background: "white",
                  border: "1px solid var(--slate-100)",
                  borderRadius: 16, padding: "1.25rem",
                  display: "flex", alignItems: "flex-start", gap: "0.85rem",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--sky-200)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(14,165,233,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--slate-100)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 3 }}>
                      <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--slate-700)", margin: 0 }}>{item.title}</p>
                      <ExternalLink size={12} color="var(--slate-400)" style={{ marginLeft: 6, flexShrink: 0, marginTop: 2 }} />
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "var(--slate-400)", margin: 0, marginBottom: 6 }}>{item.desc}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--sky-600)" }}>{item.price}</span>
                      <span style={{
                        background: "var(--sky-50)", color: "var(--sky-700)",
                        fontSize: "0.68rem", fontWeight: 500,
                        padding: "2px 8px", borderRadius: 99,
                        border: "1px solid var(--sky-200)",
                      }}>{item.tag}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--slate-300)", marginTop: "1rem" }}>
            * Một số liên kết có thể là affiliate — DeutschViet nhận hoa hồng nhỏ, không ảnh hưởng giá bạn trả.
          </p>
        </div>

      </div>
    </section>
  );
}