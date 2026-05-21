import { motion } from 'framer-motion'
import { User, Crown } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const advisor = {
  name: 'Mr. Araya Kahsay',
  role: 'Project Advisor',
}

const students = [
  { name: 'Bitania Geremew', id: 'ETS0330/16' },
  { name: 'Chala Edosa', id: 'ETS0347/16' },
  { name: 'Eyob Bizuneh', id: 'ETS0518/16' },
  { name: 'Eyob Kebede', id: 'ETS0520/16' },
  { name: 'Fiker Gebeyehu', id: 'ETS0562/16' },
  { name: 'Filimon Gebru', id: 'ETS0580/16' },
  { name: 'Hikma Abdela', id: 'ETS0711/16' },
  { name: 'Hilina Yohanne', id: 'ETS0714/16' },
]

function AdvisorCard() {
  return (
    <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="glass-card p-8 sm:p-12 max-w-2xl mx-auto mb-12"
        style={{ borderColor: 'rgba(212,163,115,0.25)' }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgba(212,163,115,0.15)] to-[rgba(139,94,60,0.1)] border border-[rgba(212,163,115,0.25)] flex items-center justify-center shrink-0">
            <Crown size={24} strokeWidth={1.5} className="text-[#D4A373]" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-[#EAE0D5]" style={{ fontFamily: 'var(--font-serif)' }}>
              {advisor.name}
            </h3>
            <p className="text-sm text-[#D4A373] font-medium mt-1">{advisor.role}</p>
            <p className="text-xs text-[#9E968F] mt-2">
              Guiding interdisciplinary collaboration across Food Science, Biotechnology, Geology, and Industrial Chemistry.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function StudentCard({ student }) {
  return (
    <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
      <motion.div
        whileHover={{ y: -6, borderColor: 'rgba(212,163,115,0.3)', boxShadow: '0 8px 30px rgba(139,94,60,0.1)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="glass-card p-6 sm:p-8 h-full"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[rgba(212,163,115,0.06)] border border-[rgba(212,163,115,0.12)] flex items-center justify-center shrink-0">
            <User size={20} strokeWidth={1.5} className="text-[#9E968F]" />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-[#EAE0D5] truncate">{student.name}</h4>
            <p className="text-[0.7rem] text-[#D4A373] mt-0.5 tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
              {student.id}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <section id="team" className="section-spacing relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#9E968F] block mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
            Our Researchers
          </span>
          <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            The Minds Behind the Science
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <AdvisorCard />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
