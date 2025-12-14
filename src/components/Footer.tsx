import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aditya8677', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-kumar-bb812a259/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:adityaak8677@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent dark:from-gray-900/30"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-l from-blue-200/10 to-teal-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Aditya Kumar
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate web developer and AI/ML enthusiast, creating technology solutions 
              that contribute to sustainable development and positive social impact.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:scale-110 transition-all duration-300 group"
              >
                <link.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-500 flex items-center justify-center space-x-2">
              <span>© {currentYear} Aditya Kumar. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for a better tomorrow.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;