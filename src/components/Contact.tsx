import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import FloatingShapes from './3d/FloatingShapes';
import AnimatedBlobBackground from './3d/AnimatedBlob';

interface ContactProps {
  isDark?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xeoknbad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Personal Email',
      value: 'adityaak8677@gmail.com',
      href: 'mailto:adityaak8677@gmail.com',
    },
    {
      icon: Mail,
      title: 'College Email',
      value: 'ak6116@srmist.edu.in',
      href: 'mailto:ak6116@srmist.edu.in',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9142656245',
      href: 'tel:+919142656245',
    },
    {
      icon: MapPin,
      title: 'Current Location',
      value: 'Chennai, Potheri',
      href: '#',
    },
    {
      icon: MapPin,
      title: 'Hometown',
      value: 'Bihar, Hajipur',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <AnimatedBlobBackground isDark={isDark} className="opacity-20" />
      <FloatingShapes isDark={isDark} className="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-pink-900/10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, or collaborating on SDG-based solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Let's Create Something Meaningful
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  Whether you have a project in mind that contributes to sustainable development, 
                  want to discuss innovative web solutions, or just want to connect, I'd love to hear from you. 
                  Let's build technology that makes a positive impact!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group hover:scale-105 transform-gpu"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 transform-gpu shadow-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 dark:hover:bg-gray-800/15 transition-all duration-300">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. I'll get back to you soon with some amazing ideas!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/20 border border-white/30 dark:border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 hover:bg-white/25 dark:hover:bg-gray-700/25"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/20 border border-white/30 dark:border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 hover:bg-white/25 dark:hover:bg-gray-700/25"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/20 border border-white/30 dark:border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 hover:bg-white/25 dark:hover:bg-gray-700/25"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/20 border border-white/30 dark:border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none hover:bg-white/25 dark:hover:bg-gray-700/25"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform-gpu hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
