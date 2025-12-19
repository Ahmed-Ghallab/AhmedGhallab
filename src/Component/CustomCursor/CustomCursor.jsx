import { useEffect, useState, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const [visible, setVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  
  // Use refs for direct DOM manipulation for performance
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkDevice = () => {
      return window.innerWidth > 1024 && !("ontouchstart" in window);
    };

    setIsDesktop(checkDevice());
    
    const handleResize = () => setIsDesktop(checkDevice());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animateRing = () => {
      // Lerp for the ring
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      
      requestRef.current = requestAnimationFrame(animateRing);
    };
    
    requestRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isDesktop]);

  if (!isDesktop || !visible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
}

export default CustomCursor;
