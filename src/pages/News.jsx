import { useLang } from '../i18n/LangContext'
import styles from './News.module.css'

const articles = {
  ru: [
    {
      id: 1,
      date: '15 мая 2026',
      category: 'События',
      title: 'Дегустация тайваньских улунов',
      excerpt: 'Приглашаем на бесплатную дегустацию: Алишань, Дун Дин и Пэн Фэн. Начало в 18:00, вход свободный.',
      img: '/projectfominatulub/images/tea-oolong.png',
    },
    {
      id: 2,
      date: '8 мая 2026',
      category: 'Акция',
      title: 'Скидка 20% на прессованный пуэр',
      excerpt: 'До конца мая действует скидка на весь ассортимент прессованного пуэра — от то ча бина до мини-бинов.',
      img: '/projectfominatulub/images/tea-puerh.png',
    },
    {
      id: 3,
      date: '1 мая 2026',
      category: 'Новинки',
      title: 'Свежий урожай Лунцзина',
      excerpt: 'Поступила первая партия весеннего Лунцзина 2026 из Ханчжоу. Количество ограничено.',
      img: '/projectfominatulub/images/tea-green.png',
    },
    {
      id: 4,
      date: '20 апреля 2026',
      category: 'Культура',
      title: 'Мастер-класс: Гунфу Ча',
      excerpt: 'Узнайте тонкости традиционной китайской чайной церемонии. Мастер Ван Ли покажет базовые навыки.',
      img: '/projectfominatulub/images/tea-ceremony-set.png',
    },
    {
      id: 5,
      date: '10 апреля 2026',
      category: 'Подарки',
      title: 'Подарочные наборы к 1 сентября',
      excerpt: 'Собрали изысканные подарочные наборы для любого бюджета — от мини-комбо до премиальной коллекции.',
      img: '/projectfominatulub/images/tea-black.png',
    },
    {
      id: 6,
      date: '28 марта 2026',
      category: 'События',
      title: 'Вечер белого чая',
      excerpt: 'Дегустация редких сортов белого чая: Бай Хао Инь Чжень, Бай Му Дань и Шоу Мэй.',
      img: '/projectfominatulub/images/tea-white.png',
    },
  ],
  en: [
    {
      id: 1,
      date: 'May 15, 2026',
      category: 'Events',
      title: 'Taiwanese oolong tasting',
      excerpt: 'Join our free tasting: Alishan, Dong Ding and Peng Feng. Starts at 6 PM, open admission.',
      img: '/projectfominatulub/images/tea-oolong.png',
    },
    {
      id: 2,
      date: 'May 8, 2026',
      category: 'Sale',
      title: '20% off pressed pu-erh',
      excerpt: 'Discount on our entire pressed pu-erh range — from tuo cha bing to mini-bings — valid through the end of May.',
      img: '/projectfominatulub/images/tea-puerh.png',
    },
    {
      id: 3,
      date: 'May 1, 2026',
      category: 'New arrivals',
      title: 'Fresh Longjing harvest',
      excerpt: 'The first batch of spring 2026 Longjing from Hangzhou has arrived. Limited quantity.',
      img: '/projectfominatulub/images/tea-green.png',
    },
    {
      id: 4,
      date: 'April 20, 2026',
      category: 'Culture',
      title: 'Gongfu Cha masterclass',
      excerpt: 'Discover the nuances of traditional Chinese tea ceremony. Master Wang Li will demonstrate basic skills.',
      img: '/projectfominatulub/images/tea-ceremony-set.png',
    },
    {
      id: 5,
      date: 'April 10, 2026',
      category: 'Gifts',
      title: 'Gift sets for the new school year',
      excerpt: 'Curated gift sets for any budget — from mini combos to premium collections.',
      img: '/projectfominatulub/images/tea-black.png',
    },
    {
      id: 6,
      date: 'March 28, 2026',
      category: 'Events',
      title: 'White tea evening',
      excerpt: 'Tasting rare white teas: Bai Hao Yin Zhen, Bai Mu Dan and Shou Mei.',
      img: '/projectfominatulub/images/tea-white.png',
    },
  ],
}

export default function News() {
  const { lang, t } = useLang()
  const list = articles[lang] || articles.ru

  return (
    <>
      <section className={styles.pageHero}>
        <img className={styles.pageHeroImg} src="/projectfominatulub/images/hero-bg.png" alt="" />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <span className={styles.pageHeroLabel}>{t('news_hero_label')}</span>
          <h1 className={styles.pageHeroTitle}>{t('news_hero_title')}</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.articlesGrid}>
          {list.map((a) => (
            <article key={a.id} className={styles.articleCard}>
              <div className={styles.articleImgWrap}>
                <img className={styles.articleImg} src={a.img} alt={a.title} />
              </div>
              <div className={styles.articleBody}>
                <div className={styles.articleMeta}>
                  <span className={styles.articleDate}>{a.date}</span>
                  <span className={styles.articleCategory}>{a.category}</span>
                </div>
                <h2 className={styles.articleTitle}>{a.title}</h2>
                <p className={styles.articleExcerpt}>{a.excerpt}</p>
                <span className={styles.readMore}>
                  {t('news_read_more')}
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.subscribeSection}>
        <div className={styles.subscribeCard}>
          <div className={styles.subscribeText}>
            <h3 className={styles.subscribeTitle}>{t('news_subscribe_title')}</h3>
            <p className={styles.subscribeDesc}>{t('news_subscribe_desc')}</p>
          </div>
          <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
            <input className={styles.subscribeInput} type="email" placeholder={t('news_email_placeholder')} />
            <button className={styles.subscribeBtn} type="submit">{t('news_subscribe_btn')}</button>
          </form>
        </div>
      </section>
    </>
  )
}