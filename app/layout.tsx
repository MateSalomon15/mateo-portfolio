import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateo Salomon | Frontend Developer",
  description: "Portfolio de Mateo Salomon — Frontend Developer (Next.js, React, TypeScript).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased text-[17px] md:text-[18px] text-white",
          "bg-[#0b0b0f]",
        ].join(" ")}
      >
        {/* radial suave superior */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

        {/* puntitos sutiles */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-40
        [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)]
        [background-size:32px_32px]" />

        {children}
      </body>
    </html>
  );
}