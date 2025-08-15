'use client';

import { useState } from 'react';
import { CloudIcon, LinkIcon, StarIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Moon-like gradient background */}
      <div className="absolute inset-0 bg-black">
        {/* Main radial gradient - centered moon effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#14a89b]/40 via-[#14a89b]/20 via-[#14a89b]/10 to-black"></div>

        {/* Large central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#14a89b]/30 via-[#14a89b]/15 to-transparent rounded-full blur-3xl"></div>

        {/* Curved horizon glow effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden ">
          {/* Curved horizon line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[400px] rounded-t-full border-t-2 border-[#14a89b]/60 bg-gradient-to-t from-[#14a89b]/20 via-[#14a89b]/10 to-transparent"></div>

          {/* Bright horizon glow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-r from-transparent via-[#14a89b]/80 to-transparent blur-sm"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-[#14a89b] to-transparent"></div>

          {/* Additional glow layers */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] h-32 bg-gradient-to-t from-[#14a89b]/15 to-transparent"></div>
        </div>

        {/* Additional atmospheric effects */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#14a89b]/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#14a89b]/12 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#14a89b]/6 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Notification Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
            <CloudIcon className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">Introducing AutoDev Cloud!</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            What should we build today?
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Create stunning apps & websites by chatting with AI.
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-2xl mb-8">
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tell us and we'll build it together"
              className="w-full h-32 px-6 py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#14a89b]/50 focus:border-[#14a89b]/50 transition-all duration-200"
              rows={4}
            />
            <div className="absolute bottom-4 left-6 flex items-center space-x-4">
              <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
                <LinkIcon className="w-4 h-4 mr-1" />
              </button>
              <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
                <StarIcon className="w-4 h-4 mr-1" />
              </button>
            </div>
          </div>

          {/* Import Options */}
          <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-400">
            <span>or import from</span>
            <button className="flex items-center hover:text-gray-300 transition-colors">
              <span className="mr-1">🎨</span>
              Figma
            </button>
            <button className="flex items-center hover:text-gray-300 transition-colors">
              <span className="mr-1">⚡</span>
              GitHub
            </button>
          </div>


          
        </div>

       
       

      </div>

    </div>
  );
};

export default Hero;