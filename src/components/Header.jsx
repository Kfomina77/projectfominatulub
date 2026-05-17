import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'

export default function Header() {
  const { lang, setLang, t } = useLang()

  return (
    <header className="layout-header">
      <Link to="/">
        <svg
          className="layout-header__logo"
          viewBox="0 0 120 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="36" height="36" rx="4" fill="white" opacity="0.9" />
          <text x="20" y="26" fontSize="20" textAnchor="middle" fill="#2e8b57" fontWeight="bold">&#9749;</text>
          <text x="44" y="28" fontSize="18" fill="white" fontWeight="bold">
            {t('page_home_title')}
          </text>
        </svg>
      </Link>
      <nav className="layout-header__nav">
        <Link to="/">{t('nav_home')}</Link>
        <Link to="/news">{t('nav_news')}</Link>
        <Link to="/about">{t('nav_about')}</Link>
        <Link to="/feedback">{t('nav_feedback')}</Link>
        <Link to="/products">{t('nav_products')}</Link>
      </nav>
      <div className="layout-header__lang">
        <button
          className={lang === 'ru' ? 'active' : ''}
          onClick={() => setLang('ru')}
        >
          {t('lang_ru')}
        </button>
        <button
          className={lang === 'en' ? 'active' : ''}
          onClick={() => setLang('en')}
        >
          {t('lang_en')}
        </button>
      </div>
    </header>
  )
}