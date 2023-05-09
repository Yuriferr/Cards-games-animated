import React, { useState, useEffect } from "react";
import './style.scss'

import axios from 'axios'

export default function Cards({champion}){

    const [dados, setDados] = useState({
        name: '',
        title: '',
    })
    const [color, setColor] = useState('')

    useEffect(() => {
        getDados()
        generateColor()
    }, [])

    async function getDados(){
        await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pt_BR/champion.json`).then(function (response){
            setDados({
                name: response.data.data[champion].name,
                title: response.data.data[champion].title,
            })
        })
    }

    function generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        setColor(color)
      }

    return(
        <div className="Cards">
            <h2>{dados.name}</h2>
            <p>{dados.title}</p>
            <span>Hover here</span>
            <div className="pic" style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg)`}}/>
            <button style={{backgroundColor: color}}/>
        </div>
    )
}