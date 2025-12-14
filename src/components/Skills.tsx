import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FloatingShapes from './3d/FloatingShapes';

interface SkillsProps {
  isDark?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark = false }) => {
  const { isVisible, setElementRef } = useScrollAnimation({ threshold: 0.3 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'Three.js/WebGL', level: 88 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'AWS', level: 75 },
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: '3D & Animation',
      skills: [
        { name: 'Three.js', level: 88 },
        { name: 'GSAP', level: 85 },
        { name: 'Blender', level: 70 },
        { name: 'WebGL Shaders', level: 75 },
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  // Enhanced 2D Skill Bar Component
  const SkillBar: React.FC<{ skill: { name: string; level: number }, gradient: string, isVisible: boolean }> = ({ skill, gradient, isVisible }) => {
    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        
        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out transform-gpu`}
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              boxShadow: isVisible ? `0 0 10px rgba(139, 92, 246, 0.3)` : 'none'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={setElementRef}>
      {/* 3D Background */}
      <FloatingShapes isDark={isDark} className="opacity-20" />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills with interactive visualizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 dark:hover:bg-gray-800/15 transition-all duration-300 group hover:scale-105 transform-gpu"
              >
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      skill={skill}
                      gradient={category.gradient}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Pills with enhanced hover effects */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'GraphQL', 'Redux', 'Sass/SCSS', 'Webpack', 'Babel', 'ESLint', 'Prettier',
                'MongoDB', 'Firebase', 'Vercel', 'Netlify', 'Supabase', 'Stripe', 'Socket.io',
                'Spline', 'Lottie', 'Framer Motion'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default transform-gpu hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;