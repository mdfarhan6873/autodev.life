
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [gradientPosition, setGradientPosition] = useState(0);

  // Animation effect for the gradient background
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-50 z-0"
        style={{
          backgroundImage: `linear-gradient(${gradientPosition}deg, #4f46e5, #06b6d4, #8b5cf6, #ec4899)`,
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 50%",
          animation: "gradient 15s ease infinite",
        }}
      />
      
      {/* Content container with glass effect */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              AutoDev.Life
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mb-8"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
            No-Code Full Stack Website / Native App Builder
          </h2>
        </header>
        
        {/* Main content */}
        <div className="text-center">
          <div className="relative mb-12">
            <div className="animate-pulse flex justify-center">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-xl font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're building something amazing that will revolutionize how you create web and mobile applications.
            Stay tuned for the launch!
          </p>
        </div>
        
        {/* Footer */}
        <footer className="relative z-10 mt-12 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} AutoDev.Life. All rights reserved.
        </footer>
      </div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}