import { BulletList, MenuCard, MenuSubheading } from './MenuCard'

export default function CakeMenuCard() {
  return (
    <MenuCard title="CAKE MENU">
      <div>
        <MenuSubheading>Round Cakes:</MenuSubheading>
        <BulletList items={['7" Cake', '9" Cake', '10" Cake']} />
      </div>

      <div>
        <MenuSubheading>Heart Cake:</MenuSubheading>
        <BulletList items={['10" Cake']} />
      </div>

      <div className="rounded-2xl bg-blush px-4 py-3 text-sm text-chocolate/90">
        <p className="font-semibold">We also make customized cakes</p>
        <p>Please private message for inquires</p>
        <p>
          instagram:{' '}
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
        <MenuSubheading>Flavors:</MenuSubheading>
        <BulletList
          items={['Chocolate', 'Strawberry', 'Vanilla', 'Confetti', 'Red Velvet', 'Tiramisu', 'Tres Leches']}
        />
      </div>

      <div>
        <MenuSubheading>Fillings:</MenuSubheading>
        <BulletList
          items={[
            'Vanilla Buttercream',
            'Chocolate buttercream',
            'Nutella',
            'Chocolate fudge',
            'Oreo pieces/ Oreo Cream',
            'Dulce De Leche',
            'Fresh Fruit (Additional Charge)',
          ]}
        />
      </div>
    </MenuCard>
  )
}
