"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "./language-provider"
import { ArrowRight, TrendingUp, Shield, Zap, Sparkles } from "lucide-react"
import { useState } from "react"
import RegistrationModal from "./RegistrationModal"

export default function Hero() {
  const { t, currentLanguage } = useLanguage()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Check if current language is Arabic
  const isRTL = currentLanguage === 'ar'

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-[0.15]">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Abstract financial background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-1000"></div>
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent_70%)] dark:bg-grid-gray-800/5"></div>
      </motion.div>

      <div className={`container mx-auto px-4 py-20 relative z-10 ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`space-y-8 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={`inline-flex items-center my-6 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Sparkles className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t("hero.badge") || "Innovative Financial Solutions"}
              </motion.div>

              <motion.h1
                className="text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  {t("hero.title")}
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("hero.subtitle")}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button
                  onClick={scrollToContact}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {t("hero.cta")}
                    <ArrowRight className={`${isRTL ? 'ml-0 mr-2' : 'ml-2'} w-5 h-5 group-hover:translate-x-1 transition-transform transform ${isRTL ? 'rotate-180' : ''}`} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-8 py-4 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:shadow-md"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {t("hero.secondaryCta")}
                  </span>
                </button>
                
                <RegistrationModal 
                  isOpen={isModalOpen} 
                  onClose={() => setIsModalOpen(false)} 
                />
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                className="pt-8 flex flex-wrap items-center justify-center md:justify-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} gap-x-5`}>
                  <div className={`flex ${isRTL ? 'space-x-reverse' : ''} -space-x-2`}>
                    {isRTL 
                      ? ["A", "M", "S", "Y"].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-2 border-white dark:border-gray-800 flex items-center justify-center font-bold text-white">{i}</div>
                        ))
                      : ["Y", "S", "M", "A"].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-2 border-white dark:border-gray-800 flex items-center justify-center font-bold text-white">{i}</div>
                        ))
                    }
                  </div>
                  <span className={`${isRTL ? 'mr-3' : 'ml-3'} text-sm text-gray-600 dark:text-gray-400`}>
                    {t("hero.trustedBy") || "Trusted by 1000+ businesses"}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1736319861065-d2ee8bb62c16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blue Diamond Financial Brokerage"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10"
        style={{ y }}
      />
    </section>
  )
};