import { motion } from 'framer-motion'
import { Quote, AlertTriangle } from 'lucide-react'

const STORIES = [
  {
    quote: '외주 견적 300만 원, 4주 일정에 막혀 있었는데 KairosLand로 24시간 만에 받았습니다. 그 주에 바로 광고를 돌렸어요.',
    role: '음식점 운영 · 가상 김OO 대표',
  },
  {
    quote: 'ChatGPT만 쓰던 우리 팀에 KairosFlow가 들어오고 발주서 정리에 쓰던 주 6시간이 사라졌습니다.',
    role: '디자인 스튜디오 · 가상 박OO 실장',
  },
]

export default function Testimonials() {
  return (
    <section className="relative border-b border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Stories
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            이런 변화를 만들 수 있습니다
          </h2>

          <div className="mt-6 inline-flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/[0.07] px-4 py-3 text-left">
            <AlertTriangle className="w-5 h-5 text-amber-300 mt-0.5 shrink-0" />
            <p className="text-sm md:text-base text-amber-100/90 leading-relaxed">
              아래 사례는 <strong className="text-amber-200">가상 시나리오 예시</strong>입니다.
              실제 후기는 도입 사례가 누적되는 대로 본 페이지에 업데이트됩니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STORIES.map(({ quote, role }, i) => (
            <motion.figure
              key={role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-7 md:p-8 shadow-md"
            >
              <Quote className="w-8 h-8 text-cyan-400/70 mb-4" />
              <blockquote className="text-lg md:text-xl text-slate-100 leading-relaxed">
                “{quote}”
              </blockquote>
              <figcaption className="mt-5 text-base text-slate-400">
                — {role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
