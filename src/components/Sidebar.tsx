import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserAlt,
  FaBriefcase,
  FaTools,
  FaFileAlt,
  FaRegLightbulb,
  FaGlobe,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Visible only on small screens) */}
      <button
        className="sm:hidden  top-4 left-4  z-50 text-white  p-3 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div id="scroll-div"
      className={`bg-gradient-to-br from-gray-800 via-gray-900 to-black
       text-gray-300 w-[70%] sm:w-[20%] h-screen fixed top-0 left-0 z-40
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        sm:translate-x-0 transition-transform duration-300 flex flex-col 
        items-center py-6 shadow-lg overflow-y-auto`}
>

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
          {[
            { to: "/", label: "About Me", Icon: FaUserAlt },
            { to: "/experience", label: "Experience", Icon: FaBriefcase },
            { to: "/services", label: "Services", Icon: FaTools },
            { to: "/resume", label: "Resume", Icon: FaFileAlt },
          ].map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-white border-l-4 border-teal-500 bg-gray-800"
                    : "hover:text-teal-400"
                }`
              }
            >
              <Icon className="text-xl hover:rotate-12 transition-transform duration-300" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        {/* Resources Section */}
        <div className="mt-10 w-full px-4">
          <h5 className="text-sm font-semibold text-gray-500 mb-4">RESOURCES</h5>
          {[
            { to: "/projects", label: "Projects", Icon: FaRegLightbulb },
            { to: "/thoughts", label: "Thoughts", Icon: FaTools },
            { to: "/stacks", label: "Stack", Icon: FaGlobe },
          ].map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-white border-l-4 border-teal-500 bg-gray-800"
                    : "hover:text-teal-400"
                }`
              }
            >
              <Icon className="text-xl hover:rotate-12 transition-transform duration-300" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        {/* Connect Section */}
        <div className="mt-10 w-full px-4 mb-16">
          <h5 className="text-sm font-semibold text-gray-500 mb-4">CONNECT</h5>
          {[
            { to: "/contact", label: "Socials", Icon: HiOutlineMail },
          ].map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-4 text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-white border-l-4 border-teal-500 bg-gray-800"
                    : "hover:text-teal-400"
                }`
              }
            >
              <Icon className="text-xl hover:rotate-12 transition-transform duration-300" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
