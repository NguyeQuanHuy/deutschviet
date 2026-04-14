"use client";
import { MessageSquare, Mic, FileText, BookOpen, Brain, Users } from "lucide-react";

const features = [
  {
    icon: "🏙️",
    iconBg: "#e0f2fe",
    title: "Tình huống thực tế",
    desc: "Học cách nói chuyện tại Jobcenter, Arztpraxis, Supermarkt, Elternabend. Câu mẫu chuẩn với audio native speaker.",
    tag: "A1 → B2",
    tagColor: "#0369a1",
    tagBg: "#e0f2fe",
  },
  {
    icon: "🔁",
    iconBg: "#e0fdf4",
    title: "Flashcard thông minh (SM-2)",
    desc: "Từ sắp quên được ôn trước. Hệ thống spaced repetition tự động — 10 phút/ngày là đủ.",
    tag: "Mỗi ngày",
    tagColor: "#065f46",
    tagBg: "#d1fae5",
  },
  {
    icon: "🎙️",
    iconBg: "#fff7ed",
    title: "Luyện phát âm AI",
    desc: "Ghi âm giọng nói, AI chấm điểm từng âm tiết, gợi ý cải thiện bằng tiếng Việt — không xấu hổ khi nói sai.",
    tag: "AI-powered",
    tagColor: "#9a3412",
    tagBg: "#ffedd5",
  },
  {
    icon: "🤖",
    iconBg: "#eff6ff",
    title: "AI Tutor hội thoại",
    desc: 'Chat thực hành với AI đóng vai nhân viên Amt, bác sĩ, chủ nhà. Sửa lỗi ngữ pháp ngay, giải thích bằng tiếng Việt.',
    tag: "Claude AI",
    tagColor: "#1e40af",
    tagBg: "#dbeafe",
  },
  {
    icon: "📄",
    iconBg: "#fdf4ff",
    title: "Đọc thư từ Behörde",
    desc: "Upload ảnh thư Đức → AI dịch và giải thích hành động cần làm. Không còn sợ thư từ Finanzamt.",
    tag: "OCR + AI",
    tagColor: "#6b21a8",
    tagBg: "#f3e8ff",
  },
  {
    icon: "🏆",
    iconBg: "#fffbeb",
    title: "Streak & Leaderboard",
    desc: "Chuỗi ngày học, bảng xếp hạng theo vùng (Bayern, NRW…), nhiệm vụ ngày. Học mà cảm giác như chơi game.",
    tag: "Gamification",
    tagColor: "#92400e",
    tagBg: "#fef3c7",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "6rem 0", background: "var(--slate-50)" }}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            ✦ Tính năng
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, color: "var(--slate-900)", marginBottom: "1rem" }}>
            Mọi thứ bạn cần để{" "}
            <span className="gradient-text">hòa nhập tại Đức</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--slate-500)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
            Không học tiếng Đức chung chung — học đúng những gì bạn cần dùng ngay ngày mai.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: f.iconBg, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem", marginBottom: "1rem",
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--slate-800)", marginBottom: "0.5rem" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--slate-500)", lineHeight: 1.65, marginBottom: "0.85rem" }}>
                {f.desc}
              </p>
              <span style={{
                display: "inline-block",
                background: f.tagBg, color: f.tagColor,
                fontSize: "0.72rem", fontWeight: 600,
                padding: "3px 10px", borderRadius: 99,
              }}>
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}