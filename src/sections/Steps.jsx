import { motion } from 'framer-motion'

const STEPS = [
  {
    no: '01',
    title: '30분 무료 진단',
    time: '약 30분 · 화상 또는 전화',
    desc: '업무 흐름을 듣고, 자동화 가능 작업 Top 3를 즉시 정리해 드립니다.',
  },
  {
    no: '02',
    title: '제안서 + 견적',
    time: '1~2일 이내',
    desc: '범위·기간·금액을 모두 확정한 뒤에 진행합니다. 추가 비용은 없습니다.',
  },
  {
    no: '03',
    title: 'AI 워크플로우 실행',
    time: '24시간 ~ 4주',
    desc: '카피·디자인·코드를 병렬로 진행합니다. 진행 상황은 카카오톡으로 실시간 공유됩니다.',
  },
  {
    no: '04',
    title: '납품 + 6개월 AS',
    time: '납품 즉시',
    desc: '문구·이미지 수정은 6개월간 무료. 구조 변경만 별도 견적을 안내합니다.',
  },
]

export default function Steps() {
  return (
    <section id="steps" className="relative border-b border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Steps
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            4단계로 끝납니다
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            복잡한 회의 없이, 한 창구에서.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {STEPS.map(({ no, title, time, desc }, i) => (
            <motion.li
              key={no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7"
            >
              <span className="inline-flex items-center justify-center min-w-12 h-12 px-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 font-mono font-bold text-slate-950 text-lg mb-5">
                {no}
              </span>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm font-medium text-cyan-300">{time}</p>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                {desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
