"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { Calendar, User, ArrowLeft, Clock, MessageSquare, Share2, Tag, ArrowUpRight, ChevronUp, MessageCircle, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

// Mock comments data
const comments = [
  {
    id: 1,
    author: "Ahmed Khalid",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    date: "2 days ago",
    content: "This is a very insightful article! I've been following these trends and it's great to see them all summarized here.",
    replies: [
      {
        id: 2,
        author: "Sara Ahmed",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "1 day ago",
        content: "I completely agree, Ahmed. The section on digital transformation was particularly interesting."
      }
    ]
  },
  {
    id: 3,
    author: "Mohammed Ali",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    date: "3 days ago",
    content: "Great read! Do you have any recommendations for resources to learn more about blockchain in finance?",
    replies: []
  }
];

const blogs = [
  {
    slug: "future-of-corporate-finance-uae",
    title: "The Future of Corporate Finance in the UAE",
    description: "Explore the latest trends and opportunities shaping the financial landscape for businesses in the UAE.",
    date: "June 1, 2024",
    readTime: "8 min read",
    author: "Blue Diamond Team",
    authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `# The Future of Corporate Finance in the UAE

Corporate finance in the UAE is undergoing a remarkable transformation, driven by technological innovation, regulatory changes, and shifting market dynamics. As we look ahead, several key trends are emerging that will shape the financial landscape for businesses in the region.

## Digital Transformation in Finance

The UAE's commitment to becoming a global fintech hub is revolutionizing corporate finance. Blockchain technology, artificial intelligence, and automation are streamlining financial operations, reducing costs, and improving accuracy.

## New Funding Opportunities

Alternative financing options are gaining traction, including:

- **Sukuk and Islamic finance instruments**
- **Venture capital and private equity**
- **Crowdfunding platforms**
- **Government-backed funding initiatives**

## Regulatory Evolution

The UAE's regulatory framework continues to evolve to support business growth while ensuring financial stability. Recent changes include:

- Enhanced corporate governance requirements
- Stricter anti-money laundering (AML) regulations
- New bankruptcy and insolvency laws

## Strategic Considerations for Businesses

To thrive in this evolving landscape, businesses should:

1. Embrace digital financial tools and platforms
2. Diversify funding sources
3. Stay informed about regulatory changes
4. Invest in financial talent and training

## Looking Ahead

The future of corporate finance in the UAE is bright, with innovation and growth opportunities across sectors. By staying agile and informed, businesses can position themselves for success in this dynamic environment.`,
    tags: ["Finance", "UAE", "Corporate Finance", "Trends"]
  },
  {
    slug: "how-to-secure-business-loans-uae",
    title: "How to Secure Business Loans: A Step-by-Step Guide",
    description: "A comprehensive guide to help you navigate the process of securing business loans in the UAE.",
    date: "May 20, 2024",
    readTime: "6 min read",
    author: "Finance Experts",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Loans",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `# How to Secure Business Loans: A Step-by-Step Guide

Securing a business loan in the UAE requires careful planning and preparation. This comprehensive guide will walk you through the entire process, from assessing your needs to receiving funding.

## Understanding Your Options

Before applying, understand the different types of business loans available:

- **Term loans** - Fixed amount with regular repayments
- **Working capital loans** - For daily operations
- **Equipment financing** - For purchasing business equipment
- **Commercial mortgages** - For property purchases

## Step 1: Assess Your Needs

Determine exactly how much funding you need and what it will be used for. Lenders will want to see a clear purpose for the loan.

## Step 2: Check Your Credit Score

Your personal and business credit scores significantly impact loan approval and interest rates. Obtain your credit report and address any issues before applying.`,
    tags: ["Loans", "Business Finance", "UAE"]
  },
  {
    slug: "real-estate-financing-uae",
    title: "Real Estate Financing: What You Need to Know",
    description: "Key insights into real estate financing options and strategies for UAE businesses.",
    date: "May 10, 2024",
    readTime: "7 min read",
    author: "Blue Diamond Advisors",
    authorImage: "/placeholder-user-3.jpg",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    content: `# Real Estate Financing: What You Need to Know

Real estate remains one of the most attractive investment sectors in the UAE, but navigating the financing landscape can be complex. This guide covers the essential aspects of real estate financing in the region.

## Current Market Overview

The UAE real estate market continues to show resilience, with particular strength in:

- **Residential properties**
- **Commercial spaces**
- **Hospitality sector**
- **Industrial real estate**

## Financing Options

### 1. Bank Mortgages

Traditional bank mortgages remain the most common financing method, with competitive rates and terms available for both residents and non-residents.

### 2. Developer Payment Plans

Many developers offer attractive payment plans, often with post-handover payment options that can ease cash flow pressures.

### 3. Islamic Financing

Sharia-compliant financing options are widely available, including:
- **Ijara (Lease to Own)**
- **Murabaha (Cost-Plus Financing)**
- **Diminishing Musharaka (Partnership Financing)**`,
    tags: ["Real Estate", "Financing", "UAE", "Investment"]
  },
]

// Format date to a more readable format
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// Share functionality
const sharePost = (title: string) => {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: window.location.href
    }).catch(console.error)
  } else {
    // Fallback for browsers that don't support Web Share API
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const router = useRouter()

  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <Header />
        <section className="pt-40 pb-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Post Not Found</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Button 
              onClick={() => router.push('/blog')} 
              className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> 
              {t("blog.back") || "Back to Blog"}
            </Button>
          </motion.div>
        </section>
        <Footer />
      </main>
    )
  }

  // State for table of contents
  const [headings, setHeadings] = useState<{id: string, text: string, level: number}[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Generate table of contents from headings
  useEffect(() => {
    if (contentRef.current) {
      const elements = Array.from(contentRef.current.querySelectorAll('h2, h3'));
      const headingsList = elements.map((element) => ({
        id: element.id || element.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') || '',
        text: element.textContent || '',
        level: parseInt(element.tagName.substring(1))
      }));
      setHeadings(headingsList);
      
      // Add IDs to headings for anchor links
      elements.forEach((element, index) => {
        if (!element.id) {
          element.id = `section-${index}`;
        }
      });
    }
    
    // Set up intersection observer for active TOC item highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: [0, 0.5, 1.0], rootMargin: '0px 0px -50% 0px' }
    );

    // Observe all headings
    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => observer.observe(heading));

    // Set up scroll progress
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
      setShowBackToTop(scrolled > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [blog.content]);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // In a real app, you would send this to your backend
      console.log('New comment:', comment);
      setComment('');
      // Show success message
      alert('Thank you for your comment! It will be reviewed before publishing.');
    }
  };

  // Share on specific platforms
  const shareOnPlatform = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog.title);
    const text = encodeURIComponent(blog.description);
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${title}&body=${text}%0A%0ARead more: ${url}`, '_blank');
        break;
      default:
        break;
    }
  };

  // Function to render markdown content
  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      // Handle headings
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">{paragraph.replace('## ', '')}</h2>
      } 
      // Handle subheadings
      else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">{paragraph.replace('### ', '')}</h3>
      }
      // Handle unordered lists
      else if (paragraph.startsWith('- ')) {
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700 dark:text-gray-300">{paragraph.replace('- ', '')}</li>
          </ul>
        )
      }
      // Handle numbered lists
      else if (/^\d+\.\s/.test(paragraph)) {
        const item = paragraph.replace(/^\d+\.\s/, '');
        return (
          <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
            <li className="text-gray-700 dark:text-gray-300">{item}</li>
          </ol>
        )
      }
      // Handle bold text
      else if (paragraph.includes('**')) {
        const parts = paragraph.split('**')
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 1 ? 
                <span key={i} className="font-semibold text-gray-900 dark:text-white">{part}</span> : 
                part
            )}
          </p>
        )
      }
      // Handle links
      else if (paragraph.includes('[') && paragraph.includes('](') && paragraph.includes(')')) {
        const linkRegex = /\[(.*?)\]\((.*?)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;
        
        while ((match = linkRegex.exec(paragraph)) !== null) {
          // Add text before the link
          if (match.index > lastIndex) {
            parts.push(paragraph.substring(lastIndex, match.index));
          }
          
          // Add the link
          parts.push(
            <a 
              key={match.index}
              href={match[2]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              {match[1]}
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </a>
          );
          
          lastIndex = match.index + match[0].length;
        }
        
        // Add remaining text
        if (lastIndex < paragraph.length) {
          parts.push(paragraph.substring(lastIndex));
        }
        
        return <p key={index} className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{parts}</p>;
      }
      // Regular paragraph
      else if (paragraph.trim() !== '') {
        return <p key={index} className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{paragraph}</p>
      } 
      // Empty line (adds spacing)
      else {
        return <div key={index} className="h-4"></div>
      }
    });
  };

  // Get related posts (excluding current post)
  const relatedPosts = blogs
    .filter(b => b.slug !== slug)
    .slice(0, 2);

  return (
    <AnimatePresence>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative"
        ref={contentRef}
      >
        <Header />
        
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              onClick={() => router.push('/blog')} 
              variant="ghost" 
              className="group px-4 py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              {t("blog.back") || "Back to Blog"}
            </Button>
          </motion.div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-900/10 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-6">
                <Tag className="w-3.5 h-3.5 mr-1.5" />
                {blog.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                {blog.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                {blog.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3 border-2 border-white dark:border-gray-700 shadow">
                      <img 
                        src={blog.authorImage || '/placeholder-user.jpg'} 
                        alt={blog.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">{blog.author}</span>
                  </div>
                  <span className="hidden sm:block">•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {blog.date}
                  </div>
                  <span className="hidden sm:block">•</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {blog.readTime}
                  </div>
                </div>
                
                <button 
                  onClick={() => sharePost(blog.title)}
                  className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  aria-label="Share this article"
                >
                  <Share2 className="w-4 h-4 mr-1.5" />
                  Share
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            >
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-80"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="relative py-12 md:py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="lg:w-64 flex-shrink-0 hidden lg:block">
                  <div className="sticky top-24">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 px-2">ON THIS PAGE</div>
                    <nav className="space-y-2 border-l border-gray-200 dark:border-gray-700 pl-4">
                      {headings.map((heading) => (
                        <button
                          key={heading.id}
                          onClick={() => scrollToSection(heading.id)}
                          className={`block text-left w-full px-3 py-1.5 text-sm rounded-md transition-colors ${
                            activeId === heading.id
                              ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30'
                              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                          } ${heading.level === 3 ? 'pl-6 text-sm' : 'pl-3 font-medium'}`}
                        >
                          {heading.text}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              )}

              <div className="flex-1">
                <motion.article 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-gray-400 dark:prose-li:marker:text-gray-500 prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-700 dark:hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-a:transition-colors prose-img:rounded-xl prose-img:shadow-lg"
                >
                      {renderContent(blog.content)}
                </motion.article>
                
                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors cursor-pointer"
                          onClick={() => router.push(`/blog?tag=${tag.toLowerCase()}`)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Share this article</h3>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => shareOnPlatform('facebook')}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => shareOnPlatform('twitter')}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => shareOnPlatform('linkedin')}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => shareOnPlatform('email')}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Share via Email"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Copy link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={blog.authorImage} alt={blog.author} />
                        <AvatarFallback>{blog.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{blog.author}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {blog.author.includes('Team') ? 'Our team of financial experts brings years of experience in corporate finance, investment strategies, and market analysis to help you make informed decisions.' : 'Financial expert with years of experience in corporate finance and investment strategies.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-16">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Comments {comments.length > 0 && `(${comments.length})`}
                    </h2>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowComments(!showComments)}
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {showComments ? 'Hide Comments' : 'Show Comments'}
                    </Button>
                  </div>

                  {showComments && (
                    <>
                      <form onSubmit={handleCommentSubmit} className="mb-8">
                        <div className="mb-4">
                          <Textarea
                            placeholder="Share your thoughts..."
                            className="min-h-[100px]"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-end">
                          <Button type="submit" disabled={!comment.trim()}>
                            Post Comment
                          </Button>
                        </div>
                      </form>

                      <div className="space-y-6">
                        {comments.map((comment) => (
                          <div key={comment.id} className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0 last:pb-0">
                            <div className="flex items-start">
                              <Avatar className="w-10 h-10 mr-3">
                                <AvatarImage src={comment.avatar} alt={comment.author} />
                                <AvatarFallback>{comment.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium text-gray-900 dark:text-white">{comment.author}</h4>
                                  <span className="text-sm text-gray-500 dark:text-gray-400">{comment.date}</span>
                                </div>
                                <p className="mt-1 text-gray-700 dark:text-gray-300">{comment.content}</p>
                                <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                                  <MessageSquare className="w-3.5 h-3.5 mr-1" />
                                  Reply
                                </button>

                                {/* Replies */}
                                {comment.replies && comment.replies.length > 0 && (
                                  <div className="mt-4 pl-6 border-l-2 border-gray-200 dark:border-gray-700 space-y-4">
                                    {comment.replies.map((reply) => (
                                      <div key={reply.id} className="pt-4">
                                        <div className="flex items-start">
                                          <Avatar className="w-8 h-8 mr-2">
                                            <AvatarImage src={reply.avatar} alt={reply.author} />
                                            <AvatarFallback>{reply.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                          </Avatar>
                                          <div>
                                            <div className="flex items-center">
                                              <span className="text-sm font-medium text-gray-900 dark:text-white">{reply.author}</span>
                                              <span className="mx-2 text-gray-400">•</span>
                                              <span className="text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">{reply.content}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">You might also like</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Explore more insightful articles on financial topics</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((post, index) => (
                  <motion.article 
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50 dark:border-gray-700">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-600 text-white">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:no-underline group-hover:underline"
                          onClick={() => router.push(`/blog/${post.slug}`)}
                        >
                          Read more
                          <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.article>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  onClick={() => router.push('/blog')}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  View All Articles
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.main>
    </AnimatePresence>
  )
}