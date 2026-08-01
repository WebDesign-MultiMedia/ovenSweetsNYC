import type { ReactNode } from 'react'

interface MenuCardProps {
  title: string
  children: ReactNode
}

export function MenuCard({ title, children }: MenuCardProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-rose/30 bg-white p-6 shadow-sm md:p-7">
      <h3 className="font-heading text-xl font-semibold tracking-wide text-rose-deep md:text-2xl">
        {title}
      </h3>
      <div className="mt-4 flex flex-col gap-5">{children}</div>
    </div>
  )
}

interface MenuSubheadingProps {
  children: ReactNode
}

export function MenuSubheading({ children }: MenuSubheadingProps) {
  return <p className="font-heading text-sm font-semibold uppercase tracking-wide text-chocolate">{children}</p>
}

interface BulletListProps {
  items: string[]
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="mt-2 flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-chocolate/85 md:text-[15px]">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rose" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

interface MenuNoteProps {
  children: ReactNode
}

export function MenuNote({ children }: MenuNoteProps) {
  return <p className="text-sm font-semibold text-chocolate">{children}</p>
}
