import { motion } from 'framer-motion'
import { Combine, FlaskConical, Sun, TestTube } from 'lucide-react'

const steps = [
  {
    icon: Combine,
    step: '01',
    title: 'Formulation',
    subtitle: 'Raw Material Blending',
    description: 'Teff-Rice blend (75:25), Chickpea, and Barley were combined in precise ratios. The optimal Formulation F2 consists of 100g Teff-Rice base, 60g Chickpea, and 40g Barley — engineered for maximum nutritional synergy and sensory acceptance.',
    tags: ['Teff-Rice 75:25', 'Chickpea 60g', 'Barley 40g', 'Formulation F2'],
  },
  {
    icon: FlaskConical,
    step: '02',
    title: 'Fermentation',
    subtitle: '24h & 48h LAB Inoculation',
    description: 'Lactic Acid Bacteria were inoculated into the blended substrate and fermented under controlled conditions. Observable physical changes confirmed active fermentation: foam formation, phase separation, development of a sour aroma, and a pH drop from 6.4 to 3.9 over 48 hours.',
    tags: ['pH 6.4 → 3.9', 'Foam Formation', 'Sour Aroma', '48h Duration'],
  },
  {
    icon: Sun,
    step: '03',
    title: 'Drying & Milling',
    subtitle: 'Thermal Processing',
    description: 'The fermented slurry was dried at 55°C for 11–12 hours to achieve optimal moisture content while preserving probiotic viability. The result: a smooth, light-yellow powder with a mild, pleasant porridge-like aroma ready for milling into fine flour.',
    tags: ['55°C Drying', '11-12 Hours', 'Light-Yellow Powder', 'Fine Milling'],
  },
  {
    icon: TestTube,
    step: '04',
    title: 'Mineral Fortification',
    subtitle: 'Post-Fermentation Integration',
    description: 'After fermentation (to avoid mineral-microbe interference), geological-grade mineral supplements were precisely integrated: Ferrous sulphate providing 8-12mg Iron, Zinc sulphate providing 5-8mg Zinc, and Calcium carbonate providing 200-400mg Calcium per serving.',
    tags: ['Iron 8-12mg', 'Zinc 5-8mg', 'Calcium 200-400mg', 'Post-Fermentation'],
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function TimelineNode({ step, index }) {
  const isLeft = index % 2 === 0
  const Icon = step.icon

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`relative flex items-start gap-8 md:gap-12 lg:gap-16 mb-24 lg:mb-32 last:mb-0
        ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
        flex-col md:flex-row
      `}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left md:max-w-[calc(50%-60px)]`}>
        <motion.div
          whileHover={{ y: -4, borderColor: 'rgba(212,163,115,0.35)' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card p-8 sm:p-10"
        >
          <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="text-[#D4A373] text-xs font-semibold tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
              STEP {step.step}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#EAE0D5] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
            {step.title}
          </h3>
          <p className="text-sm text-[#D4A373] mb-4 font-medium">{step.subtitle}</p>
          <p className="text-[#9E968F] leading-relaxed text-sm">{step.description}</p>
          <div className={`mt-5 flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            {step.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-[0.65rem] font-medium bg-[rgba(212,163,115,0.06)] border border-[rgba(212,163,115,0.1)] text-[#9E968F]" style={{ fontFamily: 'var(--font-mono)' }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center Dot — Desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8">
        <div className="timeline-dot">
          <Icon size={18} strokeWidth={1.5} className="text-[#D4A373]" />
        </div>
      </div>

      {/* Mobile Dot */}
      <div className="flex md:hidden absolute left-[20px] top-0">
        <div className="timeline-dot" style={{ width: 32, height: 32 }}>
          <Icon size={14} strokeWidth={1.5} className="text-[#D4A373]" />
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default function Methodology() {
  return (
    <section id="methodology" className="section-spacing relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#9E968F] block mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
            Scientific Process
          </span>
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            The Methodology
          </h2>
        </motion.div>

        <div className="relative pl-12 md:pl-0">
          <div className="timeline-line" />
          {steps.map((step, i) => (
            <TimelineNode key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
