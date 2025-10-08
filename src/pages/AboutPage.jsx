import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, CheckCircle, Globe, Zap } from 'lucide-react';
import Layout from '../layouts/Layout';
import site from '../data/site.json';
import { iconMap } from '../utils/iconMap';

const AboutPage = () => {
  const values = [
    {
      icon: "Zap",
      title: "Innovation and Excellence",
      description: "We continuously push the boundaries of technology to deliver cutting-edge solutions that exceed expectations."
    },
    {
      icon: "Users",
      title: "Client-Centric Approach",
      description: "Your success is our success. We tailor every solution to meet your specific business needs and objectives."
    },
    {
      icon: "Heart",
      title: "Integrity and Trust",
      description: "We build lasting relationships based on transparency, honesty, and delivering on our promises."
    },
    {
      icon: "Globe",
      title: "Continuous Learning",
      description: "We stay ahead of technology trends and continuously enhance our skills to serve you better."
    },
    {
      icon: "Users",
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, fostering collaboration and knowledge sharing throughout the project."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Streamline Consultech
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {site.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                {site.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Eye className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                {site.vision}
              </p>
            </div>

            {/* Values */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-2">
                {site.values.map((value, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between cutting-edge technology and business success, 
                  Streamline Consultech has been at the forefront of digital transformation for over a decade.
                </p>
                <p>
                  Our journey began when our founders recognized that many enterprises were struggling to 
                  harness the full potential of emerging technologies like AI, cloud computing, and automation. 
                  We set out to create a company that could not only understand these technologies but also 
                  translate them into practical business solutions.
                </p>
                <p>
                  Today, we're proud to have helped dozens of organizations across various industries 
                  transform their operations, improve efficiency, and achieve their digital transformation goals. 
                  Our commitment to innovation, excellence, and client success continues to drive everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = iconMap[value.icon];
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our team can help transform your business with innovative technology solutions.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
