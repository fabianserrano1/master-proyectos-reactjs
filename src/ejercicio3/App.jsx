import { useState } from 'react'

function App() {
  const [texto, setTexto] = useState('')
  const [items, setItems] = useState([])

  const handleAdd = () => {
    if (texto.trim() === '') return // evita añadir vacíos
    setItems([...items, texto])
    setTexto('') // limpia el campo tras añadir
  }

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className="contenedor">
      <a href="../" className="volver">← Volver al inicio</a>
      <h1>Lista Dinámica</h1>

      <div className="formulario">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe algo..."
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>

      <ul className="lista">
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App