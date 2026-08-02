import { useLanguage } from '../i18n/LanguageContext'
import { IconFacebook, IconInstagram, IconMapPin, IconPhone, IconTikTok } from './icons'

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/19Mry9GeaY/?mibextid=wwXIfr',
    Icon: IconFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/oven_sweets_nyc?igsh=YWtpNzBmb2cwbGhi',
    Icon: IconInstagram,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@oven.sweets.nyc?is_from_webapp=1&sender_device=pc',
    Icon: IconTikTok,
  },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-chocolate px-4 py-10 text-cream md:px-8 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div>
          <p className="font-heading text-xl font-semibold">Oven Sweets NYC</p>
          <p className="text-sm text-cream/70">{t.header.tagline}</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-cream/90 md:flex-row md:gap-6">
          <a href="tel:+19295306151" className="flex items-center gap-2 transition-colors hover:text-rose">
            <IconPhone className="h-4 w-4" />
            (929) 530-6151
          </a>
          <span className="flex items-center gap-2">
            <IconMapPin className="h-4 w-4" />
            {t.hero.badgeLocation}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-rose-deep hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} Oven Sweets NYC. {t.footer.rightsReserved}
        </p>
      </div>
    </footer>
  )
}
