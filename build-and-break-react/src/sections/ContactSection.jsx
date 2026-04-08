import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const contacts = [
  { role: "Convenor",            name: "Dr. Sagar Yeruva",       contact: "sagar@vnrvjiet.in",    type: "email" },
  { role: "Faculty Coordinator", name: "Dr. Sayanthi Chatterjee", contact: "sayanthi@vnrvjiet.in", type: "email" },
  { role: "Student Coordinator", name: "Ramakrishna",             contact: "Contact: TBA",         type: "text"  },
  { role: "Student Coordinator", name: "Surya Teja",              contact: "Contact: TBA",         type: "text"  },
  { role: "Student Coordinator", name: "Nikhitha",                contact: "Contact: TBA",         type: "text"  },
];

export default function ContactSection() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">Get in Touch</span>
          <h2 className="site-h2">Contact Us</h2>
          <p className="site-subtitle">Have questions? Reach out to our team — we're happy to help.</p>
        </motion.div>

        <div className="site-grid-3">
          {contacts.map((c, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.13)">
                <div style={{ marginBottom: "14px" }}>
                  <span className="site-badge">{c.role}</span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{c.name}</h3>
                {c.type === "email"
                  ? <a href={`mailto:${c.contact}`}
                      style={{ fontSize: "0.85rem", color: "#6b7280", wordBreak: "break-all", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#00b4ff"}
                      onMouseLeave={e => e.currentTarget.style.color = "#6b7280"}
                    >{c.contact}</a>
                  : <p style={{ fontSize: "0.85rem", color: "#4b5563" }}>{c.contact}</p>
                }
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
