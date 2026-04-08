import { useEffect, useRef, useState } from "react";
import { HeroSection } from "@/components/blocks/galaxy-interactive-hero-section";

/**
 * Hero wrapper — adds:
 *   1. Scroll-based dark overlay (0 → 0.5 opacity)
 *   2. Soft gradient fade at the bottom (blend into next section)
 *
 * The inner HeroSection / Spline component is never touched.
 */
export default function Hero() {
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const THRESHOLD = 500; // px of scroll to reach max overlay

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const opacity = Math.min(scrollY / THRESHOLD, 0.6);
          setOverlayOpacity(opacity);
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", width: "100%" }}>

      {/* ── Spline / galaxy background (untouched) ── */}
      <HeroSection />

      {/* ── 1. Scroll-driven dark overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          opacity: overlayOpacity,
          pointerEvents: "none",
          transition: "opacity 0.05s linear",
          zIndex: 15,
        }}
      />

      {/* ── 2. Cinematic gradient at the bottom ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "220px",
          background: "linear-gradient(to bottom, transparent 0%, #060609 100%)",
          pointerEvents: "none",
          zIndex: 16,
        }}
      />
    </section>
  );
}
