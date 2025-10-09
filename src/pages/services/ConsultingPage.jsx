import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Layout from '../../layouts/Layout';
import { iconMap } from '../../utils/iconMap';

const ConsultingPage = () => {
  const consultingServices = [
    {
      title: "Digital Strategy Consulting",
      description: "Comprehensive digital transformation strategies aligned with your business objectives.",
      features: [
        "Digital roadmap development",
        "Technology assessment",
        "Change management planning",
        "ROI analysis and metrics"
      ],
      icon: "Target"
    },
    {
      title: "Technology Assessment",
      description: "Evaluate your current technology stack and identify opportunities for improvement.",
      features: [
        "Infrastructure audit",
        "Security assessment",
        "Performance analysis",
        "Modernization recommendations"
      ],
      icon: "BarChart"
    },
    {
      title: "Process Optimization",
      description: "Streamline business processes using technology and automation solutions.",
      features: [
        "Workflow analysis",
        "Process mapping",
        "Automation opportunities",
        "Efficiency improvements"
      ],
      icon: "TrendingUp"
    },
    {
      title: "Innovation Consulting",
      description: "Identify and implement innovative solutions to drive competitive advantage.",
      features: [
        "Emerging technology evaluation",
        "Innovation workshops",
        "Pilot project planning",
        "Scalability strategies"
      ],
      icon: "Lightbulb"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Industry 4.0 transformation, IoT integration, predictive maintenance",
      icon: "🏭"
    },
    {
      name: "Healthcare",
      description: "Digital health solutions, telemedicine, patient data management",
      icon: "🏥"
    },
    {
      name: "Financial Services",
      description: "Fintech solutions, digital banking, risk management systems",
      icon: "🏦"
    },
    {
      name: "Retail & E-commerce",
      description: "Omnichannel strategies, customer experience, supply chain optimization",
      icon: "🛒"
    },
    {
      name: "Logistics",
      description: "Supply chain visibility, route optimization, warehouse automation",
      icon: "🚚"
    },
    {
      name: "Education",
      description: "EdTech solutions, learning management systems, student analytics",
      icon: "🎓"
    }
  ];

  const consultingProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your business, challenges, and opportunities for digital transformation."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a comprehensive digital strategy tailored to your specific needs and goals."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Develop detailed implementation roadmap with timelines and resource requirements."
    },
    {
      step: "04",
      title: "Execution & Support",
      description: "Guide implementation and provide ongoing support to ensure successful transformation."
    }
  ];

  const benefits = [
    "Accelerated digital transformation",
    "Improved operational efficiency",
    "Enhanced competitive advantage",
    "Reduced operational costs",
    "Better customer experience",
    "Future-ready technology stack"
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
                Consulting & Digital Transformation
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Navigate your digital transformation journey with expert guidance, 
                strategic planning, and proven methodologies that drive real business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic consulting services designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => {
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
              We have deep expertise across multiple industries, delivering tailored solutions for each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingProcess.map((step, index) => (
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

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Consulting Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We bring deep industry expertise and proven methodologies to accelerate your digital transformation.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-primary-600">🚀</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Consulting Impact
                </h3>
                <p className="text-gray-600">
                  Measurable results from our consulting engagements.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Successful Transformations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">30%</div>
                  <div className="text-sm text-gray-600">Average Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">6mo</div>
                  <div className="text-sm text-gray-600">Average ROI Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
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
            Let's discuss your digital transformation goals and how our consulting services can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Transformation
            </Link>
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConsultingPage;
