import { IconMapPin } from './icons'

interface HeroProps {
  onRequestQuote: () => void
}

export default function Hero({ onRequestQuote }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center gap-6 overflow-hidden bg-blush px-6 py-16 text-center md:gap-8 md:px-8 md:py-24"
    >
      <img
        src="/ovenSweetsNycDemo_logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-10 md:h-[160%]"
      />

      <span className="relative inline-flex items-center gap-1.5 rounded-full border border-rose-deep/30 bg-white/70 px-4 py-1.5 font-heading text-sm font-medium text-chocolate">
        <IconMapPin className="h-4 w-4 text-rose-deep" />
        Bronx, NY
      </span>

      <h1 className="relative font-heading text-4xl font-semibold leading-tight text-chocolate md:text-6xl">
        FRESHLY BAKED
        <br />
        <span className="text-rose-deep">Cakes &amp; Desserts</span>
      </h1>

      <p className="relative max-w-xl text-base text-chocolate/80 md:text-lg">
        Custom cakes, flans, and gelatinas made fresh for your next celebration.
      </p>

      <button
        type="button"
        onClick={onRequestQuote}
        className="relative rounded-full bg-rose-deep px-8 py-3.5 font-heading text-base font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-chocolate"
      >
        Request a Custom Quote
      </button>
    </section>
  )
}
