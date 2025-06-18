"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Building2, Users, Award, Globe } from "lucide-react"

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { icon: Building2, value: "30+", label: t("stats.yearsExp") },
    { icon: Users, value: "500+", label: t("stats.clients") },
    { icon: Award, value: "95%", label: t("stats.successRate") },
    { icon: Globe, value: "7", label: t("stats.emirates") },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("about.title")}</h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-8">{t("about.subtitle")}</p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{t("about.description")}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{t("about.description2")}</p>

              {/* Services List */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-6 mt-8 border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t("about.whatWeDo")}</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t("services.realEstate")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t("services.refinancing")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t("services.construction")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t("services.corporate")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t("services.acquisition")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t("services.trade")}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {t("services.restructuring")}
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">{t("why.title")}</h3>
                <p className="text-blue-100 leading-relaxed mb-6">{t("why.description")}</p>
                <div className="bg-white/20 rounded-2xl p-4 border border-white/30">
                  <p className="text-sm text-blue-100">{t("about.quote")}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
