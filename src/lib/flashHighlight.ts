const HIGHLIGHT_DURATION_MS = 1600

export function flashHighlight(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  el.classList.remove('highlight-flash')
  // Force reflow so the animation restarts if it's still running from a previous click.
  void el.offsetWidth
  el.classList.add('highlight-flash')

  window.setTimeout(() => {
    el.classList.remove('highlight-flash')
  }, HIGHLIGHT_DURATION_MS)
}
