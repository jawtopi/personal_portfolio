import React, { useState } from 'react';

const Education = () => {
  const courses = [
    { id: 'CS 162', semester: 'Spring 2025', name: 'Operating Systems and System Programming', notes: 'OS concepts, concurrency, threads, system calls.' },
    { id: 'CS 188', semester: 'Spring 2025', name: 'Introduction to Artificial Intelligence', notes: 'AI techniques, search algorithms, machine learning.' },
    { id: 'DATA C8', semester: 'Spring 2025', name: 'Foundations of Data Science', notes: 'Data analysis, visualization, Python.' },
    { id: 'MATH 128A', semester: 'Spring 2025', name: 'Numerical Analysis', notes: 'Numerical methods, mathematical problem-solving.' },
    { id: 'CS 161', semester: 'Fall 2024', name: 'Computer Security', notes: 'Security principles, cryptography, secure systems.' },
    { id: 'CS 189', semester: 'Fall 2024', name: 'Introduction to Machine Learning', notes: 'Supervised / unsupervised learning, applications.' },
    { id: 'STAT 134', semester: 'Fall 2024', name: 'Concepts of Probability', notes: 'Probability theory, statistical modeling.' },
    { id: 'CS 61C', semester: 'Spring 2024', name: 'Computer Architecture (Machine Structures)', notes: 'Architecture, RISC-V assembly, parallelism.' },
    { id: 'CS 170', semester: 'Spring 2024', name: 'Efficient Algorithms and Intractable Problems', notes: 'Algorithm design, complexity analysis.' },
    { id: 'MATH 110', semester: 'Spring 2024', name: 'Abstract Linear Algebra', notes: 'Advanced linear algebra concepts, proofs.' },
    { id: 'CS 61B', semester: 'Fall 2023', name: 'Data Structures', notes: 'Trees, graphs, hash tables, Java.' },
    { id: 'CS 70', semester: 'Fall 2023', name: 'Discrete Mathematics and Probability Theory', notes: 'Mathematical logic, probabilistic reasoning.' },
    { id: 'MATH 53', semester: 'Fall 2023', name: 'Multivariable Calculus', notes: 'Vector calculus, partial derivatives, multiple integrals' },
    { id: 'CS 61A', semester: 'Spring 2023', name: 'The Structure and Interpretation of Computer Programs', notes: 'Functional programming, abstraction techniques, Python.' },
    { id: 'MATH 53', semester: 'Spring 2023', name: 'Multivariable Calculus', notes: 'Partial derivatives, gradients, vector fields.' },
    { id: 'MATH H54', semester: 'Fall 2022', name: 'Honors Linear Algebra and Differential Equations', notes: 'Advanced linear algebra, differential equations.' },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  // toggle function to expand or collapse the table
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-8 pr-16">
      <h1 className="text-4xl pb-4">Education</h1>
      <p className="font-normal text-xl text-blue-700">University of California, Berkeley</p>
      <p className="font-light text-lg pb-4 text-blue-700">
        B.A. Computer Science || B.A. Applied Mathematics
      </p>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 w-32">Course ID</th>
            <th className="border border-gray-300 px-4 py-2">Semester Taken</th>
            <th className="border border-gray-300 px-4 py-2">Course Name</th>
            <th className="border border-gray-300 px-4 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {(isExpanded ? courses : courses.slice(0, 6)).map((course, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 w-32">{course.id}</td>
              <td className="border border-gray-300 px-4 py-2">{course.semester}</td>
              <td className="border border-gray-300 px-4 py-2">{course.name}</td>
              <td className="border border-gray-300 px-4 py-2">{course.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={toggleExpand}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Education;
