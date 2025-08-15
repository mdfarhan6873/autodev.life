import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers - AutoDev.life | Join the Future of AI Development",
  description: "Join AutoDev.life and help build the future of AI-powered no-code development. Explore open positions in engineering, AI research, design, and more. Remote-first company with competitive benefits.",
  keywords: [
    "AutoDev careers",
    "AI development jobs",
    "no-code platform jobs",
    "remote tech jobs",
    "software engineer jobs",
    "AI engineer careers",
    "product designer jobs",
    "DevOps engineer",
    "technical writer jobs",
    "startup careers"
  ],
  openGraph: {
    title: "Careers at AutoDev.life - Join the AI Revolution",
    description: "Help us build the tools that will empower the next generation of developers. Work with cutting-edge AI technology and make a real impact.",
    url: "https://autodev.life/sitedetailspages/carrier",
    type: "website",
  },
  twitter: {
    title: "Careers at AutoDev.life - AI Development Jobs",
    description: "Join our team building the future of no-code AI development. Remote-first with amazing benefits!",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}