import React, { useState } from 'react';
import WorkExpCard from './WorkExpCard';

const Projects = ({ isDarkMode }) => {
  const workExperiences = [
    {
      title: 'SecureSync - End to End Secure File Sharing System',
      company: 'CS 161 - University of California, Berkeley',
      location: 'Berkeley, CA',
      date: 'Sep 2024 - Oct 2024',
      responsibilities: [
        'Developed secure, stateless file storage system in GoLang, enabling users to create accounts, store/edit text files, and manage file-sharing permissions, including granting and revoking access for other users',
        'Integrated cryptographic libraries (AES-CTR, HMAC, RSA Encryption, Digital Signatures, Slow/Fast Hashing) to ensure confidentiality, integrity and user authentication in the presence of adversaries on untrusted servers',
        'Architected design enabling real-time file update synchronization and bandwidth efficient file append mechanisms',
      ],
    },
    {
      title: 'Full Stack Project - NEWGEN Website',
      company: 'NEWGEN International Education LTD.',
      location: 'Remote',
      date: 'Dec 2023 - June 2024',
      responsibilities: [
        'Spearheaded the design and execution of a visually appealing front-end website using HTML, CSS, and React.js',
        'Implemented AWS user authentication using Django Backend, APIs, Django REST Framework, React and Axios',
        'Utilized MySQL databases to store student information, tutor blog posts, and relevant class information',
      ],
    },
    {
      title: 'Logism Single Core RISC-V CPU',
      company: 'CS 61C - University of California, Berkeley',
      location: 'Berkeley, CA',
      date: 'Jan 2024 - May 2024',
      responsibilities: [
        'Designed and implemented a single-core CPU in Logisim, executing 36 key RISC-V instructions like addi, andi, and mul while integrating ALU, register file, and control logic circuits for instruction processing.',
        'Developed a pipelined architecture with hazard mitigation for branch and jump instructions, ensuring accurate instruction execution through control hazard resolution and no-op insertion.',
        'Integrated advanced testing workflows, debugging datapaths and circuits using custom RISC-V tests, Bash scripts, and Logisim tools to ensure optimal performance and compliance with design specifications.',
      ],
    },
    {
      title: '2D World Exploration Game',
      company: 'CS 61B - University of California, Berkeley',
      location: 'Berkeley, CA',
      date: 'Aug 2023 - Dec 2023',
      responsibilities: [
        'Used Java to create a 2D tile-based world exploration engine with dynamic features and user navigation capabilities',
        'Utilized Binary Search Partitioning algorithm to create complex, pseudo-random seeded world with rooms and hallways',
        'Implemented methods for loading and saving game objects to/from JSON Files for users to save progress',
      ],
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`p-8 pr-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#27262b] text-white' : 'bg-white text-black'
      }`}
    >
      <h1 className="text-4xl pb-8">Projects</h1>
      {(isExpanded ? workExperiences : workExperiences.slice(0, 2)).map((job, index) => (
        <WorkExpCard key={index} {...job} isDarkMode={isDarkMode} />
      ))}
      <div className="mt-4">
        <button
          onClick={toggleExpand}
          className={`px-4 py-2 rounded transition ${
            isDarkMode ? 'bg-blue-700 hover:bg-blue-800 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Projects;
