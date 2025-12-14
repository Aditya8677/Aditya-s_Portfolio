import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import Interactive3DCard from './3d/Interactive3DCard';
import ParticleBackground from './3d/ParticleBackground';

interface ProjectsProps {
  isDark?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark = false }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'College Management System',
      description: 'A comprehensive DBMS project for managing college data including students, faculty, courses, and attendance.',
      longDescription: 'Developed as part of the Database Management Systems (DBMS) course at SRM Institute of Science and Technology. This system is designed as a relational database to manage college data including students, faculty, courses, and attendance...',
      image: 'cms.jpg',
      tech: ['DBMS', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Python', 'MySQL'],
      gradient: 'from-blue-500 to-purple-600',
      github: 'https://github.com/Aditya8677',
      live: '#',
      period: 'Feb 2024 - Apr 2024'
    },
    {
      id: 2,
      title: 'Predicting Air Quality And Ensuring Public Safety',
      description: 'A machine learning-based system to predict air quality levels and provide real-time health safety suggestions.',
      longDescription: 'Developed a machine learning-based system to predict air quality levels using environmental data (e.g., PM2.5, PM10, NO2, etc.)...',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Pandas', 'Flask', 'Streamlit', 'Matplotlib', 'XG Boost', 'Random Forest', 'Linear Regression'],
      gradient: 'from-green-500 to-teal-600',
      github: 'https://github.com/Aditya8677',
      live: '#',
      period: 'Feb 2025 - May 2025'
    },
    {
      id: 3,
      title: 'ASL Detection using OpenCV',
      description: 'A real-time American Sign Language detection system using computer vision and machine learning.',
      longDescription: 'Developed a system to detect American Sign Language (ASL) gestures using a webcam feed...',
      image: 'asl.jpg',
      tech: ['Numpy', 'Pandas', 'OpenCV', 'Mediapipe', 'Random Forest'],
      gradient: 'from-orange-500 to-pink-600',
      github: 'https://github.com/Aditya8677',
      live: '#',
      period: 'Sep 2024 - Oct 2024'
    },
    {
      id: 4,
      title: 'Multilingual WhatsApp Application',
      description: 'A chat application supporting real-time messaging with live language translation across multiple languages.',
      longDescription: 'Developed a real-time chat application similar to WhatsApp, enhanced with multilingual support using language translation APIs...',
      image: 'multilingual.jpg',
      tech: ['React', 'Node.js', 'Socket.IO', 'Express', 'MongoDB', 'Google Translate API'],
      gradient: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/Aditya8677',
      live: '#',
      period: 'June 2025 - July 2025'
    }
  ];

  return (
    <section className="py-16 px-6 relative z-10" id="projects">
      <ParticleBackground isDark={isDark} className="absolute inset-0 -z-10 opacity-30" />
      <h2 className="text-4xl font-bold text-center text-white mb-10">Featured Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project.id)}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="relative bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 hover:scale-105 transition cursor-pointer"
          >
            <Interactive3DCard
              isHovered={hoveredProject === project.id}
              gradient={project.gradient}
              isDark={isDark}
              className="absolute inset-0 opacity-20 rounded-xl"
            />
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech, i) => (
                <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">{tech}</span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (() => {
        const project = projects.find(p => p.id === selectedProject);
        if (!project) return null;

        return (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl max-w-2xl w-full relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 p-2 rounded-full"
              >
                <X className="text-white" />
              </button>
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded mb-4" />
              <h3 className="text-2xl text-white font-bold mb-2">{project.title}</h3>
              <p className="text-white mb-4">{project.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={project.live} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};

export default Projects;
