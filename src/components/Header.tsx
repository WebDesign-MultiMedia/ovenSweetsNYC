interface HeaderProps {
  isDesktop: boolean
}

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#how-to-order', label: 'How to Order' },
  { href: '#quote', label: 'Quote Request' },
]

export default function Header({ isDesktop }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-rose/30 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
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
            <span className="text-[11px] text-chocolate/70 md:text-sm">
              Freshly Baked Cakes &amp; Desserts
            </span>
          </span>
        </a>

        {isDesktop && (
          <nav className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-medium text-chocolate transition-colors hover:text-rose-deep"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              className="rounded-full bg-rose-deep px-5 py-2 font-heading text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-chocolate"
            >
              Get a Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
