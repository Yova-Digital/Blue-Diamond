'use client';

import { notFound } from 'next/navigation';
import { Building, RefreshCw, Hammer, Briefcase, ShoppingCart, Ship, RotateCw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';

// Service data with more details
const serviceDetails = {
  'real-estate': {
    icon: Building,
    title: 'Real Estate Financing',
    description: 'Tailored property financing solutions for investors and developers',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Customized financing solutions for all property types',
      'Competitive interest rates and flexible terms',
      'Fast approval process',
      'Expert guidance through every step',
      'Portfolio analysis and optimization'
    ],
    content: [
      'Our real estate financing solutions are designed to help investors and developers secure the capital they need for property acquisitions, development projects, and portfolio expansions. We work with a network of financial institutions to provide competitive rates and flexible terms.',
      'Whether you\'re looking to finance a single-family home, multi-family property, commercial real estate, or large-scale development, our team of experts will guide you through the entire process, from application to closing.'
    ]
  },
  // Add other services with similar structure
  'refinancing': {
    icon: RefreshCw,
    title: 'Refinancing Solutions',
    description: 'Optimize your existing loans and credit facilities',
    color: 'from-emerald-500 to-teal-600',
    features: [
      'Lower your interest rates',
      'Extend loan terms',
      'Consolidate debt',
      'Improve cash flow',
      'Expert financial analysis'
    ],
    content: [
      'Our refinancing solutions help businesses optimize their financial position by securing better terms on existing loans and credit facilities. We analyze your current financial obligations and negotiate with lenders to reduce costs and improve cash flow.',
      'With access to a wide network of lenders, we can help you find the best refinancing options tailored to your specific needs and financial goals.'
    ]
  },
  'corporate': {
    icon: Briefcase,
    title: 'Corporate Financing',
    description: 'Comprehensive financial solutions for businesses of all sizes',
    color: 'from-purple-500 to-indigo-600',
    features: [
      'Business expansion financing',
      'Working capital solutions',
      'Equipment and asset financing',
      'Mergers and acquisitions support',
      'Customized financial strategies'
    ],
    content: [
      'Our corporate financing services are designed to support businesses at every stage of growth. We provide tailored financial solutions that help companies achieve their strategic objectives and maintain healthy cash flow.',
      'Whether you\'re looking to expand operations, acquire new assets, or navigate a merger or acquisition, our team of financial experts will work closely with you to develop a customized financing strategy.'
    ]
  },
  'construction': {
    icon: Hammer,
    title: 'Construction Financing',
    description: 'Tailored financing solutions for construction projects',
    color: 'from-amber-500 to-orange-600',
    features: [
      'New construction financing',
      'Renovation and rehabilitation loans',
      'Land acquisition and development',
      'Bridge financing',
      'Construction-to-permanent loans'
    ],
    content: [
      'Our construction financing solutions are designed to support builders, developers, and investors at every stage of the construction process. We understand the unique challenges of construction projects and provide flexible financing options to keep your project on track.',
      'From ground-up construction to major renovations, our team will work with you to structure a loan that meets your specific needs and timeline.'
    ]
  },
  'acquisition': {
    icon: ShoppingCart,
    title: 'Acquisition Financing',
    description: 'Strategic financing for business and asset acquisitions',
    color: 'from-rose-500 to-pink-600',
    features: [
      'Business acquisition loans',
      'Leveraged buyout financing',
      'Asset-based lending',
      'Seller financing arrangements',
      'Management buyout financing'
    ],
    content: [
      'Our acquisition financing services help businesses seize growth opportunities through strategic acquisitions. We provide the capital and expertise needed to successfully complete transactions and integrate new assets.',
      'Whether you\'re looking to acquire a competitor, expand into new markets, or consolidate your industry, we can structure a financing solution that aligns with your strategic goals.'
    ]
  },
  'trade': {
    icon: Ship,
    title: 'Trade Finance',
    description: 'Solutions for international trade and commerce',
    color: 'from-cyan-500 to-blue-600',
    features: [
      'Letters of credit',
      'Export and import financing',
      'Inventory and receivables financing',
      'Commodity trade finance',
      'Supply chain financing'
    ],
    content: [
      'Our trade finance solutions help businesses navigate the complexities of international trade. We provide the financial instruments and support needed to facilitate smooth cross-border transactions.',
      'From securing payment to managing currency risk, our comprehensive trade services ensure your international business operations run efficiently and profitably.'
    ]
  },
  'restructuring': {
    icon: RotateCw,
    title: 'Debt Restructuring',
    description: 'Strategic solutions for financial restructuring',
    color: 'from-violet-500 to-purple-600',
    features: [
      'Debt consolidation',
      'Loan modifications',
      'Refinancing solutions',
      'Payment restructuring',
      'Financial restructuring advisory'
    ],
    content: [
      'Our debt restructuring services help businesses facing financial challenges by providing strategic solutions to improve cash flow and ensure long-term sustainability.',
      'We work closely with you to analyze your financial situation, negotiate with creditors, and implement a restructuring plan that puts your business on a path to financial recovery and growth.'
    ]
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { t } = useLanguage();
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];
  
  if (!service) {
    notFound();
  }
  
  const Icon = service.icon;
  
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r ${service.color} text-white`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <Link 
            href="/#services" 
            className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('common.backToServices') || 'Back to Services'}
          </Link>
          
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
              <Icon className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5"></div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {service.content.map((paragraph, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
            
            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('services.keyFeatures') || 'Key Features'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.4 }}
                    className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`p-2 rounded-lg ${service.color.replace('from-', 'bg-').replace(' to-', '/50')} text-white mr-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('services.whyChooseUs') || 'Why Choose Us'}
              </h3>
              <ul className="space-y-4">
                {[
                  'Expert financial advisors',
                  'Competitive rates',
                  'Fast approval process',
                  'Personalized service',
                  'Wide network of lenders'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('from-', 'bg-').split(' ')[0]}`}></div>
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <Link
                  href="/#contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium text-white ${service.color} hover:opacity-90 transition-opacity`}
                >
                  {t('common.getStarted') || 'Get Started'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
