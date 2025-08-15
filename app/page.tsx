import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import Footer from "./components/Footer";
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AutoDev.life",
    "description": "AI-powered no-code web development platform that helps users build stunning websites and applications with intelligent assistance",
    "url": "https://autodev.life",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier available with premium plans starting at $20/month"
    },
    "creator": {
      "@type": "Organization",
      "name": "AutoDev.life",
      "url": "https://autodev.life"
    },
    "featureList": [
      "AI-powered code generation",
      "No-code visual development",
      "Drag and drop interface",
      "Real-time collaboration",
      "Responsive design templates",
      "Custom domain support",
      "GitHub integration",
      "Advanced AI assistance"
    ],
    "screenshot": "https://autodev.life/og-image.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Header />
      <Hero />
      <ProjectShowcase />
      <Footer />
    </div>
  );
}
