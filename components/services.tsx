"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { useLanguage } from "./language-provider"
import { Building, RefreshCw, Hammer, Briefcase, Handshake, Ship, RotateCcw, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const ServiceCard = ({ service, index, isHovered, onHover }: any) => {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group h-full"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`
        relative z-10 h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-700
        ${isHovered === index ? 'bg-white dark:bg-gray-800 shadow-2xl scale-105 transform rotate-1' : 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm'}
        border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400
        hover:shadow-2xl hover:shadow-blue-500/20
      `}>
        {/* Service Image */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 ${service.color.replace('/80', '/40')} mix-blend-multiply`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          {/* Icon Overlay */}
          <div className={`
            absolute -bottom-8 ${isRTL ? 'left-6' : 'right-6'} w-24 h-24 rounded-3xl flex items-center justify-center 
            transition-all duration-700 ${isHovered === index ? 'bg-white text-blue-600 shadow-2xl scale-110' : `text-white ${service.color.replace('/80', '')}`}
            shadow-2xl group-hover:shadow-2xl border-4 border-white/30 backdrop-blur-sm
          `}>
            <service.icon className={`w-12 h-12 transition-all duration-700 ${isHovered === index ? 'scale-110' : ''}`} />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 pt-10 flex-1 flex flex-col">
          {/* Title */}
          <h3 className={`
            text-2xl font-bold mb-4 leading-tight transition-colors duration-500
            ${isHovered === index ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}
            group-hover:text-blue-600 dark:group-hover:text-blue-400
          `}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`
            transition-colors duration-500 leading-relaxed mb-6 flex-1 text-lg
            ${isHovered === index ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-gray-300'}
          `}>
            {service.description}
          </p>
          
          <Link 
            href={`/services/${service.slug}`}
            className={`
              inline-flex items-center text-base font-semibold transition-all duration-300 mt-auto
              ${isHovered === index ? 'text-blue-600 dark:text-blue-400' : 'text-blue-600 dark:text-blue-400'}
              group hover:underline self-start px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20
            `}
          >
            {t('common.readMore')}
            <ArrowUpRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform duration-300`} />
          </Link>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className={`
        absolute -inset-3 rounded-3xl bg-gradient-to-r ${service.color.replace('/80', '')} 
        opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10
      `}></div>
    </motion.div>
  )
}

export default function Services() {
  const { t, currentLanguage } = useLanguage()
  const sectionRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const isRTL = currentLanguage === 'ar'
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0.5])

  const services = [
    {
      icon: Building,
      title: t("services.realEstate"),
      description: t("services.realEstateDesc"),
      color: "from-blue-400/80 to-blue-500/80",
      slug: "real-estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    },
    {
      icon: RefreshCw,
      title: t("services.refinancing"),
      description: t("services.refinancingDesc"),
      color: "from-emerald-400/80 to-teal-500/80",
      slug: "refinancing",
      image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80"
    },
    {
      icon: Hammer,
      title: t("services.construction"),
      description: t("services.constructionDesc"),
      color: "from-amber-400/80 to-orange-500/80",
      slug: "construction",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: Briefcase,
      title: t("services.corporate"),
      description: t("services.corporateDesc"),
      color: "from-purple-400/80 to-indigo-500/80",
      slug: "corporate",
      image: "https://images.unsplash.com/photo-1709400628079-5960a9f2ded6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29ycG9yYXRlJTIwRmluYW5jZSUyMCUyNiUyMFdvcmtpbmclMjBDYXBpdGFsJTIwRmFjaWxpdGllc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      icon: Handshake,
      title: t("services.acquisition"),
      description: t("services.acquisitionDesc"),
      color: "from-rose-400/80 to-pink-500/80",
      slug: "acquisition",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJ1c2luZXNzJTIwQWNxdWlzaXRpb24lMjBGaW5hbmNlfGVufDB8fDB8fHww"
    },
    {
      icon: Ship,
      title: t("services.trade"),
      description: t("services.tradeDesc"),
      color: "from-cyan-400/80 to-blue-500/80",
      slug: "trade",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
    {
      icon: RotateCcw,
      title: t("services.restructuring"),
      description: t("services.restructuringDesc"),
      color: "from-violet-400/80 to-purple-500/80",
      slug: "restructuring",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
          className="text-center mb-24 max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400 text-base font-semibold mb-8 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
            <span className="mr-2">✨</span>
            {t("services.subtitle")}  
            <span className="ml-2">✨</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400">
            {t("services.title")}
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
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
          style={{ y, opacity }}
          className="mt-24 text-center"
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
