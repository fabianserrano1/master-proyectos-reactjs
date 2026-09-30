import { useState } from 'react'

const elementos = ['Perro', 'Gato', 'Pez', 'Pájaro', 'Conejo', 'Tortuga']

function App() {
  const [busqueda, setBusqueda] = useState('')

  const elementosFiltrados = elementos.filter((elemento) =>
    elemento.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="contenedor">
      <a href="../" className="volver">← Volver al inicio</a>
      <h1>Filtro de Búsqueda en Tiempo Real</h1>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar..."
      />

      <ul className="lista">
        {elementosFiltrados.map((elemento) => (
          <li key={elemento}>{elemento}</li>
        ))}
      </ul>
    </div>
  )
}

export default App