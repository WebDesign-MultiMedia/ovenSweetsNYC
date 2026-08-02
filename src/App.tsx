import { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import HowToOrder from './components/HowToOrder'
import Menu from './components/Menu'
import MobileQuickNav from './components/MobileQuickNav'
import MobileTabBar from './components/MobileTabBar'
import QuoteForm from './components/QuoteForm'
import { useIsDesktop } from './hooks/useIsDesktop'
import { flashHighlight } from './lib/flashHighlight'
import type { MobileTab } from './types'

const SCROLL_SETTLE_MS = 450

function App() {
  const [mobileTab, setMobileTab] = useState<MobileTab>('home')
  const isDesktop = useIsDesktop()
  const mobileMainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (mobileMainRef.current) {
      mobileMainRef.current.scrollTop = 0
    }
  }, [mobileTab])

  function goToSectionDesktop(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => flashHighlight(id), SCROLL_SETTLE_MS)
  }

  function goToTabMobile(tab: MobileTab) {
    setMobileTab(tab)
    requestAnimationFrame(() => requestAnimationFrame(() => flashHighlight(tab)))
  }

  if (isDesktop) {
    return (
      <div className="min-h-screen bg-cream">
        <Header isDesktop />
        <main>
          <Hero onRequestQuote={() => goToSectionDesktop('quote')} />
          <Menu />
          <HowToOrder onStepClick={goToSectionDesktop} />
          <QuoteForm />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex h-[100dvh] flex-col bg-cream">
      <Header isDesktop={false} />
      <main ref={mobileMainRef} className="flex-1 overflow-y-auto">
        {mobileTab === 'home' && (
          <div className="flex min-h-full flex-col">
            <Hero onRequestQuote={() => setMobileTab('quote')} onNavigate={setMobileTab} />
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        )}
        {mobileTab === 'menu' && (
          <>
            <MobileQuickNav current="menu" onNavigate={setMobileTab} className="border-b border-rose/20 px-4 pb-4 pt-4" />
            <Menu />
          </>
        )}
        {mobileTab === 'how-to-order' && (
          <>
            <MobileQuickNav
              current="how-to-order"
              onNavigate={setMobileTab}
              className="border-b border-rose/20 px-4 pb-4 pt-4"
            />
            <HowToOrder onStepClick={goToTabMobile} />
          </>
        )}
        {mobileTab === 'quote' && (
          <>
            <MobileQuickNav current="quote" onNavigate={setMobileTab} className="border-b border-rose/20 px-4 pb-4 pt-4" />
            <QuoteForm />
          </>
        )}
      </main>
      <MobileTabBar active={mobileTab} onChange={setMobileTab} />
    </div>
  )
}

export default App
