import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="layout-footer">
      <span>{t('footer_contacts')}: +7 908 517 50 43</span>
      <span>{t('footer_creator')}: &copy; 2026</span>
    </footer>
  )
}