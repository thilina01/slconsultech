import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Layout from '../../layouts/Layout';
import { iconMap } from '../../utils/iconMap';

const AIServicesPage = () => {
  const aiSolutions = [
    {
      title: "Intelligent Chatbots",
      description: "AI-powered conversational agents that understand context and provide intelligent responses.",
      features: [
        "Natural Language Processing",
        "Context-aware conversations",
        "Multi-language support",
        "Integration with existing systems"
      ],
      icon: "Bot"
    },
    {
      title: "Process Automation",
      description: "Automate complex business processes using AI and machine learning algorithms.",
      features: [
        "Workflow automation",
        "Document processing",
        "Decision-making automation",
        "Predictive analytics"
      ],
      icon: "Cog"
    },
    {
      title: "Predictive Analytics",
      description: "Leverage machine learning to predict trends and make data-driven decisions.",
      features: [
        "Data pattern recognition",
        "Trend forecasting",
        "Risk assessment",
        "Performance optimization"
      ],
      icon: "Brain"
    },
    {
      title: "Intelligent Document Processing",
      description: "Extract and process information from documents using AI and OCR technology.",
      features: [
        "OCR and text extraction",
        "Document classification",
        "Data validation",
        "Automated workflows"
      ],
      icon: "Database"
    }
  ];

  const benefits = [
    "Reduce manual work by up to 80%",
    "Improve accuracy and consistency",
    "24/7 automated operations",
    "Scalable AI solutions",
    "Enhanced customer experience",
    "Data-driven insights"
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
                AI Agents & Automation
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your business operations with intelligent AI solutions that automate processes, 
                enhance decision-making, and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed to automate and optimize your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => {
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
                          <CheckCircle className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
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

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI solutions deliver measurable results and transform how your business operates.
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
                  <div className="w-8 h-8 text-primary-600">⚡</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  AI Impact Metrics
                </h3>
                <p className="text-gray-600">
                  Typical results our clients achieve with AI implementation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Manual Work Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Accuracy Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Automated Operations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">6mo</div>
                  <div className="text-sm text-gray-600">ROI Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge AI technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Machine Learning",
                technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "LangChain"],
                icon: "Brain"
              },
              {
                category: "Natural Language Processing",
                technologies: ["BERT", "GPT Models", "SpaCy", "NLTK", "Transformers"],
                icon: "Bot"
              },
              {
                category: "Computer Vision",
                technologies: ["OpenCV", "YOLO", "ResNet", "Vision Transformers", "OCR"],
                icon: "Shield"
              }
            ].map((category, index) => {
              const IconComponent = iconMap[category.icon];
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how AI solutions can transform your operations and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your AI Journey
            </Link>
            <Link to="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              View AI Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIServicesPage;
