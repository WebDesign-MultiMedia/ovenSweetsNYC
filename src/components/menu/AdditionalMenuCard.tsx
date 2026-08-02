import { useLanguage } from '../../i18n/LanguageContext'
import { BulletList, MenuCard, MenuNote, MenuSubheading } from './MenuCard'

export default function AdditionalMenuCard() {
  const { t } = useLanguage()
  const additional = t.menu.additional

  return (
    <MenuCard title={additional.title}>
      <div>
        <MenuSubheading>{additional.fillingLabel}</MenuSubheading>
        <BulletList items={additional.filling} />
      </div>

      <div>
        <MenuSubheading>{additional.flavorsLabel}</MenuSubheading>
        <BulletList items={additional.flavors} />
      </div>

      <div className="rounded-2xl bg-blush px-4 py-3">
        <MenuNote>{additional.noteBold}</MenuNote>
        <p className="mt-1 text-sm text-chocolate/90">{additional.noteText}</p>
      </div>
    </MenuCard>
  )
}
