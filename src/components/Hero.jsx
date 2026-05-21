import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

/* ========================================
   HERO — "The Thesis" main landing section
   ======================================== */

const departments = [
  'Food Science & Applied Nutrition',
  'Biotechnology',
  'Industrial Chemistry',
  'Geology',
]

/* Floating particle component for background */
function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `rgba(212, 163, 115, ${0.1 + Math.random() * 0.2})`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* Breathing abstract shape */
function BreathingShape() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer ring */}
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[rgba(212,163,115,0.06)]"
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 180, 360],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-[rgba(139,94,60,0.08)]"
        animate={{
          scale: [1.05, 1, 1.05],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      {/* Inner glow */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,163,115,0.06) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden pt-32 pb-24"
    >
      {/* Background effects */}
      <FloatingParticles />
      <BreathingShape />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, #0A0A09 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-8">
        {/* Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="glow-pill">
            <Sparkles size={14} strokeWidth={1.5} />
            <span>Group 6 • Integrated Science Team Project</span>
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <img 
            src="/logo/logo.jpg" 
            alt="Group 6 Logo" 
            className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-[2rem] border border-[rgba(212,163,115,0.2)] shadow-[0_0_40px_rgba(212,163,115,0.15)]"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-gradient leading-tight mb-8"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 4.5vw, 3.8rem)',
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Development and Nutritional Evaluation of a Mineral‑Optimized Probiotic Complementary Food
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[#9E968F] text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          An interdisciplinary research initiative harnessing Ethiopian heritage grains,
          lactic acid bacteria fermentation, and geological mineral fortification.
        </motion.p>

        {/* Department Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {departments.map((dept, i) => (
            <motion.span
              key={dept}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.0 + i * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wide
                         bg-[rgba(22,20,18,0.8)] border border-[rgba(212,163,115,0.15)]
                         text-[#D4A373] backdrop-blur-sm"
            >
              {dept}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-[rgba(212,163,115,0.3)] mx-auto flex justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-[#D4A373]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
