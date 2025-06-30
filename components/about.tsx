"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "./language-provider"
import { Building2, Users, Award, Globe, ArrowRight, Sparkles } from "lucide-react"

export default function About() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5])

  const stats = [
    { 
      icon: Building2, 
      value: "30+", 
      label: t("stats.yearsExp"),
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Users, 
      value: "500+", 
      label: t("stats.clients"),
      color: "from-emerald-500 to-teal-600"
    },
    { 
      icon: Award, 
      value: "95%", 
      label: t("stats.successRate"),
      color: "from-amber-500 to-orange-600"
    },
    { 
      icon: Globe, 
      value: "7", 
      label: t("stats.emirates"),
      color: "from-purple-500 to-indigo-600"
    },
  ]

  const services = [
    t("services.realEstate"),
    t("services.refinancing"),
    t("services.construction"),
    t("services.corporate"),
    t("services.acquisition"),
    t("services.trade"),
    t("services.restructuring")
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-4 h-4 mr-2" />
            {t("about.subtitle")}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 relative">
          {/* Decorative elements */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative z-10 space-y-6">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("about.description")}
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("about.description2")}
              </p>
            </div>

            {/* Services List with grid layout */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800/80 dark:to-blue-900/10 rounded-3xl p-8 shadow-xl border border-blue-100 dark:border-blue-800/50 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                {t("about.whatWeDo")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl transform perspective-1000 preserve-3d group">
              <div className="relative z-10">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-0.5 bg-blue-400 mr-3"></div>
                  <span className="text-blue-200 font-medium">{t("why.title")}</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight">
                  {t("why.description")}
                </h3>
                <div className="relative bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-blue-100 italic">{t("about.quote")}</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full filter blur-xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full filter blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-purple-400/10 rounded-full filter blur-xl"></div>
          </motion.div>
        </div>

        {/* Stats with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group transform hover:-translate-y-2`}
            >
              <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${stat.color} text-white`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
