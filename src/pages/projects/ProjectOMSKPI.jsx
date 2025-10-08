import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Calendar, Users, Target, Zap, MessageSquare, Brain, Clock } from 'lucide-react';
import Layout from '../../layouts/Layout';

const ProjectOMSKPI = () => {
  const features = [
    "Natural language KPI queries",
    "Real-time data integration",
    "Voice and text interfaces",
    "Multi-language support",
    "Contextual conversation memory",
    "Automated report generation"
  ];

  const technologies = [
    "OpenAI GPT", "LangChain", "FastAPI", "React", "PostgreSQL", 
    "WebSocket", "Speech-to-Text", "Text-to-Speech", "Vector Database"
  ];

  const benefits = [
    "60% faster decision-making",
    "50% reduction in report generation time",
    "24/7 availability for KPI queries",
    "Reduced training time for new employees",
    "Improved data accessibility",
    "Enhanced user experience with conversational interface"
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
                  OMS KPI AI Chat Agent
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Revolutionary AI-Powered Manufacturing Intelligence
                </p>
                <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                  An innovative AI-powered chat agent that provides real-time conversational access 
                  to manufacturing KPIs, enabling instant insights and data-driven decision making 
                  through natural language interactions.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    AI Solutions
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Natural Language Processing
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Real-time Analytics
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AI Impact</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">60%</div>
                      <div className="text-sm text-blue-100">Faster Decisions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">50%</div>
                      <div className="text-sm text-blue-100">Report Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-blue-100">Availability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">$50M+</div>
                      <div className="text-sm text-blue-100">Market Potential</div>
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
                  The OMS KPI AI Chat Agent represents a breakthrough in manufacturing intelligence, 
                  combining advanced AI capabilities with real-time operational data to create an 
                  intuitive conversational interface for accessing critical business metrics.
                </p>
                <p>
                  This innovative solution addresses the challenge of data accessibility in manufacturing 
                  environments, where managers and operators need quick access to KPIs but often struggle 
                  with complex reporting systems and dashboards.
                </p>
                <p>
                  The AI agent understands natural language queries, processes them through advanced 
                  language models, and provides accurate, contextual responses based on real-time 
                  manufacturing data, revolutionizing how teams interact with operational information.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Duration:</strong> 4 months</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Team Size:</strong> 6 developers</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700"><strong>Industry:</strong> Manufacturing AI</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Challenges Solved</h3>
                <ul className="space-y-2 text-primary-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Complex data access requiring technical expertise
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Time-consuming report generation processes
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Limited accessibility to real-time data
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    Language barriers in multilingual environments
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
              AI Features & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge AI technologies to deliver intelligent, conversational data access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Capabilities</h3>
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
              The AI chat agent has transformed how teams access and interact with manufacturing data.
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

      {/* AI Architecture */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                AI Architecture & Implementation
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The OMS KPI AI Chat Agent utilizes a sophisticated architecture combining OpenAI's 
                  GPT models with LangChain for prompt engineering and context management. The system 
                  processes natural language queries and translates them into precise database queries.
                </p>
                <p>
                  Real-time data integration ensures that responses are always current, while vector 
                  databases enable semantic search and contextual understanding of manufacturing terminology 
                  and processes.
                </p>
                <p>
                  The conversational interface supports both text and voice interactions, making it 
                  accessible to users across different roles and technical expertise levels in the 
                  manufacturing environment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">AI System Components</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">OpenAI GPT Language Model</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">LangChain Framework</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Real-time Data Pipeline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Vector Database</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Potential */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Market Potential & Future
            </h2>
            <p className="text-xl text-primary-100 mb-6 max-w-3xl mx-auto">
              With an estimated market potential of $50M+, this AI solution represents a significant 
              opportunity in the manufacturing intelligence space.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold mb-2">$50M+</div>
                <div className="text-primary-200">Market Potential</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-primary-200">Potential Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-primary-200">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement AI in Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how AI-powered solutions can transform your data access and decision-making processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your AI Project
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

export default ProjectOMSKPI;

