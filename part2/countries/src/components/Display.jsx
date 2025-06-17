import Country from './Country'

function Display({ data, input, handleShow }) {

  const countries = data.filter(entry => entry.name.common.toLowerCase().indexOf(input.toLowerCase()) !== -1)

  if (countries.length == 1) {
    const country = countries[0]
    return <Country country={country}/>
  } else if (countries.length < 10) {
    return countries.map((entry) => {
      return (
      <div key={entry.name.common}>
        {entry.name.common} <button onClick={() => handleShow(entry.name.common)}>Show</button>
      </div>)
    })
  } else {
    return <div>Too many matches, specify another filter</div>
  }
}

export default Display