import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import SobreMim from './pages/SobreMim.jsx'
import Projetos from './pages/Projetos.jsx'
import Experiencias from './pages/Experiencias.jsx'
import Contato from './pages/Contato.jsx'

// Mapa de rotas: cada caminho da URL aponta para uma página.
// O <Layout> envolve todas elas, então header e footer aparecem sempre.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SobreMim />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
