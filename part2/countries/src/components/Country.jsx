import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

function Country({ country }) {
    const languageList = []
    for (let key in country.languages) {
      languageList.push(country.languages[key])
    }
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Capital {country.capital}</div>
        <div>Area {country.area}</div>
        <h2>Languages</h2>
        <ul>
          {languageList.map(entry => <li key={entry}>{entry}</li>)}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt}/>
        <Weather country={country} />
      </div>
    )
}

export default Country