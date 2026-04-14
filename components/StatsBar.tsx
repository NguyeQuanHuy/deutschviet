"use client";

const stats = [
  { number: "12.000+", label: "học viên người Việt" },
  { number: "850+", label: "bài học tình huống thực tế" },
  { number: "4.9 ★", label: "đánh giá trung bình" },
  { number: "93%", label: "đậu kỳ thi TELC / Goethe" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "white", borderTop: "1px solid var(--sky-100)", borderBottom: "1px solid var(--sky-100)", padding: "2.5rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <p className="font-display" style={{ fontSize: "2.2rem", fontWeight: 500, color: "var(--sky-700)", marginBottom: 4 }}>
                {s.number}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}