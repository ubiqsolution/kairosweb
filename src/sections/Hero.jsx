import { motion } from 'framer-motion'
import { ArrowRight, Clock, Zap, Layers } from 'lucide-react'

const BADGES = [
  { icon: Clock, label: '24시간 납품' },
  { icon: Zap, label: '30분 무료 진단' },
  { icon: Layers, label: '한 창구 처리' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(34, 211, 238, 0.5), rgba(99, 102, 241, 0.2) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 pt-20 md:pt-28 lg:pt-32 pb-20 md:pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          AI AX 파트너 · by ubiqsolution
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white"
        >
          AI가 만드는
          <br />
          <span className="glow-text">결정적 한 수.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-slate-300"
        >
          AI 도입은 어렵고, 외주는 비쌉니다.
          <br className="hidden md:block" />
          KaIrOs AI는 카피·디자인·코드를 AI 워크플로우로 묶어,
          <br className="hidden md:block" />
          평균 <span className="text-cyan-300 font-semibold">7일 걸리던 랜딩페이지를 24시간</span> 안에 만들어드립니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {BADGES.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
            >
              <Icon className="w-4 h-4 text-cyan-400" />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#cta"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-7 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transition-all duration-200 w-full sm:w-auto"
          >
            무료 진단 신청
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
          >
            서비스 살펴보기
          </a>
        </motion.div>

        <p className="mt-10 mx-auto max-w-3xl text-base leading-relaxed text-slate-400">
          KaIrOs AI는 중소기업·소상공인을 위한 AI AX(Agent Experience) 도입 파트너입니다.
          랜딩페이지 24시간 제작, 업무 자동화 컨설팅, 맞춤형 AI 솔루션을 한 창구에서 제공합니다.
        </p>
      </div>
    </section>
  )
}
