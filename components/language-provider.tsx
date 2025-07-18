"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

const translations: Record<string, Record<string, string>> = {
  en: {
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    "nav.home": "Home",
    "nav.language": "العربية",
    "hero.title": "Blue Diamond Financing Broker",
    "hero.subtitle": "Your Bridge to Smarter Business Finance",
    "hero.description": "Empowering Businesses with Tailored Financial Solutions",
    "hero.cta": "Get Started",
    "hero.growthFocused": "Growth Focused",
    "features.title": "Our Features",
    "features.subtitle": "Tailored financial solutions designed for your needs",
    "features.growth.title": "Growth Focused",
    "features.growth.description": "Strategic financing solutions for business expansion",
    "features.trusted.title": "Trusted Partner",
    "features.trusted.description": "30+ years of expertise in UAE financial markets",
    "features.fast.title": "Fast Execution",
    "features.fast.description": "Swift approvals and efficient processing",
    "hero.growthDesc": "Strategic financing solutions for business expansion",
    "hero.trustedPartner": "Trusted Partner",
    "hero.trustedDesc": "30+ years of expertise in UAE financial markets",
    "hero.fastExecution": "Fast Execution",
    "hero.badge": "Finance Broker",
    "hero.fastDesc": "Swift approvals and efficient processing",
    "hero.secondaryCta": "Register Now",
    "hero.trustedBy": "Trusted by 1000+ businesses",
    "registration.title": "Register Now",
    "registration.fullName": "Full Name",
    "registration.email": "Email",
    "registration.phone": "Phone Number",
    "registration.subject": "Subject",
    "registration.selectSubject": "Select a subject",
    "registration.generalInquiry": "General Inquiry",
    "registration.services": "Our Services",
    "registration.support": "Support",
    "registration.other": "Other",
    "registration.message": "Message",
    "registration.submit": "Submit",
    "registration.submitting": "Submitting...",
    "registration.success": "Registration successful! We will contact you soon.",
    "registration.error": "An error occurred. Please try again.",
    "about.title": "About Us",
    "about.subtitle": "Empowering Businesses with Tailored Financial Solutions",
    "about.description":
      "At Blue Diamond Financing Broker, we specialize in helping companies across the UAE navigate the complex world of corporate finance with clarity and confidence. As an independent consultancy based in Dubai, we connect businesses with the banking solutions they need to grow, restructure, or stabilize operations.",
    "about.description2":
      "With deep expertise in corporate finance, real estate financing, business loan structuring, and banking advisory, we serve as a strategic partner to companies of all sizes—whether you're scaling up, managing liquidity, or seeking a financial turnaround.",
    "about.whatWeDo": "What We Do:",
    "about.quote":
      "Whether your business is facing challenges or looking to capitalize on new opportunities, we are here to support your journey—with discretion, dedication, and a deep understanding of the UAE's financial landscape.",
    "stats.yearsExp": "Years Experience",
    "stats.clients": "Clients Served",
    "stats.successRate": "Success Rate",
    "stats.emirates": "Emirates Covered",
    "services.title": "Our Services",
    "services.subtitle": "Tailored Financial Solutions for Your Business Success",
    "services.realEstate": "Real Estate Finance (Acquisition)",
    "services.realEstateDesc":
      "We facilitate strategic acquisition financing for residential, commercial, and mixed-use properties.",
    "services.refinancing": "Real Estate Equity Release & Cash-Out Refinancing",
    "services.refinancingDesc":
      "Unlock the equity in your existing real estate assets through our cash-out refinancing solutions.",
    "services.construction": "Construction & Real Estate Project Financing",
    "services.constructionDesc": "From inception to handover, we finance your construction projects.",
    "services.corporate": "Corporate Finance & Working Capital Facilities",
    "services.corporateDesc": "Supporting corporate operations across industries with comprehensive solutions.",
    "services.acquisition": "Business Acquisition Finance",
    "services.acquisitionDesc": "We provide acquisition financing tailored to your specific transaction.",
    "services.trade": "Trade Finance Facilities (LC, LG, TR, etc.)",
    "services.tradeDesc": "Facilitating international trade and commerce with comprehensive trade finance instruments.",
    "services.restructuring": "Debt Restructuring & Settlement Solutions",
    "services.restructuringDesc":
      "When debts become burdensome, we step in to restructure and settle existing obligations.",
    "services.ctaTitle": "Ready to Transform Your Business Finance?",
    "services.ctaDesc":
      "Each service is underpinned by Blue Diamond's commitment to excellence—powered by over 30 years of market expertise, deep lender relationships, and a track record of delivering swift, efficient financial solutions.",
    "services.ctaButton": "Get Started Today",
    "services.keyFeatures": "Key Features",
    "services.whyChooseUs": "Why Choose Us",
    "why.title": "Why Choose Us",
    "why.description":
      "At Blue Diamond, we're not just brokers—we're problem solvers and financial architects. Every business is unique, and so are our solutions.",
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to Transform Your Business Finance?",
    "contact.getInTouch": "Get in Touch",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.locationLabel": "Location",
    "contact.location": "Dubai, United Arab Emirates",
    "contact.businessHours": "Business Hours",
    "contact.sunThu": "Sunday - Thursday",
    "contact.sunThuTime": "9:00 AM - 6:00 PM",
    "contact.friSat": "Friday - Saturday",
    "contact.closed": "Closed",
    "footer.description":
      "Your trusted partner in navigating the complex world of corporate finance with clarity and confidence across the UAE.",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Info",
    "footer.location": "Dubai, UAE",
    "blog.title": "Our Blog",
    "blog.subtitle": "Insights, news, and tips for smarter business finance.",
    "blog.readMore": "Read More",
    "blog.ctaSubtitle": "Subscribe to our newsletter for the latest insights and updates.",
    "blog.ctaTitle": "Want to stay updated?",
    "blog.ctaDesc": "Subscribe to our newsletter for the latest insights and updates.",
    "blog.ctaButton": "Subscribe Now",
    "blog.subscribe": "Subscribe",
    "blog.back": "Back to Blog",
    "blog.special": "Featured Insights",
    "blog.emailPlaceholder": "Enter your email",
    "blog.featured": "Featured",
    "blog.recentPosts": "Recent Posts",
    "blog.featuredPost": "Featured Post",
    "blog.latestInsights": "Latest Insights",
    "blog.relatedTitle": "You might also like",
    "blog.relatedDesc": "Explore more insightful articles on financial topics",
    "common.readMore": "Read More",
    "contact.availability": "Available",
    "common.backToServices" : "Back to services",
    "common.getStarted": "Get Started",
    "blog.viewAll": "View All Articles",
    "blog.minRead": "min read"
  },
  ar: {
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.contact": "اتصل بنا",
    "nav.blog": "المدونة",
    "nav.home": "الرئيسية",
    "nav.language": "English",
    "hero.title": "بلو دايموند وسيط تمويل",
    "hero.subtitle": "طريقك نحو آفاق جديدة من التمويل الذكي",
    "hero.badge": "وسيط تمويل",
    "hero.description": "تمكين الشركات بحلول مالية مخصصة",
    "hero.cta": "ابدأ الآن",
    "hero.growthFocused": "التركيز على النمو",
    "features.title": "مميزاتنا",
    "features.subtitle": "نقدم لكم أفضل الحلول التمويلية المصممة خصيصاً لاحتياجاتكم",
    "features.growth.title": "التركيز على النمو",
    "features.growth.description": "حلول تمويلية استراتيجية لتوسيع الأعمال",
    "features.trusted.title": "شريك موثوق",
    "features.trusted.description": "أكثر من 30 عامًا من الخبرة في الأسواق المالية الإماراتية",
    "features.fast.title": "تنفيذ سريع",
    "features.fast.description": "موافقات سريعة ومعالجة فعالة",
    "hero.growthDesc": "حلول تمويلية استراتيجية لتوسيع الأعمال",
    "hero.trustedPartner": "شريك موثوق",
    "hero.trustedDesc": "أكثر من 30 عامًا من الخبرة في الأسواق المالية الإماراتية",
    "hero.fastExecution": "تنفيذ سريع",
    "hero.fastDesc": "موافقات سريعة ومعالجة فعالة",
    "hero.secondaryCta": "التسجيل الآن",
    "hero.trustedBy": "موثوق به من قبل أكثر من 1000 عملاء",
    "registration.title": "سجل الآن",
    "registration.fullName": "الاسم بالكامل",
    "registration.email": "البريد الإلكتروني",
    "registration.phone": "رقم الهاتف",
    "registration.subject": "الموضوع",
    "registration.selectSubject": "اختر موضوعًا",
    "registration.generalInquiry": "استفسار عام",
    "registration.services": "خدماتنا",
    "registration.support": "الدعم الفني",
    "registration.other": "أخرى",
    "registration.message": "الرسالة",
    "registration.submit": "إرسال",
    "registration.submitting": "جاري الإرسال...",
    "registration.success": "تم التسجيل بنجاح! سنتواصل معك قريبًا.",
    "registration.error": "حدث خطأ. يرجى المحاولة مرة أخرى.",
    "about.title": "من نحن",
    "about.subtitle": "تمكين الشركات بحلول مالية مخصصة",
    "about.description":
      "في بلو دايموند، نُساعد الشركات في جميع أنحاء دولة الإمارات وكذلك دول الخليج المجاورة على التنقل في عالم التمويل المؤسسي المعقد بثقة ووضوح. بصفتنا جهة استشارية مستقلة مقرها دبي، نربط أعمالكم بحلول مصرفية مدروسة تساعدكم على النمو، إعادة الهيكلة و استقرار العمليات.",
    "about.description2":
      "نتمتع بخبرة واسعة في مجالات التمويل المؤسسي، تمويل العقارات، هيكلة القروض التجارية، والخدمات الاستشارية المصرفية، مما يجعلنا شريكًا استراتيجيًا موثوقًا للأفراد وكذلك للشركات باختلاف أحجامها—سواء كنتم في مرحلة التوسع، أو تحتاجون إلى إدارة السيولة، أو تسعون للعودة إلى المسار الصحيح.",
    "about.whatWeDo": "ما نقوم به:",
    "about.quote":
      "سواء كنتم تواجهون تحديات أو تسعون لاستغلال فرص جديدة، نحن هنا لدعم رحلتكم بكامل السرية والمهنية، مستندين إلى فهم عميق لسوق التمويل في دولة الإمارات.",
    "stats.yearsExp": "سنة خبرة",
    "stats.clients": "عميل راضٍ",
    "stats.successRate": "معدل نجاح",
    "stats.emirates": "إمارة مغطاة",
    "services.title": "خدماتنا",
    "services.subtitle": "حلول تمويلية مخصصة لنجاح أعمالك",
    "services.realEstate": "تمويل شراء العقارات (الاستحواذ)",
    "services.realEstateDesc": "نُرتب تمويلاً متخصصًا للاستحواذ على العقارات السكنية والتجارية ومتعددة الاستخدامات.",
    "services.refinancing": "إعادة تمويل العقارات المملوكة (إجارة منتهية بالتمليك)",
    "services.refinancingDesc": "نُساعدكم على تحرير السيولة من أصولكم العقارية القائمة دون الحاجة إلى بيعها.",
    "services.construction": "تمويل المشاريع العقارية والإنشائية",
    "services.constructionDesc": "نُموّل المشاريع العقارية من البداية وحتى التسليم.",
    "services.corporate": "تمويل الشركات وتسهيلات رأس المال العامل",
    "services.corporateDesc": "نُقدّم حلول تمويلية متكاملة لدعم العمليات اليومية للشركات.",
    "services.acquisition": "تمويل الاستحواذ على الأعمال",
    "services.acquisitionDesc": "سواء كنتم بصدد شراء شركة أو الاندماج معها، نُرتب تمويلًا متخصصًا.",
    "services.trade": "تسهيلات التمويل التجاري (خطابات ضمان، اعتمادات مستندية وغيرها)",
    "services.tradeDesc": "ندعم أنشطة التجارة المحلية والدولية من خلال أدوات تمويل تجاري متنوعة.",
    "services.restructuring": "إعادة هيكلة الديون المتعثرة وحلول التسوية",
    "services.restructuringDesc": "عند تراكم الديون أو صعوبة السداد، نتدخل لإعادة هيكلة الالتزامات القائمة.",
    "services.ctaTitle": "مستعد لتحويل تمويل أعمالك؟",
    "services.ctaDesc":
      "جميع خدماتنا تستند إلى التزامنا بالتميز، ومعرفة عميقة بالسوق، وعلاقات قوية مع الممولين، مدعومة بخبرة تتجاوز 30 عامًا في تقديم حلول مالية فعالة وسريعة التنفيذ.",
    "services.ctaButton": "ابدأ اليوم",
    "services.keyFeatures": "المميزات الرئيسية",
    "services.whyChooseUs": "لماذا تختارنا",
    "why.title": "لماذا نحن",
    "why.description":
      "في بلو دايموند، لسنا مجرد وسطاء، بل نحن مهندسو حلول مالية. نُدرك أن كل عمل تجاري فريد من نوعه، ولهذا فإن حلولنا مصمّمة خصيصًا لتناسب احتياجاتكم.",
    "contact.title": "اتصل بنا",
    "contact.subtitle": "مستعد لتحويل تمويل أعمالك؟",
    "contact.getInTouch": "تواصل معنا",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.subject": "الموضوع",
    "contact.message": "الرسالة",
    "contact.submit": "إرسال الرسالة",
    "contact.sending": "جاري الإرسال...",
    "contact.phoneLabel": "الهاتف",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.locationLabel": "الموقع",
    "contact.location": "دبي، دولة الإمارات العربية المتحدة",
    "contact.businessHours": "ساعات العمل",
    "contact.sunThu": "الأحد - الخميس",
    "contact.sunThuTime": "9:00 صباحًا - 6:00 مساءً",
    "contact.friSat": "الجمعة - السبت",
    "contact.closed": "مغلق",
    "footer.description":
      "شريككم الموثوق في التنقل في عالم التمويل المؤسسي المعقد بوضوح وثقة في جميع أنحاء دولة الإمارات.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.location": "دبي، الإمارات",
    "blog.title": "مدونتنا",
    "blog.subtitle": "مقالات، أخبار، ونصائح لتمويل أعمال أكثر ذكاءً.",
    "blog.readMore": "اقرأ المزيد",
    "blog.ctaSubtitle": "اشترك في النشرة البريدية لأحدث المقالات والتحديثات.",
    "blog.ctaTitle": "هل ترغب في البقاء على اطلاع؟",
    "blog.ctaDesc": "اشترك في النشرة البريدية لأحدث المقالات والتحديثات.",
    "blog.ctaButton": "اشترك الآن",
    "blog.subscribe": "اشترك",
    "blog.back": "العودة للمدونة",
    "blog.special": "مقالات مميزة",
    "blog.featured": "مميز",
    "blog.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "blog.recentPosts": "المقالات الأحدث",
    "blog.featuredPost": "المقالات المميزة",
    "blog.latestInsights": "آخر المقالات",
    "blog.relatedTitle": "قد يعجبك أيضًا",
    "blog.relatedDesc": "اكتشف المزيد من المقالات المالية المفيدة",
    "common.readMore": "اقرأ المزيد",
    "contact.availability": "متاح",
    "common.backToServices": "الرجوع للخدمات",
    "common.getStarted": "ابدأ الآن",
    "blog.viewAll": "عرض جميع المقالات",
    "blog.minRead": "دقيقة قراءة"
  },
}

interface LanguageContextProps {
  language: 'en' | 'ar'
  currentLanguage: 'en' | 'ar'
  setLanguage: (language: 'en' | 'ar') => void
  t: (key: string) => string
}


const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'ar'>(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language')
      return savedLanguage === 'ar' ? 'ar' : 'en'
    }
    return 'en'
  })

  const t: (key: string) => string = (key) => {
    return translations[language][key] || key
  }

  // Save language to localStorage when it changes
  const handleLanguageChange = (newLanguage: 'en' | 'ar') => {
    setLanguage(newLanguage)
  }

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, currentLanguage: language, setLanguage: handleLanguageChange, t }}>
      <div className={language === "ar" ? "rtl" : "ltr"} dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextProps {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
