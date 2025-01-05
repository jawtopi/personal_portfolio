import React, { useState, useEffect, useRef } from "react";
import darkModeIcon from "./icons/dark-mode.svg"; // import the svg icon

const LandingPage = () => {
  const [cursor, setCursor] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [triangles, setTriangles] = useState([]);
  const [showTapToContinue, setShowTapToContinue] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [buttonColor, setButtonColor] = useState("hsl(0, 70%, 60%)"); // initial button color
  const canvasRef = useRef(null);

  useEffect(() => {
    // show "tap to continue" after 3 seconds
    const timeout = setTimeout(() => {
      setShowTapToContinue(true);
    }, 3000);

    return () => clearTimeout(timeout);
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
    // generate triangles at intervals
    const interval = setInterval(() => {
      // skip triangle generation if the cursor is near the dark mode icon or the button
      if (isNearElement("#dark-mode-icon", cursor) || isNearElement("#continue-button", cursor)) {
        return;
      }

      // random angle and distance to make them "bubble out"
      const angle = Math.random() * 2 * Math.PI;
      const distanceFromCursor = Math.random() * 20 + 5; // random distance between 5 and 25px
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

      // remove older triangles after a short duration
      setTimeout(() => {
        setTriangles((prev) => prev.slice(1));
      }, 300); // triangle disappearance speed
    }, 10); // triangle generation speed

    return () => clearInterval(interval);
  }, [cursor]);

  useEffect(() => {
    // change the button color smoothly every 2 seconds
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
    // prevent drawing if clicking near the button or dark mode icon
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
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleMouseOut = () => {
    setIsDrawing(false);
  };

  return (
    <div
      className="relative h-screen w-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] overflow-hidden flex flex-col items-center justify-center"
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

      {/* canvas for drawing */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-10"
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
      />

      {/* dark mode icon */}
      <div
        id="dark-mode-icon"
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-black transition-colors duration-300 z-30 pointer-events-auto"
      >
        <img
          src={darkModeIcon}
          alt="dark mode toggle"
          className="w-8 h-8"
        />
      </div>

      {/* text */}
      <div className="flex flex-col items-center z-30 pointer-events-auto">
        <p className="font-semibold text-black animate-fade-in mb-8 text-4xl sm:text-6xl lg:text-7xl">
          Hello. I'm Jason
        </p>
        <button
          id="continue-button"
          className="px-6 py-3 mt-4 text-white rounded-lg shadow-lg transition-all duration-2000 text-base sm:text-lg lg:text-xl"
          style={{ backgroundColor: buttonColor }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
