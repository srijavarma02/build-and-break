import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { sectionVariants, itemVariants, viewportOnce } from "@/lib/animations";

const benefits = [
  { title: "Brand Visibility",       description: "Your brand gets strong visibility among students and faculty during the event." },
  { title: "Logo Placement",         description: "Featured on banners, certificates, website, and all official materials." },
  { title: "Social Media Promotion", description: "Promotion across ISOC's social platforms reaching a wide student audience." },
  { title: "Student Interaction",    description: "Direct engagement with talented students for networking and recruitment." },
];

export default function SponsorshipSection() {
  return (
    <motion.section className="site-section" variants={sectionVariants} {...viewportOnce}>
      <div className="site-container">

        <motion.div className="site-title-block" variants={itemVariants} custom={0}>
          <span className="site-eyebrow">Partner With Us</span>
          <h2 className="site-h2">Sponsorship</h2>
          <p className="site-subtitle">Partner with Build &amp; Break 2.0 and connect your brand with the next generation of innovators.</p>
        </motion.div>

        <div className="site-grid-2" style={{ marginBottom: "40px" }}>
          {benefits.map((b, i) => (
            <motion.div key={i} variants={itemVariants} custom={i + 1}>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.13)">
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>{b.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7 }}>{b.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} custom={5}>
          <a href="#" className="site-btn-primary">Become a Sponsor</a>
        </motion.div>

      </div>
    </motion.section>
  );
}
