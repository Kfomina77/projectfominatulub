import { useLang } from '../i18n/LangContext'
import styles from './Discounts.module.css'

const discountsData = {
  ru: [
    { name: 'Те Гуань Инь Ван', category: 'Улун', price: '1 275 ₽', old: '1 500 ₽', pct: '-15%', weight: '100 г', img: '/projectfominatulub/images/tea-oolong.png' },
    { name: 'Шу Пуэр «Старое Дерево»', category: 'Пуэр', price: '960 ₽', old: '1 200 ₽', pct: '-20%', weight: '100 г', img: '/projectfominatulub/images/tea-puerh.png' },
    { name: 'Лунцзин «Колодец Дракона»', category: 'Зелёный чай', price: '1 890 ₽', old: '2 100 ₽', pct: '-10%', weight: '100 г', img: '/projectfominatulub/images/tea-green.png' },
    { name: 'Бай Хао Инь Чжень', category: 'Белый чай', price: '2 240 ₽', old: '3 200 ₽', pct: '-30%', weight: '50 г', img: '/projectfominatulub/images/tea-white.png' },
    { name: 'Дарджилинг', category: 'Чёрный чай', price: '1 200 ₽', old: '1 500 ₽', pct: '-20%', weight: '100 г', img: '/projectfominatulub/images/tea-black.png' },
    { name: 'Горный Фиолетовый Юньнань', category: 'Зелёный чай', price: '1 960 ₽', old: '2 450 ₽', pct: '-20%', weight: '50 г', img: '/projectfominatulub/images/tea-purple-yunnan.png' },
    { name: 'Да Хун Пао', category: 'Улун', price: '2 520 ₽', old: '2 800 ₽', pct: '-10%', weight: '50 г', img: '/projectfominatulub/images/tea-oolong.png' },
    { name: 'Травяной сбор «Спокойствие»', category: 'Травяной сбор', price: '480 ₽', old: '600 ₽', pct: '-20%', weight: '100 г', img: '/projectfominatulub/images/tea-herbal.png' },
  ],
  en: [
    { name: 'Tie Guan Yin Wang', category: 'Oolong', price: '1,275 ₽', old: '1,500 ₽', pct: '-15%', weight: '100 g', img: '/projectfominatulub/images/tea-oolong.png' },
    { name: 'Shu Pu-erh "Old Tree"', category: 'Pu-erh', price: '960 ₽', old: '1,200 ₽', pct: '-20%', weight: '100 g', img: '/projectfominatulub/images/tea-puerh.png' },
    { name: 'Longjing "Dragon Well"', category: 'Green Tea', price: '1,890 ₽', old: '2,100 ₽', pct: '-10%', weight: '100 g', img: '/projectfominatulub/images/tea-green.png' },
    { name: 'Bai Hao Yin Zhen', category: 'White Tea', price: '2,240 ₽', old: '3,200 ₽', pct: '-30%', weight: '50 g', img: '/projectfominatulub/images/tea-white.png' },
    { name: 'Darjeeling', category: 'Black Tea', price: '1,200 ₽', old: '1,500 ₽', pct: '-20%', weight: '100 g', img: '/projectfominatulub/images/tea-black.png' },
    { name: 'Mountain Purple Yunnan', category: 'Green Tea', price: '1,960 ₽', old: '2,450 ₽', pct: '-20%', weight: '50 g', img: '/projectfominatulub/images/tea-purple-yunnan.png' },
    { name: 'Da Hong Pao', category: 'Oolong', price: '2,520 ₽', old: '2,800 ₽', pct: '-10%', weight: '50 g', img: '/projectfominatulub/images/tea-oolong.png' },
    { name: 'Herbal Blend "Calm"', category: 'Herbal Blend', price: '480 ₽', old: '600 ₽', pct: '-20%', weight: '100 g', img: '/projectfominatulub/images/tea-herbal.png' },
  ],
}

export default function Discounts() {
  const { lang, t } = useLang()
  const list = discountsData[lang] || discountsData.ru

  return (
    <>
      <section className={styles.pageHero}>
        <img className={styles.pageHeroImg} src="/projectfominatulub/images/tea-puerh.png" alt="" />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.pageHeroLabel}>{t('discounts_hero_label')}</span>
          <h1 className={styles.pageHeroTitle}>{t('discounts_hero_title')}</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('discounts_current_title')}</h2>
          <div className={styles.sectionDivider} />
        </div>
        <div className={styles.discountsGrid}>
          {list.map((d, i) => (
            <div key={i} className={styles.discountCard}>
              <span className={styles.discountBadge}>{d.pct}</span>
              <div className={styles.discountImgWrap}>
                <img className={styles.discountImg} src={d.img} alt={d.name} />
              </div>
              <div className={styles.discountBody}>
                <span className={styles.discountCategory}>{d.category}</span>
                <h3 className={styles.discountName}>{d.name}</h3>
                <span className={styles.discountWeight}>{d.weight}</span>
                <div className={styles.discountPrices}>
                  <span className={styles.discountPrice}>{d.price}</span>
                  <span className={styles.discountOldPrice}>{d.old}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.promoSection}>
        <div className={styles.promoInner}>
          <div className={styles.promoText}>
            <span className={styles.promoLabel}>{t('discounts_promo_label')}</span>
            <h3 className={styles.promoTitle}>{t('discounts_promo_title')}</h3>
            <p className={styles.promoDesc}>{t('discounts_promo_desc')}</p>
          </div>
          <button className={styles.promoBtn}>{t('discounts_promo_btn')}</button>
        </div>
      </section>
    </>
  )
}