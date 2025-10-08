import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Calendar, Users, Target, Zap, Cloud, Server, Activity } from 'lucide-react';
import Layout from '../../layouts/Layout';

const ProjectMicroservices = () => {
  const features = [
    "Auto-scaling capabilities",
    "Service mesh implementation",
    "Comprehensive monitoring",
    "CI/CD pipeline integration",
    "Container orchestration",
    "Load balancing and traffic management"
  ];

  const technologies = [
    "Kubernetes", "Docker", "Istio", "Prometheus", "Grafana", "Helm",
    "Jenkins", "GitLab CI", "Terraform", "Ansible", "ELK Stack"
  ];

  const benefits = [
    "300% improvement in deployment speed",
    "99.99% uptime guarantee",
    "Reduced infrastructure costs by 40%",
    "Automated scaling based on demand",
    "Zero-downtime deployments",
    "Enhanced security with service mesh"
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
                  Cloud-Native Microservices Platform
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Enterprise-Scale Container Orchestration
                </p>
                <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                  A comprehensive cloud-native platform that enables enterprises to build, deploy, 
                  and manage microservices at scale with automated orchestration, monitoring, 
                  and continuous delivery capabilities.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Cloud Solutions
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Microservices
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    DevOps Automation
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Platform Performance</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">300%</div>
                      <div className="text-sm text-blue-100">Deployment Speed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">99.99%</div>
                      <div className="text-sm text-blue-100">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">40%</div>
                      <div className="text-sm text-blue-100">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">1000+</div>
                      <div className="text-sm text-blue-100">Services Managed</div>
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
                  The Cloud-Native Microservices Platform was designed to address the challenges 
                  of managing complex, distributed applications in enterprise environments. 
                  Traditional monolithic architectures were limiting scalability and deployment flexibility.
                </p>
                <p>
                  Our solution provides a complete Kubernetes-based platform with advanced features 
                  including service mesh, automated CI/CD pipelines, comprehensive monitoring, 
                  and intelligent auto-scaling capabilities.
                </p>
                <p>
                  The platform has enabled organizations to achieve unprecedented levels of agility, 
                  reliability, and cost efficiency in their application deployment and management processes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Duration:</strong> 8 months</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Team Size:</strong> 12 developers</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Industry:</strong> Cloud Infrastructure</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Challenges Solved</h3>
                <ul className="space-y-2 text-primary-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Complex application deployment and management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Manual scaling and resource management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Limited visibility into service performance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Inconsistent deployment processes
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
              Platform Features & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with industry-leading cloud-native technologies for maximum reliability and performance.
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
              The platform has delivered significant improvements in deployment speed, reliability, and cost efficiency.
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
                  The platform leverages Kubernetes as the core orchestration engine, enhanced with 
                  Istio service mesh for advanced traffic management, security, and observability. 
                  This provides a robust foundation for microservices deployment and management.
                </p>
                <p>
                  Comprehensive monitoring is achieved through Prometheus and Grafana, providing 
                  real-time insights into application performance, resource utilization, and system health. 
                  Automated alerting ensures proactive issue resolution.
                </p>
                <p>
                  CI/CD pipelines are fully automated using Jenkins and GitLab CI, enabling rapid, 
                  reliable deployments with zero-downtime updates and automated rollback capabilities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Platform Components</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Cloud className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Kubernetes Orchestration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Istio Service Mesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Prometheus Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Automated CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scalability & Performance */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scalability & Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed to handle enterprise-scale workloads with intelligent resource management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Auto-Scaling",
                description: "Intelligent scaling based on CPU, memory, and custom metrics"
              },
              {
                title: "Load Balancing",
                description: "Advanced traffic distribution across service instances"
              },
              {
                title: "Resource Optimization",
                description: "Dynamic resource allocation for optimal performance"
              },
              {
                title: "High Availability",
                description: "Multi-zone deployment with automatic failover"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our cloud-native platform can accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Cloud Journey
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

export default ProjectMicroservices;

