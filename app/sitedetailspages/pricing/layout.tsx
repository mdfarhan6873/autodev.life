import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing - AutoDev.life | AI-Powered No-Code Development Plans",
  description: "Choose the perfect plan for your AI-powered no-code development needs. Start free or upgrade to Pro for unlimited projects, advanced AI assistance, and premium features.",
  keywords: [
    "AutoDev pricing",
    "no-code pricing",
    "AI development plans",
    "website builder pricing",
    "development platform cost",
    "subscription plans",
    "free no-code tool",
    "pro development features"
  ],
  openGraph: {
    title: "AutoDev.life Pricing - Choose Your Perfect Plan",
    description: "Transparent pricing for AI-powered no-code development. Start free or choose Pro/Enterprise plans with advanced features.",
    url: "https://autodev.life/sitedetailspages/pricing",
    type: "website",
  },
  twitter: {
    title: "AutoDev.life Pricing - AI-Powered Development Plans",
    description: "Simple, transparent pricing for no-code AI development. Start building today!",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}