import { useLang } from '../i18n/LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <div>
      <h1>{t('page_about_title')}</h1>
      <p>{t('page_about_text')}</p>
      <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
        <li>{t('page_about_fact1')}</li>
        <li>{t('page_about_fact2')}</li>
        <li>{t('page_about_fact3')}</li>
      </ul>
    </div>
  )
}