// src/components/aurora-background.jsx
import React from "react";
import { motion } from "framer-motion";

const AuroraBackground = ({
  className = "",
  children,
  starCount = 400,
  ariaLabel = "Animated aurora background",
}) => {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative w-full bg-[#060609] text-slate-50 overflow-hidden ${className}`}
    >
      {/* Background layer spanning entire height of the wrapper */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Soft, scattered aurora blobs repeated across the vertical space */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Top segment blobs */}
          <motion.div
            className="absolute top-[5%] left-[0%] w-[60vw] h-[800px] bg-[#00e5ff] rounded-full filter blur-[150px] opacity-20"
            animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[15%] right-[0%] w-[50vw] h-[800px] bg-[#8b00ff] rounded-full filter blur-[150px] opacity-20"
            animate={{ x: [50, -50, 50], y: [30, -30, 30] }}
            transition={{ duration: 35, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          
          {/* Middle segment blobs */}
          <motion.div
            className="absolute top-[45%] left-[20%] w-[50vw] h-[800px] bg-[#00e5ff] rounded-full filter blur-[150px] opacity-15"
            animate={{ x: [-30, 30, -30], y: [20, -20, 20] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[60%] right-[10%] w-[45vw] h-[800px] bg-[#8b00ff] rounded-full filter blur-[150px] opacity-15"
            animate={{ x: [30, -30, 30], y: [-20, 20, -20] }}
            transition={{ duration: 28, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />

          {/* Bottom segment blobs */}
          <motion.div
            className="absolute top-[85%] left-[10%] w-[60vw] h-[800px] bg-[#00e5ff] rounded-full filter blur-[150px] opacity-15"
            animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
            transition={{ duration: 32, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        </motion.div>

        {/* Dense, small twinkling stars scattered physically across the ENTIRE vertical space */}
        {Array.from({ length: starCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full mix-blend-screen"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: Math.random() * 1.5 + 0.5 + "px",
              height: Math.random() * 1.5 + 0.5 + "px",
              boxShadow: "0 0 4px 1px rgba(255,255,255,0.4)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, Math.random() * 0.7 + 0.3, 0] }}
            transition={{
              duration: Math.random() * 3 + 1.5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col">{children}</div>
    </div>
  );
};

export default AuroraBackground;
