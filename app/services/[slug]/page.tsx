'use client';

import { notFound } from 'next/navigation';
import { Building, RefreshCw, Hammer, Briefcase, ShoppingCart, Ship, RotateCw, ArrowLeft, Handshake } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';

// Service data with more details
const serviceDetails = {
  'real-estate': {
    icons: [Building],
    title: { en: 'Real Estate Financing', ar: 'تمويل العقارات' },
    description: { en: 'Tailored property financing solutions for investors and developers', ar: 'حلول تمويل عقاري مخصصة للمستثمرين والمطورين' },
    color: 'from-blue-500 to-blue-600',
    features: [
      { en: 'Customized financing solutions for all property types', ar: 'حلول تمويلية مخصصة لجميع أنواع العقارات' },
      { en: 'Competitive interest rates and flexible terms', ar: 'أسعار فائدة تنافسية وشروط مرنة' },
      { en: 'Fast approval process', ar: 'إجراءات موافقة سريعة' },
      { en: 'Expert guidance through every step', ar: 'إرشاد خبراء في كل خطوة' },
      { en: 'Portfolio analysis and optimization', ar: 'تحليل وتحسين المحفظة العقارية' }
    ],
    content: [
      { en: 'Our real estate financing solutions are designed to help investors and developers secure the capital they need for property acquisitions, development projects, and portfolio expansions. We work with a network of financial institutions to provide competitive rates and flexible terms.', ar: 'حلول التمويل العقاري لدينا مصممة لمساعدة المستثمرين والمطورين في الحصول على رأس المال اللازم لشراء العقارات، مشاريع التطوير، وتوسيع المحافظ. نعمل مع شبكة من المؤسسات المالية لتقديم أسعار تنافسية وشروط مرنة.' },
      { en: 'Whether you\'re looking to finance a single-family home, multi-family property, commercial real estate, or large-scale development, our team of experts will guide you through the entire process, from application to closing.', ar: 'سواء كنت ترغب في تمويل منزل عائلي، أو عقار متعدد الوحدات، أو عقار تجاري، أو مشروع تطوير كبير، سيرشدك فريقنا من الخبراء خلال العملية بالكامل من التقديم حتى الإغلاق.' }
    ]
  },
  // Add other services with similar structure
  'refinancing': {
    icons: [RefreshCw],
    title: { en: 'Refinancing Solutions', ar: 'حلول تمويل التمويل' },
    description: { en: 'Optimize your existing loans and credit facilities', ar: 'تحسين مؤقتاتك القروض والمنشطات المالية' },
    color: 'from-emerald-500 to-teal-600',
    features: [
      { en: 'Lower your interest rates', ar: 'تخفيف أسعار الفائدة' },
      { en: 'Extend loan terms', ar: 'تمديد أجل القروض' },
      { en: 'Consolidate debt', ar: 'تجميع الديون' },
      { en: 'Improve cash flow', ar: 'تحسين التدفق النقدي' },
      { en: 'Expert financial analysis', ar: 'تحليل مالي خبير' }
    ],
    content: [
      { en: 'Our refinancing solutions help businesses optimize their financial position by securing better terms on existing loans and credit facilities. We analyze your current financial obligations and negotiate with lenders to reduce costs and improve cash flow.', ar: 'حلول تمويل التمويل لدينا تساعد الشركات في تحسين موقفها المالي من خلال الحصول على شروط أفضل على القروض والمنشطات المالية الحالية. نحن نحلل التزاماتك المالية الحالية ونتفاوض مع الممولين لتقليل التكاليف وتحسين التدفق النقدي.' },
      { en: 'With access to a wide network of lenders, we can help you find the best refinancing options tailored to your specific needs and financial goals.', ar: 'مع وجود شبكة واسعة من الممولين، يمكننا مساعدتك في العثور على أفضل خيارات تمويل التمويل المناسبة لاحتياجاتك وأهدافك المالية.' }
    ]
  },
  'corporate': {
    icons: [Briefcase],
    title: { en: 'Corporate Financing', ar: 'تمويل الشركات' },
    description: { en: 'Comprehensive financial solutions for businesses of all sizes', ar: 'حلول مالية كاملة للشركات بجميع الأحجام' },
    color: 'from-purple-500 to-indigo-600',
    features: [
      { en: 'Business expansion financing', ar: 'تمويل توسيع الأعمال' },
      { en: 'Working capital solutions', ar: 'حلول رأس المال العامل' },
      { en: 'Equipment and asset financing', ar: 'تمويل المعدات والأصول' },
      { en: 'Mergers and acquisitions support', ar: 'دعم الاندماجات والاستحواذات' },
      { en: 'Customized financial strategies', ar: 'استراتيجيات مالية مخصصة' }
    ],
    content: [
      { en: 'Our corporate financing services are designed to support businesses at every stage of growth. We provide tailored financial solutions that help companies achieve their strategic objectives and maintain healthy cash flow.', ar: 'خدمات تمويل الشركات لدينا مصممة لدعم الشركات في كل مرحلة من مراحل النمو. نقدم حلول تمويلية مخصصة لمساعدة الشركات على تحقيق أهدافها الاستراتيجية والحفاظ على تدفق نقدي صحي.' },
      { en: 'Whether you\'re looking to expand operations, acquire new assets, or navigate a merger or acquisition, our team of financial experts will work closely with you to develop a customized financing strategy.', ar: 'سواء كنت ترغب في توسيع العمليات أو شراء أصول جديدة أو تنقل على اندماج أو استحواذ، سيعمل فريقنا من الخبراء الماليين معك بشكل وثيق لتطوير استراتيجية تمويل مخصصة.' }
    ]
  },
  'construction': {
    icons: [Hammer],
    title: { en: 'Construction Financing', ar: 'تمويل الإنشاءات' },
    description: { en: 'Tailored financing solutions for construction projects', ar: 'حلول تمويلية مخصصة لمشاريع الإنشاءات' },
    color: 'from-amber-500 to-orange-600',
    features: [
      { en: 'New construction financing', ar: 'تمويل الإنشاءات الجديدة' },
      { en: 'Renovation and rehabilitation loans', ar: 'قروض الترميم والتأهيل' },
      { en: 'Land acquisition and development', ar: 'تمويل شراء وتطوير الأراضي' },
      { en: 'Bridge financing', ar: 'تمويل مرحلي (جسر)' },
      { en: 'Construction-to-permanent loans', ar: 'قروض من الإنشاء إلى التمليك' }
    ],
    content: [
      { en: 'Our construction financing solutions are designed to support builders, developers, and investors at every stage of the construction process. We understand the unique challenges of construction projects and provide flexible financing options to keep your project on track.', ar: 'حلول تمويل الإنشاءات لدينا مصممة لدعم المقاولين والمطورين والمستثمرين في جميع مراحل البناء. نحن نفهم تحديات مشاريع الإنشاء ونوفر خيارات تمويل مرنة لضمان سير المشروع بنجاح.' },
      { en: 'From ground-up construction to major renovations, our team will work with you to structure a loan that meets your specific needs and timeline.', ar: 'من الإنشاءات الجديدة إلى الترميمات الكبرى، سيعمل فريقنا معك لتصميم قرض يناسب احتياجاتك وجدولك الزمني.' }
    ]
  },
  'acquisition': {
    icons: [Handshake], // Only Handshake icon
    title: { en: 'Acquisition Financing', ar: 'تمويل الاستحواذ' },
    description: { en: 'Strategic financing for business and asset acquisitions', ar: 'تمويل استراتيجي للاستحواذات التجارية والأصول' },
    color: 'from-rose-500 to-pink-600',
    features: [
      { en: 'Business acquisition loans', ar: 'قروض استحواذ الشركات' },
      { en: 'Leveraged buyout financing', ar: 'تمويل استحواذ متضمن' },
      { en: 'Asset-based lending', ar: 'تمويل مبني على الأصول' },
      { en: 'Seller financing arrangements', ar: 'ترتيبات تمويل البائع' },
      { en: 'Management buyout financing', ar: 'تمويل استحواذ الإدارة' }
    ],
    content: [
      { en: 'Our acquisition financing services help businesses seize growth opportunities through strategic acquisitions. We provide the capital and expertise needed to successfully complete transactions and integrate new assets.', ar: 'خدمات تمويل الاستحواذ لدينا تساعد الشركات في الاستفادة من فرص النمو من خلال الاستحواذات الاستراتيجية. نقدم الأموال والخبرة اللازمة لإكمال المعاملات بنجاح ودمج الأصول الجديدة.' },
      { en: 'Whether you\'re looking to acquire a competitor, expand into new markets, or consolidate your industry, we can structure a financing solution that aligns with your strategic goals.', ar: 'سواء كنت ترغب في شراء منافس أو توسيع إلى أسواق جديدة أو تجميع صناعتك، يمكننا تصميم حل تمويلي يتوافق مع أهدافك الاستراتيجية.' }
    ]
  },
  'trade': {
    icons: [Ship],
    title: { en: 'Trade Finance', ar: 'تمويل التجارة' },
    description: { en: 'Solutions for international trade and commerce', ar: 'حلول للتجارة الدولية والتجارة' },
    color: 'from-cyan-500 to-blue-600',
    features: [
      { en: 'Letters of credit', ar: 'أوراق الائتمان' },
      { en: 'Export and import financing', ar: 'تمويل التصدير والاستيراد' },
      { en: 'Inventory and receivables financing', ar: 'تمويل المخزون والحسابات المستحقة' },
      { en: 'Commodity trade finance', ar: 'تمويل تجارة السلع' },
      { en: 'Supply chain financing', ar: 'تمويل سلسلة التوريد' }
    ],
    content: [
      { en: 'Our trade finance solutions help businesses navigate the complexities of international trade. We provide the financial instruments and support needed to facilitate smooth cross-border transactions.', ar: 'حلول تمويل التجارة لدينا تساعد الشركات في التعامل مع تعقيدات التجارة الدولية. نقدم الأدوات المالية والدعم اللازم لتسهيل المعاملات الدولية بشكل سلس.' },
      { en: 'From securing payment to managing currency risk, our comprehensive trade services ensure your international business operations run efficiently and profitably.', ar: 'من ضمان دفع الأموال إلى إدارة خطر العملة الأجنبية، تأكد خدماتنا التجارية الشاملة من تشغيل عملياتك التجارية الدولية بكفاءة وربحية.' }
    ]
  },
  'restructuring': {
    icons: [RotateCw],
    title: { en: 'Debt Restructuring', ar: 'تصميم الديون' },
    description: { en: 'Strategic solutions for financial restructuring', ar: 'حلول استراتيجية لتصميم الديون' },
    color: 'from-violet-500 to-purple-600',
    features: [
      { en: 'Debt consolidation', ar: 'تجميع الديون' },
      { en: 'Loan modifications', ar: 'تعديل القروض' },
      { en: 'Refinancing solutions', ar: 'حلول تمويل التمويل' },
      { en: 'Payment restructuring', ar: 'تصميم الدفع' },
      { en: 'Financial restructuring advisory', ar: 'استشارات تصميم الديون' }
    ],
    content: [
      { en: 'Our debt restructuring services help businesses facing financial challenges by providing strategic solutions to improve cash flow and ensure long-term sustainability.', ar: 'خدمات تصميم الديون لدينا تساعد الشركات التي تواجه تحديات مالية على تقديم حلول استراتيجية لتحسين التدفق النقدي وضمان الاستمرارية الطويلة المدى.' },
      { en: 'We work closely with you to analyze your financial situation, negotiate with creditors, and implement a restructuring plan that puts your business on a path to financial recovery and growth.', ar: 'نعمل بشكل وثيق معك لتحليل موقفك المالي، ونتفاوض مع الدائنين، وتنفيذ خطة تصميم تضع على طريقة تمويلية يمكنك من التعافي المالي والنمو.' }
    ]
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { t, language } = useLanguage();
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];
  
  if (!service) {
    notFound();
  }
  
  const Icons = service.icons || [];
  
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r ${service.color} text-white`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <Link 
            href="/#services" 
            className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('common.backToServices')}
          </Link>
          
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 flex gap-2">
              {Icons.length > 0 && Icons.map((IconComp, idx) => (
                <IconComp key={idx} className="w-12 h-12" />
              ))}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title[language]}</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">{service.description[language]}</p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5"></div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {service.content.map((paragraph, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {paragraph[language]}
              </motion.p>
            ))}
            
            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('services.keyFeatures')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.4 }}
                    className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`p-2 rounded-lg ${service.color.replace('from-', 'bg-').replace(' to-', '/50')} text-white mr-4 flex gap-1`}>
                      {Icons.length > 0 && Icons.map((IconComp, idx) => (
                        <IconComp key={idx} className="w-5 h-5" />
                      ))}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{feature[language]}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('services.whyChooseUs')}
              </h3>
              <ul className="space-y-4">
                {[
                  { en: 'Expert financial advisors', ar: 'مستشارون ماليون خبراء' },
                  { en: 'Competitive rates', ar: 'أسعار تنافسية' },
                  { en: 'Fast approval process', ar: 'إجراءات موافقة سريعة' },
                  { en: 'Personalized service', ar: 'خدمة مخصصة' },
                  { en: 'Wide network of lenders', ar: 'شبكة واسعة من الممولين' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('from-', 'bg-').split(' ')[0]}`}></div>
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">{item[language]}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <Link
                  href="/#contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium text-white ${service.color} hover:opacity-90 transition-opacity`}
                >
                  {t('common.getStarted') || 'Get Started'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
