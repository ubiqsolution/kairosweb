import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: '정말 24시간 안에 랜딩페이지 제작이 가능한가요?',
    a: '표준 1페이지 랜딩 기준 24시간 납품이 기본입니다. 카피·디자인·코드를 분리 발주하지 않고 AI 워크플로우로 병렬 처리하기 때문이며, 영상 촬영이나 복잡한 다국어가 포함될 경우 일정이 추가됩니다.',
  },
  {
    q: '우리 업종(전통 산업)에도 AI가 도움이 되나요?',
    a: '30분 무료 진단에서 업무 흐름을 인터뷰한 뒤, 자동화 가능 작업 Top 3를 도출해 드립니다. 도움이 안 된다고 판단되면 솔직하게 말씀드립니다.',
  },
  {
    q: '기존 홈페이지나 카카오 채널과 연동되나요?',
    a: '예. KairosBuild는 카카오 채널, 네이버 폼, 구글 시트, 자체 DB 등 기존 시스템과 API 또는 RPA 방식으로 연결합니다.',
  },
  {
    q: '비용을 미리 알 수 있나요?',
    a: '30분 무료 진단 후 1~2일 내 제안서와 견적을 보내드립니다. 범위·기간·금액을 모두 확정한 뒤에 진행하므로 중간 추가 비용은 발생하지 않습니다.',
  },
  {
    q: '납품 후 수정은 가능한가요?',
    a: '표준 계약 기준 6개월간 문구·이미지 수정은 무료입니다. 구조 변경이 필요한 경우만 별도 견적을 안내합니다.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative border-b border-white/10 bg-slate-950">
      <div className="max-w-4xl mx-auto w-full px-4 md:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors duration-200 open:border-cyan-400/40 open:bg-white/[0.05]"
            >
              <summary className="list-none cursor-pointer p-5 md:p-6 flex items-start justify-between gap-4">
                <span className="text-base md:text-lg font-semibold text-white leading-snug">
                  {q}
                </span>
                <ChevronDown className="w-5 h-5 text-cyan-400 shrink-0 mt-1 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                <p className="text-base text-slate-300 leading-relaxed">
                  {a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
