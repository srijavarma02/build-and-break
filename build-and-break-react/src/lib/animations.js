/**
 * Shared Framer Motion variants for scroll-triggered section animations.
 * Import these in any section component to keep animations consistent.
 */

/** Full section: fades + lifts + very subtle scale */
export const sectionVariants = {
  hidden:  { opacity: 0, y: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

/** Individual children (title block, cards, etc.) */
export const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

/**
 * Convenience viewport config — fires once, 15% in view.
 * Use as:  <motion.section {...viewportOnce}>
 */
export const viewportOnce = {
  initial:    "hidden",
  whileInView:"visible",
  viewport:   { once: true, amount: 0.12 },
};
