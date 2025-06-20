"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Calendar, User, ArrowRight, Sparkles, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const blogs = [
  {
    slug: "future-of-corporate-finance-uae",
    title: "The Future of Corporate Finance in the UAE",
    description: "Explore the latest trends and opportunities shaping the financial landscape for businesses in the UAE.",
    date: "2024-06-01",
    author: "Blue Diamond Team",
    image: "/placeholder.jpg",
  },
  {
    slug: "how-to-secure-business-loans-uae",
    title: "How to Secure Business Loans: A Step-by-Step Guide",
    description: "A comprehensive guide to help you navigate the process of securing business loans in the UAE.",
    date: "2024-05-20",
    author: "Finance Experts",
    image: "/placeholder-user.jpg",
  },
  {
    slug: "real-estate-financing-uae",
    title: "Real Estate Financing: What You Need to Know",
    description: "Key insights into real estate financing options and strategies for UAE businesses.",
    date: "2024-05-10",
    author: "Blue Diamond Advisors",
    image: "/placeholder-logo.png",
  },
]

export default function BlogPage() {
  const { t } = useLanguage()
  const featured = blogs[0]
  const rest = blogs.slice(1)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-x-hidden">
      {/* Animated background sparkles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float delay-2000"></div>
      </div>
      <Header />
      <section className="pt-32 pb-20 relative z-10">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg mb-4 animate-float">
              <Sparkles className="w-5 h-5" /> {t("blog.special") || "Featured Insights"}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 gradient-text drop-shadow-lg">
              {t("blog.title") || "Our Blog"}
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-8">
              {t("blog.subtitle") || "Insights, news, and tips for smarter business finance."}
            </p>
          </div>
        </motion.div>

        {/* Featured Blog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 mb-20"
        >
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white mb-4 hover:scale-[1.01] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
              <img src={featured.image} alt={featured.title} className="object-cover w-full h-80 md:h-96 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold text-white">{t("blog.featured") || "Featured"}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{featured.title}</h2>
                <p className="text-lg text-blue-100 mb-4 drop-shadow">{featured.description}</p>
                <div className="flex items-center gap-6 text-sm text-blue-200 mb-2">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featured.date}</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {featured.author}</span>
                </div>
                <span className="inline-flex items-center bg-white text-blue-700 font-semibold rounded-full px-6 py-2 shadow-lg group-hover:bg-blue-50 transition-colors duration-300">
                  {t("blog.readMore") || "Read More"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {rest.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <Link href={`/blog/${blog.slug}`} className="block group">
                  <Card className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-gray-900 group">
                    <div className="h-56 w-full relative overflow-hidden">
                      <img src={blog.image} alt={blog.title} className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                        {blog.title}
                      </CardTitle>
                      <CardDescription className="mb-2 text-gray-600 dark:text-gray-300">
                        {blog.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2 px-6">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                      <span className="flex items-center gap-1"><User className="w-4 h-4" /> {blog.author}</span>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <span className="ml-auto group bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full px-6 py-2 flex items-center shadow-lg">
                        {t("blog.readMore") || "Read More"}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 mt-24"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 text-white shadow-xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t("blog.ctaTitle") || "Want to stay updated?"}</h2>
            <p className="text-blue-100 mb-6">{t("blog.ctaDesc") || "Subscribe to our newsletter for the latest insights and updates."}</p>
            <Button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              {t("blog.ctaButton") || "Subscribe Now"}
            </Button>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
} 