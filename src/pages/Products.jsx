import { useLang } from '../i18n/LangContext'

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
    { id: 1, name: 'Longjing', category: 'Green', price: '1 200 ₽', weight: '100 g' },
    { id: 2, name: 'Tie Guan Yin', category: 'Oolong', price: '1 800 ₽', weight: '100 g' },
    { id: 3, name: 'Shu Pu-erh Cha Wang', category: 'Pu-erh', price: '950 ₽', weight: '100 g' },
    { id: 4, name: 'Darjeeling FTGFOP1', category: 'Black', price: '1 500 ₽', weight: '100 g' },
    { id: 5, name: 'Sencha', category: 'Green', price: '700 ₽', weight: '100 g' },
    { id: 6, name: 'Da Hong Pao', category: 'Oolong', price: '2 800 ₽', weight: '50 g' },
    { id: 7, name: 'Tea tasting', category: 'Service', price: 'Free', weight: '—' },
    { id: 8, name: 'Tea selection by taste', category: 'Service', price: '300 ₽', weight: '—' },
  ],
}

export default function Products() {
  const { lang, t } = useLang()
  const products = productsData[lang] || productsData.ru

  const thStyle = { border: '1px solid #fff', padding: '0.5rem', textAlign: 'left' }
  const tdStyle = { border: '1px solid #fff', padding: '0.5rem' }

  return (
    <div>
      <h1>{t('page_products_title')}</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={thStyle}>{t('page_products_name')}</th>
            <th style={thStyle}>{t('page_products_category')}</th>
            <th style={thStyle}>{t('page_products_weight')}</th>
            <th style={thStyle}>{t('page_products_price')}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={tdStyle}>{p.name}</td>
              <td style={tdStyle}>{p.category}</td>
              <td style={tdStyle}>{p.weight}</td>
              <td style={tdStyle}>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}