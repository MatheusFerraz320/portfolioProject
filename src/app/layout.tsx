import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Matheus Ferraz | Full-Stack Developer",
  description:
    "Portfolio de Matheus Ferraz — Desenvolvedor Full-Stack especializado em React, Node.js e TypeScript. De Policial Militar a Dev.",
  openGraph: {
    title: "Matheus Ferraz | Full-Stack Developer",
    description:
      "Desenvolvedor Full-Stack especializado em React, Node.js e TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
