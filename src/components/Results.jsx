import { motion } from 'framer-motion'
import { Award, Activity, Eye, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cards = [
  {
    icon: Award,
    label: 'Optimal Formulation',
    id: 'F2',
    title: 'Formulation F2 — Highest Sensory Score',
    description: 'Among all tested formulations, F2 (100g Teff-Rice, 60g Chickpea, 40g Barley) achieved the highest overall sensory acceptance score from the trained evaluation panel, excelling in taste, texture, aroma, and appearance.',
    highlight: 'Highest Acceptance',
    highlightColor: '#D4A373',
  },
  {
    icon: Activity,
    label: 'Acidity Kinetics',
    id: 'pH',
    title: 'Controlled Acidification Profile',
    description: 'The fermentation process drove a significant pH reduction, ensuring both microbial safety and enhanced mineral solubility. The acidic environment created by LAB activity degrades phytates and liberates bound minerals.',
    stats: [
      { label: 'Initial pH', value: '6.4', sub: 'Pre-fermentation' },
      { label: '48h pH', value: '3.9', sub: 'Post-fermentation' },
      { label: 'Δ pH', value: '-2.5', sub: 'Total drop' },
    ],
  },
  {
    icon: Eye,
    label: 'Sensory Traits',
    id: 'SEN',
    title: 'Physical & Sensory Characteristics',
    description: 'The final product exhibited desirable physical properties confirming successful processing and consumer-appropriate qualities for a complementary food product.',
    traits: [
      { name: 'Color', value: 'Light yellowish coloration' },
      { name: 'Texture', value: 'Smooth, fine powder' },
      { name: 'Aroma', value: 'Favorable porridge-like aroma' },
      { name: 'Form', value: 'Reconstitutable flour' },
    ],
  },
  {
    icon: ArrowRight,
    label: 'Next Steps',
    id: 'NEXT',
    title: 'Pending Analyses & Future Work',
    description: 'The research continues with critical quantitative analyses to fully characterize the nutritional profile and validate the probiotic functionality of the optimized formulation.',
    nextItems: [
      'Proximate composition analysis (moisture, protein, fat, fiber, ash)',
      'Quantitative microbial viability assessment (CFU/g)',
      'In-vitro mineral bioavailability studies',
      'Shelf-life stability testing',
    ],
  },
]

function StatBlock({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-5">
      {stats.map((s) => (
        <div key={s.label} className="text-center p-3 rounded-xl bg-[rgba(10,10,9,0.6)] border border-[rgba(212,163,115,0.08)]">
          <div className="text-2xl font-bold text-[#D4A373]" style={{ fontFamily: 'var(--font-mono)' }}>{s.value}</div>
          <div className="text-[0.65rem] text-[#9E968F] mt-1 font-medium">{s.label}</div>
          <div className="text-[0.6rem] text-[#9E968F] opacity-60">{s.sub}</div>
        </div>
      ))}
    </div>
  )
}

function ResultCard({ card, index }) {
  const Icon = card.icon
  return (
    <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
      <motion.div
        whileHover={{ y: -6, borderColor: 'rgba(139,94,60,0.4)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="glass-card p-8 sm:p-10 h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[rgba(212,163,115,0.08)] border border-[rgba(212,163,115,0.12)] flex items-center justify-center">
              <Icon size={20} strokeWidth={1.5} className="text-[#D4A373]" />
            </div>
            <span className="text-xs tracking-widest uppercase text-[#9E968F]">{card.label}</span>
          </div>
          <span className="text-[0.65rem] text-[#D4A373] tracking-widest font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>{card.id}</span>
        </div>

        <h3 className="text-lg font-bold text-[#EAE0D5] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{card.title}</h3>
        <p className="text-sm text-[#9E968F] leading-relaxed flex-1">{card.description}</p>

        {card.highlight && (
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(212,163,115,0.08)] border border-[rgba(212,163,115,0.15)] self-start">
            <div className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse" />
            <span className="text-xs font-semibold text-[#D4A373]">{card.highlight}</span>
          </div>
        )}

        {card.stats && <StatBlock stats={card.stats} />}

        {card.traits && (
          <div className="mt-5 space-y-2">
            {card.traits.map((t) => (
              <div key={t.name} className="flex items-center gap-3 text-sm">
                <span className="text-[#D4A373] font-medium w-16 shrink-0" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>{t.name}</span>
                <div className="h-px flex-1 bg-[rgba(212,163,115,0.08)]" />
                <span className="text-[#9E968F] text-xs">{t.value}</span>
              </div>
            ))}
          </div>
        )}

        {card.nextItems && (
          <ul className="mt-5 space-y-2">
            {card.nextItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#9E968F]">
                <span className="text-[#D4A373] mt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Results() {
  return (
    <section id="results" className="section-spacing relative">
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
            Data & Findings
          </span>
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            Research in Action
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {cards.map((card, i) => (
            <ResultCard key={card.id} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
