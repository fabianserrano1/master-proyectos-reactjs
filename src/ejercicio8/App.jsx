import { useState } from 'react'

function App() {
  const [texto, setTexto] = useState('')

  const palabras = texto.trim().split(/\s+/).filter((p) => p.length > 0)
  const numeroPalabras = texto.trim() === '' ? 0 : palabras.length
  const numeroCaracteres = texto.replace(/\s/g, '').length

  return (
    <div className="contenedor">
      <a href="/" className="volver">← Volver al inicio</a>
      <h1>Contador de Palabras y Caracteres</h1>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe un párrafo..."
        rows={6}
      />

      <div className="contadores">
        <p>Palabras: {numeroPalabras}</p>
        <p>Caracteres: {numeroCaracteres}</p>
      </div>
    </div>
  )
}

export default App