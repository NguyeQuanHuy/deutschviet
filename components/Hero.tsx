"use client";
import { ArrowRight, Play, Flame, Star, Users } from "lucide-react";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "5rem" }}>
      
      {/* Background blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div className="animate-blob" style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div className="animate-blob" style={{
          position: "absolute", bottom: "0%", left: "-8%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animationDelay: "4s",
        }} />
        <div style={{
          position: "absolute", top: "30%", left: "40%",
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          
          {/* Left: copy */}
          <div>
            <div className="animate-fadeUp" style={{ marginBottom: "1.25rem" }}>
              <span className="section-tag">
                <Flame size={12} color="#f59e0b" fill="#f59e0b" />
                Hơn 12.000 người Việt đang học
              </span>
            </div>

            <h1 className="animate-fadeUp delay-100 font-display" style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              fontWeight: 500,
              lineHeight: 1.15,
              color: "var(--slate-900)",
              marginBottom: "1.5rem",
            }}>
              Tiếng Đức{" "}
              <span className="gradient-text">dành riêng</span>
              <br />cho người Việt
              <br />tại Đức
            </h1>

            <p className="animate-fadeUp delay-200" style={{
              fontSize: "1.1rem",
              color: "var(--slate-500)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: 460,
            }}>
              Học qua tình huống thực tế — từ Jobcenter đến bác sĩ, từ hàng xóm đến hợp đồng thuê nhà. 
              AI tutor giải thích bằng tiếng Việt, không bao giờ nhàm chán.
            </p>

            <div className="animate-fadeUp delay-300" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <a href="#pricing" className="btn-primary" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>
                Bắt đầu miễn phí
                <ArrowRight size={16} />
              </a>
              <button className="btn-secondary" style={{ fontSize: "1rem", padding: "0.85rem 1.75rem" }}
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}>
                <Play size={15} fill="currentColor" />
                Xem demo
              </button>
            </div>

            {/* Social proof */}
            <div className="animate-fadeUp delay-400" style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ display: "flex" }}>
                  {["#f59e0b","#f59e0b","#f59e0b","#f59e0b","#f59e0b"].map((c, i) => (
                    <Star key={i} size={14} fill={c} color={c} style={{ marginLeft: i > 0 ? -2 : 0 }} />
                  ))}
                </div>
                <span style={{ fontSize: "0.85rem", color: "var(--slate-600)", fontWeight: 500 }}>4.9 / 5</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ display: "flex" }}>
                  {[0,1,2,3].map(i => (
                    <div key={i} style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: ["#bae6fd","#7dd3fc","#38bdf8","#0ea5e9"][i],
                      border: "2px solid white",
                      marginLeft: i > 0 ? -8 : 0,
                    }} />
                  ))}
                </div>
                <span style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>12.000+ học viên</span>
              </div>
            </div>
          </div>

          {/* Right: floating card mockup */}
          <div className="hidden md:block animate-fadeUp delay-300" style={{ position: "relative" }}>
            <div className="animate-float" style={{ position: "relative" }}>
              
              {/* Main card: flashcard */}
              <div style={{
                background: "white",
                borderRadius: 24,
                border: "1px solid var(--sky-100)",
                padding: "2rem",
                boxShadow: "0 20px 60px rgba(14,165,233,0.12), 0 4px 16px rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--slate-400)", fontWeight: 500 }}>Tình huống hôm nay</span>
                  <span style={{
                    background: "var(--sky-50)", color: "var(--sky-700)",
                    padding: "3px 10px", borderRadius: 99, fontSize: "0.75rem", fontWeight: 500,
                    border: "1px solid var(--sky-200)",
                  }}>Behörde · A2</span>
                </div>

                <div style={{
                  background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                  borderRadius: 16, padding: "1.5rem", marginBottom: "1.25rem", textAlign: "center",
                }}>
                  <p className="font-display" style={{ fontSize: "1.5rem", color: "var(--sky-800)", marginBottom: 6 }}>
                    Ich brauche Hilfe
                  </p>
                  <p style={{ fontSize: "1rem", color: "var(--teal-600)", fontWeight: 500 }}>
                    Tôi cần sự giúp đỡ
                  </p>
                </div>

                {/* Answer choices */}
                {[
                  { de: "mit meinem Antrag", vi: "với đơn xin của tôi", correct: true },
                  { de: "beim Supermarkt", vi: "ở siêu thị", correct: false },
                ].map((opt, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10, padding: "0.65rem 1rem",
                    borderRadius: 12, marginBottom: 8,
                    background: opt.correct ? "rgba(14,165,233,0.08)" : "var(--slate-50)",
                    border: opt.correct ? "1.5px solid var(--sky-300)" : "1px solid var(--slate-100)",
                    cursor: "pointer",
                  }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: opt.correct ? "var(--sky-500)" : "transparent",
                      border: opt.correct ? "none" : "1.5px solid var(--slate-300)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {opt.correct && <span style={{ color: "white", fontSize: 11 }}>✓</span>}
                    </div>
                    <div>
                      <span style={{ fontSize: "0.88rem", color: "var(--slate-700)", fontWeight: 500 }}>{opt.de} </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--slate-400)" }}>— {opt.vi}</span>
                    </div>
                  </div>
                ))}

                {/* Progress */}
                <div style={{ marginTop: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--slate-400)" }}>Tiến độ hôm nay</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--sky-600)", fontWeight: 500 }}>7 / 10</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "70%" }} />
                  </div>
                </div>
              </div>

              {/* Floating badge: streak */}
              <div style={{
                position: "absolute", top: -16, right: -20,
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                color: "white", borderRadius: 14, padding: "0.6rem 1rem",
                boxShadow: "0 6px 20px rgba(245,158,11,0.35)",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <Flame size={16} fill="white" color="white" />
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>15 ngày</span>
              </div>

              {/* Floating badge: AI */}
              <div style={{
                position: "absolute", bottom: -18, left: -20,
                background: "white",
                border: "1px solid var(--sky-100)",
                borderRadius: 14, padding: "0.65rem 1rem",
                boxShadow: "0 8px 24px rgba(14,165,233,0.1)",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, var(--sky-400), var(--teal-400))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 13 }}>🤖</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", color: "var(--slate-400)", margin: 0 }}>AI Tutor</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--slate-700)", fontWeight: 500, margin: 0 }}>Đang phân tích...</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 42 1080 40C1200 38 1320 28 1380 22L1440 16V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}