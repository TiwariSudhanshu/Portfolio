import Sidebar from './Sidebar';
import { FaUserAlt, FaTools, FaRegLightbulb, FaLaptopCode, FaCogs } from 'react-icons/fa';

function AboutMe() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      {/* About Me Content */}
      <div className="flex-1 p-10 flex flex-col items-center justify-start space-y-12">
        {/* Hero Section */}
        <header className="text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-teal-400 tracking-wide animate-fade-in-down">
            Sudhanshu Tiwari
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 font-light animate-fade-in-up">
            Full Stack MERN Developer | Competitive Programmer | Problem Solver
          </p>
        </header>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 animate-zoom-in">
          <img
            className="rounded-full w-52 h-52 md:w-64 md:h-64 border-4 border-teal-500 shadow-lg hover:scale-110 transition-transform duration-300"
            src="https://i.pinimg.com/736x/ed/c9/6b/edc96bdcad88abe107f873bd89910649.jpg"
            alt="Profile"
          />
          <div className="text-center md:text-left space-y-6">
            <p className="text-lg md:text-2xl font-light leading-relaxed">
              Hey there! I’m <span className="text-teal-400 font-semibold">Sudhanshu Tiwari</span>, an enthusiastic{' '}
              <strong>Full Stack MERN Developer</strong> and an <strong>Algorithm Enthusiast</strong>. I thrive on crafting efficient, scalable, and elegant solutions using{' '}
              <span className="text-teal-300">Java</span> and modern web technologies.
            </p>
            <p className="text-md md:text-lg font-light leading-relaxed">
              My expertise lies in building end-to-end web applications with <span className="text-teal-300">React.js</span>,{' '}
              <span className="text-teal-300">Node.js</span>, <span className="text-teal-300">MongoDB</span>, and <span className="text-teal-300">Express.js</span>. I specialize in solving real-world challenges by designing intuitive and impactful user experiences.
            </p>
            <p className="text-md md:text-lg font-light leading-relaxed">
              Beyond coding, I’m deeply passionate about mentoring, participating in hackathons, and collaborating with like-minded individuals to push boundaries.
            </p>
          </div>
        </div>

        {/* Icon Highlights */}
        <div className="flex justify-center space-x-10 mt-10 animate-slide-in">
          {[
            { icon: FaLaptopCode, title: 'Full Stack Developer' },
            { icon: FaTools, title: 'Tech Innovator' },
            { icon: FaCogs, title: 'Competitive Programmer' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            >
              <item.icon className="text-teal-400 text-5xl" />
              <p className="mt-2 text-sm md:text-md text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Animated Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: FaUserAlt,
              title: 'Tailored Solutions',
              text: 'Crafting web apps that blend functionality with a delightful user experience.',
            },
            {
              icon: FaTools,
              title: 'Cutting-Edge Tech',
              text: 'Leveraging the latest tools to deliver high-performance and scalable systems.',
            },
            {
              icon: FaRegLightbulb,
              title: 'Innovative Ideas',
              text: 'Transforming visionary concepts into practical, real-world solutions.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
            >
              <item.icon className="text-teal-400 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm md:text-md text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Personal Message */}
        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-gray-400 text-lg md:text-xl italic">
            “When I’m not coding, I’m exploring, learning, and striving to create solutions that leave a lasting impact.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
