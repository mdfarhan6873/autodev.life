'use client';

import React from 'react';
import { MapPinIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Build the future of AI-powered development tools. Work with React, Node.js, and cutting-edge AI technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Expert knowledge of React, TypeScript, and Node.js",
        "Experience with AI/ML integration",
        "Strong system design skills"
      ]
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$140k - $200k",
      description: "Develop and improve our AI models that power code generation and intelligent assistance features.",
      requirements: [
        "PhD or Masters in Computer Science, AI, or related field",
        "3+ years of experience with LLMs and NLP",
        "Proficiency in Python, PyTorch, or TensorFlow",
        "Experience with model optimization and deployment"
      ]
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$100k - $140k",
      description: "Shape the user experience of our development platform. Create intuitive interfaces for complex AI-powered tools.",
      requirements: [
        "4+ years of product design experience",
        "Strong portfolio showcasing UX/UI design",
        "Experience with design systems and developer tools",
        "Proficiency in Figma, Sketch, or similar tools"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$110k - $160k",
      description: "Scale our infrastructure to support millions of developers. Build reliable, secure, and performant systems.",
      requirements: [
        "3+ years of DevOps/SRE experience",
        "Experience with AWS, Docker, Kubernetes",
        "Strong knowledge of CI/CD pipelines",
        "Experience with monitoring and observability tools"
      ]
    },
    {
      title: "Technical Writer",
      department: "Developer Relations",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Create comprehensive documentation, tutorials, and guides to help developers succeed with our platform.",
      requirements: [
        "3+ years of technical writing experience",
        "Strong programming background",
        "Experience with developer documentation",
        "Excellent communication skills"
      ]
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote / Chicago",
      type: "Full-time",
      salary: "$90k - $130k + Commission",
      description: "Help enterprise customers understand and implement our solutions. Bridge the gap between technical capabilities and business needs.",
      requirements: [
        "2+ years of technical sales experience",
        "Strong technical background in software development",
        "Experience with enterprise software sales",
        "Excellent presentation and communication skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Top-tier salaries, equity packages, and performance bonuses"
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipends"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and unlimited PTO"
    },
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: "Remote First",
      description: "Work from anywhere with optional office spaces in major cities"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "Learning budget, conference attendance, and career development programs"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Amazing Team",
      description: "Work with world-class engineers, designers, and product leaders"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and development tools."
    },
    {
      title: "Developer Obsessed",
      description: "Everything we do is focused on making developers more productive and happy."
    },
    {
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and shared knowledge."
    },
    {
      title: "Diversity & Inclusion",
      description: "We're building a team that reflects the diversity of the developers we serve."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section with Moon Background */}
      <div className="relative overflow-hidden">
        {/* Moon Background Effect */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-radial from-[#14a89b]/30 via-[#14a89b]/10 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#14a89b]/20 via-[#14a89b]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14a89b]/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#14a89b]/12 rounded-full blur-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join the future of development
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Help us build the tools that will empower the next generation of developers. 
              Work with cutting-edge AI technology and make a real impact.
            </p>
            <button className="bg-[#14a89b] text-black px-8 py-4 rounded-xl font-medium hover:bg-[#128a7e] transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-[#14a89b]/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-gray-400 text-lg">We take care of our team so they can do their best work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-[#14a89b]/50 transition-all duration-300 text-center"
              >
                <div className="text-[#14a89b] mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="relative bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 text-lg">Find your next opportunity with us</p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-[#14a89b]/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <button className="bg-[#14a89b] text-black px-6 py-3 rounded-xl font-medium hover:bg-[#128a7e] transition-colors self-start lg:self-auto">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{job.description}</p>

                <div>
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="text-gray-300 flex items-start">
                        <span className="text-[#14a89b] mr-2">•</span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-black py-20">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[400px] rounded-t-full bg-gradient-to-t from-[#14a89b]/20 via-[#14a89b]/10 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t see the right role?</h2>
          <p className="text-gray-300 text-lg mb-8">
            We&apos;re always looking for talented people. Send us your resume and tell us how you&apos;d like to contribute.
          </p>
          <button className="bg-[#14a89b] text-black px-8 py-4 rounded-xl font-medium hover:bg-[#128a7e] transition-colors">
            Get In Touch
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareersPage;