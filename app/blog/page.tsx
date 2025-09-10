"use client"

import { useEffect, useState } from 'react';
import { useLanguage } from "@/components/language-provider"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  titleAr?: string;
  description: string;
  excerpt: string;
  excerptAr?: string;
  content: string;
  contentAr?: string;
  date: string;
  author: string;
  authorAr?: string;
  authorImage?: string;
  category: string;
  categoryAr?: string;
  readTime: number;
  image: string;
  comments: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  tagsAr?: string[];
  language?: 'en' | 'ar';
}


export default function BlogPage() {
  const { t, language } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isRTL = language === 'ar';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/blogs');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        // Filter out any unpublished blogs
        const publishedBlogs = Array.isArray(data) ? data.filter(blog => blog.published) : [];
        setBlogs(publishedBlogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blog posts');
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div className="py-12 text-center">Loading...</div>;
    }

    if (error) {
      return (
        <div className="py-12 text-center text-red-500">
          {error}
        </div>
      );
    }

    if (blogs.length === 0) {
      return (
        <div className="py-12 text-center">
          <p className="text-xl text-gray-600 mb-4">
            {t('blog.noPosts') || 'No blog posts available yet. Please check back later.'}
          </p>
          <p className="text-gray-500">
            {t('blog.comingSoon') || 'New content coming soon!'}
          </p>
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => {
          const displayTitle = language === 'ar' && blog.titleAr ? blog.titleAr : blog.title;
          const displayExcerpt = language === 'ar' && blog.excerptAr ? blog.excerptAr : blog.excerpt;
          const displayAuthor = language === 'ar' && blog.authorAr ? blog.authorAr : blog.author;
          const displayCategory = language === 'ar' && blog.categoryAr ? blog.categoryAr : blog.category;
          
          return (
            <Link key={blog._id} href={`/blog/${blog.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={blog.image?.startsWith("/uploads") ? `http://localhost:8080${blog.image}` : blog.image}
                    alt={displayTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(blog.date || blog.createdAt).toLocaleDateString()}
                  </div>
                  <CardTitle className={isRTL ? "text-right" : "text-left"} dir={isRTL ? "rtl" : "ltr"}>
                    {displayTitle}
                  </CardTitle>
                  <CardDescription className={isRTL ? "text-right" : "text-left"} dir={isRTL ? "rtl" : "ltr"}>
                    {displayExcerpt}
                  </CardDescription>
                  {displayCategory && (
                    <div className="text-xs text-blue-600 font-medium mt-2">
                      {displayCategory}
                    </div>
                  )}
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          {t('blog.title') || 'Our Blog'}
        </h1>
        {renderContent()}
      </div>
    </main>
  );
}
