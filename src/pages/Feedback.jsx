import { useLang } from '../i18n/LangContext'
import styles from './Page.module.css'

export default function Feedback() {
  const { t } = useLang()

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>{t('page_feedback_title')}</h1>
      <p className={styles.pageText}>{t('page_feedback_text')}</p>
      <div style={{ marginTop: 'var(--spacing-lg)', display: 'grid', gap: 'var(--spacing-md)', maxWidth: 480 }}>
        <a href={`tel:${t('page_feedback_phone').replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--color-on-surface)', fontSize: 'var(--text-body-lg)', textDecoration: 'none' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>phone</span>
          {t('page_feedback_phone')}
        </a>
        <a href={`mailto:${t('page_feedback_email')}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--color-on-surface)', fontSize: 'var(--text-body-lg)', textDecoration: 'none' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>mail</span>
          {t('page_feedback_email')}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--color-on-surface)', fontSize: 'var(--text-body-lg)' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>location_on</span>
          {t('page_feedback_address')}
        </div>
      </div>
    </div>
  )
}