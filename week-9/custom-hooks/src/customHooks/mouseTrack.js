import { useState, useEffect } from "react";

export const useMouseTrack = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function trackMouse(event) {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }
  useEffect(() => {
    window.addEventListener("mousemove", trackMouse);
    return () => window.removeEventListener("mousemove", trackMouse);
  }, []);

  return { mousePosition };
};
