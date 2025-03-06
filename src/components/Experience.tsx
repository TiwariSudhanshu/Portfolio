import Sidebar from './Sidebar';
import {  FaCalendarAlt, FaMapMarkerAlt, FaLaptopCode, FaRocket, FaCode } from 'react-icons/fa';
import { experiences } from '../data/experience';
function Experience() {
  

  return (
<div className="flex flex-col sm:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      {/* About Me Content */}
      <div className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-start space-y-8 sm:space-y-12 ml-0 sm:ml-[20%]">

        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-400 tracking-wide mb-8 animate-fadeInDown">
          My Professional Journey
        </h1>
        <p className="text-md md:text-lg text-gray-400 text-center mb-8 italic max-w-3xl">
          Every journey starts with small yet meaningful steps. Here’s how I’ve grown through opportunities, learning,
          and collaboration.
        </p>

        {/* Timeline Section */}
        <div className="relative w-full max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

          {experiences.map((experience, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center justify-start mb-12 relative ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Connector Line */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-teal-400 ${
                  idx % 2 === 0 ? 'right-1/2' : 'left-1/2'
                }`}
              ></div>

              {/* Content Box */}
              <div
                className={`bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ${
                  idx % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-12 h-12 rounded-full border-2 border-teal-400 mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-teal-300">{experience.title}</h2>
                    <p className="text-sm text-gray-400 font-light">{experience.company} · {experience.type}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-light flex items-center space-x-2">
                  <FaCalendarAlt className="text-teal-400" />
                  <span>{experience.duration}</span>
                </p>
                <p className="text-sm text-gray-500 font-light flex items-center space-x-2 mt-1">
                  <FaMapMarkerAlt className="text-teal-400" />
                  <span>{experience.location}</span>
                </p>

                {/* Skills */}
                {experience.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-teal-500 text-gray-900 text-xs font-bold rounded-full shadow-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg md:text-xl italic">
            “Keep learning, growing, and reaching for the stars. The journey never truly ends.”
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <FaLaptopCode className="text-teal-400 text-4xl animate-spin-slow" />
            <FaRocket className="text-teal-400 text-4xl animate-bounce" />
            <FaCode className="text-teal-400 text-4xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
