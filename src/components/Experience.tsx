import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Users, Code, Rocket, TrendingUp } from 'lucide-react';
import AnimatedBlobBackground from './3d/AnimatedBlob';

interface ExperienceProps {
  isDark?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark = false }) => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Jio (Reliance Jio Infocomm Limited)',
      location: 'Remote',
      period: '2024 (1 Month)',
      type: 'Internship',
      description: 'Gained hands-on experience in web development during a focused 1-month internship program. Created a comprehensive portfolio website showcasing modern web development practices and responsive design principles.',
      achievements: [
        'Successfully completed 1-month web development internship',
        'Built a complete portfolio website from scratch',
        'Implemented responsive design for multiple device compatibility',
        'Applied modern web development best practices and standards',
        'Gained experience with industry-standard development workflows',
        'Received positive feedback for code quality and design aesthetics'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git', 'Web Standards'],
      gradient: 'from-blue-600 to-purple-600',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const experienceStats = [
    { label: 'Internship Completed', value: '1', icon: Calendar },
    { label: 'Portfolio Projects', value: '3+', icon: Code },
    { label: 'Technologies Used', value: '10+', icon: Rocket },
    { label: 'Academic Projects', value: '5+', icon: TrendingUp }
  ];

  const skills = [
    'Web Development', 'Project Management', 'Problem Solving', 'Team Collaboration',
    'Technical Documentation', 'Code Review', 'Responsive Design', 'Version Control',
    'Agile Methodology', 'Quality Assurance'
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <AnimatedBlobBackground isDark={isDark} className="opacity-20" />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 dark:from-emerald-900/10 dark:to-blue-900/10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              My journey in professional web development and technical growth
            </p>
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {experienceStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-all duration-300 transform-gpu"
              >
                <stat.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400 opacity-30 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300 transform-gpu"></div>

                  {/* Experience Card */}
                  <div className="md:ml-16 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 dark:hover:bg-gray-800/15 transition-all duration-300 hover:scale-105 transform-gpu overflow-hidden">
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-6 lg:space-y-0">
                        {/* Company Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-lg">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Experience Content */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                {exp.title}
                              </h3>
                              <span className="text-sm px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                                {exp.type}
                              </span>
                            </div>
                            <h4 className={`text-xl font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-3`}>
                              {exp.company}
                            </h4>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-600 dark:text-gray-400 mb-4">
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{exp.period}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                              {exp.description}
                            </p>
                          </div>

                          {/* Key Achievements */}
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                              Key Achievements
                            </h5>
                            <div className="grid sm:grid-cols-2 gap-3 mb-6">
                              {exp.achievements.map((achievement, achIndex) => (
                                <div
                                  key={achIndex}
                                  className="flex items-start space-x-3 p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg border border-white/20"
                                >
                                  <Rocket className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                              Technologies Used
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-full text-sm font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 hover:scale-105 transition-transform duration-200 transform-gpu"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Professional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-full text-sm font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default transform-gpu"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Call to Action */}
            <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 dark:hover:bg-gray-800/15 transition-all duration-300">
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Looking for opportunities?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm open to internships and entry-level positions in web development
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl hover:scale-105 transition-transform duration-300 transform-gpu font-medium shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <Briefcase className="w-5 h-5" />
                <span>Let's Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;