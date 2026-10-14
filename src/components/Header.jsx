import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Sobre mim' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/experiencias', label: 'Experiências' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={() => setMenuAberto(false)}>
          Davi Pacheco
        </Link>

        <button
          className="header__toggle"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? 'Fechar' : 'Menu'}
        </button>

        <nav id="menu-principal" className={`nav ${menuAberto ? 'nav--aberto' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--ativo' : ''}`}
              onClick={() => setMenuAberto(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
