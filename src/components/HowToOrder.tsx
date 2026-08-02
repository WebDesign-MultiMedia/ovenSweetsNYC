import { useLanguage } from '../i18n/LanguageContext'
import { IconArrowRight } from './icons'

type StepTarget = 'menu' | 'quote'

const STEP_TARGETS: StepTarget[] = ['menu', 'menu', 'quote', 'quote']

interface HowToOrderProps {
  showHeading?: boolean
  onStepClick: (target: StepTarget) => void
}

export default function HowToOrder({ showHeading = true, onStepClick }: HowToOrderProps) {
  const { t } = useLanguage()

  return (
    <section id="how-to-order" className="bg-blush/60 px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        {showHeading && (
          <h2 className="mb-10 text-center font-heading text-3xl font-semibold text-chocolate md:text-4xl">
            {t.howToOrder.heading}
          </h2>
        )}

        <ol className="grid gap-5 md:grid-cols-2 md:gap-6">
          {t.howToOrder.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-3xl border border-rose/30 bg-white p-5 shadow-sm md:p-6"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-rose-deep font-heading text-lg font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold tracking-wide text-chocolate md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-chocolate/80 md:text-[15px]">{step.description}</p>
                <button
                  type="button"
                  onClick={() => onStepClick(STEP_TARGETS[index])}
                  className="mt-2 inline-flex items-center gap-1 font-heading text-sm font-semibold text-rose-deep transition-colors hover:text-chocolate"
                >
                  {step.linkLabel}
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
