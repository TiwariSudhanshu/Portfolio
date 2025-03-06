import Sidebar from './Sidebar'; // Assuming you have a Sidebar component
import { motion } from 'framer-motion';
// import { blogs } from '../data/blogs';

const Thoughts = () => {
  return (
<div className="flex flex-col sm:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      
      <div className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-start space-y-8 sm:space-y-12 ml-0 sm:ml-[20%]">

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-teal-400 tracking-wide mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Blogs & Thoughts
        </motion.h1>
        <div>Coming soon...</div>

        {/* <div className="space-y-10">
          {blogs?.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <a href={blog.url} className="block">
                <div className="relative p-6">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <h3 className="text-xl font-bold text-teal-500 relative z-10">{blog.title}</h3>
                  <p className="text-gray-300 mt-3 relative z-10">{blog.excerpt}</p>
                  <div className="mt-4 text-sm text-gray-500 relative z-10">
                    <span>{blog.author}</span> | <span>{blog.date}</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Thoughts;
