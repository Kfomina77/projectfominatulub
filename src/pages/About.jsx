import { useLang } from '../i18n/LangContext'
import styles from './About.module.css'

const facts = {
  ru: [
    { number: '200+', label: 'Сортов чая' },
    { number: '10', label: 'Лет на рынке' },
    { number: '15', label: 'Регионов Азии' },
    { number: '5000+', label: 'Довольных гостей' },
  ],
  en: [
    { number: '200+', label: 'Tea varieties' },
    { number: '10', label: 'Years on the market' },
    { number: '15', label: 'Asian regions' },
    { number: '5000+', label: 'Happy guests' },
  ],
}

export default function About() {
  const { lang, t } = useLang()
  const factsList = facts[lang] || facts.ru

  return (
    <>
      <section className={styles.pageHero}>
        <img className={styles.pageHeroImg} src="/projectfominatulub/images/tea-ceremony-set.png" alt="" />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.pageHeroLabel}>{t('about_hero_label')}</span>
          <h1 className={styles.pageHeroTitle}>{t('about_hero_title')}</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.storyGrid}>
          <img className={styles.storyImg} src="/projectfominatulub/images/tea-green.png" alt="" />
          <div className={styles.storyText}>
            <h2 className={styles.sectionTitle}>{t('about_story_title')}</h2>
            <div className={styles.accentLine} />
            <p className={styles.storyDesc}>{t('about_story_text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesInner}>
          <h2 className={styles.sectionTitle}>{t('about_values_title')}</h2>
          <div className={styles.accentLine} style={{ marginBottom: 'var(--spacing-lg)' }} />
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={`material-symbols-outlined ${styles.valueIcon}`}>eco</span>
              <h3 className={styles.valueTitle}>{t('about_value1_title')}</h3>
              <p className={styles.valueDesc}>{t('about_value1_desc')}</p>
            </div>
            <div className={styles.valueCard}>
              <span className={`material-symbols-outlined ${styles.valueIcon}`}>handshake</span>
              <h3 className={styles.valueTitle}>{t('about_value2_title')}</h3>
              <p className={styles.valueDesc}>{t('about_value2_desc')}</p>
            </div>
            <div className={styles.valueCard}>
              <span className={`material-symbols-outlined ${styles.valueIcon}`}>verified</span>
              <h3 className={styles.valueTitle}>{t('about_value3_title')}</h3>
              <p className={styles.valueDesc}>{t('about_value3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.factsSection}>
        <div className={styles.factsInner}>
          <div className={styles.factsGrid}>
            {factsList.map((f, i) => (
              <div key={i} className={styles.factCard}>
                <div className={styles.factNumber}>{f.number}</div>
                <div className={styles.factLabel}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}