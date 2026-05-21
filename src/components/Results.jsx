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

function ImageGallery() {
  const images = [
    '/research/IMG_0671.jpg',
    '/research/IMG_0960.jpg',
    '/research/IMG_1008.jpg',
    '/research/IMG_20260521_150038_236.png',
    '/research/photo_1_2026-05-16_11-31-11.jpg',
    '/research/photo_11_2026-05-16_11-31-11.jpg',
    '/research/photo_16_2026-05-16_11-31-11.jpg',
    '/research/photo_17_2026-05-16_11-31-11.jpg',
    '/research/photo_19_2026-05-16_11-31-11.jpg',
    '/research/photo_20_2026-05-16_11-31-11.jpg',
    '/research/photo_2026-05-20_15-36-15.jpg',
    '/research/photo_2026-05-20_15-36-28.jpg',
  ]

  return (
    <div className="mt-24 lg:mt-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 lg:mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-[#9E968F] block mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          Lab Gallery
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#EAE0D5]" style={{ fontFamily: 'var(--font-serif)' }}>
          Visual Documentation
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.02, zIndex: 10, borderColor: 'rgba(212,163,115,0.4)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="glass-card p-2 aspect-square relative group cursor-pointer flex flex-col"
          >
            <div className="w-full h-full relative overflow-hidden rounded-xl bg-[rgba(10,10,9,0.5)]">
              {/* Earthy tech color overlay that fades on hover */}
              <div className="absolute inset-0 bg-[#161412]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 bg-[#D4A373]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />

              <img
                src={src}
                alt={`Research documentation ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] sepia-[20%] group-hover:grayscale-0 group-hover:sepia-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function WorkingMembersGallery() {
  const images = [
    '/working/20260518_151842.jpg',
    '/working/20260518_151941.jpg',
    '/working/IMG_0986.jpg',
    '/working/IMG_0988.jpg',
    '/working/IMG_1016.jpg',
    '/working/IMG_20260520_163412_594.jpg',
    '/working/IMG_20260520_163412_963.jpg',
    '/working/IMG_20260522_002634_923.jpg',
  ]

  return (
    <div className="mt-24 lg:mt-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 lg:mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-[#9E968F] block mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          Team in Action
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#EAE0D5]" style={{ fontFamily: 'var(--font-serif)' }}>
          Members working on the project
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.02, zIndex: 10, borderColor: 'rgba(212,163,115,0.4)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="glass-card p-2 aspect-square relative group cursor-pointer flex flex-col"
          >
            <div className="w-full h-full relative overflow-hidden rounded-xl bg-[rgba(10,10,9,0.5)]">
              {/* Earthy tech color overlay that fades on hover */}
              <div className="absolute inset-0 bg-[#161412]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 bg-[#D4A373]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />

              <img
                src={src}
                alt={`Member working ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] sepia-[20%] group-hover:grayscale-0 group-hover:sepia-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function VideoShowcase() {
  return (
    <div className="mt-24 lg:mt-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 lg:mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-[#9E968F] block mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          Process Documentation
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#EAE0D5]" style={{ fontFamily: 'var(--font-serif)' }}>
          Istp group 6 project video lab footage
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-card p-2 sm:p-4 rounded-[2rem] relative overflow-hidden mx-auto max-w-4xl"
        style={{ borderColor: 'rgba(212,163,115,0.2)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,163,115,0.05)] to-transparent pointer-events-none" />
        
        <div className="relative rounded-2xl overflow-hidden border border-[rgba(212,163,115,0.1)] bg-black aspect-video">
          <video 
            className="w-full h-full object-contain"
            controls 
            preload="metadata"
            controlsList="nodownload"
          >
            <source src="/video/video_2026-05-22_01-42-26.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </div>
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

        <VideoShowcase />
        <ImageGallery />
        <WorkingMembersGallery />
      </div>
    </section>
  )
}
