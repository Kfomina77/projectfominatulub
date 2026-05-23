import { useLang } from '../i18n/LangContext'
import styles from './Feedback.module.css'

export default function Feedback() {
  const { t } = useLang()

  return (
    <>
      <section className={styles.pageHero}>
        <img className={styles.pageHeroImg} src="/projectfominatulub/images/tea-herbal.png" alt="" />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.pageHeroLabel}>{t('feedback_hero_label')}</span>
          <h1 className={styles.pageHeroTitle}>{t('feedback_hero_title')}</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contactsGrid}>
          <div className={styles.contactCards}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div>
                <div className={styles.contactLabel}>{t('feedback_phone_label')}</div>
                <a className={styles.contactLink} href="tel:+79085175043">{t('feedback_phone')}</a>
              </div>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <div className={styles.contactLabel}>{t('feedback_email_label')}</div>
                <a className={styles.contactLink} href="mailto:info@teadom.ru">{t('feedback_email')}</a>
              </div>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <div className={styles.contactLabel}>{t('feedback_address_label')}</div>
                <div className={styles.contactValue}>{t('feedback_address')}</div>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>{t('feedback_form_title')}</h2>
            <form className={styles.formGrid} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{t('feedback_name_label')}</label>
                  <input className={styles.formInput} type="text" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{t('feedback_email_field_label')}</label>
                  <input className={styles.formInput} type="email" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{t('feedback_subject_label')}</label>
                <input className={styles.formInput} type="text" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{t('feedback_message_label')}</label>
                <textarea className={styles.formTextarea} rows={5} />
              </div>
              <button className={styles.formSubmit} type="submit">{t('feedback_submit')}</button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.hoursSection}>
        <div className={styles.hoursInner}>
          <div className={styles.hoursLeft}>
            <h3 className={styles.hoursTitle}>{t('feedback_hours_title')}</h3>
            <p className={styles.hoursDesc}>{t('feedback_hours_desc')}</p>
          </div>
          <div className={styles.hoursRight}>
            <div className={styles.hoursTime}>{t('feedback_hours_time')}</div>
            <div className={styles.hoursPeriod}>{t('feedback_hours_period')}</div>
          </div>
        </div>
      </section>
    </>
  )
}