import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'

export default function Home() {
  const { t } = useLang()

  return (
    <div>
      <h1>{t('page_home_title')}</h1>
      <p>{t('page_home_intro')}</p>
      <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>{t('page_home_highlight')}</p>
      <Link to="/products" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1.2rem', background: '#fff', color: '#000', borderRadius: '4px', textDecoration: 'none' }}>
        {t('page_home_cta')}
      </Link>
    </div>
  )
}