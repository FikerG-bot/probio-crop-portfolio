import { motion } from 'framer-motion'
import { Utensils, Dna, FlaskConical, Mountain } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const roles = [
  {
    title: 'Food Science and Applied Nutrition',
    icon: Utensils,
    description: 'Core/Lead role in overall product development, formulation, sensory evaluation, and nutritional aspects.',
    points: [
      'Formulation of complementary food prototypes (F1–F3).',
      'Raw material selection and preparation (teff, chickpea, barley, rice).',
      'Drying, milling, and powder preparation.',
      'Sensory evaluation (taste, aroma, texture, color, acceptability).',
      'Proximate analysis (planned).',
      'Nutritional interpretation, protein complementarity, and complementary feeding context.'
    ],
    id: 'FS'
  },
  {
    title: 'Biotechnology',
    icon: Dna,
    description: 'Key role in the probiotic/fermentation aspects.',
    points: [
      'Preparation of starter culture (LAB – Lactic Acid Bacteria).',
      'Fermentation procedure (24h & 48h monitoring).',
      'Observation of fermentation (foam, pH drop, acidity, aroma, sedimentation).',
      'Microbial analysis (planned).',
      'Probiotic potential and microbial safety.'
    ],
    id: 'BT'
  },
  {
    title: 'Industrial Chemistry',
    icon: FlaskConical,
    description: 'Key role in fortification, chemical analysis, and processing parameters.',
    points: [
      'Mineral fortification (ferrous sulphate, zinc sulphate, calcium carbonate).',
      'pH and acidity measurements.',
      'Physicochemical properties and stability.',
      'Drying process optimization and chemical safety/stability of the final product.'
    ],
    id: 'IC'
  },
  {
    title: 'Geology',
    icon: Mountain,
    description: 'Supporting role likely related to minerals and raw materials.',
    points: [
      'Mineral sources, fortification strategy, and mineral bioavailability.',
      'Characterization or sourcing of mineral compounds (e.g., calcium carbonate, iron/zinc salts).',
      'Possibly geological/mineralogical aspects of local raw materials or fortificants.'
    ],
    id: 'GE'
  }
]

function RoleCard({ role }) {
  const Icon = role.icon
  return (
    <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
      <motion.div
        whileHover={{ y: -6, borderColor: 'rgba(139,94,60,0.4)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="glass-card p-8 sm:p-10 h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[rgba(212,163,115,0.08)] border border-[rgba(212,163,115,0.12)] flex items-center justify-center shrink-0">
              <Icon size={20} strokeWidth={1.5} className="text-[#D4A373]" />
            </div>
            <span className="text-[0.65rem] text-[#D4A373] tracking-widest font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>{role.id}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#EAE0D5] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{role.title}</h3>
        <p className="text-sm text-[#D4A373] leading-relaxed mb-5 font-medium">{role.description}</p>

        <ul className="mt-auto space-y-2.5">
          {role.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#9E968F] leading-relaxed">
              <span className="text-[#D4A373] mt-0.5 shrink-0">›</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default function Roles() {
  return (
    <section id="roles" className="section-spacing relative">
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
            Primary Contributions
          </span>
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            Role of Department
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
