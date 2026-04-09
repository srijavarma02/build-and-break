import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AuroraBackground = ({
  className = "",
  children,
}) => {
  const mouseBlobRef = useRef(null);

  useEffect(() => {
    // Elegant, delayed tracking of the mouse pointer
    const handleMouseMove = (e) => {
      if (!mouseBlobRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Use Web Animations API for smooth performant interpolation
      mouseBlobRef.current.animate({
        left: `${x}px`,
        top: `${y}px`
      }, { duration: 4000, fill: "forwards" }); // Higher duration = slower, creamier movement
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`relative w-full text-slate-50 overflow-visible ${className}`}
    >
      {/* Fixed Interactive Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Interactive glow gently following mouse */}
        <div 
          ref={mouseBlobRef}
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #00e5ff 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%"
          }}
        />

        {/* Randomly placed floating aesthetic light orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.04]"
          style={{ background: "#5227FF", top: "10%", left: "15%" }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -150, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.03]"
          style={{ background: "#00e5ff", top: "60%", right: "10%" }}
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 140, -90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.02]"
          style={{ background: "#8b00ff", bottom: "-15%", left: "35%" }}
          animate={{
            x: [0, 100, -120, 0],
            y: [0, 80, -100, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Subtle ultra-fine noise texture for premium matte feel */}
        <div 
          className="absolute inset-0 opacity-[0.035] mix-blend-screen" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} 
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col">{children}</div>
    </div>
  );
};

export default AuroraBackground;
