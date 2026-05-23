import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'
import Feedback from './pages/Feedback'
import Products from './pages/Products'
import Discounts from './pages/Discounts'
import { LangProvider } from './i18n/LangContext'

function App() {
  return (
    <LangProvider>
      <BrowserRouter basename="/projectfominatulub">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/products" element={<Products />} />
            <Route path="/discounts" element={<Discounts />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LangProvider>
  )
}

export default App