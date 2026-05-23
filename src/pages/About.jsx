import { useLang } from '../i18n/LangContext'
import styles from './Page.module.css'

export default function About() {
  const { t } = useLang()

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>{t('page_about_title')}</h1>
      <p className={styles.pageText}>{t('page_about_text')}</p>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-md)', lineHeight: 2 }}>
        <li style={{ color: 'var(--color-on-surface)', fontSize: 'var(--text-body-lg)' }}>&#10003; {t('page_about_fact1')}</li>
        <li style={{ color: 'var(--color-on-surface)', fontSize: 'var(--text-body-lg)' }}>&#10003; {t('page_about_fact2')}</li>
        <li style={{ color: 'var(--color-on-surface)', fontSize: 'var(--text-body-lg)' }}>&#10003; {t('page_about_fact3')}</li>
      </ul>
    </div>
  )
}