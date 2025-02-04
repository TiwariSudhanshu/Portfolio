import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component
import { projects } from '../data/projects';

const Project = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const filteredProjects = selectedRating
    ? projects.filter(project => project.rating === selectedRating)
    : projects;

  return (
<div className="flex flex-col sm:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      
      <div className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-start space-y-8 sm:space-y-12 ml-0 sm:ml-[20%]">

        <div className="mb-10 flex flex-wrap gap-4 justify-start">
          {[5, 4, 3, 2, 1].map(rating => (
            <motion.button
              key={rating}
              className={`bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-400 transition-all ${selectedRating === rating ? 'bg-teal-600' : ''}`}
              onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {Array.from({ length: rating }).map((_, index) => (
                <span key={index} className="text-yellow-500">★</span>
              ))}
              {Array.from({ length: 5 - rating }).map((_, index) => (
                <span key={index} className="text-gray-400">★</span>
              ))}
            </motion.button>
          ))}
          <motion.button
            className={`bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-400 transition-all ${selectedRating === null ? 'bg-teal-600' : ''}`}
            onClick={() => setSelectedRating(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show All
          </motion.button>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={project.url}>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-500">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    {Array.from({ length: project.rating }).map((_, index) => (
                      <span key={index} className="text-yellow-500">★</span>
                    ))}
                    {Array.from({ length: 5 - project.rating }).map((_, index) => (
                      <span key={index} className="text-gray-400">★</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
