"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Building, RefreshCw, Hammer, Briefcase, ShoppingCart, Ship, RotateCcw } from "lucide-react"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Building,
      title: t("services.realEstate"),
      description: t("services.realEstateDesc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: RefreshCw,
      title: t("services.refinancing"),
      description: t("services.refinancingDesc"),
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Hammer,
      title: t("services.construction"),
      description: t("services.constructionDesc"),
      color: "from-blue-700 to-blue-800",
    },
    {
      icon: Briefcase,
      title: t("services.corporate"),
      description: t("services.corporateDesc"),
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: ShoppingCart,
      title: t("services.acquisition"),
      description: t("services.acquisitionDesc"),
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Ship,
      title: t("services.trade"),
      description: t("services.tradeDesc"),
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: RotateCcw,
      title: t("services.restructuring"),
      description: t("services.restructuringDesc"),
      color: "from-blue-700 to-blue-900",
    },
  ]

  return (
    <section id="services" className="py-20 bg-blue-50 dark:bg-gray-800">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("services.title")}</h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{t("services.subtitle")}</p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-blue-200 dark:border-blue-800">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">{t("services.ctaTitle")}</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{t("services.ctaDesc")}</p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                {t("services.ctaButton")}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
