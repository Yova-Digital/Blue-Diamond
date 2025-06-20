'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './language-provider';
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';


export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Blue Diamond</h3>
                  <p className="text-blue-400 text-sm">Financing Broker</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 leading-relaxed mb-6 max-w-md"
              >
                {t("footer.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                {t("footer.quickLinks")}
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("about");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {t("nav.about")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("services");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {t("nav.services")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {t("nav.contact")}
                  </button>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {t("nav.blog") || "Blog"}
                  </a>
                </li>
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                {t("footer.contactInfo")}
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">{t("footer.location")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">+971 50 6347214</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">info@bluediamond.ae</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Blue Diamond Financing Broker. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}