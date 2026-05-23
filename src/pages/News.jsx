import { useLang } from '../i18n/LangContext'
import styles from './Page.module.css'

export default function News() {
  const { t } = useLang()

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>{t('page_news_title')}</h1>
      <p className={styles.pageText}>{t('page_news_text')}</p>
      <article style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', background: 'var(--color-surface-container-low)', borderRadius: 'var(--radius-md)' }}>
        <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-headline-sm)', marginBottom: 'var(--spacing-sm)', color: 'var(--color-on-surface)' }}>{t('page_news_item1_title')}</h2>
        <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>{t('page_news_item1_text')}</p>
      </article>
      <article style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'var(--color-surface-container-low)', borderRadius: 'var(--radius-md)' }}>
        <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-headline-sm)', marginBottom: 'var(--spacing-sm)', color: 'var(--color-on-surface)' }}>{t('page_news_item2_title')}</h2>
        <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>{t('page_news_item2_text')}</p>
      </article>
    </div>
  )
}