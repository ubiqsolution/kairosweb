import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const NAV = [
  { href: '#problem', label: '문제' },
  { href: '#why-us', label: '왜 우리인가' },
  { href: '#services', label: '서비스' },
  { href: '#steps', label: '진행 절차' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/30">
            <Sparkles className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
          </span>
          <span className="text-lg md:text-xl font-bold tracking-tight text-white">
            KaIrOs <span className="text-cyan-400">AI</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-400 px-4 py-2 text-base font-semibold text-slate-950 shadow-md shadow-cyan-500/30 hover:bg-cyan-300 transition-all duration-200"
          >
            무료 진단
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-white/10 text-slate-200"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-xl bg-cyan-400 px-4 py-3 text-base font-semibold text-slate-950"
            >
              무료 진단 신청
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
