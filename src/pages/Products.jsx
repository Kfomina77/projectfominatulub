import { useLang } from '../i18n/LangContext'

const productsData = {
  ru: [
    { id: 1, name: 'Курс по HTML', price: '5 000 ₽' },
    { id: 2, name: 'Курс по CSS', price: '5 000 ₽' },
    { id: 3, name: 'Курс по React', price: '10 000 ₽' },
    { id: 4, name: 'Консультация', price: '1 000 ₽/час' },
  ],
  en: [
    { id: 1, name: 'HTML Course', price: '5 000 ₽' },
    { id: 2, name: 'CSS Course', price: '5 000 ₽' },
    { id: 3, name: 'React Course', price: '10 000 ₽' },
    { id: 4, name: 'Consultation', price: '1 000 ₽/hour' },
  ],
}

export default function Products() {
  const { lang, t } = useLang()
  const products = productsData[lang] || productsData.ru

  return (
    <div>
      <h1>{t('page_products_title')}</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #fff', padding: '0.5rem', textAlign: 'left' }}>
              {lang === 'ru' ? 'Название' : 'Name'}
            </th>
            <th style={{ border: '1px solid #fff', padding: '0.5rem', textAlign: 'left' }}>
              {lang === 'ru' ? 'Цена' : 'Price'}
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={{ border: '1px solid #fff', padding: '0.5rem' }}>{p.name}</td>
              <td style={{ border: '1px solid #fff', padding: '0.5rem' }}>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}