import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Aside from './Aside'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <Sidebar />
        <article className="layout-main__article">
          {children}
        </article>
        <Aside />
      </main>
      <Footer />
    </div>
  )
}