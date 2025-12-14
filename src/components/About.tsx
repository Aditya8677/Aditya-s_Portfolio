import React from 'react';
import { Code, Palette, Rocket, Heart, Download, MapPin, Calendar, Award } from 'lucide-react';
import AnimatedBlobBackground from './3d/AnimatedBlob';

interface AboutProps {
  isDark?: boolean;
}

const About: React.FC<AboutProps> = ({ isDark = false }) => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with modern technologies.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Creating beautiful interfaces with exceptional user experiences.',
    },
    {
      icon: Rocket,
      title: 'SDG Innovation',
      description: 'Building projects that contribute to Sustainable Development Goals.',
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Using technology to solve real-world problems and help society.',
    },
  ];

  const personalStats = [
    { icon: MapPin, label: 'Current Location', value: 'Chennai, Potheri' },
    { icon: MapPin, label: 'Hometown', value: 'Bihar, Hajipur' },
    { icon: Calendar, label: 'Academic Year', value: '3rd Year B.Tech' },
    { icon: Award, label: 'CGPA', value: '8.065' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <AnimatedBlobBackground isDark={isDark} className="opacity-30" />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-gray-800/50"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-l from-purple-200/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Photo and Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Professional Photo with 3D Effects */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Main Photo Container */}
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 p-1 hover:scale-105 transition-all duration-500 transform-gpu">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-gray-800">
                    {/* Professional Photo */}
                    <img
                      src="passport pic.jpg"
                      alt="Aditya Kumar - Professional Photo"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 transform-gpu"
                    />
                  </div>
                </div>

                {/* Floating Elements around Photo */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-70 animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>

                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl blur-xl transform rotate-6 animate-pulse -z-10"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                  Aditya Kumar
                </h3>
                <a 
                  href="mailto:adityaak8677@gmail.com"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:scale-105 transition-transform duration-300 transform-gpu text-sm font-medium shadow-lg hover:shadow-xl"
                >
                  <Download className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate web developer pursuing B.Tech in Computer Science Engineering with 
                specialization in AI/ML from SRM University, Kattankulathur. I have a strong interest 
                in learning new technologies and continuously expanding my skill set to stay ahead in 
                the world of web development.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                What truly drives me is using technology for a purpose — I love creating projects based 
                on Sustainable Development Goals (SDGs) that can contribute to solving real-world problems 
                and positively impact our society and country. Whether it's building systems for better 
                health awareness, environmental monitoring, or educational access, I believe in developing 
                solutions that are not only technically sound but also socially meaningful.
              </p>

              {/* Personal Stats */}
              <div className="grid grid-cols-2 gap-4 py-6">
                {personalStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300 transform-gpu"
                  >
                    <stat.icon className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.label}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {['React', 'Python', 'JavaScript', 'HTML/CSS', 'AI/ML', 'OpenCV', 'Flask', 'MySQL', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700 hover:scale-105 transition-transform duration-200 transform-gpu"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-105 hover:shadow-xl transform-gpu"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 transform-gpu shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 dark:hover:bg-gray-800/15 transition-all duration-300">
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Ready to collaborate?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Let's create something amazing together that makes a positive impact
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:scale-105 transition-transform duration-300 transform-gpu font-medium shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;