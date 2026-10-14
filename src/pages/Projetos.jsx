import PageHeader from '../components/PageHeader.jsx'
import { projetos } from '../data/projetos.js'

export default function Projetos() {
  return (
    <section>
      <PageHeader titulo="Projetos" subtitulo="Do mais antigo ao mais recente" />
      <ol className="timeline">
        {projetos.map((p) => (
          <li key={p.nome} className="timeline__item">
            <span className="timeline__periodo">{p.periodo}</span>
            <h2>{p.nome}</h2>
            <p>{p.descricao}</p>
            <ul className="tags">
              {p.tecnologias.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="media-placeholder">Imagem ou GIF do projeto</div>
            <a href={p.github} target="_blank" rel="noreferrer">Ver repositório no GitHub</a>
          </li>
        ))}
      </ol>
    </section>
  )
}
