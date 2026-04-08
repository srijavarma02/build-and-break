import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const reasons = [
  { number: "01", title: "Innovation Experience",    description: "Go through a complete innovation cycle — from raw idea to refined, presentable solution." },
  { number: "02", title: "Real-World Exposure",      description: "Work on problems modeled after actual industry challenges, not classroom theory." },
  { number: "03", title: "Skill Development",        description: "Sharpen technical, analytical, and communication skills in a high-pressure environment." },
  { number: "04", title: "Presentation Opportunity", description: "Present your ideas and defend them in front of a panel of industry experts." },
];

export default function WhyParticipate() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">The Value</span>
          <h2 className="site-h2">Why Participate?</h2>
          <p className="site-subtitle">Four compelling reasons to join Build &amp; Break 2.0.</p>
        </motion.div>

        <div className="site-grid-2">
          {reasons.map((r, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.13)">
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: 700, color: "#00b4ff", opacity: 0.35, fontFamily: "monospace", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>{r.number}</span>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{r.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7 }}>{r.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
