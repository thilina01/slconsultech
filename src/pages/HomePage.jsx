import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Bot, Cloud, Code, Users } from 'lucide-react';
import Layout from '../layouts/Layout';
import site from '../data/site.json';
import services from '../data/services.json';
import projects from '../data/projects.json';
import { iconMap } from '../utils/iconMap';

const HomePage = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {site.tagline}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {site.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <Bot className="w-8 h-8 mx-auto mb-2" />
                      <h3 className="font-semibold">AI Solutions</h3>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <Cloud className="w-8 h-8 mx-auto mb-2" />
                      <h3 className="font-semibold">Cloud Systems</h3>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <Code className="w-8 h-8 mx-auto mb-2" />
                      <h3 className="font-semibold">Development</h3>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <h3 className="font-semibold">Consulting</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations and drive digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped enterprises transform their operations with cutting-edge technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary-100">{project.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="font-medium">{project.outcome}</span>
                    </div>
                    <Link 
                      to={project.link} 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Streamline Consultech?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine deep technical expertise with business acumen to deliver solutions that drive real results.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Proven Expertise",
                    description: "15+ years of experience in enterprise technology solutions and digital transformation."
                  },
                  {
                    title: "Cutting-Edge Technology",
                    description: "Latest AI, cloud, and automation technologies to keep you ahead of the competition."
                  },
                  {
                    title: "Client-Centric Approach",
                    description: "Tailored solutions designed specifically for your business needs and objectives."
                  },
                  {
                    title: "End-to-End Support",
                    description: "From strategy and design to implementation and ongoing maintenance."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
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
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Client Satisfaction
                  </h3>
                  <p className="text-gray-600">
                    Our clients consistently rate us highly for our technical expertise and service quality.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
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
            Let's discuss how our technology solutions can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 inline" />
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

export default HomePage;
