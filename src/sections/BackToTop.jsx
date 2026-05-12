import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="페이지 상단으로 이동"
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 group inline-flex flex-col items-center justify-center gap-0.5 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/40 ring-1 ring-cyan-300/40 hover:from-cyan-300 hover:to-blue-400 hover:-translate-y-0.5 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.75} />
      <span className="text-[10px] md:text-[11px] font-bold tracking-wider leading-none">TOP</span>
    </button>
  )
}
