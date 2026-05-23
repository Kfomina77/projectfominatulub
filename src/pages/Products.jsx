import { useLang } from '../i18n/LangContext'
import styles from './Products.module.css'

const productsData = {
  ru: [
    { id: 1, name: 'Лунцзин', category: 'Зелёный', price: '1 200 ₽', weight: '100 г' },
    { id: 2, name: 'Те Гуань Инь', category: 'Улун', price: '1 800 ₽', weight: '100 г' },
    { id: 3, name: 'Шу Пуэр Ча Ван', category: 'Пуэр', price: '950 ₽', weight: '100 г' },
    { id: 4, name: 'Дареджилинг FTGFOP1', category: 'Чёрный', price: '1 500 ₽', weight: '100 г' },
    { id: 5, name: 'Сенча', category: 'Зелёный', price: '700 ₽', weight: '100 г' },
    { id: 6, name: 'Да Хун Пао', category: 'Улун', price: '2 800 ₽', weight: '50 г' },
    { id: 7, name: 'Дегустация чая', category: 'Услуга', price: 'Бесплатно', weight: '—' },
    { id: 8, name: 'Подбор чая по вкусу', category: 'Услуга', price: '300 ₽', weight: '—' },
  ],
  en: [
    { id: 1, name: 'Longjing', category: 'Green', price: '1,200 ₽', weight: '100 g' },
    { id: 2, name: 'Tie Guan Yin', category: 'Oolong', price: '1,800 ₽', weight: '100 g' },
    { id: 3, name: 'Shu Pu-erh Cha Wang', category: 'Pu-erh', price: '950 ₽', weight: '100 g' },
    { id: 4, name: 'Darjeeling FTGFOP1', category: 'Black', price: '1,500 ₽', weight: '100 g' },
    { id: 5, name: 'Sencha', category: 'Green', price: '700 ₽', weight: '100 g' },
    { id: 6, name: 'Da Hong Pao', category: 'Oolong', price: '2,800 ₽', weight: '50 g' },
    { id: 7, name: 'Tea tasting', category: 'Service', price: 'Free', weight: '—' },
    { id: 8, name: 'Tea selection by taste', category: 'Service', price: '300 ₽', weight: '—' },
  ],
}

export default function Products() {
  const { lang, t } = useLang()
  const products = productsData[lang] || productsData.ru

  return (
    <div className={styles.productPage}>
      <h1 className={styles.title}>{t('page_products_title')}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t('page_products_name')}</th>
            <th>{t('page_products_category')}</th>
            <th>{t('page_products_weight')}</th>
            <th>{t('page_products_price')}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td className={styles.categoryCell}>{p.category}</td>
              <td>{p.weight}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}