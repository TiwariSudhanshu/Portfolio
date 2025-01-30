import Sidebar from './Sidebar';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    const fileUrl = '../resume.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume.pdf'; 
    link.click();
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Resume Content */}
      <div className="flex-1 p-10 flex flex-col items-center justify-start space-y-12">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-400 tracking-wide mb-8 animate-fadeInDown">
          My Resume
        </h1>
        <p className="text-md md:text-lg text-gray-400 text-center italic max-w-3xl">
          A snapshot of my journey, expertise, and achievements in the tech world.
        </p>

        {/* Resume Overview */}
        <div className="bg-gray-800 text-gray-300 rounded-lg shadow-xl p-6 mt-8 w-full max-w-4xl">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-teal-500">Sudhanshu Tiwari</h1>
        <p>Bhopal | +91 9026058419 | sudhanshutiwari9836@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/sudhanshu-tiwari-/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/TiwariSudhanshu" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
            GitHub
          </a>
        </p>
      </div>

      {/* Career Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-teal-500 mb-2">Career Summary</h2>
        <p>
          I am a second-year student at RGPV studying computer science engineering with a strong background in MERN stack web development. I am actively involved in the college Ecell club of our college, working on projects using JavaScript, React, and Express, and completed internships in web development, demonstrating hands-on experience and a passion for collaborative work. I am ready to apply my skills and enthusiasm to new opportunities.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-teal-500 mb-2">Skills</h2>
        <ul className="list-disc pl-6">
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Next js</li>
          <li>Tailwind/Material UI</li>
          <li>HTML, CSS, JS/TS</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-teal-500 mb-2">Projects</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>E-commerce Websites</strong> – Made an ice-cream store website and a shoes store website
          </li>
          <li>
            <strong>soZial</strong> – Complete a small and basic social media web app
          </li>
          <li>
            <strong>Travel Agency</strong> – Collaborated with a teammate for the hackathon and made a travel agency web app
          </li>
          <li>
            <strong>E-Cell Utility</strong> – Currently working on Ecell website of college and has made varous utilities
            like escanify, blog web for the club
          </li>
          <li>
            <strong>Treasure Hunt</strong>  – A real-life game of treasure hunt with more than 100+ participants
          </li>
        </ul>
      </section>

      {/* Strengths Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-teal-500 mb-2">Strengths</h2>
        <ul className="list-disc pl-6">
          <li>Internship Experience</li>
          <li>Collaborations</li>
          <li>Time Management</li>
          <li>Multi-tasking</li>
        </ul>
      </section>

      {/* Professional Accomplishments */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-teal-500 mb-2">Professional Accomplishments</h2>
        <ul className="list-disc pl-6">
          <li>Rank 4 in Web3 buildathon</li>
          <li>Won ranks in college hackathons</li>
        </ul>
      </section>

      {/* Work History */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-teal-500 mb-2">Work History</h2>
        <ul className="list-disc pl-6">
          <li>Code4All, Bhopal, Tech-Team, (12/2023–07/2024)</li>
          <li>Ecell RGPV Bhopal, Tech Team (07/2024–Present)</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-teal-500 mb-2">Education</h2>
        <p>B.Tech, Graduation Year (2027), RGPV University, Bhopal</p>
      </section>
    </div>
        {/* Download Button */}
        <div>
          <button
            onClick={handleDownload}
            className="bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-teal-400 hover:scale-105 transition-all flex items-center space-x-3"
          >
            <FaFileDownload className="text-2xl" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
