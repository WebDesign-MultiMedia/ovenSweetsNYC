import { useEffect, useState } from 'react'

const DESKTOP_QUERY = '(min-width: 768px)'

function getMatches(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia(DESKTOP_QUERY).matches
}

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(getMatches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY)
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isDesktop
}
