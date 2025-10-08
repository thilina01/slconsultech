import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Calendar, Users, Target, Zap, MessageSquare, Smartphone, Wifi } from 'lucide-react';
import Layout from '../../layouts/Layout';

const ProjectTextBridge = () => {
  const features = [
    "Multi-carrier SMS routing",
    "Delivery status tracking",
    "Bulk messaging capabilities",
    "API integration",
    "Android device integration",
    "Real-time message processing"
  ];

  const technologies = [
    "Android", "Java", "Spring Boot", "MySQL", "REST APIs", 
    "WebSocket", "SMS Gateway APIs", "Redis", "Docker"
  ];

  const benefits = [
    "99.9% message delivery rate",
    "80% cost reduction in SMS operations",
    "Real-time delivery tracking",
    "Scalable bulk messaging",
    "Easy API integration",
    "Reduced operational complexity"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <Link to="/projects" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  TextBridge SMS Gateway Suite
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Enterprise SMS Communication Platform
                </p>
                <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                  A comprehensive SMS gateway solution that enables seamless integration of SMS messaging 
                  into business workflows, providing reliable, cost-effective, and scalable communication 
                  capabilities for enterprises.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Communication Solutions
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    SMS Gateway
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Enterprise Integration
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Gateway Performance</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">99.9%</div>
                      <div className="text-sm text-blue-100">Delivery Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">80%</div>
                      <div className="text-sm text-blue-100">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-blue-100">Availability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">1000+</div>
                      <div className="text-sm text-blue-100">Messages/Min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TextBridge SMS Gateway Suite was developed to address the growing need for reliable, 
                  cost-effective SMS communication solutions in enterprise environments. Many businesses 
                  struggle with expensive SMS services and unreliable delivery rates.
                </p>
                <p>
                  Our solution provides a comprehensive SMS gateway that integrates with Android devices 
                  and multiple carrier networks, offering superior delivery rates and significantly 
                  reduced costs compared to traditional SMS services.
                </p>
                <p>
                  The platform includes advanced features like bulk messaging, delivery tracking, 
                  API integration, and real-time monitoring, making it an ideal solution for businesses 
                  requiring robust SMS communication capabilities.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Duration:</strong> 3 months</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Team Size:</strong> 5 developers</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Industry:</strong> Communication</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Challenges Solved</h3>
                <ul className="space-y-2 text-primary-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    High SMS service costs from traditional providers
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Unreliable message delivery rates
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Limited bulk messaging capabilities
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Complex integration with existing systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with enterprise-grade technologies to ensure reliability, scalability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Impact & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TextBridge has delivered significant cost savings and improved communication reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Implementation */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Architecture & Implementation
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TextBridge utilizes a distributed architecture that leverages Android devices as SMS 
                  gateways, connected through a robust backend system built with Spring Boot and MySQL. 
                  This approach provides superior reliability and cost-effectiveness.
                </p>
                <p>
                  The system includes intelligent routing algorithms that automatically select the 
                  best carrier and device for message delivery, ensuring optimal performance and 
                  delivery rates across different regions and networks.
                </p>
                <p>
                  Real-time monitoring and analytics provide comprehensive insights into message 
                  delivery performance, enabling continuous optimization and proactive issue resolution.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">System Components</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Android Gateway Devices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Spring Boot Backend</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">SMS Processing Engine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Delivery Tracking System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Use Cases & Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TextBridge serves a wide range of industries and communication needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Marketing Campaigns",
                description: "Bulk SMS marketing with delivery tracking and analytics"
              },
              {
                title: "Customer Notifications",
                description: "Automated alerts, confirmations, and updates"
              },
              {
                title: "Emergency Communications",
                description: "Critical alerts and emergency notifications"
              },
              {
                title: "Two-Factor Authentication",
                description: "Secure SMS-based verification systems"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your SMS Communications?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how TextBridge can reduce your SMS costs and improve delivery reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get Started
            </Link>
            <Link to="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectTextBridge;

