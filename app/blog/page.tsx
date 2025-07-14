"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Calendar, User, ArrowRight, Sparkles, Star, Clock, Tag, MessageSquare, Search, ChevronRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {  useRef, useState } from "react"
import { cn } from "@/lib/utils"

// Function to detect if text is Arabic
const isArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

// Function to detect article language
const getArticleLanguage = (title: string, description: string): 'en' | 'ar' => {
  const titleIsArabic = isArabic(title);
  const descriptionIsArabic = isArabic(description);
  
  // If both title and description are in Arabic, it's Arabic
  if (titleIsArabic && descriptionIsArabic) {
    return 'ar';
  }
  
  // If both are in English, it's English
  if (!titleIsArabic && !descriptionIsArabic) {
    return 'en';
  }
  
  // If mixed, default to English
  return 'en';
};

const blogsEn = [
  {
    slug: "future-of-corporate-finance-uae",
    title: "The Future of Corporate Finance in the UAE",
    description: "Explore the latest trends and opportunities shaping the financial landscape for businesses in the UAE.",
    date: "June 1, 2024",
    author: "Blue Diamond Team",
    category: "Finance",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    comments: 12
  },
  {
    slug: "how-to-secure-business-loans-uae",
    title: "How to Secure Business Loans: A Step-by-Step Guide",
    description: "A comprehensive guide to help you navigate the process of securing business loans in the UAE.",
    date: "May 20, 2024",
    author: "Blue Diamond",
    category: "Loans",
    readTime: 7,
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
    readTime: 6,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    comments: 15
  },
  {
    slug: "top-investment-strategies-2024",
    title: "Top Investment Strategies for 2024",
    description: "Discover the most promising investment opportunities and strategies for the coming year.",
    date: "April 28, 2024",
    author: "Blue Diamond  Team",
    category: "Investing",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1649817597237-68ad822141e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRvcCUyMGludmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    comments: 22
  },
  {
    slug: "digital-banking-trends",
    title: "The Rise of Digital Banking in the Middle East",
    description: "How digital transformation is reshaping the banking sector in the Middle East region.",
    date: "April 15, 2024",
    author: "Blue Diamond  Finance",
    category: "Banking",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    comments: 18
  },
  {
    slug: "sustainable-investing-guide",
    title: "Sustainable Investing: A Complete Guide",
    description: "Learn how to build an investment portfolio that aligns with your environmental and social values.",
    date: "March 30, 2024",
    author: "Blue Diamond Finance",
    category: "ESG",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    comments: 14
  }
]

export default function BlogPage() {
  const { t, currentLanguage } = useLanguage()
  
  // Combine all blogs and detect their language
  const allBlogs = [...blogsEn].map(blog => ({
    ...blog,
    language: getArticleLanguage(blog.title, blog.description)
  }));
  
  // Sort blogs by date (newest first) and get featured and recent posts
  const sortedBlogs = allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredPost = sortedBlogs[0];
  const recentPosts = sortedBlogs.slice(1, 7); // Show 6 recent posts

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float animation-delay-4000"></div>
      </div>


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
                  <h3
                    className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${isArabic(featuredPost.title) ? "text-right" : "text-left"}`}
                    dir={isArabic(featuredPost.title) ? "rtl" : "ltr"}
                  >
                    {featuredPost.title}
                  </h3>
                  <p
                    className={`text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 ${isArabic(featuredPost.description) ? "text-right" : "text-left"}`}
                    dir={isArabic(featuredPost.description) ? "rtl" : "ltr"}
                  >
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentLanguage === 'ar' ? featuredPost.readTime : `${featuredPost.readTime} ${t('blog.minRead')}`}
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
            {recentPosts.map((post, index) => {
              const cardDir = isArabic(post.title) ? "rtl" : "ltr";
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <Card
                      dir={cardDir}
                      className={`h-full border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden ${cardDir === "rtl" ? "text-right" : "text-left"}`}
                    >
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
                        <CardTitle
                          className={`text-xl font-bold text-gray-900 dark:text-white line-clamp-2 mb-2 ${isArabic(post.title) ? "text-right" : "text-left"}`}
                          dir={isArabic(post.title) ? "rtl" : "ltr"}
                        >
                          {post.title}
                        </CardTitle>
                        <CardDescription
                          className={`text-gray-600 dark:text-gray-300 line-clamp-2 ${isArabic(post.description) ? "text-right" : "text-left"}`}
                          dir={isArabic(post.description) ? "rtl" : "ltr"}
                        >
                          {post.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {currentLanguage === 'ar' ? post.readTime : `${post.readTime} ${t('blog.minRead')}`}
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
              );
            })}
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

    </div>
  )
}