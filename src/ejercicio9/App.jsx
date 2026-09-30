import { useState, useEffect } from 'react'

function App() {
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState('')

  useEffect(() => {
    const guardadas = localStorage.getItem('tareas')
    if (guardadas) {
      setTareas(JSON.parse(guardadas))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const handleAgregar = () => {
    if (texto.trim() === '') return
    const nuevaTarea = { texto, completada: false }
    setTareas([...tareas, nuevaTarea])
    setTexto('')
  }

  const handleToggle = (index) => {
    const nuevasTareas = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    )
    setTareas(nuevasTareas)
  }

  const handleLimpiarCompletadas = () => {
    setTareas(tareas.filter((tarea) => !tarea.completada))
  }

  return (
    <div className="contenedor">
      <a href="/" className="volver">← Volver al inicio</a>
      <h1>Lista de Tareas</h1>

      <div className="formulario">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button onClick={handleAgregar}>Agregar</button>
      </div>

      <ul className="lista">
        {tareas.map((tarea, index) => (
          <li key={index} className={tarea.completada ? 'completada' : ''}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => handleToggle(index)}
            />
            <span>{tarea.texto}</span>
          </li>
        ))}
      </ul>

      <button className="limpiar" onClick={handleLimpiarCompletadas}>
        Limpiar completadas
      </button>
    </div>
  )
}

export default App