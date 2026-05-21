import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FlaskConical } from 'lucide-react'

/* ========================================
   NAVBAR — Minimalist sticky navigation
   ======================================== */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const container = document.querySelector('.h-screen.overflow-y-auto')
    if (!container) return

    const handleScroll = () => {
      setScrolled(container.scrollTop > 50)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,10,9,0.85)] backdrop-blur-xl border-b border-[rgba(212,163,115,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left — University Mark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[rgba(212,163,115,0.1)] border border-[rgba(212,163,115,0.2)] flex items-center justify-center">
            <FlaskConical size={16} strokeWidth={1.5} className="text-[#D4A373]" />
          </div>
          <div>
            <span className="text-sm font-semibold tracking-wider text-[#EAE0D5]">
              AASTU
            </span>
            <span className="text-[#9E968F] text-xs ml-2 hidden sm:inline">
              Research Portfolio
            </span>
          </div>
        </div>

        {/* Right — Course Code */}
        <div className="flex items-center gap-4">
          <span
            className="text-xs tracking-widest text-[#9E968F]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            ISTP3116
          </span>
          <div className="h-4 w-px bg-[rgba(212,163,115,0.15)]" />
          <span className="text-xs text-[#9E968F]">May 2026</span>
        </div>
      </nav>
    </motion.header>
  )
}
