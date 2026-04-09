import React from 'react';

/**
 * Creates a smooth, gradual blur effect using a continuous backdrop-filter mask.
 * This completely eliminates the blocky artifacts and horizontal lines caused by stacking discrete divs.
 */
export default function GradualBlur({
  target = "parent",
  position = "bottom",
  height = "8rem",
  strength = 12, // Increased default because continuous mask smoothly ramps it up
  opacity = 1,
  style = {},
}) {
  const getPositionStyles = () => {
    if (position === "bottom") {
      return { bottom: 0, left: 0, right: 0, height };
    }
    if (position === "top") {
      return { top: 0, left: 0, right: 0, height };
    }
    return { inset: 0 };
  };

  const gradientDirection = position === "bottom" ? "bottom" : "top";

  return (
    <div 
      className="absolute pointer-events-none" 
      style={{
        ...getPositionStyles(),
        opacity,
        backdropFilter: `blur(${strength}px)`,
        WebkitBackdropFilter: `blur(${strength}px)`,
        maskImage: `linear-gradient(to ${gradientDirection}, transparent 0%, black 100%)`,
        WebkitMaskImage: `linear-gradient(to ${gradientDirection}, transparent 0%, black 100%)`,
        ...style
      }}
    />
  );
}
