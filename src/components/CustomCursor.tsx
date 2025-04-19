import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Check if screen is small (mobile)
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setShowCursor(false);
      return;
    }

    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        const { clientX, clientY } = e;
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!showCursor) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-5 h-5 bg-yellowText rounded-full mix-blend-difference transition-transform duration-150 ease-out"
      style={{ transform: "translate3d(0, 0, 0)" }}
    />
  );
};

export default CustomCursor;
