import Sidebar from './Sidebar';
import { socialLinks } from '../data/socialLinks';
import { motion } from 'framer-motion';

function Contact() {
  

  return (
<div className="flex flex-col sm:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      {/* About Me Content */}
      <div className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-start space-y-8 sm:space-y-12 ml-0 sm:ml-[20%]">

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-teal-400 tracking-wide mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h1>
        <p className="text-md md:text-lg text-gray-400 text-center mb-8 italic max-w-3xl animate__animated animate__fadeIn">
          You can reach out to me on any of the following platforms:
        </p>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-6">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-8 rounded-lg shadow-2xl flex flex-col items-center text-center hover:scale-110 transform transition-all duration-500 hover:bg-teal-600 hover:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Icon */}
              <div className="mb-6">{social.icon}</div>

              {/* Title */}
              <h2 className="text-xl font-bold text-teal-300 mb-4">{social.title}</h2>
            </motion.a>
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="mt-12 text-center">
          <motion.p
            className="text-gray-400 text-lg md:text-xl italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            "Let’s connect and collaborate to create something amazing!"
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
