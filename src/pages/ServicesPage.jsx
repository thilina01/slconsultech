import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../layouts/Layout';
import services from '../data/services.json';
import industries from '../data/industries.json';
import { iconMap } from '../utils/iconMap';

const ServicesPage = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business goals, current challenges, and technology landscape to create a comprehensive strategy."
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Our team designs a tailored solution architecture that aligns with your objectives and leverages the latest technologies."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "We build and deploy your solution using agile methodologies, ensuring quality and timely delivery."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing and performance optimization to ensure your solution meets all requirements and performs optimally."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Seamless deployment with comprehensive training and ongoing support to ensure successful adoption."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Solutions That Drive Results
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive technology services designed to transform your business operations, 
              enhance efficiency, and accelerate digital transformation.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered automation to cloud enterprise solutions, we provide end-to-end technology services 
              that help businesses thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover" id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Business Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link 
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                    className="btn-primary w-full text-center whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology solutions are tailored to meet the unique challenges and opportunities 
              across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon];
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {industry.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Our Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-primary-600 mr-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful project delivery and maximum value for our clients.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine deep technical expertise with business acumen to deliver solutions that drive real results.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "Zap",
                    title: "Cutting-Edge Technology",
                    description: "We leverage the latest technologies including AI, cloud computing, and automation to deliver innovative solutions."
                  },
                  {
                    icon: "Shield",
                    title: "Enterprise-Grade Security",
                    description: "Security is built into every solution we deliver, ensuring your data and systems are protected."
                  },
                  {
                    icon: "Clock",
                    title: "Rapid Delivery",
                    description: "Our agile development process ensures faster time-to-market without compromising quality."
                  },
                  {
                    icon: "Target",
                    title: "Measurable Results",
                    description: "We focus on delivering measurable business outcomes and ROI for every project we undertake."
                  }
                ].map((item, index) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Service Excellence Metrics
                  </h3>
                  <p className="text-gray-600">
                    Our commitment to quality and client satisfaction is reflected in our performance metrics.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your specific needs and how our technology solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 inline" />
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

export default ServicesPage;
