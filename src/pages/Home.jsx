import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import styles from './Home.module.css'

const varieties = {
  ru: [
    { key: 'green', name: 'Зелёный чай', desc: 'Свежесть весенних полей и энергия пробуждения в каждом глотке.', img: '/projectfominatulub/images/tea-green.png' },
    { key: 'black', name: 'Чёрный чай', desc: 'Насыщенный вкус и глубокий аромат для уютных вечеров.', img: '/projectfominatulub/images/tea-black.png' },
    { key: 'oolong', name: 'Улун', desc: 'Сложные цветочные ноты и бесконечное многообразие послевкусий.', img: '/projectfominatulub/images/tea-oolong.png' },
    { key: 'puerh', name: 'Пуэр', desc: 'Выдержанный чай с землистыми нотами и мощным характером.', img: '/projectfominatulub/images/tea-puerh.png' },
    { key: 'white', name: 'Белый чай', desc: 'Самый нежный из всех видов, сохраняющий природную чистоту.', img: '/projectfominatulub/images/tea-white.png' },
    { key: 'herbal', name: 'Травяной сбор', desc: 'Целебная сила дикой природы в ароматной композиции без кофеина.', img: '/projectfominatulub/images/tea-herbal.png' },
  ],
  en: [
    { key: 'green', name: 'Green Tea', desc: 'Freshness of spring fields and the energy of awakening in every sip.', img: '/projectfominatulub/images/tea-green.png' },
    { key: 'black', name: 'Black Tea', desc: 'Rich taste and deep aroma for cozy evenings.', img: '/projectfominatulub/images/tea-black.png' },
    { key: 'oolong', name: 'Oolong', desc: 'Complex floral notes and endless variety of aftertastes.', img: '/projectfominatulub/images/tea-oolong.png' },
    { key: 'puerh', name: 'Pu-erh', desc: 'Aged tea with earthy notes and a powerful character.', img: '/projectfominatulub/images/tea-puerh.png' },
    { key: 'white', name: 'White Tea', desc: 'The most delicate of all varieties, preserving natural purity.', img: '/projectfominatulub/images/tea-white.png' },
    { key: 'herbal', name: 'Herbal Blend', desc: 'Healing power of wild nature in an aromatic caffeine-free composition.', img: '/projectfominatulub/images/tea-herbal.png' },
  ],
}

const discounts = {
  ru: [
    { name: 'Те Гуань Инь Ван', price: '1 275 ₽', old: '1 500 ₽', pct: '-15%', img: '/projectfominatulub/images/tea-oolong.png' },
    { name: 'Пуэр Шу «Старое Дерево»', price: '960 ₽', old: '1 200 ₽', pct: '-20%', img: '/projectfominatulub/images/tea-puerh.png' },
    { name: 'Лундзин «Колодец Дракона»', price: '1 890 ₽', old: '2 100 ₽', pct: '-10%', img: '/projectfominatulub/images/tea-purple-yunnan.png' },
    { name: 'Бай Хао Инь Чжень', price: '2 240 ₽', old: '3 200 ₽', pct: '-30%', img: '/projectfominatulub/images/tea-white.png' },
  ],
  en: [
    { name: 'Tie Guan Yin Wang', price: '1,275 ₽', old: '1,500 ₽', pct: '-15%', img: '/projectfominatulub/images/tea-oolong.png' },
    { name: 'Shu Pu-erh "Old Tree"', price: '960 ₽', old: '1,200 ₽', pct: '-20%', img: '/projectfominatulub/images/tea-puerh.png' },
    { name: 'Longjing "Dragon Well"', price: '1,890 ₽', old: '2,100 ₽', pct: '-10%', img: '/projectfominatulub/images/tea-purple-yunnan.png' },
    { name: 'Bai Hao Yin Zhen', price: '2,240 ₽', old: '3,200 ₽', pct: '-30%', img: '/projectfominatulub/images/tea-white.png' },
  ],
}

const tags = {
  ru: ['Зелёный чай', 'Чёрный чай', 'Улун', 'Пуэр', 'Церемония', 'Подарки', 'Мастер-классы'],
  en: ['Green Tea', 'Black Tea', 'Oolong', 'Pu-erh', 'Ceremony', 'Gifts', 'Masterclasses'],
}

export default function Home() {
  const { lang, t } = useLang()
  const varietiesList = varieties[lang] || varieties.ru
  const discountsList = discounts[lang] || discounts.ru
  const tagsList = tags[lang] || tags.ru

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <img className={styles.heroImg} src="/projectfominatulub/images/hero-bg.png" alt="" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>{t('hero_label')}</span>
          <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
          <p className={styles.heroText}>{t('hero_text')}</p>
          <div className={styles.heroButtons}>
            <Link to="/products" className={styles.btnPrimary}>{t('hero_cta')}</Link>
            <Link to="/about" className={styles.btnOutline}>{t('hero_about')}</Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className={`${styles.section} ${styles.newArrivals}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('new_title')}</h2>
            <div className={styles.sectionDivider} />
          </div>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImgWrap}>
              <img className={styles.featuredImg} src="/projectfominatulub/images/tea-purple-yunnan.png" alt={t('new_name')} />
              <span className={styles.badge}>New</span>
            </div>
            <div className={styles.featuredInfo}>
              <span className={styles.featuredLabel}>{t('new_label')}</span>
              <h3 className={styles.featuredTitle}>{t('new_name')}</h3>
              <p className={styles.featuredDesc}>{t('new_desc')}</p>
              <div>
                <span className={styles.featuredPrice}>{t('new_price')}</span>
              </div>
              <button className={styles.btnPrimary} style={{ marginTop: 'var(--spacing-sm)' }}>{t('new_btn')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties */}
      <section className={`${styles.section} ${styles.varieties}`}>
        <div className={styles.sectionInner}>
          <div className={styles.varietiesHeader}>
            <div className={styles.varietiesHeaderLeft}>
              <h2 className={styles.sectionTitle}>{t('varieties_title')}</h2>
              <div className={styles.accentLine} />
            </div>
            <p className={styles.varietiesDesc}>{t('varieties_desc')}</p>
          </div>
          <div className={styles.varietiesGrid}>
            {varietiesList.map((v) => (
              <div key={v.key} className={styles.varietyCard}>
                <div className={styles.varietyImgWrap}>
                  <img className={styles.varietyImg} src={v.img} alt={v.name} />
                </div>
                <h3 className={styles.varietyName}>{v.name}</h3>
                <p className={styles.varietyPreview}>{v.desc}</p>
                <Link to="/products" className={styles.varietyLink}>
                  {t('varieties_catalog')}
                  <span className="material-symbols-outlined" style={{ fontSize: 16, transition: 'transform 0.3s' }}>arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className={`${styles.section} ${styles.discounts}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('discounts_title')}</h2>
          </div>
          <div className={styles.discountsGrid}>
            {discountsList.map((d, i) => (
              <div key={i} className={styles.discountCard}>
                <span className={styles.discountBadge}>{d.pct}</span>
                <div className={styles.discountImgWrap}>
                  <img className={styles.discountImg} src={d.img} alt={d.name} />
                </div>
                <h4 className={styles.discountName}>{d.name}</h4>
                <div className={styles.discountPrices}>
                  <span className={styles.discountPrice}>{d.price}</span>
                  <span className={styles.discountOldPrice}>{d.old}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.offerBanner}>
            <div className={styles.offerText}>
              <span className={styles.offerLabel}>{t('offer_label')}</span>
              <h3 className={styles.offerTitle}>{t('offer_title')}</h3>
              <p className={styles.offerDesc}>{t('offer_desc')}</p>
              <button className={styles.offerBtn}>{t('offer_btn')}</button>
            </div>
            <div className={styles.offerImgWrap}>
              <img className={styles.offerImg} src="/projectfominatulub/images/tea-ceremony-set.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className={`${styles.section} ${styles.tags}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.tagsTitle}>{t('tags_title')}</h2>
          <div className={styles.tagsWrap}>
            {tagsList.map((tag) => (
              <a key={tag} href="#" className={styles.tag}>{tag}</a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}