"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Calendar, User, ArrowRight, Sparkles, Star, Clock, Tag, MessageSquare, Search, ChevronRight, BookOpen } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const blogs = [
  {
    slug: "future-of-corporate-finance-uae",
    title: "The Future of Corporate Finance in the UAE",
    description: "Explore the latest trends and opportunities shaping the financial landscape for businesses in the UAE.",
    date: "June 1, 2024",
    author: "Blue Diamond Team",
    category: "Finance",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    comments: 12
  },
  {
    slug: "how-to-secure-business-loans-uae",
    title: "How to Secure Business Loans: A Step-by-Step Guide",
    description: "A comprehensive guide to help you navigate the process of securing business loans in the UAE.",
    date: "May 20, 2024",
    author: "Finance Experts",
    category: "Loans",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    comments: 8
  },
  {
    slug: "real-estate-financing-uae",
    title: "Real Estate Financing: What You Need to Know",
    description: "Key insights into real estate financing options and strategies for UAE businesses.",
    date: "May 10, 2024",
    author: "Blue Diamond Advisors",
    category: "Real Estate",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    comments: 15
  },
  {
    slug: "investment-strategies-2024",
    title: "Top Investment Strategies for 2024",
    description: "Discover the most promising investment opportunities and strategies for the coming year.",
    date: "April 28, 2024",
    author: "Investment Team",
    category: "Investing",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    comments: 22
  },
  {
    slug: "digital-banking-trends",
    title: "The Rise of Digital Banking in the Middle East",
    description: "How digital transformation is reshaping the banking sector in the Middle East region.",
    date: "April 15, 2024",
    author: "Tech Finance",
    category: "Banking",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    comments: 18
  },
  {
    slug: "sustainable-investing-guide",
    title: "Sustainable Investing: A Complete Guide",
    description: "Learn how to build an investment portfolio that aligns with your environmental and social values.",
    date: "March 30, 2024",
    author: "Green Finance",
    category: "ESG",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    comments: 14
  }
]

const BlogPostCard = ({ post, isFeatured = false }: { post: typeof blogs[0], isFeatured?: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [isFeatured ? 100 : 50, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.3, 1])
  const scale = useTransform(scrollYProgress, [0, 1], isFeatured ? [0.9, 1] : [0.95, 1])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className={cn(
        "relative group h-full",
        isFeatured ? "col-span-1 md:col-span-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <Card className="h-full overflow-hidden bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 hover:border-blue-400/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
          <div className={cn(
            "relative overflow-hidden",
            isFeatured ? "h-80 md:h-96" : "h-56"
          )}>
            <motion.div 
              className="absolute inset-0 z-0"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-all duration-700"
                sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </motion.div>
            
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/90 text-white backdrop-blur-sm">
                {post.category}
              </span>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <div className="flex items-center text-sm text-white/90 mb-3">
                <span className="flex items-center mr-4">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </span>
              </div>
              <h3 className={cn(
                "font-bold text-white mb-2 line-clamp-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent",
                isFeatured ? "text-2xl md:text-3xl" : "text-xl"
              )}>
                {post.title}
              </h3>
              <p className="text-white/80 text-sm line-clamp-2 mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-xs text-white/70">
                  <Clock className="w-3 h-3 mr-1" />
                  {post.readTime}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white/90 hover:text-white hover:bg-white/10 px-3 h-8 text-xs font-medium rounded-full backdrop-blur-sm"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
          
          {!isFeatured && (
            <CardContent className="p-4">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  {post.comments} comments
                </span>
                <span className="flex items-center">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {Math.floor(Math.random() * 1000) + 100} views
                </span>
              </div>
            </CardContent>
          )}
        </Card>
      </Link>
      
      {/* Floating elements */}
      {isFeatured && (
        <>
          <motion.div 
            className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/20 rounded-full -z-10"
            animate={isHovered ? { x: -10, y: -10 } : { x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div 
            className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-400/20 rounded-full -z-10"
            animate={isHovered ? { x: 10, y: 10 } : { x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </>
      )}
    </motion.div>
  )
}

export default function BlogPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const featuredPost = blogs[0]
  const recentPosts = blogs.slice(1, 7) // Show 6 recent posts

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {t('blog.latestInsights') || 'Latest Insights'}
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('blog.title') || 'Our Blog'}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('blog.subtitle') || 'Discover the latest insights, news, and trends in corporate finance and business growth.'}
          </motion.p>
        </motion.section>

        {/* Featured Post */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Star className="w-6 h-6 text-yellow-400 mr-2" />
            {t('blog.featuredPost') || 'Featured Post'}
          </h2>
          
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full text-xs font-medium text-blue-800 dark:text-blue-200 flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    {featuredPost.category}
                  </div>
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {featuredPost.comments} comments
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </motion.section>

        {/* Recent Posts */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('blog.recentPosts') || 'Recent Posts'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="h-full border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full text-xs font-medium text-blue-800 dark:text-blue-200">
                        {post.category}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <span className="flex items-center mr-3">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 mb-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          {post.comments} comments
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="ghost" 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 px-0"
                      >
                        {t('blog.readMore') || 'Read More'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('blog.ctaTitle') || 'Stay Updated with Our Latest Insights'}
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('blog.ctaSubtitle') || 'Subscribe to our newsletter and never miss our latest articles and updates.'}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder={t('blog.emailPlaceholder') || 'Enter your email'} 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 font-medium">
              {t('blog.subscribe') || 'Subscribe'}
            </Button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}