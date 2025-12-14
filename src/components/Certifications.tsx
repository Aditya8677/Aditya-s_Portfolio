import React from 'react';

interface CertificationsProps {
  isDark?: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDark = false }) => {
  const certs = [
    {
      title: 'Web Development Internship - Jio',
      issuer: 'Jio Digital Life',
      date: 'June 2024',
      viewLink: 'https://drive.google.com/file/d/1B4aUxsDyN4CD1jI0QK2jkp8ZGurKpeJ5/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1B4aUxsDyN4CD1jI0QK2jkp8ZGurKpeJ5',
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'MICROSOFT',
      date: 'January 2025',
      viewLink: 'https://drive.google.com/file/d/110Dnwpoocd3m3q8MzuScxFzniUp9ggGr/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=110Dnwpoocd3m3q8MzuScxFzniUp9ggGr',
    },
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'ORACLE',
      date: 'January 2025',
      viewLink: 'https://drive.google.com/file/d/1NhPOp2e_5XbzqRO4rfh5EaObg9WVBv0v/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1NhPOp2e_5XbzqRO4rfh5EaObg9WVBv0v',
    },
    {
      title: 'AWS Academy Graduate - Machine Learning Foundations',
      issuer: 'AWS Academy',
      date: 'August 2023',
      viewLink: 'https://drive.google.com/file/d/1LkaQWIhVNTnjPnl328qvAliK9NWSK6q1/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1LkaQWIhVNTnjPnl328qvAliK9NWSK6q1',
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{cert.date}</p>
              <div className="flex space-x-4">
                <a
                  href={cert.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-md hover:scale-105 transition-transform"
                >
                  View
                </a>
                <a
                  href={cert.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-md shadow-md hover:scale-105 transition-transform"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
