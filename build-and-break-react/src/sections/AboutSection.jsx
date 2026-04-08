import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

/** Reusable animation config for child items */
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.12,
    },
  }),
};

const steps = [
  {
    number: "01",
    title: "Ideation",
    description: "Analyze the problem space and brainstorm innovative solutions with your team.",
  },
  {
    number: "02",
    title: "Development",
    description: "Build a working prototype or structured solution within the challenge window.",
  },
  {
    number: "03",
    title: "Refinement",
    description: "Incorporate expert feedback to sharpen and elevate your final solution.",
  },
];

export default function AboutSection() {
  const { scrollY } = useScroll();

  // Map absolute scroll position (in pixels) for the first section after the hero
  const sectionY = useTransform(scrollY, [0, 400], [150, 0]);
  const sectionOpacity = useTransform(scrollY, [0, 300], [0, 1]);
  const sectionScale = useTransform(scrollY, [0, 400], [0.95, 1]);

  return (
    <motion.section
      className="site-section relative z-30"
      style={{
        marginTop: "-12rem", // create overlap over hero
        paddingTop: "12rem", // offset margin difference
        y: sectionY,
        opacity: sectionOpacity,
        scale: sectionScale,
      }}
    >
      <div className="site-container">

        {/* Title block */}
        <motion.div 
          className="site-title-block" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants} 
          custom={0}
        >
          <span className="site-eyebrow">About the Event</span>
          <h2 className="site-h2">What is Build &amp; Break?</h2>
          <p className="site-subtitle">
            An innovation-driven challenge that pushes teams to think critically and
            creatively under pressure — from ideation to execution to refinement.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="site-grid-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1}>
               <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.13)">
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#00b4ff", opacity: 0.4, marginBottom: "20px", fontFamily: "monospace" }}>
                  {step.number}
                </div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
