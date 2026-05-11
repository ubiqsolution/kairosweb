import { motion } from 'framer-motion'
import { Rocket, Stethoscope, Wrench, Check } from 'lucide-react'

const SERVICES = [
  {
    icon: Rocket,
    tag: 'KairosLand',
    title: 'AI 랜딩페이지 24시간',
    summary: '카피·디자인·코드를 AI 워크플로우로 묶어 평균 7일을 24시간으로.',
    features: [
      '모바일 퍼스트 반응형',
      'JSON-LD SEO 기본 탑재',
      '6개월 문구·이미지 수정 AS',
    ],
    target: '신규 서비스 출시 직전 사업자 · 검색 노출이 절실한 1인 사업가',
    metric: '제작 기간 86%↓ · 견적 비용 60%↓',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Stethoscope,
    tag: 'KairosFlow',
    title: 'AI AX 컨설팅 (30분 무료 진단)',
    summary: '업무 흐름 인터뷰 → 자동화 가능 작업 Top 3 → 실행 도구 매칭.',
    features: [
      '30분 무료 진단',
      '도입 4주 패키지',
      '도입 후 ROI 리포트',
    ],
    target: 'AI 도입을 시작하고 싶지만 어디부터 손댈지 모르는 대표',
    metric: '도입 첫 달 평균 주 5~7시간 절감',
    accent: 'from-blue-500 to-indigo-500',
    featured: true,
  },
  {
    icon: Wrench,
    tag: 'KairosBuild',
    title: '맞춤형 AI 솔루션',
    summary: '챗봇·RPA·내부 도구를 업무에 맞춰 직접 제작합니다.',
    features: [
      '기존 시스템 연동 (카카오 채널/네이버 폼/구글 시트)',
      'API · RPA · 엑셀 자동화',
      '단계별 분할 견적',
    ],
    target: '반복 문의 응대 · 데이터 정리 · 발주서 자동화가 필요한 중소기업',
    metric: '응대 시간 평균 60%↓',
    accent: 'from-indigo-500 to-purple-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative border-b border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Services
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            대표 서비스 3가지
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            모든 서비스는 30분 무료 진단에서 시작합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, tag, title, summary, features, target, metric, accent, featured }, i) => (
            <motion.article
              key={tag}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-7 md:p-8 shadow-md transition-all duration-200 flex flex-col ${
                featured
                  ? 'border-cyan-400/50 bg-gradient-to-b from-cyan-400/[0.08] to-transparent shadow-cyan-500/10 lg:-translate-y-2'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                  인기 시작점
                </span>
              )}

              <div className="flex items-center gap-3 mb-5">
                <span className={`grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br ${accent} text-slate-950 shadow-md`}>
                  <Icon className="w-6 h-6" strokeWidth={2.4} />
                </span>
                <span className="text-sm font-mono tracking-widest text-cyan-300/80 uppercase">
                  {tag}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {summary}
              </p>

              <ul className="mt-6 space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-base text-slate-200">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-1">
                    추천 대상
                  </p>
                  <p className="text-base text-slate-300 leading-relaxed">{target}</p>
                </div>
                <div className="pt-2">
                  <p className="text-base font-semibold text-cyan-300">{metric}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
