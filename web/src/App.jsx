import React, { useState, useEffect } from 'react'
import './App.scss'

import axios from 'axios'

import Cards from './components/Cards/index'


export default function App() {

  const [dados, setDados] = useState({})

  useEffect(() => {
    getDados()
  }, [])

  async function getDados(){
    await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json`).then(function (response){
      setDados(response.data.data)
    })  
  }

  return (
    <div className='App'>
      {Object.keys(dados).map((item, index) => {
        return(
          <Cards key={index} champion={item}/>
        )
      })}
    </div>
  )
}


