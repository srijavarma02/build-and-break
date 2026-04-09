import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const info = [
  { icon: "👥", title: "Team-Based",            description: "Build & Break 2.0 is a team event. Collaboration is at the heart — diverse skills make stronger solutions." },
  { icon: "🎓", title: "Open to All Students",   description: "Any student from any branch or year is welcome. No prerequisites — just curiosity and drive." },
  { icon: "⚡", title: "Team Size: 2–4 Members", description: "Form a team of 2 to 4 members. Mix skills — tech, design, and communication all matter." },
];

export default function ParticipationSection() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">Who Can Join</span>
          <h2 className="site-h2">Participation</h2>
          <p className="site-subtitle">Open to all students. Form your team and bring your best ideas.</p>
        </motion.div>

        <div className="site-grid-3">
          {info.map((item, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1} style={{ height: "100%" }}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.13)" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7, flex: 1 }}>{item.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
