import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'

const teaTypes = {
  ru: ['Зелёный', 'Чёрный', 'Улун', 'Пуэр', 'Белый', 'Травяной', 'Индийский', 'Японский'],
  en: ['Green', 'Black', 'Oolong', 'Pu-erh', 'White', 'Herbal', 'Indian', 'Japanese'],
}

export default function Sidebar() {
  const { lang, t } = useLang()
  const types = teaTypes[lang] || teaTypes.ru

  return (
    <section className="layout-main__section">
      <h3>{t('sidebar_links')}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/" style={{ color: '#000' }}>{t('nav_home')}</Link></li>
        <li><Link to="/news" style={{ color: '#000' }}>{t('nav_news')}</Link></li>
        <li><Link to="/about" style={{ color: '#000' }}>{t('nav_about')}</Link></li>
        <li><Link to="/feedback" style={{ color: '#000' }}>{t('nav_feedback')}</Link></li>
        <li><Link to="/products" style={{ color: '#000' }}>{t('nav_products')}</Link></li>
      </ul>
      <h3 style={{ marginTop: '1rem' }}>{t('sidebar_tea_types')}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <h3 style={{ marginTop: '1rem' }}>{t('download')}</h3>
      <div style={{ marginTop: '0.5rem' }}>
        <a href={`/${t('download_file')}`} download style={{ color: '#000', fontSize: '0.9rem' }}>
          {t('download_file')}
        </a>
      </div>
      <h3 style={{ marginTop: '1rem' }}>{t('sidebar_banners')}</h3>
      <div style={{ marginTop: '0.5rem' }}>
        <svg viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg" width="100%">
          <rect width="150" height="60" rx="6" fill="#fff" opacity="0.6" />
          <text x="75" y="35" textAnchor="middle" fontSize="12" fill="#000">{t('banner_new')}</text>
        </svg>
      </div>
    </section>
  )
}