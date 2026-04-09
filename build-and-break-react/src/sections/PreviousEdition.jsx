import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const stats = [
  { number: "200+", label: "Participants" },
  { number: "50+",  label: "Teams" },
  { number: "95%",  label: "Satisfaction Rate" },
  { number: "15+",  label: "Colleges" },
];

export default function PreviousEdition() {
  return (
    <motion.section id="previous-edition" className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">Build &amp; Break 1.0</span>
          <h2 className="site-h2">Previous Edition Highlights</h2>
          <p className="site-subtitle">Build &amp; Break 1.0 set the bar high. 2.0 raises it further.</p>
        </motion.div>

        <div className="site-grid-4">
          {stats.map((s, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.15)" style={{ textAlign: "center" }}>
                <div
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "8px", letterSpacing: "-0.03em", transition: "color 0.3s ease" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#00b4ff"}
                  onMouseLeave={e => e.currentTarget.style.color = "#fff"}
                >{s.number}</div>
                <div style={{ fontSize: "0.78rem", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>{s.label}</div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
