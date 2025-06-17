import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'

function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setData(response.data)
      })
  }, [])

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleShow = (country) => {
    setInput(country)
  }

  return (
    <div>
      <div>find countries <input value={input} onChange={handleInput}></input></div>
      <Display data={data} input={input} handleShow={handleShow} />
    </div>
  )
}

export default App
