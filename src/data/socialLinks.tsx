import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
export const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-700 text-5xl hover:text-blue-600 transform hover:scale-125 transition-all duration-500" />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sudhanshu--tiwari-/',
    },
    {
      icon: <FaXTwitter className="text-blue-400 text-5xl hover:text-blue-300 transform hover:scale-125 transition-all duration-500" />, 
      title: 'X',
      link: 'https://x.com/sudhanshu4eth',
    },
    {
      icon: <FaInstagram className="text-purple-600 text-5xl hover:text-purple-500 transform hover:scale-125 transition-all duration-500" />,
      title: 'Instagram',
      link: 'https://www.instagram.com/sudhanshu__tiwari_/',
    },
    {
      icon: <FaEnvelope className="text-red-500 text-5xl hover:text-red-400 transform hover:scale-125 transition-all duration-500" />,
      title: 'Email',
      link: 'https://sudhanshutiwari9836@gmail.com',
    },
    {
      icon: <FaGithub className="text-gray-800 text-5xl hover:text-gray-700 transform hover:scale-125 transition-all duration-500" />,
      title: 'GitHub',
      link: 'https://github.com/TiwariSudhanshu',
    },
  ];