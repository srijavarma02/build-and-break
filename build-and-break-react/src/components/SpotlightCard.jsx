import { useRef } from "react";

/**
 * SpotlightCard — react-bits style interactive card.
 * The radial spotlight follows the cursor while hovering.
 *
 * Props:
 *   children        — card content
 *   className       — extra CSS classes
 *   spotlightColor  — CSS color for the glow (default cyan)
 *   style           — extra inline styles for the wrapper
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 229, 255, 0.13)",
  style = {},
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--sx", `${x}px`);
    ref.current.style.setProperty("--sy", `${y}px`);
    ref.current.style.setProperty("--sc", spotlightColor);
  };

  const handleMouseEnter = () => {
    if (ref.current) ref.current.classList.add("sc-active");
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.classList.remove("sc-active");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`sc-card ${className}`}
      style={style}
    >
      {/* Spotlight overlay */}
      <div className="sc-spot" />
      {/* Content */}
      <div className="sc-content">{children}</div>
    </div>
  );
}
