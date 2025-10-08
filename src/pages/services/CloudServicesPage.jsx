import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Layout from '../../layouts/Layout';
import { iconMap } from '../../utils/iconMap';

const CloudServicesPage = () => {
  const cloudSolutions = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
      features: [
        "Zero-downtime migration",
        "Cost optimization",
        "Security compliance",
        "Performance monitoring"
      ],
      icon: "Cloud"
    },
    {
      title: "Cloud Architecture Design",
      description: "Design scalable, secure, and cost-effective cloud architectures tailored to your business needs.",
      features: [
        "Microservices architecture",
        "Auto-scaling capabilities",
        "Load balancing",
        "Disaster recovery"
      ],
      icon: "Server"
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement continuous integration and deployment pipelines for faster, more reliable software delivery.",
      features: [
        "Automated testing",
        "Container orchestration",
        "Infrastructure as Code",
        "Monitoring & alerting"
      ],
      icon: "Zap"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: [
        "Identity & access management",
        "Data encryption",
        "Security monitoring",
        "Compliance frameworks"
      ],
      icon: "Shield"
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      description: "Comprehensive cloud platform with extensive services",
      features: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"]
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-focused cloud solutions",
      features: ["Virtual Machines", "Azure SQL", "Functions", "DevOps", "Security Center"]
    },
    {
      name: "Google Cloud Platform",
      description: "AI and data analytics focused cloud services",
      features: ["Compute Engine", "BigQuery", "Cloud Functions", "Kubernetes", "AI Platform"]
    }
  ];

  const benefits = [
    "Reduce infrastructure costs by up to 40%",
    "Improve scalability and flexibility",
    "Enhanced security and compliance",
    "Faster time to market",
    "24/7 monitoring and support",
    "Disaster recovery and backup"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cloud Enterprise Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your enterprise with scalable, secure, and cost-effective cloud solutions 
                that drive innovation and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud services designed to modernize your infrastructure and accelerate digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudSolutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon];
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/contact" 
                    className="btn-primary w-full text-center"
                  >
                    Learn More About {solution.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Platform Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading cloud providers to deliver the best solutions for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-white">☁️</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {provider.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {provider.description}
                </p>
                <div className="space-y-2">
                  {provider.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cloud Transformation Benefits
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the power of cloud computing with measurable business impact.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-primary-600">🌐</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cloud Impact Metrics
                </h3>
                <p className="text-gray-600">
                  Typical results our clients achieve with cloud transformation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">3x</div>
                  <div className="text-sm text-gray-600">Faster Deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to build robust cloud solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                category: "Containers",
                technologies: ["Docker", "Kubernetes", "OpenShift", "EKS", "AKS"]
              },
              {
                category: "Infrastructure",
                technologies: ["Terraform", "CloudFormation", "Ansible", "Packer", "Vault"]
              },
              {
                category: "Monitoring",
                technologies: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Datadog"]
              },
              {
                category: "Security",
                technologies: ["AWS IAM", "Azure AD", "HashiCorp Vault", "WAF", "SIEM"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your cloud strategy and how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Cloud Migration
            </Link>
            <Link to="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              View Cloud Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudServicesPage;
