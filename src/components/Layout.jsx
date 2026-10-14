import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// Estrutura base de toda página: cabeçalho, área de conteúdo e rodapé.
// O <Outlet /> é o "espaço vazio" onde o React Router encaixa a página atual.
export default function Layout() {
  return (
    <div className="layout">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
