import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

export default function CTASection() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">
        <motion.div variants={itemVariants} custom={0}>
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.10)" style={{ textAlign: "center" }}>
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,180,255,0.05), transparent)",
              zIndex: 0
            }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <span className="site-eyebrow" style={{ display: "block", marginBottom: "20px" }}>Join the Challenge</span>
              <h2 className="site-h2" style={{ maxWidth: "560px", margin: "0 auto 32px" }}>
                Ready to take on the challenge?
              </h2>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="#" className="site-btn-primary">View Problem Statements</a>
                <a href="#" className="site-btn-secondary">Register Now</a>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
