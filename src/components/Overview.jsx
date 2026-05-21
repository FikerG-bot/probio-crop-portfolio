import { motion } from 'framer-motion'
import { AlertTriangle, Sprout } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Overview() {
  return (
    <section id="overview" className="section-spacing relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[rgba(212,163,115,0.3)] to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#9E968F] block mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
            Project Overview
          </span>
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            From Crisis to Innovation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* The Challenge */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp} transition={{ duration: 0.8, delay: 0.1 }} className="glass-card p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[rgba(212,163,115,0.1)] border border-[rgba(212,163,115,0.15)] flex items-center justify-center">
                <AlertTriangle size={20} strokeWidth={1.5} className="text-[#D4A373]" />
              </div>
              <span className="text-xs tracking-widest uppercase text-[#9E968F]">The Challenge</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#EAE0D5] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Combating Micronutrient Malnutrition
            </h3>
            <p className="text-[#9E968F] leading-relaxed mb-4">
              In many developing regions, infants and young children rely heavily on traditional cereal-based complementary foods. These foods, while energy-dense, critically lack bioavailable iron, zinc, and calcium — essential minerals for cognitive development and immune function.
            </p>
            <p className="text-[#9E968F] leading-relaxed">
              A primary culprit is the presence of <span className="text-[#D4A373] font-medium">anti-nutritional factors</span>, particularly phytates (phytic acid), which bind to minerals and dramatically reduce their absorption in the gut.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Iron Deficiency', 'Zinc Deficiency', 'Calcium Deficiency', 'Phytate Binding'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-[0.7rem] font-medium tracking-wide bg-[rgba(212,163,115,0.06)] border border-[rgba(212,163,115,0.1)] text-[#9E968F]">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp} transition={{ duration: 0.8, delay: 0.3 }} className="glass-card p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[rgba(139,94,60,0.15)] border border-[rgba(139,94,60,0.2)] flex items-center justify-center">
                <Sprout size={20} strokeWidth={1.5} className="text-[#8B5E3C]" />
              </div>
              <span className="text-xs tracking-widest uppercase text-[#9E968F]">The Ethiopian Solution</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#EAE0D5] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              From Local Grains to Probiotic Superfoods
            </h3>
            <p className="text-[#9E968F] leading-relaxed mb-4">
              This research leverages Ethiopia's rich agricultural heritage by utilizing locally sourced grains: <span className="text-[#D4A373] italic">Eragrostis tef</span> (Teff), <span className="text-[#D4A373] italic">Cicer arietinum</span> (Chickpea), and <span className="text-[#D4A373] italic">Hordeum vulgare</span> (Barley).
            </p>
            <p className="text-[#9E968F] leading-relaxed">
              Through controlled lactic acid bacteria fermentation, the team degrades phytates and enhances mineral solubility, while post-fermentation geological mineral fortification ensures optimal levels of iron, zinc, and calcium.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Teff (ጤፍ)', 'Chickpea (ሽምብራ)', 'Barley (ገብስ)', 'LAB Fermentation'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-[0.7rem] font-medium tracking-wide bg-[rgba(139,94,60,0.1)] border border-[rgba(139,94,60,0.15)] text-[#D4A373]">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp} transition={{ duration: 0.8, delay: 0.4 }} className="mt-12 max-w-4xl mx-auto">
          <div className="quote-block">
            "Integrating lactic acid bacteria fermentation with geological mineral fortification to enhance nutrient bioavailability."
          </div>
        </motion.div>
      </div>
    </section>
  )
}
