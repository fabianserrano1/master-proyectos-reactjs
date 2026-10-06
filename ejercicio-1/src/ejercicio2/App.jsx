import { useState } from 'react'

function App() {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <div className="contenedor">
      <a href="../" className="volver">← Volver al inicio</a>
      <h1>Contador de Clics</h1>
      <button onClick={handleClick}>Contar clics</button>
      <p>Clics: {clicks}</p>
    </div>
  )
}

export default App