import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {ano} Davi Pacheco · Belo Horizonte, MG</p>
        <div className="footer__icons">
          <a href="https://github.com/Pacheco-Davi" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pacheco-davi/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:davipn119@gmail.com" aria-label="E-mail">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
