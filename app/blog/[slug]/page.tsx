"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Calendar, User, ArrowLeft, Clock, MessageSquare, Share2, Tag, ArrowUpRight, ChevronUp, MessageCircle, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

// أضف مصفوفة التدوينات الثابتة blogsEn هنا
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
    comments: 12,
    content: `# The Future of Corporate Finance in the UAE

The United Arab Emirates continues to be a global hub for business and finance, with corporate finance practices evolving rapidly to meet the demands of a dynamic economic landscape. This article explores the key trends and innovations shaping the future of corporate finance in the UAE.

## 1. Digital Transformation in Corporate Finance

### Blockchain and Smart Contracts
- Implementation of blockchain for secure and transparent transactions
- Smart contracts automating financial agreements
- Reduced processing times and increased efficiency

### Artificial Intelligence and Automation
- AI-powered financial analysis and forecasting
- Automated invoice processing and reconciliation
- Enhanced risk assessment models

## 2. Sustainable Finance Initiatives

### Green Bonds and ESG Investing
- Growth of green bond markets in the UAE
- Integration of Environmental, Social, and Governance (ESG) factors
- Sustainable project financing opportunities

### Renewable Energy Financing
- Investments in solar and wind energy projects
- Innovative financing models for sustainability initiatives
- Government incentives for green finance

## 3. Regulatory Developments

### Corporate Tax Implementation
- Impact of the new corporate tax regime
- Compliance requirements for businesses
- Tax planning strategies for corporations

### Anti-Money Laundering (AML) Regulations
- Enhanced due diligence requirements
- Technology solutions for AML compliance
- Cross-border regulatory cooperation

## 4. Fintech Innovation

### Digital Payment Solutions
- Growth of mobile and contactless payments
- Digital wallets and payment platforms
- Cross-border payment innovations

### Open Banking
- API-driven financial services
- Enhanced customer data sharing
- New business models in corporate banking

## 5. Economic Diversification and Growth Sectors

### Technology and Innovation Hubs
- Dubai International Financial Centre (DIFC) developments
- Abu Dhabi Global Market (ADGM) initiatives
- Funding opportunities for tech startups

### Healthcare and Life Sciences
- Investment in healthcare infrastructure
- Medical tourism financing
- Pharmaceutical and biotech funding

## 6. Risk Management in Volatile Markets

### Currency and Commodity Risk
- Hedging strategies for currency fluctuations
- Impact of oil price volatility
- Diversification approaches

### Cybersecurity in Finance
- Protecting financial data and transactions
- Regulatory requirements for cybersecurity
- Best practices for financial institutions

## 7. The Role of Family Businesses

### Succession Planning
- Transition to next-generation leadership
- Professionalization of family businesses
- Governance structures

### Access to Capital
- Alternative financing options
- Private equity and venture capital
- Capital market solutions

## 8. Future Outlook

The corporate finance landscape in the UAE is poised for continued transformation, driven by technological innovation, regulatory changes, and economic diversification. Businesses that adapt to these changes and leverage new opportunities will be well-positioned for success in the evolving financial ecosystem of the UAE.`,
    tags: ["Corporate Finance", "UAE", "Banking", "Fintech"]
  },
  {
    slug: "top-investment-strategies-2024",
    title: "Top Investment Strategies for 2024",
    description: "Discover the most promising investment opportunities and strategies for the coming year.",
    date: "April 28, 2024",
    readTime: 8,
    author: "Investment Team",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Investing",
    image: "https://images.unsplash.com/photo-1649817597237-68ad822141e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRvcCUyMGludmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    content: `# Top Investment Strategies for 2024

As we navigate through 2024, investors are facing a rapidly changing financial landscape. This guide outlines the most promising investment strategies to consider in the current market environment.

## 1. Technology and AI Growth Stocks

Technology continues to be a driving force in the market, with artificial intelligence leading the charge. Consider:

- **AI and machine learning companies**
- **Cloud computing services**
- **Cybersecurity firms**
- **Semiconductor manufacturers**

## 2. Sustainable and ESG Investing

Environmental, Social, and Governance (ESG) investing is no longer a trend but a necessity. Focus on:

- Renewable energy companies
- Green bonds
- Socially responsible funds
- Companies with strong governance practices

## 3. Emerging Markets

Emerging markets present significant growth potential, particularly in:

- Southeast Asia's digital economy
- African fintech innovations
- Latin American e-commerce
- Middle East renewable energy projects

## 4. Real Estate Investment Trusts (REITs)

REITs offer exposure to real estate markets with greater liquidity. Consider:

- Industrial and logistics properties
- Data center REITs
- Healthcare facilities
- Residential rental properties

## 5. Fixed Income and Bonds

With interest rates stabilizing, fixed income investments are becoming attractive:

- Short-duration bonds
- Corporate bonds with strong credit ratings
- Municipal bonds for tax advantages
- Inflation-protected securities

## Risk Management Strategies

Remember to diversify your portfolio and consider:

- Asset allocation based on risk tolerance
- Regular portfolio rebalancing
- Dollar-cost averaging
- Setting clear investment goals

By implementing these strategies and staying informed about market developments, investors can position themselves for success in 2024 and beyond.`,
    tags: ["Investing", "Stocks", "ESG", "2024 Trends"]
  },
  {
    slug: "rise-of-digital-banking-middle-east",
    title: "The Rise of Digital Banking in the Middle East",
    description: "How digital transformation is reshaping the banking sector in the Middle East region.",
    date: "April 15, 2024",
    readTime: 6,
    author: "Tech Finance",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Banking",
    image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `# The Rise of Digital Banking in the Middle East

The Middle East is experiencing a digital banking revolution, transforming how consumers and businesses manage their finances. This article explores the key developments and future outlook for digital banking in the region.

## Current Landscape

### Growth Drivers
- High smartphone penetration rates
- Young, tech-savvy population
- Government support for fintech innovation
- Increasing demand for convenient banking solutions

### Key Players
- **Neobanks**: Digital-only banks gaining traction
- **Traditional Banks**: Rapidly digitizing their services
- **Fintech Startups**: Innovating with new financial solutions

## Technological Innovations

### 1. Mobile-First Banking
- Feature-rich mobile apps
- Biometric authentication
- AI-powered customer service

### 2. Open Banking
- Secure data sharing between institutions
- Personalized financial products
- Improved customer experience

### 3. Blockchain and Security
- Enhanced transaction security
- Faster cross-border payments
- Reduced operational costs

## Regional Focus

### UAE
- Dubai International Financial Centre (DIFC) fintech hub
- Regulatory sandbox for innovation
- Smart Dubai initiative

### Saudi Arabia
- Vision 2030 digital transformation goals
- Saudi Central Bank fintech initiatives
- Growing investment in fintech startups

## Challenges and Opportunities

### Challenges
- Regulatory compliance
- Cybersecurity risks
- Customer trust and adoption

### Opportunities
- Financial inclusion
- Cross-border payment solutions
- Integration of Islamic finance principles

## Future Outlook

The digital banking sector in the Middle East is poised for significant growth, with projections indicating continued expansion in the coming years. Key trends to watch include:

- Increased collaboration between banks and fintechs
- Expansion of digital payment solutions
- Greater focus on customer experience
- Integration of AI and machine learning

As the digital banking ecosystem matures, we can expect to see more innovative solutions tailored to the unique needs of the Middle Eastern market.`,
    tags: ["Digital Banking", "Fintech", "Middle East", "Banking Innovation"]
  },
  {
    slug: "digital-banking-trends",
    title: "The Rise of Digital Banking in the Middle East",
    description: "How digital transformation is reshaping the banking sector in the Middle East region.",
    date: "April 15, 2024",
    readTime: 6,
    author: "Blue Diamond Finance",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "Banking",
    image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `# The Rise of Digital Banking in the Middle East

The Middle East is experiencing a digital banking revolution, transforming how consumers and businesses manage their finances. This article explores the key developments and future outlook for digital banking in the region.

## Current Landscape

### Growth Drivers
- High smartphone penetration rates
- Young, tech-savvy population
- Government support for fintech innovation
- Increasing demand for convenient banking solutions

### Key Players
- **Neobanks**: Digital-only banks gaining traction
- **Traditional Banks**: Rapidly digitizing their services
- **Fintech Startups**: Innovating with new financial solutions

## Technological Innovations

### 1. Mobile-First Banking
- Feature-rich mobile apps
- Biometric authentication
- AI-powered customer service

### 2. Open Banking
- Secure data sharing between institutions
- Personalized financial products
- Improved customer experience

### 3. Blockchain and Security
- Enhanced transaction security
- Faster cross-border payments
- Reduced operational costs

## Regional Focus

### UAE
- Dubai International Financial Centre (DIFC) fintech hub
- Regulatory sandbox for innovation
- Smart Dubai initiative

### Saudi Arabia
- Vision 2030 digital transformation goals
- Saudi Central Bank fintech initiatives
- Growing investment in fintech startups

## Challenges and Opportunities

### Challenges
- Regulatory compliance
- Cybersecurity risks
- Customer trust and adoption

### Opportunities
- Financial inclusion
- Cross-border payment solutions
- Integration of Islamic finance principles

## Future Outlook

The digital banking sector in the Middle East is poised for significant growth, with projections indicating continued expansion in the coming years. Key trends to watch include:

- Increased collaboration between banks and fintechs
- Expansion of digital payment solutions
- Greater focus on customer experience
- Integration of AI and machine learning

As the digital banking ecosystem matures, we can expect to see more innovative solutions tailored to the unique needs of the Middle Eastern market.`,
    tags: ["Digital Banking", "Fintech", "Middle East", "Banking Innovation"]
  },
  {
    slug: "sustainable-investing-guide",
    title: "Sustainable Investing: A Complete Guide",
    description: "Learn how to build an investment portfolio that aligns with your environmental and social values.",
    date: "March 30, 2024",
    readTime: 9,
    author: "Blue Diamond Finance",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    category: "ESG",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    content: `# Sustainable Investing: A Complete Guide

Sustainable investing is an approach to investing that considers the long-term impact of your investments on the environment, society, and the economy. This guide provides an overview of sustainable investing, its benefits, and how to get started.

## What is Sustainable Investing?

Sustainable investing is an investment approach that considers the environmental, social, and governance (ESG) factors of a company or investment. It aims to generate long-term financial returns while also promoting sustainable development and minimizing harm to the environment and society.

## Benefits of Sustainable Investing

### 1. Long-term Financial Returns
- Sustainable investing can lead to long-term financial returns, as companies that adopt sustainable practices tend to perform better over time.

### 2. Environmental Benefits
- Sustainable investing can help reduce greenhouse gas emissions, promote renewable energy, and conserve natural resources.

### 3. Social Benefits
- Sustainable investing can promote social justice, human rights, and labor standards.

## How to Get Started with Sustainable Investing

### 1. Assess Your Values and Goals
- Identify your environmental and social values, and set clear investment goals.

### 2. Choose Sustainable Investment Options
- Select investment products that align with your values and goals, such as ESG funds, impact investing, or socially responsible investing.

### 3. Evaluate ESG Performance
- Assess the ESG performance of companies and investment products using ESG ratings and reports.

### 4. Monitor and Adjust Your Portfolio
- Regularly review your portfolio to ensure it remains aligned with your values and goals, and make adjustments as needed.

## Sustainable Investing Strategies

### 1. ESG Integration
- Integrate ESG factors into your investment analysis and decision-making process.

### 2. Impact Investing
- Invest in companies or projects that have a positive impact on the environment or society.

### 3. Socially Responsible Investing
- Avoid investing in companies that have a negative impact on the environment or society.

## Conclusion

Sustainable investing is a powerful way to align your investments with your values and promote sustainable development. By following the steps outlined in this guide, you can get started with sustainable investing and make a positive impact on the world.`,
    tags: ["Sustainable Investing", "ESG", "Impact Investing", "Socially Responsible Investing"]
  },
  {
    slug: "real-estate-financing-uae",
    title: "Real Estate Financing: What You Need to Know",
    description: "Key insights into real estate financing options and strategies for UAE businesses.",
    date: "May 10, 2024",
    readTime: 7,
    author: "Blue Diamond Advisors",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
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

const isArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

export default function BlogPostPage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const router = useRouter()

  const [blog, setBlog] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [allBlogs, setAllBlogs] = useState<any[]>([])

  useEffect(() => {
    // ابحث أولاً في blogsEn
    const staticBlog = blogsEn.find(b => b.slug === slug)
    if (staticBlog) {
      setBlog(staticBlog)
      setAllBlogs(blogsEn)
      setLoading(false)
      return
    }
    // إذا لم توجد في الثابتة، ابحث في الباك اند
    const fetchBlog = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/blogs")
        const data = await res.json()
        const publishedBlogs = data.filter((b: any) => b.published).map(blog => ({
          ...blog,
          slug: blog.slug || (blog.title ? blog.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') : undefined),
        }));
        setAllBlogs([...blogsEn, ...publishedBlogs])
        const found = publishedBlogs.find((b: any) => b.slug === slug)
        setBlog(found || null)
      } catch (err) {
        setBlog(null)
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [slug])

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
  }, [blog?.content]);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!blog) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <section className="pt-40 pb-20 text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Post Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button 
            onClick={() => router.push('/blog')} 
            className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> 
            {t("blog.back") || "Back to Blog"}
          </Button>
        </section>
      </main>
    )
  }

  // هنا فقط أصبح blog !== null
  const relatedPosts = allBlogs
    .filter(b =>
      (b._id && blog._id ? b._id !== blog._id : true) &&
      b.slug !== blog.slug
    )
    .slice(0, 2);
  const articleDir = isArabic(blog.title) ? "rtl" : "ltr";

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
        dir={articleDir}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative ${articleDir === "rtl" ? "text-right" : "text-left"}`}
        ref={contentRef}
      >
        
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
              <h1
                className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6 ${isArabic(blog.title) ? "text-right" : "text-left"}`}
                dir={isArabic(blog.title) ? "rtl" : "ltr"}
              >
                {blog.title}
              </h1>
              <p
                className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 ${isArabic(blog.description) ? "text-right" : "text-left"}`}
                dir={isArabic(blog.description) ? "rtl" : "ltr"}
              >
                {blog.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
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
                    {`${blog.readTime} ${t('blog.minRead')}`}
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
                  src={blog.image?.startsWith("/uploads") ? `http://localhost:8080${blog.image}` : blog.image || ''}
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

              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("blog.relatedTitle")}</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("blog.relatedDesc")}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((post, index) => (
                  <motion.article 
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50 dark:border-gray-700">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image?.startsWith("/uploads") ? `http://localhost:8080${post.image}` : post.image || ''}
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
                          <span>{`${post.readTime} ${t('blog.minRead')}`}</span>
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
                          {t('blog.readMore')}
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
                  {t('blog.viewAll')}
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