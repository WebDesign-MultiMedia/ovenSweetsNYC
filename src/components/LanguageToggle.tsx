import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
      className="flex flex-none items-center gap-1 rounded-full border border-rose-deep/30 bg-white/70 px-3 py-1.5 font-heading text-xs font-semibold transition-colors hover:bg-blush"
    >
      <span className={language === 'en' ? 'text-rose-deep' : 'text-chocolate/40'}>EN</span>
      <span className="text-chocolate/30">/</span>
      <span className={language === 'es' ? 'text-rose-deep' : 'text-chocolate/40'}>ES</span>
    </button>
  )
}
