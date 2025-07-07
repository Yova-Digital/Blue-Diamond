'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap } from 'lucide-react';
import { useLanguage } from './language-provider';

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
              title: t('features.growth.title'),
              description: t('features.growth.description'),
              gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/10'
            },
            {
              icon: <Shield className="w-8 h-8 text-emerald-600" />,
              title: t('features.trusted.title'),
              description: t('features.trusted.description'),
              gradient: 'from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-900/10'
            },
            {
              icon: <Zap className="w-8 h-8 text-amber-600" />,
              title: t('features.fast.title'),
              description: t('features.fast.description'),
              gradient: 'from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-900/10'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-gray-100 dark:border-white/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
