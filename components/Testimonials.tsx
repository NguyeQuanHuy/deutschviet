"use client";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Thị Lan",
    role: "Sống tại München, 2 năm",
    avatar: "NL",
    avatarBg: "#bae6fd",
    avatarColor: "#0369a1",
    text: "Trước đây tôi sợ nhất là ra Amt. Sau 3 tháng học với DeutschViet, tôi đã tự đi làm thủ tục Kindergeld mà không cần ai đi cùng!",
    stars: 5,
    tag: "Behörde",
  },
  {
    name: "Trần Văn Minh",
    role: "Sống tại Berlin, 1 năm",
    avatar: "TM",
    avatarBg: "#d1fae5",
    avatarColor: "#065f46",
    text: "AI tutor giải thích ngữ pháp bằng tiếng Việt, tôi hiểu ngay. Không còn phải tra Google rồi không biết áp dụng như thế nào nữa.",
    stars: 5,
    tag: "AI Tutor",
  },
  {
    name: "Phạm Thị Hoa",
    role: "Sống tại Hamburg, 3 năm",
    avatar: "PH",
    avatarBg: "#fce7f3",
    avatarColor: "#9d174d",
    text: "Tính năng đọc thư từ Behörde là số 1. Nhận thư mà không biết làm gì, chụp ảnh lên là AI giải thích rõ ràng, tôi không còn bị trễ hạn nữa.",
    stars: 5,
    tag: "Giấy tờ Đức",
  },
  {
    name: "Lê Quang Hùng",
    role: "Sống tại Frankfurt, 18 tháng",
    avatar: "LH",
    avatarBg: "#fef3c7",
    avatarColor: "#92400e",
    text: "Streak 45 ngày! Trước đây học Duolingo được vài tuần là bỏ, nhưng DeutschViet có bảng xếp hạng người Việt nên cảm giác vui hơn nhiều.",
    stars: 5,
    tag: "Streak 45 ngày",
  },
  {
    name: "Ngô Thị Thu",
    role: "Sống tại Köln, 4 năm",
    avatar: "NT",
    avatarBg: "#ede9fe",
    avatarColor: "#5b21b6",
    text: "Đậu TELC B2 lần đầu! Luyện thi với mock test trên DeutschViet sát đề thật. Đặc biệt phần nghe — AI phân tích điểm yếu từng kỹ năng.",
    stars: 5,
    tag: "Đậu TELC B2",
  },
  {
    name: "Đinh Văn Nam",
    role: "Sống tại Stuttgart, 2 năm",
    avatar: "DN",
    avatarBg: "#ecfdf5",
    avatarColor: "#065f46",
    text: "6.99€/tháng mà bằng cả chục tiếng học với gia sư tư. Tôi học 20–30 phút mỗi ngày trên điện thoại, đi tàu hay trước ngủ đều được.",
    stars: 5,
    tag: "Pro Plan",
  },
];

export default function Testimonials() {
  return (
    <section id="community" style={{ padding: "6rem 0", background: "white" }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            ❤️ Cộng đồng
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, color: "var(--slate-900)", marginBottom: "1rem" }}>
            Người Việt tại Đức{" "}
            <span className="gradient-text">nói gì về chúng tôi</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              {/* Stars */}
              <div style={{ display: "flex", gap: 2, marginBottom: "0.75rem" }}>
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} size={13} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontSize: "0.9rem", color: "var(--slate-600)", lineHeight: 1.7, marginBottom: "1rem" }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: t.avatarBg, color: t.avatarColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: 600,
                }}>
                  {t.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--slate-700)", margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--slate-400)", margin: 0 }}>{t.role}</p>
                </div>
                <span style={{
                  background: "var(--sky-50)", color: "var(--sky-700)",
                  fontSize: "0.68rem", padding: "2px 8px", borderRadius: 99,
                  border: "1px solid var(--sky-200)", fontWeight: 500, whiteSpace: "nowrap",
                }}>
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}