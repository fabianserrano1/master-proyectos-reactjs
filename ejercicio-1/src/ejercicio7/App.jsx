import { useState } from 'react'

function generarContraseña(longitud) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
  let contraseña = ''

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length)
    contraseña += caracteres[indice]
  }

  return contraseña
}

function App() {
  const [longitud, setLongitud] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [error, setError] = useState('')

  const handleGenerar = () => {
    const num = Number(longitud)

    if (longitud.trim() === '' || num < 4) {
      setError('La longitud debe ser mayor o igual a 4')
      setContraseña('')
      return
    }

    setError('')
    setContraseña(generarContraseña(num))
  }

  return (
    <div className="contenedor">
      <a href="../" className="volver">← Volver al inicio</a>
      <h1>Generador de Contraseñas</h1>

      <input
        type="number"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        placeholder="Longitud"
      />
      <button onClick={handleGenerar}>Generar contraseña</button>

      {error && <p className="error">{error}</p>}
      {contraseña && <p className="resultado">{contraseña}</p>}
    </div>
  )
}

export default App