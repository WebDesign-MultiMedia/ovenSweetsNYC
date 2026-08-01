import type { MobileTab } from '../types'
import { MOBILE_TABS } from '../types'
import { IconCake, IconChatBubble, IconClipboardCheck, IconHome } from './icons'

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

export default function MobileTabBar({ active, onChange }: MobileTabBarProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-rose/30 bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
      <ul className="flex items-stretch justify-between">
        {MOBILE_TABS.map((tab) => {
          const Icon = TAB_ICONS[tab.id]
          const isActive = active === tab.id
          return (
            <li key={tab.id} className="flex-1">
              <button
                type="button"
                onClick={() => onChange(tab.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-medium transition-colors ${
                  isActive ? 'text-rose-deep' : 'text-chocolate/60'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-rose-deep' : 'text-chocolate/60'}`} />
                <span className="font-heading leading-none">{tab.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
