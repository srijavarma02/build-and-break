import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const highlights = [
  { icon: "⚡", title: "Innovation + Debate",    description: "Build solutions and defend them under rigorous expert questioning — just like the real world." },
  { icon: "🌐", title: "Real-World Problems",     description: "Work on industry-level challenges, not textbook exercises. Your solution must actually work." },
  { icon: "🔁", title: "Multi-Stage Evaluation",  description: "Two distinct rounds, each pushing you to improve based on structured feedback." },
  { icon: "🤝", title: "Team Collaboration",      description: "Diverse skills produce stronger outcomes. Bring your best team, any branch, any year." },
];

export default function EventHighlights() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">Why It Stands Out</span>
          <h2 className="site-h2">Event Highlights</h2>
          <p className="site-subtitle">Key features that make Build &amp; Break a unique innovation experience unlike any other.</p>
        </motion.div>

        <div className="site-grid-2">
          {highlights.map((h, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1} style={{ height: "100%" }}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.13)" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "16px" }}>{h.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>{h.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7, flex: 1 }}>{h.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
