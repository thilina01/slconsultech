import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Calendar, Users, Target, Zap, Database, Smartphone, Globe } from 'lucide-react';
import Layout from '../../layouts/Layout';

const ProjectFactoryPro = () => {
  const features = [
    "Real-time production monitoring dashboard",
    "Predictive maintenance alerts and scheduling",
    "KPI tracking and analytics",
    "Mobile-responsive interface",
    "Integration with existing ERP systems",
    "Automated reporting and notifications"
  ];

  const technologies = [
    "React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", 
    "Chart.js", "WebSocket", "REST APIs", "Microservices"
  ];

  const benefits = [
    "40% improvement in operational efficiency",
    "25% reduction in downtime",
    "Real-time visibility into production status",
    "Proactive maintenance scheduling",
    "Reduced manual reporting time by 60%",
    "Improved decision-making with data-driven insights"
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
                  FactoryPro 360
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Operations Command Suite
                </p>
                <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                  A comprehensive manufacturing operations management platform that transforms traditional 
                  production facilities into smart, data-driven enterprises with real-time monitoring, 
                  predictive analytics, and automated decision-making capabilities.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Manufacturing Automation
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Real-time Monitoring
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Predictive Analytics
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Project Impact</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">40%</div>
                      <div className="text-sm text-blue-100">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">25%</div>
                      <div className="text-sm text-blue-100">Downtime Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">60%</div>
                      <div className="text-sm text-blue-100">Reporting Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">99.9%</div>
                      <div className="text-sm text-blue-100">System Uptime</div>
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
                  FactoryPro 360 was developed for a leading manufacturing company seeking to modernize 
                  their production operations and gain real-time visibility into their manufacturing processes. 
                  The client was struggling with manual reporting, reactive maintenance, and lack of 
                  operational insights.
                </p>
                <p>
                  Our solution provides a comprehensive command center that integrates with existing 
                  manufacturing equipment and ERP systems, delivering real-time data visualization, 
                  predictive maintenance capabilities, and automated reporting.
                </p>
                <p>
                  The platform has transformed the client's operations, enabling proactive decision-making 
                  and significantly improving overall equipment effectiveness (OEE) across all production lines.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Duration:</strong> 6 months</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Team Size:</strong> 8 developers</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Industry:</strong> Manufacturing</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Challenges Solved</h3>
                <ul className="space-y-2 text-primary-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Manual data collection and reporting inefficiencies
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Reactive maintenance causing unexpected downtime
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Lack of real-time operational visibility
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Integration with legacy manufacturing systems
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
              Built with modern technologies and designed for scalability, reliability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h3>
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
              The implementation of FactoryPro 360 delivered measurable improvements across all key operational metrics.
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
                  FactoryPro 360 follows a microservices architecture pattern, ensuring scalability 
                  and maintainability. The system integrates seamlessly with existing manufacturing 
                  equipment through standardized APIs and data connectors.
                </p>
                <p>
                  Real-time data processing is handled by a robust event-driven architecture using 
                  WebSocket connections and Redis for caching, ensuring sub-second response times 
                  for critical operational data.
                </p>
                <p>
                  The frontend is built with React and provides an intuitive dashboard that works 
                  seamlessly across desktop and mobile devices, enabling managers to monitor 
                  operations from anywhere.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">System Architecture</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">PostgreSQL Database</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Redis Cache Layer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Microservices API</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">React Frontend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how FactoryPro 360 or similar solutions can revolutionize your production processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Project
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

export default ProjectFactoryPro;

