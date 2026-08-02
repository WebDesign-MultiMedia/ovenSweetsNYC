import { useLanguage } from '../i18n/LanguageContext'
import type { Translations } from '../i18n/translations'
import LanguageToggle from './LanguageToggle'

interface HeaderProps {
  isDesktop: boolean
}

const NAV_LINKS: { href: string; key: keyof Translations['nav'] }[] = [
  { href: '#home', key: 'home' },
  { href: '#menu', key: 'menu' },
  { href: '#how-to-order', key: 'howToOrder' },
  { href: '#quote', key: 'quoteRequest' },
]

export default function Header({ isDesktop }: HeaderProps) {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 border-b border-rose/30 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/ovenSweetsNycDemo_logo.png"
            alt="Oven Sweets NYC logo"
            className="h-12 w-12 flex-none rounded-full md:h-14 md:w-14"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-xl font-semibold text-chocolate md:text-2xl">
              Oven Sweets NYC
            </span>
            <span className="text-[11px] text-chocolate/70 md:text-sm">{t.header.tagline}</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          {isDesktop && (
            <nav className="flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-heading text-sm font-medium text-chocolate transition-colors hover:text-rose-deep"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <a
                href="#quote"
                className="rounded-full bg-rose-deep px-5 py-2 font-heading text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-chocolate"
              >
                {t.nav.getQuote}
              </a>
            </nav>
          )}
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
