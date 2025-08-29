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
  description: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
  image: string;
  comments: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  language?: 'en' | 'ar';
}

// Static fallback data
const staticBlogs: BlogPost[] = [
  {
    _id: '1',
    slug: 'future-of-corporate-finance-uae',
    title: 'The Future of Corporate Finance in the UAE',
    description: 'Explore the latest trends and opportunities in corporate finance.',
    excerpt: 'Explore the latest trends and opportunities in corporate finance.',
    content: 'Full content here...',
    date: '2024-06-01',
    author: 'Blue Diamond Team',
    category: 'Finance',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
    comments: 12,
    published: true,
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2024-06-01T00:00:00.000Z',
    language: 'en'
  }
];

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
        setBlogs(publishedBlogs.length > 0 ? publishedBlogs : staticBlogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blog posts');
        setBlogs(staticBlogs);
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
        {blogs.map((blog) => (
          <Link key={blog._id} href={`/blog/${blog.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(blog.date || blog.createdAt).toLocaleDateString()}
                </div>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
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
