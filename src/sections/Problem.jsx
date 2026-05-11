import { motion } from 'framer-motion'
import { Receipt, BotOff, Users } from 'lucide-react'

const PAINS = [
  {
    icon: Receipt,
    title: '견적 충격, 그리고 한 분기 지연',
    desc: '랜딩페이지 외주 견적은 평균 300만 원, 제작 기간은 2~4주.',
    metric: '“시작도 못 하고 분기가 지나갑니다.”',
  },
  {
    icon: BotOff,
    title: 'AI는 샀는데, 안 쓰이고 있다',
    desc: 'ChatGPT는 가입했지만 월 2~3회만 사용. 직원 1인당 주 5~7시간의 반복 작업이 그대로.',
    metric: '도구는 있는데 변화는 없습니다.',
  },
  {
    icon: Users,
    title: '3개 업체 조율, 회의만 주 6시간',
    desc: '기획·디자인·개발을 따로 의뢰. 대표가 중간 조율자가 되고, 본업 시간이 사라집니다.',
    metric: '결과물 톤은 제각각, 책임 소재는 모호.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative border-b border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Problem
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            혹시, 이런 상황이신가요?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            당신 잘못이 아닙니다. 시장 구조가 그렇게 만들어져 있을 뿐입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PAINS.map(({ icon: Icon, title, desc, metric }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-md hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-200"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 mb-5">
                <Icon className="w-6 h-6 text-cyan-400" />
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {desc}
              </p>
              <p className="mt-5 pt-5 border-t border-white/10 text-base font-medium text-cyan-300">
                {metric}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
