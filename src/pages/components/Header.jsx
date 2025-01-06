import React, { useState, useEffect } from "react";
import triangleIcon from "../icons/triangle.svg";
import darkModeIcon from "../icons/dark-mode.svg";

const Header = ({ onToggleDarkMode, isDarkMode }) => {
  const [triangles, setTriangles] = useState([]);
  const [cursor, setCursor] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isBubbling, setIsBubbling] = useState(false);

  const manualOffset = 320; // Corresponding to pl-80 in lg screens

  // Track cursor position and adjust for scrolling
  useEffect(() => {
    const handleMouseMove = (event) => {
      const adjustedX =
        window.innerWidth >= 1024
          ? event.clientX - manualOffset + window.scrollX
          : event.clientX + window.scrollX;

      const adjustedY = event.clientY + window.scrollY;

      setCursor({ x: adjustedX, y: adjustedY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Generate triangles that follow the cursor
  useEffect(() => {
    if (!isBubbling) return;

    const interval = setInterval(() => {
      const angle = Math.random() * 2 * Math.PI;
      const distanceFromCursor = Math.random() * 20 + 5;
      const x = cursor.x + distanceFromCursor * Math.cos(angle);
      const y = cursor.y + distanceFromCursor * Math.sin(angle);

      const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      const size = Math.random() * 5 + 5;

      setTriangles((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), x, y, color: randomColor, size },
      ]);

      setTimeout(() => {
        setTriangles((prev) => prev.slice(1));
      }, 300);
    }, 10);

    return () => clearInterval(interval);
  }, [cursor, isBubbling]);

  const handleTriangleClick = () => {
    setIsBubbling((prev) => !prev);
  };

  const handleDarkModeClick = () => {
    onToggleDarkMode();
  };

  return (
    <header
      className={`relative ${
        isDarkMode ? "bg-[#27262B]" : "bg-white"
      } border-b border-gray-200 p-5 mr-16 flex items-center justify-end transition-colors duration-300`}
    >
      {/* triangle animation */}
      <div className="absolute inset-0 pointer-events-none">
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
      </div>

      <div className="flex items-center space-x-6">
        <img
          src={triangleIcon}
          alt="Triangle Icon"
          className={`w-6 h-6 cursor-pointer hover:opacity-50 transition-opacity ${
            isDarkMode ? "filter invert" : ""
          }`}
          onClick={handleTriangleClick}
        />
        <img
          src={darkModeIcon}
          alt="Dark Mode Icon"
          className={`w-6 h-6 cursor-pointer hover:opacity-50 transition-opacity ${
            isDarkMode ? "filter invert" : ""
          }`}
          onClick={handleDarkModeClick}
        />
      </div>
    </header>
  );
};

export default Header;
