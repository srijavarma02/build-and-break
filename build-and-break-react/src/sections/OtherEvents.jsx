import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const events = [
  { name: "Tech Triad Challenge", description: "A three-round technical competition testing coding, problem-solving, and system design skills.", type: "Competition" },
  { name: "WebCraft",             description: "A web development challenge where teams design and build creative web experiences.",             type: "Hackathon"   },
  { name: "Outreach Programs",    description: "Community initiatives connecting students with schools and organizations through technology.",    type: "Community"   },
];

export default function OtherEvents() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">ISOC Events</span>
          <h2 className="site-h2">Other Events by ISOC</h2>
          <p className="site-subtitle">Explore more opportunities to learn, compete, and grow.</p>
        </motion.div>

        <div className="site-grid-3">
          {events.map((ev, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1} style={{ height: "100%" }}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.13)" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ marginBottom: "16px" }}>
                  <span className="site-badge">{ev.type}</span>
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>{ev.name}</h3>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7, flex: 1 }}>{ev.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.p 
          variants={itemVariants} 
          custom={events.length + 1}
          style={{ 
            textAlign: "center", 
            marginTop: "48px", 
            color: "#6b7280", 
            fontSize: "0.95rem", 
            fontStyle: "italic",
            letterSpacing: "0.025em" 
          }}
        >
          ...and many more exciting initiatives throughout the year.
        </motion.p>
      </div>
    </motion.section>
  );
}
