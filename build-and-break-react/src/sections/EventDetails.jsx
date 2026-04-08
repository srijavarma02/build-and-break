import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const details = [
  { label: "Round 1",  value: "20 April",  sub: "Build Phase" },
  { label: "Round 2",  value: "22 April",  sub: "Enhancement Phase" },
  { label: "Duration", value: "2 Days",    sub: "Full Immersion" },
  { label: "Venue",    value: "VNR VJIET", sub: "Hyderabad" },
];

export default function EventDetails() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">Mark Your Calendar</span>
          <h2 className="site-h2">Event Details</h2>
          <p className="site-subtitle">Two intense days of innovation, debate, and refinement.</p>
        </motion.div>

        <div className="site-grid-4">
          {details.map((d, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.15)" style={{ textAlign: "center" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00b4ff", fontWeight: 600, marginBottom: "14px" }}>{d.label}</p>
                <p style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: "6px", letterSpacing: "-0.02em" }}>{d.value}</p>
                <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>{d.sub}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
