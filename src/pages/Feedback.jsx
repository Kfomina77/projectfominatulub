import { useLang } from '../i18n/LangContext'

export default function Feedback() {
  const { t } = useLang()

  return (
    <div>
      <h1>{t('page_feedback_title')}</h1>
      <p>{t('page_feedback_text')}</p>
      <ul style={{ marginTop: '1rem', lineHeight: '2' }}>
        <li>{t('page_feedback_phone')}</li>
        <li>{t('page_feedback_email')}</li>
        <li>{t('page_feedback_address')}</li>
      </ul>
    </div>
  )
}