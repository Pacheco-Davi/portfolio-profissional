import PageHeader from '../components/PageHeader.jsx'
import { experiencias } from '../data/experiencias.js'

export default function Experiencias() {
  return (
    <section>
      <PageHeader titulo="Experiências" subtitulo="Trabalho, estágios, freelas e eventos" />
      <div className="exp-list">
        {experiencias.map((e) => (
          <article key={e.empresa + e.periodo} className="exp">
            <div className="exp__meta">
              <span>{e.periodo}</span>
            </div>
            <div>
              <h2>{e.empresa}</h2>
              <p className="exp__cargo">{e.cargo}</p>
              <p>{e.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
