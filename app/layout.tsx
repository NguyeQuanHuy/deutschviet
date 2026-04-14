import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeutschViet — Học tiếng Đức cho người Việt tại Đức",
  description: "Nền tảng học tiếng Đức thực tế dành riêng cho người Việt sống tại Đức. Vượt qua rào cản ngôn ngữ với AI tutor, tình huống thực tế và cộng đồng người Việt.",
  keywords: "học tiếng Đức, tiếng Đức cho người Việt, Deutsch lernen, TELC, Goethe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
