import { useLanguage } from '../../i18n/LanguageContext'
import { BulletList, MenuCard, MenuNote, MenuSubheading } from './MenuCard'

export default function DessertMenuCard() {
  const { t } = useLanguage()
  const dessert = t.menu.dessert

  return (
    <MenuCard title={dessert.title}>
      <div>
        <MenuSubheading>{dessert.flansLabel}</MenuSubheading>
        <BulletList items={dessert.flans} />
      </div>

      <div>
        <MenuSubheading>{dessert.gelatinasLabel}</MenuSubheading>
        <BulletList items={dessert.gelatinas} />
      </div>

      <div>
        <MenuSubheading>{dessert.flavorsLabel}</MenuSubheading>
        <BulletList items={dessert.flavors} />
      </div>

      <div className="rounded-2xl bg-blush px-4 py-3">
        <MenuNote>{dessert.noteBold}</MenuNote>
        <p className="mt-1 text-sm text-chocolate/90">{dessert.noteText}</p>
      </div>
    </MenuCard>
  )
}
