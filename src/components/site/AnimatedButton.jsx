import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function AnimatedButton({
  children,
  to,
  href,
  onClick,
  variant = "primary", // 'primary', 'secondary', 'ghost'
  className = "",
  icon: Icon,
  target,
  rel,
  ...props
}) {
  const buttonRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  // Magnetic Hover Physics
  const springConfig = { stiffness: 180, damping: 14 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.22;
    const distanceY = (e.clientY - centerY) * 0.22;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const left = e.clientX - rect.left;
      const top = e.clientY - rect.top;
      const id = Date.now();

      setRipples((prev) => [...prev, { id, left, top }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    }
    if (onClick) onClick(e);
  };

  let baseStyles =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-bold text-sm transition-all duration-300 group cursor-pointer select-none";
  let variantStyles = "";

  if (variant === "primary") {
    variantStyles =
      "bg-gradient-to-r from-chai-orange via-[#ff9800] to-chai-gold text-[#1a0e00] px-6 py-3.5 shadow-[0_10px_30px_-6px_rgba(244,123,0,0.6)] hover:shadow-[0_18px_45px_-4px_rgba(244,123,0,0.9)] hover:-translate-y-0.5 border border-chai-gold/40";
  } else if (variant === "secondary") {
    variantStyles =
      "border border-chai-orange/40 bg-chai-black/60 backdrop-blur-md px-6 py-3.5 text-chai-cream hover:bg-chai-orange/15 hover:border-chai-orange hover:shadow-[0_10px_30px_-8px_rgba(244,123,0,0.3)] hover:-translate-y-0.5";
  } else if (variant === "ghost") {
    variantStyles =
      "px-4 py-3.5 text-chai-lime hover:text-chai-gold hover:bg-chai-orange/10";
  }

  const innerContent = (
    <>
      {/* Ripple Animation Overlay */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ping"
          style={{
            left: ripple.left - 20,
            top: ripple.top - 20,
            width: 40,
            height: 40,
          }}
        />
      ))}

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && (
          <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        )}
      </span>
    </>
  );

  const motionProps = {
    ref: buttonRef,
    style: { x, y },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    whileTap: { scale: 0.96 },
    className: `${baseStyles} ${variantStyles} ${className}`,
  };

  // For internal TanStack Router links, render Link wrapping a motion button is complex.
  // Instead use motion.div + Link approach:
  if (to) {
    return (
      <Link to={to}>
        <motion.span
          ref={buttonRef}
          style={{ x, y, display: "inline-flex" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          whileTap={{ scale: 0.96 }}
          className={`${baseStyles} ${variantStyles} ${className}`}
        >
          {innerContent}
        </motion.span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        <motion.span
          ref={buttonRef}
          style={{ x, y, display: "inline-flex" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          whileTap={{ scale: 0.96 }}
          className={`${baseStyles} ${variantStyles} ${className}`}
        >
          {innerContent}
        </motion.span>
      </a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {innerContent}
    </motion.button>
  );
}
