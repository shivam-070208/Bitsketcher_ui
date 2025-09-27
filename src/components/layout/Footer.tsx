"use client";

import React from 'react';
import Container from './Container';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '📦', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Discord', icon: '💬', href: '#' },
    { name: 'Docs', icon: '📚', href: '#' }
  ];

  const componentLinks = ['Text Animations', '3D Loaders', 'Cards', 'Forms'];
  const resourceLinks = ['Documentation', 'Examples', 'GitHub', 'Community'];

  return (
    <footer className="py-12 bg-primary-100 border-t border-primary-300/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-inter font-bold text-xl text-gradient">
                BitSketcher UI
              </span>
            </div>
            <p className="text-primary-600 mb-4 max-w-md">
              A modern UI component library built with React, Motion, Three.js, and Tailwind CSS.
              Create stunning, interactive user interfaces with ease.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-primary-200 hover:bg-gradient-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                  title={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Component Links */}
          <div>
            <h3 className="font-semibold text-primary-800 mb-4">Components</h3>
            <ul className="space-y-2">
              {componentLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-600 hover:text-accent-600 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resource Links */}
          <div>
            <h3 className="font-semibold text-primary-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-600 hover:text-accent-600 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-300/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-600 text-sm">
            © 2024 BitSketcher UI. All rights reserved.
          </p>
          <p className="text-primary-600 text-sm mt-2 md:mt-0">
            Made with ❤️ by the BitSketcher UI team
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
