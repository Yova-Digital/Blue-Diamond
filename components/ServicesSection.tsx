'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from "./language-provider";
import Link from "next/link";
import { Building, RefreshCw, Hammer, Briefcase, ShoppingCart, Ship, RotateCcw, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    color: string;
    slug: string;
  };
  index: number;
  isHovered: number | null;
  onHover: (index: number | null) => void;
}

const ServiceCard = ({ service, index, isHovered, onHover }: ServiceCardProps) => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg overflow-hidden transition-all duration-500 ${
        isHovered === index ? 'scale-[1.02]' : 'hover:scale-[1.01]'
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`
        relative z-10 h-full p-8 rounded-3xl overflow-hidden transition-all duration-500
        ${isHovered === index ? 'bg-white dark:bg-gray-800 shadow-2xl scale-105' : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm'}
        border border-gray-100 dark:border-gray-700
      `}>
        {/* Animated background */}
        <div className={`
          absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 ${service.color.replace('from-', 'from-').replace('to-', 'to-')}
        `}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`
            w-16 h-16 mb-6 rounded-2xl flex items-center justify-center 
            transition-all duration-500 ${isHovered === index ? 'bg-white text-blue-600' : `text-white ${service.color} bg-gradient-to-r`}
          `}>
            <service.icon className={`w-8 h-8 transition-transform duration-500 ${isHovered === index ? 'scale-110' : ''}`} />
          </div>

          {/* Title */}
          <h3 className={`
            text-xl font-bold mb-4 leading-tight transition-colors duration-500
            ${isHovered === index ? 'text-white' : 'text-gray-900 dark:text-white'}
          `}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`
            transition-colors duration-500 leading-relaxed mb-4
            ${isHovered === index ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}
          `}>
            {service.description}
          </p>

          <Link 
            href={`/services/${service.slug}`}
            className={`inline-flex items-center text-sm font-medium transition-colors duration-300 ${
              isHovered === index 
                ? 'text-white hover:text-blue-100' 
                : 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300'
            }`}
          >
            {t("services.readMore") || 'Read More'}
            <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${isHovered === index ? 'group-hover:translate-x-1' : ''}`} />
          </Link>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className={`
        absolute -inset-1 rounded-3xl bg-gradient-to-r ${service.color} 
        opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10
      `}></div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  type Service = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    color: string;
    slug: string;
  }

  const services: Service[] = [
    {
      icon: Building,
      title: t("services.realEstate") || 'Real Estate Financing',
      description: t("services.realEstateDesc") || 'Tailored property financing solutions for investors and developers',
      color: "from-blue-500 to-blue-600",
      slug: "real-estate"
    },
    {
      icon: RefreshCw,
      title: t("services.refinancing") || 'Refinancing Solutions',
      description: t("services.refinancingDesc") || 'Optimize your existing loans and credit facilities',
      color: "from-emerald-500 to-teal-600",
      slug: "refinancing"
    },
    {
      icon: Hammer,
      title: t("services.construction") || 'Construction Finance',
      description: t("services.constructionDesc") || 'Specialized financing for construction and development projects',
      color: "from-amber-500 to-orange-600",
      slug: "construction"
    },
    {
      icon: Briefcase,
      title: t("services.corporate") || 'Corporate Financing',
      description: t("services.corporateDesc") || 'Comprehensive financing solutions for businesses of all sizes',
      color: "from-purple-500 to-indigo-600",
      slug: "corporate"
    },
    {
      icon: ShoppingCart,
      title: t("services.acquisition") || 'Business Acquisition',
      description: t("services.acquisitionDesc") || 'Financing solutions for business acquisitions and mergers',
      color: "from-rose-500 to-pink-600",
      slug: "acquisition"
    },
    {
      icon: Ship,
      title: t("services.trade") || 'Trade Finance',
      description: t("services.tradeDesc") || 'Solutions for importers and exporters',
      color: "from-cyan-500 to-blue-600",
      slug: "trade"
    },
    {
      icon: RotateCcw,
      title: t("services.restructuring") || 'Debt Restructuring',
      description: t("services.restructuringDesc") || 'Solutions for managing and restructuring business debt',
      color: "from-violet-500 to-purple-600",
      slug: "restructuring"
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            {t("services.subtitle")}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              service={service}
              isHovered={hoveredCard}
              onHover={setHoveredCard}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 20 
          }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center"
          ref={containerRef}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl transform -skew-y-1"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("services.ctaTitle")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  {t("services.ctaDesc")}
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 group"
                >
                  <span className="relative z-10 flex items-center">
                    {t("services.ctaButton")}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
