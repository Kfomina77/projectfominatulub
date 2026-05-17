import { useLang } from '../i18n/LangContext'

export default function Home() {
  const { t } = useLang()

  return (
    <div>
      <h1>{t('page_home_title')}</h1>
      <p>{t('page_news_title')}</p>
      <p>{t('page_news_text')}</p>
    </div>
  )
}