
import type { Metadata } from "next";
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
  title: "AutoDev.Life | No-Code Full Stack Website & App Builder",
  description: "Build professional web and mobile applications without coding. AutoDev.Life empowers creators to develop full stack solutions with AI-powered no-code tools.",
  keywords: ["no-code", "web development", "app builder", "full stack", "website builder", "no-code platform", "autodev", "low code", "AI development", "mobile app", "web app", "software development", "technology", "innovation","ai builder","bolt.new","autodev.life","lovable"],
  authors: [{ name: "AutoDev.Life Team" }],
  generator: "Next.js",
  applicationName: "AutoDev.Life",
  metadataBase: new URL("https://autodev.life"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AutoDev.Life | No-Code Full Stack Website & App Builder",
    description: "Build professional web and mobile applications without coding. AutoDev.Life empowers creators to develop full stack solutions with AI-powered no-code tools.",
    url: "https://autodev.life",
    siteName: "AutoDev.Life",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // You'll need to create this image in your public folder
        width: 1200,
        height: 630,
        alt: "AutoDev.Life - No-Code Full Stack Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoDev.Life | No-Code Full Stack Website & App Builder",
    description: "Build professional web and mobile applications without coding with our AI-powered no-code platform.",
    images: ["/twitter-image.png"], // You'll need to create this image in your public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}