import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <span className={`material-symbols-outlined ${styles.brandIcon}`}>local_cafe</span>
            <span className={styles.brandTitle}>{t('page_home_title')}</span>
          </div>
          <p className={styles.brandDesc}>{t('footer_desc')}</p>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>{t('footer_nav')}</h3>
          <div className={styles.navLinks}>
            <Link to="/">{t('nav_home')}</Link>
            <Link to="/products">{t('nav_products')}</Link>
            <Link to="/news">{t('nav_news')}</Link>
            <Link to="/about">{t('nav_about')}</Link>
            <Link to="/feedback">{t('nav_feedback')}</Link>
          </div>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>{t('footer_contacts')}</h3>
          <div className={styles.contactInfo}>
            <p>{t('feedback_address')}</p>
            <p>{t('footer_hours')}</p>
            <p>{t('feedback_phone')}</p>
          </div>
          <p className={styles.copyright}>&copy; 2026 {t('footer_creator')}</p>
        </div>
      </div>
    </footer>
  )
}