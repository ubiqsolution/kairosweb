import { motion } from 'framer-motion'

const TAGS = [
  { title: '신규 서비스 런칭', desc: '출시 전 14일이 마지노선인 사업자' },
  { title: '검색 노출 0건', desc: '네이버·구글에서 우리 회사가 안 보이는 상태' },
  { title: '직원 1~50명 사업장', desc: '대표가 직접 외주 조율까지 하고 있는 조직' },
  { title: '반복 업무가 많은 사무직', desc: '엑셀·복사·붙여넣기에 시간을 빼앗기는 팀' },
  { title: 'AI는 들었는데 시작점 모르는 분', desc: 'ChatGPT는 가입만 해둔 대표' },
]

export default function WhoFor() {
  return (
    <section className="relative border-b border-white/10 bg-slate-900">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
              Who For
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
              이런 분들께
              <br />
              도움이 됩니다
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              지금 한 가지라도 해당된다면,
              <br />
              30분만 시간을 내주세요.
            </p>
          </div>

          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TAGS.map(({ title, desc }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-slate-950/60 p-5 hover:border-cyan-400/30 transition-colors duration-200"
              >
                <p className="text-base md:text-lg font-semibold text-white">
                  {title}
                </p>
                <p className="mt-1.5 text-base text-slate-400 leading-relaxed">
                  {desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
