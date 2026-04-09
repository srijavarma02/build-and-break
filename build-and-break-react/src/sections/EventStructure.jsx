import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const rounds = [
  {
    roundNumber: "Round 1", date: "16 April", title: "Build Phase",
    description: "Teams receive problem statements and prepare initial solutions under time constraints.",
    steps: ["Problem Statement Assigned", "Brainstorming", "Initial Presentation"],
  },
  {
    roundNumber: "Round 2", date: "17 April", title: "Enhancement Phase",
    description: "Teams refine and improve their solutions based on jury feedback from Round 1.",
    steps: ["Jury Feedback", "Solution Refinement", "Final Pitch"],
  },
];

export default function EventStructure() {
  return (
    <motion.section id="structure" className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">How It Works</span>
          <h2 className="site-h2">Event Structure</h2>
          <p className="site-subtitle">Two rounds designed to challenge, refine, and elevate your solution.</p>
        </motion.div>

        <div className="site-grid-2">
          {rounds.map((round, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1} style={{ height: "100%" }}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.13)" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ color: "#00b4ff", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em" }}>{round.roundNumber}</span>
                  <span className="site-badge">{round.date}</span>
                </div>
                <h4 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", marginBottom: "10px", letterSpacing: "-0.01em" }}>{round.title}</h4>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "24px", flex: 1 }}>{round.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {round.steps.map((step, j) => (
                    <div key={j} className="site-step-pill">
                      <span className="site-dot" />
                      <span style={{ fontSize: "0.87rem", color: "#d1d5db", fontWeight: 500 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
