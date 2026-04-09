import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <motion.section id="registration" className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">
        <motion.div variants={itemVariants} custom={0}>
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.10)" style={{ textAlign: "center" }}>
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,180,255,0.06), transparent)",
              zIndex: 0
            }} />
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
              <span className="site-eyebrow">Don't Miss Out</span>
              <h2 style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#fff",
                lineHeight: 1.15, letterSpacing: "-0.03em", maxWidth: "600px",
              }}>
                Ready to Build &amp; Break?
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#6b7280", maxWidth: "480px", lineHeight: 1.7 }}>
                Join 200+ students in the most intense innovation challenge of the year.
              </p>
              <p style={{ fontSize: "0.85rem", color: "#4b5563", fontWeight: 500 }}>
                Registration closes April 14, 2025
              </p>
              <a href="#" className="site-btn-primary" style={{ padding: "14px 48px", fontSize: "1rem", fontWeight: 700, marginTop: "8px" }}>
                Register Now
              </a>
              <p style={{ fontSize: "0.78rem", color: "#374151", letterSpacing: "0.05em" }}>
                Free to participate · Open to all students · VNR VJIET
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
