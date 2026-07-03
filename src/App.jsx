import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Productos from "./pages/Productos"
import Promociones from "./pages/Promociones"
import Contacto from "./pages/Contacto"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App