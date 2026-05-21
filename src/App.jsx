import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Methodology from './components/Methodology'
import Results from './components/Results'
import Team from './components/Team'
import Footer from './components/Footer'

/* ========================================
   APP — Root Layout with Scroll Progress
   ======================================== */

export default function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={containerRef} className="relative h-screen overflow-y-auto overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[10000] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #8B5E3C, #D4A373, #EAE0D5)',
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Methodology />
        <Results />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
