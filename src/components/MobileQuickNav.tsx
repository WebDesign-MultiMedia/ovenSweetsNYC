import { useLanguage } from '../i18n/LanguageContext'
import type { Translations } from '../i18n/translations'
import type { MobileTab } from '../types'

interface MobileQuickNavProps {
  current: MobileTab
  onNavigate: (tab: MobileTab) => void
  className?: string
}

const ALL_TABS: MobileTab[] = ['home', 'menu', 'how-to-order', 'quote']

const LABEL_KEY: Record<MobileTab, keyof Translations['nav']> = {
  home: 'home',
  menu: 'menu',
  'how-to-order': 'howToOrder',
  quote: 'quoteRequest',
}

export default function MobileQuickNav({ current, onNavigate, className = '' }: MobileQuickNavProps) {
  const { t } = useLanguage()
  const links = ALL_TABS.filter((tab) => tab !== current)

  return (
    <nav className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 ${className}`}>
      {links.map((tab, index) => (
        <span key={tab} className="flex items-center gap-x-4">
          <button
            type="button"
            onClick={() => onNavigate(tab)}
            className="font-heading text-sm font-semibold text-chocolate underline-offset-4 hover:text-rose-deep hover:underline"
          >
            {t.nav[LABEL_KEY[tab]]}
          </button>
          {index < links.length - 1 && <span className="text-chocolate/30">•</span>}
        </span>
      ))}
    </nav>
  )
}
