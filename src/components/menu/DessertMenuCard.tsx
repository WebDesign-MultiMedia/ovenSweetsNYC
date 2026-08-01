import { BulletList, MenuCard, MenuNote, MenuSubheading } from './MenuCard'

export default function DessertMenuCard() {
  return (
    <MenuCard title="DESSERT MENU">
      <div>
        <MenuSubheading>Flans:</MenuSubheading>
        <BulletList
          items={['Classic flan (Heart, round or butterfly shape)', 'Chocoflan', 'Mini flans', 'Mini chocoflans']}
        />
      </div>

      <div>
        <MenuSubheading>Gelatinas:</MenuSubheading>
        <BulletList items={['Mosaico', 'Gelatina', 'Mini Mosaicos', 'Mini Gelatinas']} />
      </div>

      <div>
        <MenuSubheading>Flavors:</MenuSubheading>
        <BulletList items={['Strawberry', 'Mango', 'Lime', 'Chocolate']} />
      </div>

      <div className="rounded-2xl bg-blush px-4 py-3">
        <MenuNote>Flans and Gelatinas can include Fresh Fruit (Additional Charge)</MenuNote>
        <p className="mt-1 text-sm text-chocolate/90">Flavor requests are more than welcomed</p>
      </div>
    </MenuCard>
  )
}
