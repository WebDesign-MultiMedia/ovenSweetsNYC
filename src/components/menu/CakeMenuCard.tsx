import { useLanguage } from '../../i18n/LanguageContext'
import { BulletList, MenuCard, MenuSubheading } from './MenuCard'

export default function CakeMenuCard() {
  const { t } = useLanguage()
  const cake = t.menu.cake

  return (
    <MenuCard title={cake.title}>
      <div>
        <MenuSubheading>{cake.roundCakesLabel}</MenuSubheading>
        <BulletList items={cake.roundCakes} />
      </div>

      <div>
        <MenuSubheading>{cake.heartCakeLabel}</MenuSubheading>
        <BulletList items={cake.heartCake} />
      </div>

      <div className="rounded-2xl bg-blush px-4 py-3 text-sm text-chocolate/90">
        <p className="font-semibold">{cake.customNoteBold}</p>
        <p>{cake.customNoteText}</p>
        <p>
          {cake.instagramLabel}{' '}
          <a
            href="https://www.instagram.com/oven_sweets_nyc?igsh=YWtpNzBmb2cwbGhi"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-rose-deep underline underline-offset-2"
          >
            oven_sweets_nyc
          </a>
        </p>
      </div>

      <div>
        <MenuSubheading>{cake.flavorsLabel}</MenuSubheading>
        <BulletList items={cake.flavors} />
      </div>

      <div>
        <MenuSubheading>{cake.fillingsLabel}</MenuSubheading>
        <BulletList items={cake.fillings} />
      </div>
    </MenuCard>
  )
}
