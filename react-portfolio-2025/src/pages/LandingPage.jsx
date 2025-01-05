import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [cursor, setCursor] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [triangles, setTriangles] = useState([]);
  const [showTapText, setShowTapText] = useState(false);

  useEffect(() => {
    // show "Tap to Continue" text after 5 seconds
    const timer = setTimeout(() => {
      setShowTapText(true);
    }, 5000);

    return () => clearTimeout(timer); // cleanup timer on unmount
  }, []);

  useEffect(() => {
    // update cursor position on mousemove
    const updateCursor = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    // add event listener for mouse movement
    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  useEffect(() => {
    // generate triangles at a very fast interval
    const interval = setInterval(() => {
      // random angle and distance to make them "bubble out"
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 20 + 5;
      const x = cursor.x + distance * Math.cos(angle);
      const y = cursor.y + distance * Math.sin(angle);

      const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      const size = Math.random() * 5 + 5;

      setTriangles((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x,
          y,
          color: randomColor,
          size,
        },
      ]);

      // remove older triangles after a short duration
      setTimeout(() => {
        setTriangles((prev) => prev.slice(1));
      }, 300); // triangle disappearance speed
    }, 10); // triangle generation speed

    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <div
      className="relative h-screen w-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] overflow-hidden flex flex-col items-center justify-center"
    >
      {triangles.map((triangle) => (
        <div
          key={triangle.id}
          className="absolute transition-transform duration-300 ease-out"
          style={{
            left: triangle.x,
            top: triangle.y,
            width: 0,
            height: 0,
            borderLeft: `${triangle.size}px solid transparent`,
            borderRight: `${triangle.size}px solid transparent`,
            borderBottom: `${triangle.size * 1.6}px solid transparent`,
            borderBottomColor: triangle.color,
            transform: "translate(-50%, -50%) scale(1.2)",
            opacity: 0.8,
          }}
        />
      ))}
      <p className="text-5xl font-semibold text-black animate-fade-in mb-4">
        Hello. I'm Jason
      </p>
      {showTapText && ( // conditionally render "Tap to Continue" after 5 seconds
        <p className="text-xl text-gray-600 animate-fade-in-out">
          Tap to Continue
        </p>
      )}
    </div>
  );
};

export default LandingPage;
