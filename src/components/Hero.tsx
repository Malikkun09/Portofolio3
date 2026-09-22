import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

const BG_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85'

const PORTRAIT_IMAGE =
  'https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png'

const NAV_LINKS = ['Story', 'Jobs', 'Message'] as const
const SOCIAL_LINKS = ['Instagram', 'TikTok', 'YouTube'] as const

const drawerEase = 'cubic-bezier(0.76, 0, 0.24, 1)'

function MarqueeName() {
  const segment = (
    <span className="pr-[6vw]">
      Marcus &mdash; Bennet{'\u00A0'}
    </span>
  )
  return (
    <div
      className="absolute inset-x-0 top-[16vh] z-10 overflow-hidden anim-fade-up sm:top-[14vh]"
      style={{ animationDelay: '500ms' }}
    >
      <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] leading-none text-cream sm:text-[26vh]">
        {segment}
        {segment}
      </div>
    </div>
  )
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((open) => !open)

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden font-hn text-cream">
      <img
        src={BG_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in"
      />

      <MarqueeName />

      <div
        className="absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream anim-line sm:inset-x-10 sm:bottom-28"
        style={{ animationDelay: '1200ms' }}
      />

      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 text-xs leading-relaxed sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div
          className="anim-fade-up"
          style={{ animationDelay: '1400ms' }}
        >
          <p>Visuals Composer</p>
          <p>Digital Crafter</p>
          <p>Obsessed by The Office</p>
        </div>
        <div
          className="text-right anim-fade-up"
          style={{ animationDelay: '1550ms' }}
        >
          <p>A homage to</p>
          <p>Marcus Holloway</p>
        </div>
      </footer>

      <img
        src={PORTRAIT_IMAGE}
        alt="Portrait"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover anim-rise-in"
        style={{ animationDelay: '300ms' }}
      />

      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#"
          className="text-lg tracking-wide anim-fade-up"
          style={{ animationDelay: '800ms' }}
        >
          Marcus
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span
            className="text-sm anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            2025
          </span>
          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV_LINKS.map((label, i) => (
              <a
                key={label}
                href="#"
                className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-0.5 text-sm">
            {SOCIAL_LINKS.map((label, i) => (
              <a
                key={label}
                href="#"
                className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          className="relative z-50 flex h-10 w-10 items-center justify-center sm:hidden anim-fade-up"
          style={{ animationDelay: '900ms' }}
        >
          <span className="relative h-4 w-6">
            <span
              className="absolute left-0 h-0.5 w-6 bg-cream"
              style={{
                top: menuOpen ? '50%' : '0',
                transform: menuOpen
                  ? 'translateY(-50%) rotate(45deg)'
                  : 'translateY(0) rotate(0)',
                transition: `top 500ms ${drawerEase}, transform 500ms ${drawerEase}`,
              }}
            />
            <span
              className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-cream"
              style={{
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 300ms',
              }}
            />
            <span
              className="absolute left-0 h-0.5 w-6 bg-cream"
              style={{
                bottom: menuOpen ? '50%' : '0',
                transform: menuOpen
                  ? 'translateY(50%) rotate(-45deg)'
                  : 'translateY(0) rotate(0)',
                transition: `bottom 500ms ${drawerEase}, transform 500ms ${drawerEase}`,
              }}
            />
          </span>
        </button>
      </header>

      <div className="sm:hidden">
        <button
          type="button"
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 0 : -1}
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
          onClick={closeMenu}
        />

        <aside
          className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform duration-[600ms] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionTimingFunction: drawerEase }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute right-6 top-6 text-cream transition-all duration-300"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'rotate(0deg)' : 'rotate(90deg)',
              transitionDelay: menuOpen ? '300ms' : '0ms',
            }}
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          <p
            className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ease-out"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
              transitionDelay: menuOpen ? '250ms' : '0ms',
            }}
          >
            Site Index
          </p>
          <nav className="mt-6 flex flex-col gap-2">
            {NAV_LINKS.map((label, i) => (
              <a
                key={label}
                href="#"
                onClick={closeMenu}
                className="text-4xl transition-all duration-500 ease-out"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: menuOpen ? `${300 + i * 80}ms` : '0ms',
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <p
            className="mt-10 text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ease-out"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
              transitionDelay: menuOpen ? '500ms' : '0ms',
            }}
          >
            Find Me
          </p>
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {SOCIAL_LINKS.map((label, i) => (
              <a
                key={label}
                href="#"
                onClick={closeMenu}
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: menuOpen ? `${550 + i * 60}ms` : '0ms',
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </section>
  )
}
