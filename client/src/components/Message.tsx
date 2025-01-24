import Sidebar from './Sidebar';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Message() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isAnonymous: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send message via API)
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Message Content */}
      <div className="flex-1 p-10 md:p-16 lg:p-20 flex flex-col items-center justify-start space-y-12">
        {/* Header */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-teal-400 tracking-wide mb-12 animate__animated animate__fadeIn"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Send Me a Message
        </motion.h1>

        <motion.p
          className="text-md md:text-lg text-gray-400 text-center mb-12 italic max-w-3xl animate__animated animate__fadeIn animate__delay-1s"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I would love to hear from you! Whether it's feedback or suggestions, you can send me a message. If you prefer, you can also remain anonymous!
        </motion.p>

        {/* Message Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full md:w-3/4 lg:w-1/2 max-w-xl space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col space-y-6">
            {/* Name */}
            {!formData.isAnonymous && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <label htmlFor="name" className="text-lg font-semibold text-gray-300">
                  Name 
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </motion.div>
            )}

            {/* Email */}
            {!formData.isAnonymous && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <label htmlFor="email" className="text-lg font-semibold text-gray-300">
                  Email 
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </motion.div>
            )}

            {/* Anonymous Checkbox */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <input
                type="checkbox"
                id="isAnonymous"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={handleChange}
                className="form-checkbox text-teal-500"
              />
              <label htmlFor="isAnonymous" className="text-gray-300 text-lg">
                Send Anonymously
              </label>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="message" className="text-lg font-semibold text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                
                className="w-full p-3 mt-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Type your message here..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full p-3 bg-teal-500 text-gray-200 rounded-lg hover:bg-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {/* Success Message */}
        <motion.div
          className="mt-12 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {/* Uncomment to show a success message after form submission */}
          <p>Thank you for your message! I will get back to you soon.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Message;
