'use client';

import React, { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "5 projects per month",
        "Basic AI assistance",
        "Community support",
        "Standard templates",
        "Export to GitHub"
      ],
      limitations: [
        "No priority support",
        "Limited customization",
        "Basic integrations only"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Pro",
      description: "For professionals and growing teams",
      monthlyPrice: 20,
      annualPrice: 200,
      features: [
        "Unlimited projects",
        "Advanced AI assistance",
        "Priority support",
        "Premium templates",
        "Advanced integrations",
        "Custom domains",
        "Team collaboration",
        "Analytics dashboard"
      ],
      limitations: [],
      popular: true,
      cta: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      description: "For large teams and organizations",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Custom AI training",
        "Dedicated support",
        "SSO integration",
        "Advanced security",
        "Custom contracts",
        "On-premise deployment"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What happens to my projects if I downgrade?",
      answer: "Your projects remain accessible, but some advanced features may be limited based on your new plan."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. No questions asked."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start."
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
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. Start building amazing apps today.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-16">
              <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-[#14a89b]' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="ml-1 text-[#14a89b] text-sm font-medium">(Save 17%)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-[#14a89b] ring-2 ring-[#14a89b]/20'
                    : 'border-gray-700/50'
                } hover:border-[#14a89b]/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#14a89b] text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-[#14a89b] text-black hover:bg-[#128a7e]'
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-[#14a89b] mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center">
                      <XMarkIcon className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-[#14a89b]/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of developers building amazing apps with AutoDev
          </p>
          <button className="bg-[#14a89b] text-black px-8 py-4 rounded-xl font-medium hover:bg-[#128a7e] transition-colors">
            Start Building Today
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PricingPage;