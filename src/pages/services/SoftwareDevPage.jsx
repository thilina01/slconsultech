import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Layout from '../../layouts/Layout';
import { iconMap } from '../../utils/iconMap';

const SoftwareDevPage = () => {
  const developmentServices = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built from scratch to meet your specific business requirements.",
      features: [
        "Full-stack development",
        "Microservices architecture",
        "API development",
        "Database design"
      ],
      icon: "Code"
    },
    {
      title: "System Integration",
      description: "Seamlessly connect disparate systems and applications for unified operations.",
      features: [
        "Legacy system integration",
        "Third-party API integration",
        "Data synchronization",
        "Workflow automation"
      ],
      icon: "Settings"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "Native iOS/Android apps",
        "Cross-platform solutions",
        "Progressive Web Apps",
        "App store optimization"
      ],
      icon: "Smartphone"
    },
    {
      title: "Web Application Development",
      description: "Modern, responsive web applications with cutting-edge technologies and frameworks.",
      features: [
        "Single Page Applications",
        "Progressive Web Apps",
        "E-commerce solutions",
        "Content Management Systems"
      ],
      icon: "Globe"
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "C#", "Go", "Rust"]
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"]
    },
    {
      category: "DevOps",
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "AWS", "Azure"]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Deep dive into your business needs, user stories, and technical requirements."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable system architecture and technology stack selection."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment and ongoing maintenance and support."
    }
  ];

  const benefits = [
    "Faster time to market",
    "Scalable and maintainable code",
    "Modern development practices",
    "Comprehensive testing",
    "Ongoing support and maintenance",
    "Security best practices"
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
                Software Development & Integration
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your business with custom software solutions, seamless integrations, 
                and modern applications built with cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
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
                    Learn More About {service.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven development methodology to ensure successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with modern, proven technologies to build robust and scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {category.category === 'Frontend' && <div className="w-6 h-6 text-primary-600">💻</div>}
                    {category.category === 'Backend' && <div className="w-6 h-6 text-primary-600">⚙️</div>}
                    {category.category === 'Databases' && <div className="w-6 h-6 text-primary-600">🗄️</div>}
                    {category.category === 'DevOps' && <div className="w-6 h-6 text-primary-600">🔧</div>}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded text-center">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Development Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We deliver high-quality software solutions that drive business growth and innovation.
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
                  <div className="w-8 h-8 text-primary-600">💻</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Development Metrics
                </h3>
                <p className="text-gray-600">
                  Our track record of successful project delivery.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
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
            Ready to Build Your Next Software Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your development goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Project
            </Link>
            <Link to="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareDevPage;
