// Cabeçalho padrão de cada página, com a faixa de azulejos decorativa.
export default function PageHeader({ titulo, subtitulo }) {
  return (
    <div className="page-header">
      <div className="tiles" aria-hidden="true" />
      <h1>{titulo}</h1>
      {subtitulo && <p className="page-header__sub">{subtitulo}</p>}
    </div>
  )
}
