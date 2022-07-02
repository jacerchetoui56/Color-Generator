import './styles.css'
import { useEffect, useState } from 'react'
import Values from 'values.js'
import Color from './Color'
export default function App() {

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [colors, setColors] = useState([])


  useEffect(() => {
    let initial = new Values('#F3DA0B').all(10)
    setColors(initial)
  }, [])

  function submit(e) {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setError(false)
      setColors(colors)
    } catch (error) {
      setError(true)
    }

  }


  return (
    <>
      <header className='header'>
        <h1>Color Generator</h1>
        <form onSubmit={submit}>
          <input
            placeholder='#F3DA0B'
            className={error ? 'error' : ''}
            type="text"
            onChange={(e) => setColor(e.target.value)}
          />
          <button onClick={submit}>Submit</button>
        </form>
      </header>
      <section className="colors">
        {colors.map((color, index) => {
          return <Color
            key={index}
            index={index}
            {...color}
            hex={color.hexString()}
          />
        })}
      </section>
    </>
  )
}


