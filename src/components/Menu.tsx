import AdditionalMenuCard from './menu/AdditionalMenuCard'
import CakeMenuCard from './menu/CakeMenuCard'
import DessertMenuCard from './menu/DessertMenuCard'

interface MenuProps {
  showHeading?: boolean
}

export default function Menu({ showHeading = true }: MenuProps) {
  return (
    <section id="menu" className="px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-semibold text-chocolate md:text-4xl">Our Menu</h2>
            <p className="mt-2 text-chocolate/70">Cakes, flans, and gelatinas made fresh to order.</p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          <CakeMenuCard />
          <DessertMenuCard />
          <AdditionalMenuCard />
        </div>
      </div>
    </section>
  )
}
