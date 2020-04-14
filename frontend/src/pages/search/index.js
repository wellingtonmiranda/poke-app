import React, {Fragment, useState} from 'react';
import './style.css'

import api from '../../services/api'

export default function Search() {

  const [ city, setCity ] = useState('');
  const [ result, setResult] = useState('');

  async function handleCity(e) {
    console.log('Chamou a função');
    e.preventDefault()
   

    try {
      console.log('try');
      const response = await api.get(`/pokemon?city=${city}`)
      console.log(response.data)
      /*let raining;
      if (response.data.weather === 'Rain') {
        raining = " It's raining"
      } else {
        raining = " It's not raining"
      }*/
      console.log('antes do resultado');
      setResult(response.data);
      /*alert(`The pokemon is : ${response.data.pokemon.pokemon.name}, Temperature ${response.data.temperature} and${raining}.`)*/
      console.log('depois');
      
      setCity('')
      
      console.log('depois do setCity');
    } catch(err) {
      console.log(err);
      alert('Could not find city');
      setCity('')
    }
    console.log('fim');
  }
 
  
  return(
<Fragment>
      <div className="container">
          <a href="https://fontmeme.com/pt/fonte-de-pokemon/"></a>
          <img src="https://fontmeme.com/permalink/200408/585b5b01d4cd174da92258096b4028ca.png" alt="fonte-de-pokemon" />

          <section className="search">

          
            <input
            size="30" 
            placeholder="Set the city to find your new friend!" 
            value={city}
            onChange={e => setCity(e.target.value)}
            />

            <button className="button" type="submit" onClick= {handleCity}>Poke-Search</button>
           
          </section>
      </div>
          {result && 
            <div className="result-container">
                <p>Pokemon: {result.pokemon.pokemon.name}</p>
                <p>Temperature: {result.temperature}</p>
                <p>{result.weather === 'Rain' ? "It's raining" : "It's not raining"}</p>
            </div>}
  </Fragment>
  )
}