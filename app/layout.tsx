import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mursaleen | Product-minded Developer",
  description: "Portfolio of Mursaleen, product-minded developer.",
  keywords: [
    "Mursaleen",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Product Engineer",
    "Portfolio",
    "Internal Systems",
    "Business Workflow Systems",
  ],
  authors: [{ name: "Mursaleen" }],
  creator: "Mursaleen",
  openGraph: {
    title: "Mursaleen | Product-minded Developer",
    description:
      "Building practical web products that make messy workflows easier to manage.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}