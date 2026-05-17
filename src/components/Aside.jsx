import { useLang } from '../i18n/LangContext'

export default function Aside() {
  const { t } = useLang()

  const tags = ['HTML', 'CSS', 'React', 'SVG', 'Figma', 'UX', 'UI', 'Design']

  return (
    <aside className="layout-main__aside">
      <h3>{t('sidebar_tags')}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.5rem' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: 'rgba(255,255,255,0.4)',
              padding: '2px 8px',
              borderRadius: '3px',
              fontSize: '0.8rem',
              cursor: 'default',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 style={{ marginTop: '1rem' }}>{t('sidebar_banners')}</h3>
      <div style={{ marginTop: '0.5rem' }}>
        <svg viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg" width="100%">
          <rect width="150" height="60" rx="6" fill="#fff" opacity="0.6" />
          <text x="75" y="35" textAnchor="middle" fontSize="12" fill="#000">Banner</text>
        </svg>
      </div>
    </aside>
  )
}