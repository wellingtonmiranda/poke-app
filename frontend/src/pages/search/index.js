import React, {Fragment, useState} from 'react';
import './style.css'

import api from '../../services/api'

export default function Search() {

  const [ city, setCity ] = useState('');

  async function handleCity(e) {
    e.preventDefault()
   

    try {
      const response = await api.get(`/pokemon?city=${city}`)
      console.log(response.data)
      let raining;
      if (response.data.weather === 'Rain') {
        raining = " It's raining"
      } else {
        raining = " It's not raining"
      }
      alert(`The pokemon is : ${response.data.pokemon.pokemon.name}, Temperature ${response.data.temperature} and${raining}.`)
  
      } catch(err) {
        alert('Could not find city');
      }

    }
  
  
  return(
<Fragment>
      <div className="container">
          <a href="https://fontmeme.com/pt/fonte-de-pokemon/"></a>
          <img src="https://fontmeme.com/permalink/200408/585b5b01d4cd174da92258096b4028ca.png" alt="fonte-de-pokemon" />

          <section className="search">

          <form onSubmit={handleCity}>
            <input
            size="30" 
            placeholder="Set the city to find your new friend!" 
            value={city}
            onChange={e => setCity(e.target.value)}
            />

            <button className="button" type="submit">Poke-Search</button>
            </form>
          </section>
      </div>

  </Fragment>
  )
}