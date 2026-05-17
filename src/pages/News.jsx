import { useLang } from '../i18n/LangContext'

export default function News() {
  const { t } = useLang()

  return (
    <div>
      <h1>{t('page_news_title')}</h1>
      <p>{t('page_news_text')}</p>

      <article style={{ marginTop: '1.5rem', padding: '0.8rem', background: 'rgba(255,255,255,0.3)', borderRadius: '6px' }}>
        <h2>{t('page_news_item1_title')}</h2>
        <p>{t('page_news_item1_text')}</p>
      </article>

      <article style={{ marginTop: '1rem', padding: '0.8rem', background: 'rgba(255,255,255,0.3)', borderRadius: '6px' }}>
        <h2>{t('page_news_item2_title')}</h2>
        <p>{t('page_news_item2_text')}</p>
      </article>
    </div>
  )
}