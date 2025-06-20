"use client"

import { useParams, useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const blogs = [
  {
    slug: "future-of-corporate-finance-uae",
    title: "The Future of Corporate Finance in the UAE",
    description: "Explore the latest trends and opportunities shaping the financial landscape for businesses in the UAE.",
    date: "2024-06-01",
    author: "Blue Diamond Team",
    image: "/placeholder.jpg",
    content: `Corporate finance in the UAE is evolving rapidly. In this article, we explore the latest trends, regulatory changes, and opportunities for businesses looking to grow and thrive in the region.\n\nFrom digital transformation to new funding sources, discover what the future holds for UAE businesses.`
  },
  {
    slug: "how-to-secure-business-loans-uae",
    title: "How to Secure Business Loans: A Step-by-Step Guide",
    description: "A comprehensive guide to help you navigate the process of securing business loans in the UAE.",
    date: "2024-05-20",
    author: "Finance Experts",
    image: "/placeholder-user.jpg",
    content: `Securing a business loan in the UAE can be challenging. This guide walks you through the process, from preparing your documents to choosing the right lender and understanding the approval process.\n\nGet practical tips to improve your chances of success.`
  },
  {
    slug: "real-estate-financing-uae",
    title: "Real Estate Financing: What You Need to Know",
    description: "Key insights into real estate financing options and strategies for UAE businesses.",
    date: "2024-05-10",
    author: "Blue Diamond Advisors",
    image: "/placeholder-logo.png",
    content: `Real estate remains a cornerstone of business investment in the UAE. Learn about the latest financing options, eligibility criteria, and strategies to maximize your investment returns.`
  },
]

export default function BlogPostPage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const router = useRouter()

  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <Header />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Post Not Found</h1>
          <Button onClick={() => router.push('/blog')} className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t("blog.back") || "Back to Blog"}
          </Button>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button onClick={() => router.push('/blog')} variant="ghost" className="mb-8 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> {t("blog.back") || "Back to Blog"}
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-900"
          >
            <div className="h-64 w-full relative overflow-hidden">
              <img src={blog.image} alt={blog.title} className="object-cover h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-80"></div>
            </div>
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{blog.title}</h1>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {blog.author}</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{blog.description}</p>
              <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200" style={{ whiteSpace: 'pre-line' }}>
                {blog.content}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 