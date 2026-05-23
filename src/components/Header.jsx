import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import styles from './Header.module.css'

const navItems = [
  { path: '/', key: 'nav_home' },
  { path: '/news', key: 'nav_news' },
  { path: '/about', key: 'nav_about' },
  { path: '/feedback', key: 'nav_feedback' },
  { path: '/products', key: 'nav_products' },
  { path: '/discounts', key: 'nav_discounts' },
]

export default function Header() {
  const { lang, setLang, t } = useLang()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <span className={`material-symbols-outlined ${styles.logoIcon}`}>local_cafe</span>
            <span className={styles.logoText}>{t('page_home_title')}</span>
          </Link>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={location.pathname === item.path ? styles.active : ''}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className={styles.lang}>
            <button
              className={`${styles.langBtn} ${lang === 'ru' ? styles.active : ''}`}
              onClick={() => setLang('ru')}
            >
              RU
            </button>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={location.pathname === item.path ? styles.active : ''}
          >
            {t(item.key)}
          </Link>
        ))}
        <div className={styles.mobileLang}>
          <button
            className={`${styles.langBtn} ${lang === 'ru' ? styles.active : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <button
            className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </>
  )
}