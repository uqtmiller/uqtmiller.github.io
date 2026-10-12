import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrain — Dance Study Helper & Exam Practice",
  description: "Interactive study guide for Bangarra Dance Theatre's Terrain (Frances Rings) and dance analysis exam preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-stone-950 text-stone-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
