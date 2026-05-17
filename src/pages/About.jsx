import { useLang } from '../i18n/LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <div>
      <h1>{t('page_about_title')}</h1>
      <p>{t('page_about_title')}</p>
    </div>
  )
}