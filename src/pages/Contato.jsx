import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'

const canais = [
  { label: 'E-mail', href: 'mailto:davipn119@gmail.com', icon: <FaEnvelope /> },
  { label: 'WhatsApp', href: 'https://wa.me/5531991452714', icon: <FaWhatsapp /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pacheco-davi/', icon: <FaLinkedin /> },
  { label: 'GitHub', href: 'https://github.com/Pacheco-Davi', icon: <FaGithub /> },
]

// Sprint 2: ligar o formulário ao EmailJS e adicionar validações.
export default function Contato() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('O envio por e-mail será implementado na Sprint 2.')
  }

  return (
    <section>
      <PageHeader titulo="Contato" subtitulo="Fale comigo pelo canal que preferir" />
      <div className="contato">
        <ul className="canais">
          {canais.map((c) => (
            <li key={c.label}>
              <a href={c.href} target="_blank" rel="noreferrer">
                {c.icon}
                <span>{c.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <form className="form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input type="text" name="nome" required />
          </label>
          <label>
            E-mail
            <input type="email" name="email" required />
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows="5" required />
          </label>
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}
