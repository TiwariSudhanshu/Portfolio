import Sidebar from './Sidebar';
import { FaCode, FaServer, FaMobileAlt, FaEdit, FaBullhorn, FaProjectDiagram } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaCode className="text-teal-400 text-4xl" />,
      title: 'Frontend Development',
      description:
        'Craft visually stunning, responsive, and user-friendly interfaces using modern technologies like React.js, Tailwind, Material UI etc.',
    },
    {
      icon: <FaServer className="text-teal-400 text-4xl" />,
      title: 'Backend Development',
      description:
        'Build robust, scalable, and secure server-side applications using Node.js, Express, and MongoDB.',
    },
    {
      icon: <FaProjectDiagram className="text-teal-400 text-4xl" />,
      title: 'Full-Stack Development',
      description:
        'Deliver end-to-end solutions by combining frontend and backend development to create seamless applications.',
    },
    {
      icon: <FaEdit className="text-teal-400 text-4xl" />,
      title: 'Content Creation',
      description:
        'Create engaging, high-quality content that resonates with your audience and enhances brand visibility.',
    },
    {
      icon: <FaBullhorn className="text-teal-400 text-4xl" />,
      title: 'Social Media Management',
      description:
        'Manage and grow your social media presence with creative strategies, campaigns, and analytics-driven insights.',
    },
    {
      icon: <FaMobileAlt className="text-teal-400 text-4xl" />,
      title: 'AI-Powered Solutions',
      description:
        'Design intelligent solutions that leverage AI to optimize workflows, improve decision-making, and drive innovation.',
    },
  ];

  return (
<div className="flex flex-col sm:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      
      <div className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-start space-y-8 sm:space-y-12 ml-0 sm:ml-[20%]">

        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-400 tracking-wide mb-8 animate-fadeInDown">
          My Services
        </h1>
        <p className="text-md md:text-lg text-gray-400 text-center mb-8 italic max-w-3xl">
          I specialize in creating impactful digital solutions. Whether it's developing full-stack applications,
          managing content, or delivering AI-powered tools, I’ve got you covered.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Title */}
              <h2 className="text-xl font-bold text-teal-300 mb-2">{service.title}</h2>

              {/* Description */}
              <p className="text-sm text-gray-400 font-light">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg md:text-xl italic">
            “Let’s collaborate and transform your ideas into reality!”
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <FaCode className="text-teal-400 text-4xl animate-pulse" />
            <FaBullhorn className="text-teal-400 text-4xl animate-bounce delay-200" />
            <FaProjectDiagram className="text-teal-400 text-4xl animate-spin-slow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
