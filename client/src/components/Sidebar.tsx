import { NavLink } from "react-router-dom";
import {
  FaUserAlt,
  FaBriefcase,
  FaTools,
  FaFileAlt,
  FaRegLightbulb,
  FaGlobe,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaMessage } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 w-[20%] min-h-screen flex flex-col items-center py-6 overflow-y-auto shadow-lg">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full w-24 h-24 border-4 border-gray-700 shadow-md hover:scale-110 transition-transform duration-300"
          src="https://i.pinimg.com/736x/ed/c9/6b/edc96bdcad88abe107f873bd89910649.jpg"
          alt="Profile"
        />
        <h4 className="text-2xl font-semibold mt-4">Sudhanshu Tiwari</h4>
        <p className="text-sm text-gray-500">FULL STACK MERN DEVELOPER</p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col w-full px-4 space-y-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <FaUserAlt className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>About Me</span>
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <FaBriefcase className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>Experience</span>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <FaTools className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>Services</span>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <FaFileAlt className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>Resume</span>
        </NavLink>
      </div>

      {/* Resources Section */}
      <div className="mt-10 w-full px-4">
        <h5 className="text-sm font-semibold text-gray-500 mb-4">RESOURCES</h5>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <FaRegLightbulb className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>Projects</span>
        </NavLink>
        <NavLink
          to="/thoughts"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <FaTools className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>Thoughts</span>
        </NavLink>
        <NavLink
          to="/stacks"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <FaGlobe className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>Stack</span>
        </NavLink>
      </div>

      {/* Connect Section */}
      <div className="mt-10 w-full px-4">
        <h5 className="text-sm font-semibold text-gray-500 mb-4">CONNECT</h5>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <HiOutlineMail className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>Socials</span>
        </NavLink>
        <NavLink
          to="/message"
          className={({ isActive }) =>
            `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "text-white border-l-4 border-teal-500 bg-gray-800"
                : "hover:text-teal-400"
            }`
          }
        >
          <FaMessage className="text-xl hover:rotate-12 transition-transform duration-300" />
          <span>Message</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
