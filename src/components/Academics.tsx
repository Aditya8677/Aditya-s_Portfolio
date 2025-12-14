import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from 'lucide-react';
import FloatingShapes from './3d/FloatingShapes';

interface AcademicsProps {
  isDark?: boolean;
}

const Academics: React.FC<AcademicsProps> = ({ isDark = false }) => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering (AI/ML)',
      school: 'SRM Institute of Science and Technology',
      location: 'Kattankulathur, Chennai',
      period: '2022 - 2026',
      cgpa: '8.065',
      description: 'Specializing in Artificial Intelligence and Machine Learning with a focus on web development and sustainable technology solutions.',
      semesters: [
        { sem: '1st Semester', sgpa: '7.455' },
        { sem: '2nd Semester', sgpa: '8.00' },
        { sem: '3rd Semester', sgpa: '7.609' },
        { sem: '4th Semester', sgpa: '8.700' },
        { sem: '5th Semester', sgpa: '8.381' },
        { sem: '6th Semester', sgpa: '8.25' }
      ],
      achievements: [
        'Consistent academic performance with CGPA 8.065',
        'Active participation in technical projects',
        'Focus on SDG-based project development',
        'Web development internship at Jio'
      ],
      gradient: 'from-purple-500 to-indigo-600',
      image: 'srm pic.jpg'
    },
    {
      degree: 'Higher Secondary Education (12th)',
      school: 'Sri Prakash Vidyaniketan',
      location: 'India',
      period: '2020 - 2022',
      percentage: '80.2%',
      description: 'Completed higher secondary education with strong foundation in Science and Mathematics.',
      achievements: [
        'Secured 80.2% in 12th standard',
        'Strong foundation in Mathematics and Science',
        'Developed interest in technology and programming',
        'Participated in various academic competitions'
      ],
      gradient: 'from-blue-500 to-cyan-600',
      image: 'spvn.jpg'
    },
    {
      degree: 'Secondary Education (10th)',
      school: 'Sri Prakash Vidyaniketan',
      location: 'India',
      period: '2018 - 2020',
      percentage: '70.4%',
      description: 'Completed secondary education with good academic performance and developed foundational skills.',
      achievements: [
        'Secured 70.4% in 10th standard',
        'Built strong academic foundation',
        'Developed problem-solving skills',
        'Active in extracurricular activities'
      ],
      gradient: 'from-green-500 to-teal-600',
      image: 'spvn.jpg'
    }
  ];

  const academicStats = [
    { label: 'Current CGPA', value: '8.065', icon: GraduationCap },
    { label: '12th Percentage', value: '80.2%', icon: BookOpen },
    { label: '10th Percentage', value: '70.4%', icon: Award },
    { label: 'Academic Year', value: '3rd Year', icon: Star }
  ];

  return (
    <section id="academics" className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <FloatingShapes isDark={isDark} className="opacity-20" />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/10 dark:to-purple-900/10"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Academic Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              My educational path from school to specializing in AI/ML at SRM University
            </p>
          </div>

          {/* Academic Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {academicStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-all duration-300 transform-gpu"
              >
                <stat.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="space-y-12 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Education Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative`}>
                    <div className="relative overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-500 transform-gpu">
                      <img
                        src={edu.image}
                        alt={edu.school}
                        className="w-full h-64 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${edu.gradient} opacity-60`}></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-2 text-white mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
                        <h4 className={`text-xl font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                          {edu.school}
                        </h4>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {edu.description}
                      </p>
                    </div>

                    {/* Semester Details for Current Education */}
                    {edu.semesters && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                          Semester Performance
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {edu.semesters.map((semester, semIndex) => (
                            <div
                              key={semIndex}
                              className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg border border-white/20 text-center hover:scale-105 transition-transform duration-200 transform-gpu"
                            >
                              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {semester.sem}
                              </div>
                              <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                {semester.sgpa}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Key Achievements
                      </h5>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-center space-x-3 p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg border border-white/20 hover:scale-105 transition-transform duration-200 transform-gpu"
                          >
                            <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < education.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="w-px h-16 bg-gradient-to-b from-indigo-400 to-purple-400 opacity-50"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Current Focus */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center p-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 dark:hover:bg-gray-800/15 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Current Focus
              </h4>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Currently in my 3rd year of B.Tech CSE AI/ML, focusing on advanced web development, 
                machine learning applications, and building projects that contribute to sustainable development goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;