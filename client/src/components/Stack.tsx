import Sidebar from './Sidebar';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiFirebase, SiTypescript, SiTailwindcss, } from 'react-icons/si';
// import { TbBrandSocketio } from 'react-icons/tb';
// import { MdDeveloperMode } from 'react-icons/md';

function Stack() {
  const techStack = [
    {
      icon: <FaNodeJs className="text-green-600 text-5xl hover:text-green-500 transform hover:scale-125 transition-all duration-500" />,
      title: 'Node.js',
    },
    {
      icon: <FaReact className="text-cyan-400 text-5xl hover:text-cyan-300 transform hover:scale-125 transition-all duration-500" />,
      title: 'React',
    },
    {
      icon: <SiTypescript className="text-blue-600 text-5xl hover:text-blue-500 transform hover:scale-125 transition-all duration-500" />,
      title: 'TypeScript',
    },
    {
      icon: <SiRedux className="text-purple-600 text-5xl hover:text-purple-500 transform hover:scale-125 transition-all duration-500" />,
      title: 'Redux',
    },
    {
      icon: <SiTailwindcss className="text-teal-400 text-5xl hover:text-teal-300 transform hover:scale-125 transition-all duration-500" />,
      title: 'Tailwind CSS',
    },
    {
      icon: <SiTailwindcss className="text-blue-500 text-5xl hover:text-blue-400 transform hover:scale-125 transition-all duration-500" />,
      title: 'Material UI',
    },
    {
      icon: <FaDatabase className="text-green-800 text-5xl hover:text-green-700 transform hover:scale-125 transition-all duration-500" />,
      title: 'MongoDB',
    },
    {
      icon: <SiFirebase className="text-yellow-600 text-5xl hover:text-yellow-500 transform hover:scale-125 transition-all duration-500" />,
      title: 'Firebase',
    },
    {
      icon: <FaNodeJs className="text-white text-5xl hover:text-gray-300 transform hover:scale-125 transition-all duration-500" />,
      title: 'Socket.IO',
    },
    {
      icon: <FaJsSquare className="text-yellow-500 text-5xl hover:text-yellow-400 transform hover:scale-125 transition-all duration-500" />,
      title: 'JavaScript',
    },
    {
      icon: <FaHtml5 className="text-orange-500 text-5xl hover:text-orange-400 transform hover:scale-125 transition-all duration-500" />,
      title: 'HTML',
    },
    {
      icon: <FaCss3Alt className="text-blue-500 text-5xl hover:text-blue-400 transform hover:scale-125 transition-all duration-500" />,
      title: 'CSS',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Tech Stack Content */}
      <div className="flex-1 p-10 flex flex-col items-center justify-start space-y-12">
        {/* Header */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-teal-400 tracking-wide mb-8 animate__animated animate__fadeInDown">
          My Tech Stack
        </h1>
        <p className="text-md md:text-lg text-gray-400 text-center mb-8 italic max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
          I work with a variety of technologies to bring your ideas to life. Here are the tools I use:
        </p>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-6">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-8 rounded-lg shadow-2xl flex flex-col items-center text-center hover:scale-110 transform transition-all duration-500 hover:bg-teal-600 hover:text-white"
            >
              {/* Icon */}
              <div className="mb-6">{tech.icon}</div>

              {/* Title */}
              <h2 className="text-xl font-bold text-teal-300 mb-4">{tech.title}</h2>
            </div>
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg md:text-xl italic animate__animated animate__fadeIn animate__delay-2s">
            “Let’s collaborate and create something amazing with these technologies!”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stack;
