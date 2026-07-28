import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const logoUrl = "/assets/logo.jpeg";

// Floating Golden Particle Component
function ParticleSystem({ isHovered }) {
  const particles = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const initialX = (Math.random() - 0.5) * 280;
        const initialY = Math.random() * 260;
        const duration = Math.random() * 4 + 4;
        const delay = Math.random() * 3;

        return (
          <motion.span
            key={i}
            className="absolute left-1/2 bottom-10 rounded-full bg-gradient-to-t from-chai-gold to-chai-orange shadow-[0_0_8px_#ffb13b]"
            style={{
              width: size,
              height: size,
              x: initialX,
            }}
            animate={{
              y: [-initialY, -initialY - 180],
              x: [initialX, initialX + (i % 2 === 0 ? 25 : -25)],
              opacity: [0, isHovered ? 0.95 : 0.7, 0],
              scale: [0.6, isHovered ? 1.4 : 1, 0.2],
            }}
            transition={{
              duration: isHovered ? duration * 0.7 : duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

// Rising Steam Wisps Component
function SteamAnimation({ isHovered }) {
  const wisps = [
    { left: "38%", delay: 0, scale: 1 },
    { left: "47%", delay: 0.7, scale: 1.2 },
    { left: "56%", delay: 1.4, scale: 0.9 },
    { left: "64%", delay: 2.1, scale: 1.1 },
  ];

  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-48 h-28 pointer-events-none z-20 overflow-visible">
      {wisps.map((wisp, index) => (
        <motion.div
          key={index}
          className="absolute top-8 w-2.5 rounded-full bg-gradient-to-t from-chai-cream/60 via-chai-gold/40 to-transparent blur-sm"
          style={{ left: wisp.left, height: "60px" }}
          animate={{
            y: [-10, -85],
            x: [0, index % 2 === 0 ? 18 : -18, index % 2 === 0 ? -10 : 10],
            opacity: [0, isHovered ? 0.85 : 0.6, 0],
            scaleX: [1 * wisp.scale, 1.8 * wisp.scale, 2.5 * wisp.scale],
            scaleY: [1, 1.4, 1.8],
          }}
          transition={{
            duration: isHovered ? 2.2 : 3.2,
            repeat: Infinity,
            delay: wisp.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// Rotating Translucent Energy Ring
function EnergyRing({ isHovered }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      {/* Outer Ring */}
      <motion.div
        className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-chai-orange/30 border-dashed"
        style={{
          boxShadow: isHovered
            ? "0 0 35px rgba(244, 123, 0, 0.4), inset 0 0 35px rgba(255, 177, 59, 0.3)"
            : "0 0 20px rgba(244, 123, 0, 0.2)",
        }}
        animate={{
          rotate: 360,
          scale: isHovered ? [1.02, 1.06, 1.02] : [1, 1.03, 1],
        }}
        transition={{
          rotate: {
            duration: isHovered ? 12 : 24,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Inner Glowing Ring */}
      <motion.div
        className="absolute w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] rounded-full border-2 border-chai-gold/25"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: isHovered ? 15 : 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Sparkle Twinkle Effects
function Sparkles({ isHovered }) {
  const sparkles = [
    { top: "15%", left: "18%", delay: 0 },
    { top: "25%", left: "80%", delay: 0.8 },
    { top: "75%", left: "15%", delay: 1.5 },
    { top: "80%", left: "75%", delay: 2.2 },
    { top: "50%", left: "88%", delay: 1.1 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {sparkles.map((sp, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: sp.top, left: sp.left }}
          animate={{
            scale: [0, isHovered ? 1.5 : 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sp.delay,
            ease: "easeInOut",
          }}
        >
          <svg className="w-4 h-4 text-chai-gold drop-shadow-[0_0_6px_#ffb13b]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function FloatingLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Mouse Parallax & 3D Cursor Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-md lg:max-w-none aspect-square flex items-center justify-center cursor-pointer select-none perspective-1000"
    >
      {/* Radial Light & Orange Ambient Glow behind logo */}
      <motion.div
        animate={{
          scale: isHovered ? [1.15, 1.25, 1.15] : [1, 1.1, 1],
          opacity: isHovered ? [0.65, 0.85, 0.65] : [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-4 sm:inset-10 rounded-full bg-gradient-to-br from-chai-orange via-chai-gold/50 to-transparent blur-3xl"
      />

      {/* Translucent Energy Rings */}
      <EnergyRing isHovered={isHovered} />

      {/* Floating Golden Particles */}
      <ParticleSystem isHovered={isHovered} />

      {/* Steam Wisps */}
      <SteamAnimation isHovered={isHovered} />

      {/* Sparkles */}
      <Sparkles isHovered={isHovered} />

      {/* Anti-Gravity Floating Centerpiece Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: isHovered ? [0, -12, 0] : [0, -16, 0],
          rotate: isHovered ? [-1, 1, -1] : [-2, 2, -2],
          scale: isHovered ? 1.06 : [1, 1.03, 1],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 flex items-center justify-center"
      >
        {/* Logo Outer Halo & Glass Frame */}
        <div
          className={`relative h-64 w-64 sm:h-80 sm:w-80 rounded-full p-2.5 transition-all duration-500 glass-card ${
            isHovered
              ? "ring-4 ring-chai-orange shadow-[0_0_60px_rgba(244,123,0,0.85),0_0_100px_rgba(255,177,59,0.5)]"
              : "ring-2 ring-chai-orange/50 shadow-[0_0_35px_rgba(244,123,0,0.5)]"
          }`}
        >
          {/* Internal Image Container */}
          <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-chai-black">
            <img
              src={logoUrl}
              alt="Chaiway Premium Outlet Logo"
              className={`h-full w-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />

            {/* Subtle Volumetric Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-chai-gold/10 to-chai-orange/20 pointer-events-none" />
          </div>

          {/* Golden Badge Border Highlight */}
          <div className="absolute inset-0 rounded-full border border-chai-gold/40 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
