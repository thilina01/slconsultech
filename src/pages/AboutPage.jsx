import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Heart, CheckCircle, Award, Globe, Zap } from 'lucide-react';
import Layout from '../layouts/Layout';
import site from '../data/site.json';
import team from '../data/team.json';
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
                    <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
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

      {/* Team Section */}
      <section className="section-padding" id="team">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              business strategy, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
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
