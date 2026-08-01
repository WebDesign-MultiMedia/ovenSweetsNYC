export type MobileTab = 'home' | 'menu' | 'how-to-order' | 'quote'

export interface MobileTabDefinition {
  id: MobileTab
  label: string
}

export const MOBILE_TABS: MobileTabDefinition[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'how-to-order', label: 'How to Order' },
  { id: 'quote', label: 'Quote Request' },
]
