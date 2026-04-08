import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const focusAreas = ["Innovation", "Technical Excellence", "Collaboration"];
const activities  = ["Workshops", "Competitions", "Seminars"];

export default function AboutISOC() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">The Organizers</span>
          <h2 className="site-h2">About ISOC Academic Hub</h2>
          <p className="site-subtitle">A student-driven initiative fostering innovation, technical excellence, and collaboration.</p>
        </motion.div>

        <div className="site-grid-2">
          <motion.div variants={itemVariants} custom={1}>
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)" style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: "0.97rem", color: "#d1d5db", lineHeight: 1.8 }}>
                ISOC Academic Hub is a student-led organization at VNR VJIET focused on innovation, collaboration, and technical growth. It brings together students to solve real-world problems and build impactful solutions.
              </p>
            </SpotlightCard>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <motion.div variants={itemVariants} custom={2}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)">
                <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00b4ff", fontWeight: 600, marginBottom: "16px" }}>Key Focus Areas</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {focusAreas.map((a, i) => (
                    <div key={i} className="site-step-pill">
                      <span className="site-dot" />
                      <span style={{ fontSize: "0.87rem", color: "#d1d5db", fontWeight: 500 }}>{a}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div variants={itemVariants} custom={3}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.12)">
                <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00b4ff", fontWeight: 600, marginBottom: "16px" }}>Activities</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {activities.map((a, i) => (
                    <div key={i} className="site-step-pill">
                      <span className="site-dot" />
                      <span style={{ fontSize: "0.87rem", color: "#d1d5db", fontWeight: 500 }}>{a}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
