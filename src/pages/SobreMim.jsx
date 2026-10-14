import PageHeader from '../components/PageHeader.jsx'

// Sprint 2: adicionar alternância PT/EN (ex.: react-i18next).
export default function SobreMim() {
  return (
    <section>
      <PageHeader titulo="Sobre mim" subtitulo="Estudante de Engenharia de Software na PUC Minas" />
      <div className="prose">
        <p>
          Olá! Sou Davi Pacheco, de Belo Horizonte. Curso Engenharia de Software na PUC Minas
          e trabalho como estagiário na Presto.
        </p>
        <p className="placeholder">
          [Formação, área de atuação, interesses e objetivos profissionais. Versão em inglês na Sprint 2.]
        </p>
      </div>
    </section>
  )
}
