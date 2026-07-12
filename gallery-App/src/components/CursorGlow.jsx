import { useEffect, useRef } from "react";

const CursorGlow = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const moveGlow = (x, y) => {
      section.style.setProperty("--x", `${x}px`);
      section.style.setProperty("--y", `${y}px`);
    };

    // Initial position (center)
    moveGlow(window.innerWidth / 2, window.innerHeight / 2);

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();

      moveGlow(
        e.clientX - rect.left,
        e.clientY - rect.top
      );
    };

    const resetGlow = () => {
      moveGlow(
        section.offsetWidth / 2,
        section.offsetHeight / 2
      );
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", resetGlow);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", resetGlow);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Cursor Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `
                radial-gradient(
      650px circle at var(--x) var(--y),
      rgba(255,255,255,0.18) 0%,
      rgba(168,85,247,0.60) 18%,
      rgba(147,51,234,0.45) 35%,
      rgba(59,130,246,0.28) 55%,
      rgba(236,72,153,0.22) 72%,
      transparent 90%
    )

          `,
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default CursorGlow;