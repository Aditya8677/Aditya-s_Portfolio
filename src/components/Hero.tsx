import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Play } from 'lucide-react';
import ParticleBackground from './3d/ParticleBackground';
import FloatingShapes from './3d/FloatingShapes';

interface HeroProps {
  isDark?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Web Developer', 'AI/ML Enthusiast', 'SDG Advocate', 'Problem Solver'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentTitle) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        } else {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20">
      {/* 3D Background Layers */}
      <ParticleBackground isDark={isDark} className="opacity-60" />
      <FloatingShapes isDark={isDark} className="opacity-40" />
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-pink-900/40"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-teal-400/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x leading-tight">
            Hello, I'm Aditya Kumar
          </h1>
        </div>

        <div className="mb-6 animate-fade-in-up animation-delay-500">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 dark:text-gray-300 mb-4">
            I'm a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>
        </div>

        <div className="mb-8 animate-fade-in-up animation-delay-1000">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Passionate web developer pursuing B.Tech CSE AI/ML at SRM University. I create innovative, 
            user-friendly websites and love building projects based on Sustainable Development Goals (SDGs) 
            that solve real-world problems and positively impact society.
          </p>
        </div>

        <div className="mb-12 animate-fade-in-up animation-delay-1500">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={scrollToProjects}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transform-gpu flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToNext}
              className="px-8 py-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-700 dark:text-gray-300 font-semibold hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-105 transform-gpu"
            >
              Learn More
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Aditya8677" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-110 group transform-gpu border border-white/20">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumar-bb812a259/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-110 group transform-gpu border border-white/20">
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a href="mailto:adityaak8677@gmail.com" className="p-4 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-110 group transform-gpu border border-white/20">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400" />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToNext}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 transform-gpu"
        >
          <ChevronDown className="w-8 h-8 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;