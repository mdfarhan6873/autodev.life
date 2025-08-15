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
  title: "AutoDev.life - AI-Powered No-Code Web Development Platform",
  description: "Build stunning websites and web applications with AutoDev.life's AI-powered no-code editor. Create, deploy, and scale your projects with intelligent assistance and cutting-edge technology.",
  keywords: [
    "no-code",
    "AI development",
    "web development",
    "agentic AI",
    "website builder",
    "app development",
    "artificial intelligence",
    "code generation",
    "visual development",
    "drag and drop",
    "AutoDev",
    "low-code platform"
  ],
  authors: [{ name: "AutoDev Team" }],
  creator: "AutoDev.life",
  publisher: "AutoDev.life",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autodev.life",
    siteName: "AutoDev.life",
    title: "AutoDev.life - AI-Powered No-Code Development Platform",
    description: "Transform your ideas into reality with AutoDev.life's intelligent no-code editor. Build websites, web apps, and digital experiences with AI assistance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AutoDev.life - AI-Powered No-Code Development Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoDev.life - AI-Powered No-Code Development Platform",
    description: "Build stunning websites and web applications with AI-powered no-code technology. Start creating today!",
    images: ["/twitter-image.png"],
    creator: "@autodevlife",
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
  metadataBase: new URL('https://autodev.life'),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

// Viewport configuration moved to metadata for static export compatibility

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
