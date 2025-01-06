import React from 'react';

const Teaching = ({ isDarkMode }) => {
  return (
    <div
      className={`p-8 pr-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#27262b] text-white' : 'bg-white text-black'
      }`}
    >
      <h1 className="text-4xl pb-8">Teaching</h1>
      <p className="pb-4">
        Education is something that I hold especially dear to me. I believe education is not just about knowledge acquisition but also about empowerment and growth. Having worked 8+ years in this sector, here's a list of my experiences!
      </p>
      <ul>
        <li className="pb-2">
          <strong>2022-Present:</strong> CEO/Chemistry & Computer Science Teacher at NEWGEN International Education
          <ul className="pl-4">
            <li>We help Cambridge IGCSE/A-Level students get A*'s 😎</li>
          </ul>
        </li>
        <li className="pb-2">
          <strong>2023:</strong> CS61A Academic Intern
          <ul className="pl-4">
            <li>The best computer science class at Berkeley</li>
          </ul>
        </li>
        <li className="pb-2">
          <strong>2016-2022:</strong> KUMON Mt. Albert Head Teaching Assistant
          <ul className="pl-4">
            <li>Teaching High School Math + English and reading fun flashcards with younger students</li>
          </ul>
        </li>
        <li className="pb-2">
          <strong>2021:</strong> Scholar's Common Room Volunteer Tutoring
          <ul className="pl-4">
            <li>Helping teach Math, Computer Science, Chemistry, Bio, English Literature in High School</li>
          </ul>
        </li>
        <li className="pb-2">
          <strong>2021:</strong> Reading in Schools
          <ul className="pl-4">
            <li>Visiting lower-decile schools to read fun books with younger students</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Teaching;
