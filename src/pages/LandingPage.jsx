import React, { useState, useEffect, useRef } from "react";
import darkModeIcon from "./icons/dark-mode.svg";

const LandingPage = () => {
  const [cursor, setCursor] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [triangles, setTriangles] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [buttonColor, setButtonColor] = useState("hsl(0, 70%, 60%)");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const updateCursor = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isNearElement("#dark-mode-icon", cursor) || isNearElement("#continue-button", cursor)) {
        return;
      }
      const angle = Math.random() * 2 * Math.PI;
      const distanceFromCursor = Math.random() * 20 + 5;
      const x = cursor.x + distanceFromCursor * Math.cos(angle);
      const y = cursor.y + distanceFromCursor * Math.sin(angle);
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

      setTimeout(() => {
        setTriangles((prev) => prev.slice(1));
      }, 300);
    }, 10);

    return () => clearInterval(interval);
  }, [cursor]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      setButtonColor(randomColor);
    }, 2000);

    return () => clearInterval(colorInterval);
  }, []);

  const isNearElement = (selector, cursor) => {
    const element = document.querySelector(selector);
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      cursor.x >= rect.left &&
      cursor.x <= rect.right &&
      cursor.y >= rect.top &&
      cursor.y <= rect.bottom
    );
  };

  const handleMouseDown = (event) => {
    if (isNearElement("#dark-mode-icon", { x: event.clientX, y: event.clientY }) || isNearElement("#continue-button", { x: event.clientX, y: event.clientY })) {
      return;
    }
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineTo(event.clientX, event.clientY);
    context.strokeStyle = isDarkMode ? "white" : "black";
    context.lineWidth = 2;
    context.stroke();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleContinueClick = () => {
    setAnimationTriggered(true);
    setTimeout(() => {
      window.location.href = "/mainpage";
    }, 1000);
  };

  return (
    <div
      className={`relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]"
      } ${animationTriggered ? "animate-zoom-fade-out" : ""}`}
    >
      {/* background triangles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
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

      {/* drawing canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-10 pointer-events-auto"
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />

      {/* toggle dark mode */}
      <div
        id="dark-mode-icon"
        className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-300 z-30 cursor-pointer ${
          isDarkMode ? "bg-gray-700" : ""
        }`}
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        <img src={darkModeIcon} alt="dark mode toggle" className="w-8 h-8 hover:opacity-50 transition-opacity" />
      </div>

      <div className="flex flex-col items-center z-20 pointer-events-none">
        <p className="font-semibold animate-fade-in mb-8 text-5xl sm:text-6xl lg:text-7xl">hello. i'm jason</p>
        <button
          id="continue-button"
          onClick={handleContinueClick}
          className="px-6 py-3 mt-4 rounded-lg shadow-lg transition-all animate-fade-in text-base sm:text-lg lg:text-xl pointer-events-auto"
          style={{
            backgroundColor: buttonColor,
            color: isDarkMode ? "black" : "white",
          }}
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
