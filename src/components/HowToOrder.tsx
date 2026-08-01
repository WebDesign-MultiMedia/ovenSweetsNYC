interface Step {
  number: number
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: 1,
    title: 'CHOOSE YOUR CAKE',
    description: 'Pick a size, shape, or cake tier/ customized cake',
  },
  {
    number: 2,
    title: 'SELECT FLAVOR & FILLING',
    description: 'Browse our flavors and fillings menu.',
  },
  {
    number: 3,
    title: 'SHARE YOUR DESIGN',
    description: 'Send inspiration photos/ customized cake idea and event details.',
  },
  {
    number: 4,
    title: 'CONFIRM & DEPOSIT',
    description: 'Secure your date with a 50% deposit.',
  },
]

interface HowToOrderProps {
  showHeading?: boolean
}

export default function HowToOrder({ showHeading = true }: HowToOrderProps) {
  return (
    <section id="how-to-order" className="bg-blush/60 px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        {showHeading && (
          <h2 className="mb-10 text-center font-heading text-3xl font-semibold text-chocolate md:text-4xl">
            HOW TO ORDER
          </h2>
        )}

        <ol className="grid gap-5 md:grid-cols-2 md:gap-6">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="flex gap-4 rounded-3xl border border-rose/30 bg-white p-5 shadow-sm md:p-6"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-rose-deep font-heading text-lg font-semibold text-white">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold tracking-wide text-chocolate md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-chocolate/80 md:text-[15px]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
