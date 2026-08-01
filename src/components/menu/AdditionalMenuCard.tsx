import { BulletList, MenuCard, MenuNote, MenuSubheading } from './MenuCard'

export default function AdditionalMenuCard() {
  return (
    <MenuCard title="ADDITIONAL MENU VARIATIONS">
      <div>
        <MenuSubheading>Filling:</MenuSubheading>
        <BulletList
          items={[
            'Vanilla Buttercream',
            'Chocolate',
            'Strawberry',
            'Nutella',
            'Oreo pieces/Oreo Cream',
            'Dulce De Leche',
            'Coconut',
            'Nuts',
            'Fresh Fruit (Aditional Charge)',
          ]}
        />
      </div>

      <div>
        <MenuSubheading>Flavors:</MenuSubheading>
        <BulletList
          items={[
            'Classic Vanilla',
            'Strawberry short cake',
            'Chocolate',
            'Guava',
            'Lemon',
            'Red Velvet',
            'Carrot Cake',
            'Tiramisu',
            'Coconut',
          ]}
        />
      </div>

      <div className="rounded-2xl bg-blush px-4 py-3">
        <MenuNote>individual cakes are crafted into two-layer cake</MenuNote>
        <p className="mt-1 text-sm text-chocolate/90">
          Oven Sweets NYC offers a variety of flavors and fillings. If you would like to request a specific filling
          and flavor inform us before finalizing your order.
        </p>
      </div>
    </MenuCard>
  )
}
