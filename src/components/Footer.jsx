import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(212,163,115,0.08)]">
      <div className="max-w-6xl mx-auto px-12 sm:px-16 lg:px-20 py-20 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* University Name */}
          <h3
            className="text-lg md:text-xl font-bold text-[#EAE0D5] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Addis Ababa Science and Technology University
          </h3>

          {/* Bridging line */}
          <p className="text-sm text-[#9E968F] max-w-lg mx-auto mb-6 leading-relaxed">
            Bridging Food Science, Biotechnology, Geology, and Industrial Chemistry.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-[rgba(212,163,115,0.2)] mx-auto mb-6" />

          {/* Course & Date */}
          <div className="flex items-center justify-center gap-4 text-xs text-[#9E968F]">
            <span style={{ fontFamily: 'var(--font-mono)' }}>ISTP3116</span>
            <div className="w-1 h-1 rounded-full bg-[rgba(212,163,115,0.3)]" />
            <span>Group 6</span>
            <div className="w-1 h-1 rounded-full bg-[rgba(212,163,115,0.3)]" />
            <span>May 2026 G.C.</span>
          </div>

          {/* Copyright */}
          <p className="text-[0.65rem] text-[#9E968F] opacity-50 mt-8">
            © 2026 AASTU Integrated Science Team Project. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
