import { useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { IconUpload } from './icons'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const HEROTOFU_ENDPOINT = import.meta.env.VITE_HEROTOFU_ENDPOINT

const ITEM_OPTIONS = ['Custom Cake', 'Flan', 'Gelatina', 'Other']

const inputClass =
  'w-full rounded-xl border border-rose/40 bg-cream/40 px-4 py-2.5 text-sm text-chocolate outline-none transition-colors focus:border-rose-deep focus:bg-white'

interface FieldProps {
  label: string
  htmlFor: string
  required?: boolean
  children: ReactNode
}

function Field({ label, htmlFor, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="font-heading text-sm font-semibold text-chocolate">
        {label} {required && <span className="text-rose-deep">*</span>}
      </label>
      {children}
    </div>
  )
}

interface QuoteFormProps {
  showHeading?: boolean
}

export default function QuoteForm({ showHeading = true }: QuoteFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fileName, setFileName] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!HEROTOFU_ENDPOINT) {
      setStatus('error')
      setErrorMessage('This form is not configured yet. Please reach us directly at (929) 530-6151.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(HEROTOFU_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setStatus('success')
      formRef.current?.reset()
      setFileName('')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong sending your request. Please try again or call us directly.')
    }
  }

  if (status === 'success') {
    return (
      <section id="quote" className="px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-rose/30 bg-white p-8 text-center shadow-sm">
          <h2 className="font-heading text-2xl font-semibold text-chocolate">Thank you!</h2>
          <p className="mt-3 text-chocolate/80">
            We received your quote request and will get back to you shortly. In the meantime, feel free to reach us
            at{' '}
            <a className="font-semibold text-rose-deep" href="tel:+19295306151">
              (929) 530-6151
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-6 rounded-full bg-rose-deep px-6 py-2.5 font-heading text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Submit another request
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="quote" className="px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-2xl">
        {showHeading && (
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl font-semibold text-chocolate md:text-4xl">Quote Request</h2>
            <p className="mt-2 text-chocolate/70">Tell us about your event and we'll follow up with pricing.</p>
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col gap-5 rounded-3xl border border-rose/30 bg-white p-6 shadow-sm md:p-8"
        >
          <Field label="Full Name" htmlFor="full_name" required>
            <input id="full_name" name="full_name" type="text" required className={inputClass} />
          </Field>

          <Field label="Phone Number" htmlFor="phone_number" required>
            <input id="phone_number" name="phone_number" type="tel" required className={inputClass} />
          </Field>

          <Field label="Event Date" htmlFor="event_date" required>
            <input id="event_date" name="event_date" type="date" required className={inputClass} />
          </Field>

          <Field label="Item Selection" htmlFor="item_selection" required>
            <select id="item_selection" name="item_selection" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select an item
              </option>
              {ITEM_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Flavor Selection" htmlFor="flavor_selection">
            <input
              id="flavor_selection"
              name="flavor_selection"
              type="text"
              placeholder="e.g. Tres Leches"
              className={inputClass}
            />
          </Field>

          <Field label="Filling Selection" htmlFor="filling_selection">
            <input
              id="filling_selection"
              name="filling_selection"
              type="text"
              placeholder="e.g. Dulce De Leche"
              className={inputClass}
            />
          </Field>

          <Field label="Inspiration Photo" htmlFor="inspiration_photo">
            <label
              htmlFor="inspiration_photo"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-rose/50 bg-blush/40 px-4 py-6 text-center text-sm text-chocolate/70 transition-colors hover:bg-blush/70"
            >
              <IconUpload className="h-5 w-5 flex-none text-rose-deep" />
              {fileName || 'Click to upload an image'}
            </label>
            <input
              id="inspiration_photo"
              name="inspiration_photo"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
            />
          </Field>

          <Field label="Additional Design Details" htmlFor="additional_details">
            <textarea
              id="additional_details"
              name="additional_details"
              rows={4}
              placeholder="Tell us about your event, theme, colors, or design ideas..."
              className={inputClass}
            />
          </Field>

          {status === 'error' && (
            <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 rounded-full bg-rose-deep px-6 py-3 font-heading text-base font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-chocolate disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Quote Request'}
          </button>
        </form>
      </div>
    </section>
  )
}
