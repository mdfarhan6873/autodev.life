'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Enterprise', href: '#' },
    { name: 'Resources', href: '#', hasDropdown: true },
    { name: 'Carrier', href: '/sitedetailspages/carrier' },
    { name: 'Pricing', href: '/sitedetailspages/pricing' },
  ];

  const resourcesDropdownItems = [
    { name: 'Documentation', href: '#', description: 'Learn how to integrate our platform' },
    { name: 'API Reference', href: '#', description: 'Complete API documentation' },
    { name: 'Tutorials', href: '#', description: 'Step-by-step guides' },
    { name: 'Blog', href: '#', description: 'Latest news and updates' },
    { name: 'Community', href: '#', description: 'Join our developer community' },
    { name: 'Support', href: '#', description: 'Get help when you need it' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
             <div className="flex-shrink-0">
            <div className="block lg:hidden">
              <Image
                src="/autodevshortlogo.png"
                alt="AutoDev"
                width={40}
                height={40}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src="/autodevlonglogo.png"
                alt="AutoDev"
                width={500}
                height={150}
                className="h-52 w-auto"
              />
            </div>
          </div>

          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className="flex items-center text-slate-400 hover:text-slate-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isResourcesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Resources Dropdown */}
                    {isResourcesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-4">
                        <div className="grid grid-cols-2 gap-4">
                          {resourcesDropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block p-3 rounded-md hover:bg-gray-50/50 transition-colors duration-200"
                            >
                              <div className="font-medium text-gray-900">{dropdownItem.name}</div>
                              <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-slate-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-slate-400 hover:text-slate-300 px-4 py-2 text-sm font-medium transition-colors duration-200">
              Sign in
            </button>
            <button className="bg-[#14a89b] hover:bg-[#128a7e] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Get started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-white/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isResourcesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isResourcesOpen && (
                        <div className="pl-4 space-y-1">
                          {resourcesDropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50/50 px-3 py-2 text-sm rounded-md transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2">
                <button className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200">
                  Sign in
                </button>
                <button className="block w-full bg-[#14a89b] hover:bg-[#128a7e] text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  Get started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;