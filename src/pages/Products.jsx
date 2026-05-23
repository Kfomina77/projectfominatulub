import { useLang } from '../i18n/LangContext'
import styles from './Products.module.css'

const products = {
  ru: [
    { id: 1, name: 'Лунцзин', category: 'Зелёный чай', price: '1 200 ₽', weight: '100 г', img: '/projectfominatulub/images/tea-green.png' },
    { id: 2, name: 'Те Гуань Инь', category: 'Улун', price: '1 800 ₽', weight: '100 г', img: '/projectfominatulub/images/tea-oolong.png' },
    { id: 3, name: 'Шу Пуэр Ча Ван', category: 'Пуэр', price: '950 ₽', weight: '100 г', img: '/projectfominatulub/images/tea-puerh.png' },
    { id: 4, name: 'Дарджилинг', category: 'Чёрный чай', price: '1 500 ₽', weight: '100 г', img: '/projectfominatulub/images/tea-black.png' },
    { id: 5, name: 'Сенча', category: 'Зелёный чай', price: '700 ₽', weight: '100 г', img: '/projectfominatulub/images/tea-green.png' },
    { id: 6, name: 'Да Хун Пао', category: 'Улун', price: '2 800 ₽', weight: '50 г', img: '/projectfominatulub/images/tea-oolong.png' },
    { id: 7, name: 'Бай Хао Инь Чжень', category: 'Белый чай', price: '3 200 ₽', weight: '50 г', img: '/projectfominatulub/images/tea-white.png' },
    { id: 8, name: 'Горный Фиолетовый Юньнань', category: 'Зелёный чай', price: '2 450 ₽', weight: '50 г', img: '/projectfominatulub/images/tea-purple-yunnan.png' },
  ],
  en: [
    { id: 1, name: 'Longjing', category: 'Green Tea', price: '1,200 ₽', weight: '100 g', img: '/projectfominatulub/images/tea-green.png' },
    { id: 2, name: 'Tie Guan Yin', category: 'Oolong', price: '1,800 ₽', weight: '100 g', img: '/projectfominatulub/images/tea-oolong.png' },
    { id: 3, name: 'Shu Pu-erh Cha Wang', category: 'Pu-erh', price: '950 ₽', weight: '100 g', img: '/projectfominatulub/images/tea-puerh.png' },
    { id: 4, name: 'Darjeeling', category: 'Black Tea', price: '1,500 ₽', weight: '100 g', img: '/projectfominatulub/images/tea-black.png' },
    { id: 5, name: 'Sencha', category: 'Green Tea', price: '700 ₽', weight: '100 g', img: '/projectfominatulub/images/tea-green.png' },
    { id: 6, name: 'Da Hong Pao', category: 'Oolong', price: '2,800 ₽', weight: '50 g', img: '/projectfominatulub/images/tea-oolong.png' },
    { id: 7, name: 'Bai Hao Yin Zhen', category: 'White Tea', price: '3,200 ₽', weight: '50 g', img: '/projectfominatulub/images/tea-white.png' },
    { id: 8, name: 'Mountain Purple Yunnan', category: 'Green Tea', price: '2,450 ₽', weight: '50 g', img: '/projectfominatulub/images/tea-purple-yunnan.png' },
  ],
}

const services = {
  ru: [
    { icon: 'local_cafe', title: 'Дегустация чая', desc: 'Бесплатная дегустация любых сортов под руководством нашего чайного мастера.', price: 'Бесплатно' },
    { icon: 'person_search', title: 'Подбор чая по вкусу', desc: 'Индивидуальная консультация и подбор чая под ваши предпочтения.', price: '300 ₽' },
    { icon: 'celebration', title: 'Чайная церемония', desc: 'Традиционная китайская церемония Гунфу Ча для вас и ваших гостей.', price: '2 500 ₽' },
    { icon: 'card_giftcard', title: 'Подарочная упаковка', desc: 'Упакуем любой чай в подарочную коробку с открыткой.', price: '500 ₽' },
  ],
  en: [
    { icon: 'local_cafe', title: 'Tea tasting', desc: 'Free tasting of any variety guided by our tea master.', price: 'Free' },
    { icon: 'person_search', title: 'Tea selection by taste', desc: 'Individual consultation and tea selection to match your preferences.', price: '300 ₽' },
    { icon: 'celebration', title: 'Tea ceremony', desc: 'Traditional Chinese Gongfu Cha ceremony for you and your guests.', price: '2,500 ₽' },
    { icon: 'card_giftcard', title: 'Gift packaging', desc: 'We will pack any tea in a gift box with a greeting card.', price: '500 ₽' },
  ],
}

export default function Products() {
  const { lang, t } = useLang()
  const productsList = products[lang] || products.ru
  const servicesList = services[lang] || services.ru

  return (
    <>
      <section className={styles.pageHero}>
        <img className={styles.pageHeroImg} src="/projectfominatulub/images/tea-black.png" alt="" />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.pageHeroLabel}>{t('products_hero_label')}</span>
          <h1 className={styles.pageHeroTitle}>{t('products_hero_title')}</h1>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('products_catalog_title')}</h2>
        <div className={styles.accentLine} />
        <div className={styles.productsGrid}>
          {productsList.map((p) => (
            <div key={p.id} className={styles.productCard}>
              <div className={styles.productImgWrap}>
                <img className={styles.productImg} src={p.img} alt={p.name} />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>{p.category}</span>
                <h3 className={styles.productName}>{p.name}</h3>
                <span className={styles.productWeight}>{p.weight}</span>
                <span className={styles.productPrice}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <h2 className={styles.sectionTitle}>{t('products_services_title')}</h2>
          <div className={styles.accentLine} />
          <div className={styles.servicesGrid}>
            {servicesList.map((s, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <div className={styles.servicePrice}>{s.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}