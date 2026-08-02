import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import type { Translations } from '../i18n/translations'
import type { MobileTab } from '../types'
import { MOBILE_TAB_ORDER } from '../types'
import { IconCake, IconChatBubble, IconClipboardCheck, IconClose, IconHome, IconMenu } from './icons'

interface MobileTabBarProps {
  active: MobileTab
  onChange: (tab: MobileTab) => void
}

const TAB_ICONS: Record<MobileTab, (props: { className?: string }) => React.JSX.Element> = {
  home: IconHome,
  menu: IconCake,
  'how-to-order': IconClipboardCheck,
  quote: IconChatBubble,
}

const TAB_LABEL_KEY: Record<MobileTab, keyof Translations['nav']> = {
  home: 'home',
  menu: 'menu',
  'how-to-order': 'howToOrder',
  quote: 'quoteRequest',
}

// Bubbles line up along a diagonal from the FAB (bottom-right) toward the
// top-left, leaning more vertical than horizontal so they stay clear of the
// left edge on narrow phones while still reading as a clean diagonal line.
const DIAGONAL_DX = -52
const DIAGONAL_DY = -94

function bubbleOffset(index: number) {
  const step = index + 1
  return { x: DIAGONAL_DX * step, y: DIAGONAL_DY * step }
}

export default function MobileTabBar({ active, onChange }: MobileTabBarProps) {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  function handleSelect(tab: MobileTab) {
    onChange(tab)
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-chocolate/40 backdrop-blur-[2px]"
        />
      )}

      <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-50 h-16 w-16">
        {MOBILE_TAB_ORDER.map((tabId, index) => {
          const Icon = TAB_ICONS[tabId]
          const isActive = active === tabId
          const { x, y } = bubbleOffset(index)

          return (
            <button
              key={tabId}
              type="button"
              onClick={() => handleSelect(tabId)}
              aria-current={isActive ? 'page' : undefined}
              aria-hidden={!isOpen}
              tabIndex={isOpen ? 0 : -1}
              style={{
                transitionDelay: isOpen ? `${index * 60}ms` : '0ms',
                transform: isOpen ? `translate(${x}px, ${y}px)` : 'translate(0, 0)',
              }}
              className={`absolute bottom-0 right-0 flex flex-col items-center gap-2 transition-all duration-300 ease-out ${
                isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              } ${isOpen ? '' : 'pointer-events-none'}`}
            >
              <span
                className={`flex h-14 w-14 flex-none items-center justify-center rounded-full border-2 shadow-lg ${
                  isActive ? 'border-white bg-rose-deep text-white' : 'border-rose-deep/30 bg-blush text-chocolate'
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="whitespace-nowrap rounded-full bg-chocolate/90 px-2 py-0.5 font-heading text-[10px] font-semibold text-white shadow">
                {t.nav[TAB_LABEL_KEY[tabId]]}
              </span>
            </button>
          )
        })}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-rose-deep/30 bg-blush text-chocolate shadow-xl transition-transform hover:scale-105"
        >
          {isOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>
    </>
  )
}
