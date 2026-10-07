import { useState } from 'react'

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function App() {
  const [bgColor, setBgColor] = useState('#ffffff')

  const handleChangeColor = () => {
    setBgColor(getRandomColor())
  }

  return (
    <div className="contenedor" style={{ backgroundColor: bgColor }}>
      <a href="../" className="volver">← Volver al inicio</a>     
      <h1>Cambiador de Color de Fondo</h1>
      <button onClick={handleChangeColor}>Cambiar color</button>
      <p>Color actual: {bgColor}</p>
    </div>
  )
}

export default App