import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="layout-footer">
      <span>{t('footer_contacts')}: {t('page_feedback_phone')} | {t('page_feedback_email')}</span>
      <span>{t('footer_creator')} &copy; 2010–2026</span>
    </footer>
  )
}