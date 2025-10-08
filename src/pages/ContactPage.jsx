import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Layout from '../layouts/Layout';
import site from '../data/site.json';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formspree endpoint for Streamline Consultech contact form
      const response = await fetch('https://formspree.io/f/xpwyjkzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Track successful form submission
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form',
            value: 1
          });
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Sorry, there was an error submitting your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'AI Agents & Automation',
    'Cloud Enterprise Solutions',
    'Software Development & Integration',
    'Consulting & Digital Transformation',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: site.email,
      link: `mailto:${site.email}`
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: site.phone,
      link: `tel:${site.phone}`
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: `${site.address.street}, ${site.address.city}, ${site.address.country}`,
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      link: '#'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? 
              Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : submitError ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">
                    Error
                  </h3>
                  <p className="text-red-700 mb-4">{submitError}</p>
                  <button 
                    onClick={() => setSubmitError('')}
                    className="text-red-600 hover:text-red-800 underline"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary-50 rounded-xl p-6 mt-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-primary-700">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some common questions we receive from potential clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. Simple automation projects can take 2-4 weeks, while comprehensive digital transformation initiatives may take 3-6 months. We provide detailed timelines during the discovery phase."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Yes! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to fit your budget and requirements."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in AI/ML, cloud computing (AWS, Azure, GCP), microservices, automation, and modern web technologies. Our team stays current with the latest technology trends and best practices."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Absolutely! We offer comprehensive support packages including maintenance, updates, monitoring, and 24/7 technical support for critical systems."
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Yes, system integration is one of our core strengths. We have extensive experience integrating new solutions with legacy systems, APIs, and third-party platforms."
              },
              {
                question: "What's your pricing model?",
                answer: "We offer flexible pricing models including fixed-price projects, time-and-materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline requirements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait to transform your business. Contact us today for a free consultation 
            and discover how our technology solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${site.email}`} className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Email Us Now
            </a>
            <a href={`tel:${site.phone}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
