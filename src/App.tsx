import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import HowToOrder from './components/HowToOrder'
import Menu from './components/Menu'
import MobileTabBar from './components/MobileTabBar'
import QuoteForm from './components/QuoteForm'
import { useIsDesktop } from './hooks/useIsDesktop'
import type { MobileTab } from './types'

function App() {
  const [mobileTab, setMobileTab] = useState<MobileTab>('home')
  const isDesktop = useIsDesktop()

  if (isDesktop) {
    return (
      <div className="min-h-screen bg-cream">
        <Header isDesktop />
        <main>
          <Hero onRequestQuote={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })} />
          <Menu />
          <HowToOrder />
          <QuoteForm />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex h-[100dvh] flex-col bg-cream">
      <Header isDesktop={false} />
      <main className="flex-1 overflow-y-auto pb-20">
        {mobileTab === 'home' && (
          <>
            <Hero onRequestQuote={() => setMobileTab('quote')} />
            <Footer />
          </>
        )}
        {mobileTab === 'menu' && <Menu />}
        {mobileTab === 'how-to-order' && <HowToOrder />}
        {mobileTab === 'quote' && <QuoteForm />}
      </main>
      <MobileTabBar active={mobileTab} onChange={setMobileTab} />
    </div>
  )
}

export default App
