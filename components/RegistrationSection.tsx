"use client"

import { useState } from 'react';
import { useLanguage } from './language-provider';
import emailjs from '@emailjs/browser';

export default function RegistrationSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_m77xks3',
        'template_7b036pg',
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          date: new Date().toLocaleString(),
        },
        'WgosXKTCh0k4qROqR'
      );
      alert(t('registration.success') || 'Registration successful! We will contact you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('registration.error') || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-2xl bg-white/90 dark:bg-gray-800/90 p-10 rounded-3xl shadow-2xl border border-blue-100 dark:border-gray-700 backdrop-blur-md">
        <h3 className="text-3xl font-extrabold text-blue-700 dark:text-blue-300 mb-10 text-center tracking-tight drop-shadow-sm">
          {t('registration.title') || 'Register Now'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {t('registration.fullName') || 'Full Name'}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white shadow-sm transition-all duration-200"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {t('registration.email') || 'Email'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white shadow-sm transition-all duration-200"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {t('registration.phone') || 'Phone Number'}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white shadow-sm transition-all duration-200"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {t('registration.subject') || 'Subject'}
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white shadow-sm transition-all duration-200"
              >
                <option value="">{t('registration.selectSubject') || 'Select a subject'}</option>
                <option value="general">{t('registration.generalInquiry') || 'General Inquiry'}</option>
                <option value="services">{t('registration.services') || 'Our Services'}</option>
                <option value="support">{t('registration.support') || 'Support'}</option>
                <option value="other">{t('registration.other') || 'Other'}</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              {t('registration.message') || 'Message'}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white shadow-sm transition-all duration-200 resize-none"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting 
                ? (t('registration.submitting') || 'Submitting...') 
                : (t('registration.submit') || 'Submit')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
} 