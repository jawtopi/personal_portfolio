import React, { useState } from 'react';
import WorkExpCard from './WorkExpCard';
import bestlogo from '../images/best-logo.png';
import kidrone from '../images/kidrone_logo.jpeg';
import ss from '../images/SsLogo.png';
import nike from '../images/nike.png';
import berk from '../images/berk.png';
import kumon from '../images/kumon.jpeg';

const Experience = ({ isDarkMode }) => {
  const workExperiences = [
    {
      title: 'Co-Founder / Teacher',
      company: 'NEWGEN International Education LTD.',
      location: 'New Zealand',
      date: 'Jan 2023 - Present',
      responsibilities: [
        'Co-founded Kiwi education/academic consulting start-up offering comprehensive courses for UK A-Level curricula, with 150+ current regular students and skillful team of tutors.',
        'Designed extensive teaching syllabi to maximize student success. Teach weekly Chemistry/Computer Science classes.',
        'Led software development efforts in Full-Stack student Learning Management System project.',
      ],
      logo: bestlogo,
      filePath: 'nike',
    },
    {
      title: 'Contract Software Engineer - Front End',
      company: 'Nike',
      location: 'Remote',
      date: 'Aug 2024 - Dec 2024',
      responsibilities: [
        'Built Next.js components, focusing on modular design for scalability for Nike’s Learning Platform.',
      ],
      logo: nike,
      filePath: 'nike',
    },
    {
      title: 'Software Engineer Intern - Algorithms',
      company: 'KiDrone',
      location: 'Toronto, ON, Canada',
      date: 'May 2024 - Aug 2024',
      responsibilities: [
        'Designed an optimized flight path algorithm for aerial reforestation with military-grade drones, speeding up seed dispersal rates by 40% using Boustrophedon Decomposition, Kruskal’s Algorithm, and NumPy.',
        'Extrapolated longitude, latitude, and height data using ArcGIS to display 3D flight path on Google Earth.',
        'Packaged code into full-stack application using Electron and built basic front-end using React.js for pre-deployment.',
      ],
      logo: kidrone,
      filePath: 'nike',
    },
    {
      title: 'Software Engineer Intern - Game Development',
      company: 'SpringBay Studios',
      location: 'Remote',
      date: 'June 2024 - Aug 2024',
      responsibilities: [
        'Implemented game localization support for 6 new languages by developing text class in C# and replacing Unity TextMeshPro components with new class for language-specific font, alignment, size, and character order properties.',
        'Ensured correct text display by writing scripts to fetch, post, and concatenate string data to/from JSON and XML files.',
        'Wrote unit tests and performed regression testing, resulting in a robust mobile application ready for release.',
      ],
      logo: ss,
      filePath: 'nike',
    },
    {
      title: 'CS61a Academic Intern',
      company: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      date: 'Aug 2023 - Dec 2023',
      responsibilities: [
        'Assisted in planning, delivery and execution of UC Berkeley’s introductory computer science course CS61A.',
        'Worked to support classes of 40+ through active feedback and code review in lab sections and office hours.',
        'Covered topics from Higher-Order Functions to Recursion, Mutability, SQL and Object-Oriented Programming.',
      ],
      logo: berk,
      filePath: 'nike',
    },
    {
      title: 'Head Teaching Assistant',
      company: 'KUMON Mt Albert.',
      location: 'Mt Albert, Auckland, New Zealand',
      date: 'Feb 2016 - Aug 2022',
      responsibilities: [
        'Managed day-to-day activities at tutoring center, trained new staff, taught primary to high school Math and English',
        'Hosted fun flashcard and reading sessions for younger students (ages < 5)',
      ],
      logo: kumon,
      filePath: 'nike',
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
      <h1 className="text-4xl pb-8">Experience</h1>
      <p className="pb-8">
        Find my most current resume{' '}
        <a
          href="https://drive.google.com/file/d/1zWg4s2eRfQiYx90x2QoHOc9W75Ekj5R4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`${isDarkMode ? 'text-blue-300' : 'text-blue-700'} underline`}
        >
          here
        </a>
        !
      </p>
      <h2 className={`text-2xl font-thin pb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Work Experience (Might not be up to date)
      </h2>
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
      <h2 className={`text-2xl font-thin pt-8 pb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Research</h2>
      <p className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
        I am currently searching for research opportunities! Interested in Security, Systems, Education, and Machine
        Learning research.
      </p>
    </div>
  );
};

export default Experience;
