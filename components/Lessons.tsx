"use client";
import { Play, Lock, CheckCircle2, ChevronRight } from "lucide-react";

const categories = [
  { emoji: "🏢", label: "Behörde & Amt", count: 24, color: "#e0f2fe" },
  { emoji: "🏥", label: "Bác sĩ & Y tế", count: 18, color: "#d1fae5" },
  { emoji: "🏠", label: "Thuê nhà & Hàng xóm", count: 16, color: "#ffe4e6" },
  { emoji: "🛒", label: "Mua sắm hàng ngày", count: 20, color: "#fef3c7" },
  { emoji: "👨‍👩‍👧", label: "Trường học & Trẻ em", count: 14, color: "#f3e8ff" },
  { emoji: "💼", label: "Công việc & Nghề nghiệp", count: 22, color: "#ecfdf5" },
];

const sampleLessons = [
  { title: "Đặt hẹn tại Jobcenter", level: "A2", done: true, mins: 8 },
  { title: "Điền đơn Elterngeld", level: "B1", done: true, mins: 12 },
  { title: "Gọi điện cho bác sĩ", level: "A2", done: false, mins: 7, current: true },
  { title: "Hiểu hóa đơn tiền điện", level: "B1", done: false, mins: 10 },
  { title: "Nói chuyện với chủ nhà", level: "A2", done: false, mins: 9, locked: true },
];

export default function Lessons() {
  return (
    <section id="lessons" style={{ padding: "6rem 0", background: "white" }}>
      <div className="max-w-6xl mx-auto px-6">
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          
          {/* Left */}
          <div>
            <span className="section-tag" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
              📚 Nội dung bài học
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 500, color: "var(--slate-900)", marginBottom: "1rem", lineHeight: 1.25 }}>
              850+ bài học{" "}
              <span className="gradient-text">theo tình huống</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--slate-500)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Mỗi bài học xây dựng quanh một tình huống thực tế tại Đức. Học xong là dùng được ngay — không học lý thuyết suông.
            </p>

            {/* Categories */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem", marginBottom: "2rem" }}>
              {categories.map((c, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "0.65rem 1rem",
                  background: c.color,
                  borderRadius: 12, cursor: "pointer",
                  transition: "transform 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateX(3px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateX(0)")}>
                  <span style={{ fontSize: "1.1rem" }}>{c.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--slate-700)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.label}</p>
                    <p style={{ fontSize: "0.72rem", color: "var(--slate-400)", margin: 0 }}>{c.count} bài</p>
                  </div>
                  <ChevronRight size={13} color="var(--slate-400)" />
                </div>
              ))}
            </div>

            <a href="#pricing" className="btn-primary">
              Xem tất cả bài học
              <ChevronRight size={15} />
            </a>
          </div>

          {/* Right: lesson list mockup */}
          <div>
            <div style={{
              background: "white",
              border: "1px solid var(--sky-100)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(14,165,233,0.1)",
            }}>
              {/* Header */}
              <div style={{
                padding: "1.25rem 1.5rem",
                background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", margin: 0 }}>Lộ trình của bạn</p>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "white", margin: 0 }}>Behörde & Amt · A2–B1</p>
                </div>
                <div style={{
                  background: "rgba(255,255,255,0.2)", borderRadius: 99,
                  padding: "4px 12px", fontSize: "0.8rem", color: "white", fontWeight: 500,
                }}>
                  2 / 5 xong
                </div>
              </div>

              {/* Lesson list */}
              <div style={{ padding: "0.5rem 0" }}>
                {sampleLessons.map((l, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "0.9rem 1.5rem",
                    background: l.current ? "rgba(14,165,233,0.05)" : "transparent",
                    borderLeft: l.current ? "3px solid var(--sky-400)" : "3px solid transparent",
                    cursor: l.locked ? "default" : "pointer",
                    opacity: l.locked ? 0.5 : 1,
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: l.done ? "linear-gradient(135deg, var(--sky-400), var(--teal-400))" : l.current ? "var(--sky-100)" : "var(--slate-100)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      {l.done ? <CheckCircle2 size={15} color="white" /> :
                       l.locked ? <Lock size={13} color="var(--slate-400)" /> :
                       <Play size={12} color={l.current ? "var(--sky-600)" : "var(--slate-400)"} fill={l.current ? "var(--sky-600)" : "var(--slate-400)"} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.88rem", fontWeight: l.current ? 600 : 400, color: "var(--slate-700)", margin: 0 }}>{l.title}</p>
                      <p style={{ fontSize: "0.75rem", color: "var(--slate-400)", margin: 0 }}>{l.mins} phút · {l.level}</p>
                    </div>
                    {l.current && (
                      <span style={{
                        background: "var(--sky-500)", color: "white",
                        fontSize: "0.7rem", fontWeight: 600,
                        padding: "2px 9px", borderRadius: 99,
                      }}>Đang học</span>
                    )}
                  </div>
                ))}
              </div>

              {/* XP bar */}
              <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid var(--slate-100)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--slate-400)" }}>XP tuần này</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--sky-600)" }}>340 / 500 XP</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "68%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}