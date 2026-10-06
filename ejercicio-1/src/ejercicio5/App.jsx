import { useState } from 'react'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcular = (operacion) => {
    if (num1.trim() === '' || num2.trim() === '') {
      setError('Ambos campos son obligatorios')
      setResultado(null)
      return
    }

    const a = Number(num1)
    const b = Number(num2)

    if (operacion === 'dividir' && b === 0) {
      setError('No se puede dividir entre cero')
      setResultado(null)
      return
    }

    let res
    if (operacion === 'sumar') res = a + b
    if (operacion === 'restar') res = a - b
    if (operacion === 'multiplicar') res = a * b
    if (operacion === 'dividir') res = a / b

    setError('')
    setResultado(res)
  }

  return (
    <div className="contenedor">
      <a href="../" className="volver">← Volver al inicio</a>
      <h1>Calculadora Sencilla</h1>

      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
        />
      </div>

      <div className="botones">
        <button onClick={() => calcular('sumar')}>Sumar</button>
        <button onClick={() => calcular('restar')}>Restar</button>
        <button onClick={() => calcular('multiplicar')}>Multiplicar</button>
        <button onClick={() => calcular('dividir')}>Dividir</button>
      </div>

      {error && <p className="error">{error}</p>}
      {resultado !== null && <p className="resultado">Resultado: {resultado}</p>}
    </div>
  )
}

export default App