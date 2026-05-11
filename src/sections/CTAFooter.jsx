import { motion } from 'framer-motion'
import { Phone, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react'

export default function CTAFooter() {
  return (
    <>
      <section id="cta" className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        <div
          className="absolute inset-0 opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.4), rgba(99, 102, 241, 0.15) 40%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto w-full px-4 md:px-8 py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-6">
              <Sparkles className="w-4 h-4" />
              지금 신청 시
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              30분 무료 진단 +
              <br className="md:hidden" />
              <span className="glow-text"> 자동화 Top 3 리포트</span>
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
              지금 문의하면 30분 무료 진단과 함께,
              <br className="hidden md:block" />
              당장 자동화할 수 있는 작업 Top 3를 리포트로 보내드립니다.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:1600-5693"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-300 transition-all duration-200 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                1600-5693 전화 상담
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:9292@ubiqsolution.com?subject=KaIrOs AI 무료 진단 신청"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                이메일로 문의
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              평일 10:00–18:00 · 영업·광고 전화 사절
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-950">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-12 md:py-14">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/30">
                  <Sparkles className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
                </span>
                <span className="text-lg font-bold text-white">
                  KaIrOs <span className="text-cyan-400">AI</span>
                </span>
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                AI가 만드는 결정적 한 수.
                <br />
                중소기업·소상공인을 위한 AI AX 파트너.
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Powered by ubiqsolution
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wider text-slate-200 uppercase mb-4">
                연락처
              </p>
              <ul className="space-y-3 text-base text-slate-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:1600-5693" className="hover:text-cyan-300">1600-5693</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:9292@ubiqsolution.com" className="hover:text-cyan-300">
                    9292@ubiqsolution.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  평일 10:00–18:00
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wider text-slate-200 uppercase mb-4">
                바로가기
              </p>
              <ul className="space-y-2.5 text-base text-slate-300">
                <li><a href="#services" className="hover:text-cyan-300">서비스 라인업</a></li>
                <li><a href="#steps" className="hover:text-cyan-300">진행 절차</a></li>
                <li><a href="#faq" className="hover:text-cyan-300">자주 묻는 질문</a></li>
                <li><a href="#cta" className="hover:text-cyan-300">무료 진단 신청</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} KaIrOs AI · ubiqsolution. All rights reserved.</p>
            <p>"AI가 만드는 결정적 한 수" — KaIrOs AI</p>
          </div>
        </div>
      </footer>
    </>
  )
}
