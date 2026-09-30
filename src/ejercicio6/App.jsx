import { useState, useEffect } from 'react'

function formatearTiempo(totalSegundos) {
  const horas = String(Math.floor(totalSegundos / 3600)).padStart(2, '0')
  const minutos = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, '0')
  const segundos = String(totalSegundos % 60).padStart(2, '0')
  return `${horas}:${minutos}:${segundos}`
}

function App() {
  const [segundos, setSegundos] = useState(0)
  const [corriendo, setCorriendo] = useState(false)

  useEffect(() => {
    if (!corriendo) return

    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(intervalo)
  }, [corriendo])

  const handleIniciar = () => setCorriendo(true)
  const handlePausar = () => setCorriendo(false)
  const handleReiniciar = () => {
    setCorriendo(false)
    setSegundos(0)
  }

  return (
    <div className="contenedor">
      <a href="/" className="volver">← Volver al inicio</a>
      <h1>Temporizador</h1>

      <p className="display">{formatearTiempo(segundos)}</p>

      <div className="botones">
        <button onClick={handleIniciar}>Iniciar</button>
        <button onClick={handlePausar}>Pausar</button>
        <button onClick={handleReiniciar}>Reiniciar</button>
      </div>
    </div>
  )
}

export default App