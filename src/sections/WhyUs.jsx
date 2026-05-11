import { motion } from 'framer-motion'
import { Cpu, Timer, Workflow, ShieldCheck } from 'lucide-react'

const REASONS = [
  {
    icon: Cpu,
    title: 'AI 워크플로우 내재화',
    desc: '카피·디자인·코드 단계를 병렬 자동화합니다.',
    proof: '근거: 사내 AI 파이프라인 기반',
  },
  {
    icon: Timer,
    title: '24시간 납품 보장',
    desc: '표준 1페이지 랜딩 기준 24시간 안에 납품합니다.',
    proof: '근거: 평균 제작 시간 86% 단축',
  },
  {
    icon: Workflow,
    title: '한 창구, 한 책임자',
    desc: '기획·디자인·개발을 분리 발주하지 않습니다.',
    proof: '근거: 외주 커뮤니케이션 시간 70% 감소',
  },
  {
    icon: ShieldCheck,
    title: 'AS 6개월 포함',
    desc: '문구·이미지 수정은 6개월간 무료입니다.',
    proof: '근거: 표준 계약 조항',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative border-b border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Why Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            우리는 왜, 이게 가능한가
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            약속 옆에 항상 "왜 가능한지" 근거를 붙입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map(({ icon: Icon, title, desc, proof }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:p-7 shadow-md hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-200"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 mb-5">
                <Icon className="w-5 h-5 text-cyan-300" />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {desc}
              </p>
              <p className="mt-4 text-sm font-medium text-cyan-400/90">
                {proof}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
