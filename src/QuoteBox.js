import "./assets/css/styles.css"

import { useState} from "react"
import Author from "./Author";
import RefreshButton from "./RefreshButton";




// Este componente pinta en el navegador, dado un arreglo de frases, una quote con su autor
// No es candidata a useCallback porque no calcula nada más que acceder a posiciones en un arreglo y eso es tiempo lineal
const QuoteBox = ({frases}) =>{


    const[currentQuote, setCurrentQuote] = useState(frases[0].quote);
    const[currentAuthor, setCurrentAuthor] = useState(frases[0].author)
    const[background,setBackground] = useState('#344fa1')

    const colors = ['#ba135d',
        '#fc5404',
        "#344fa1",
        '#7b113a',
        '#184d47',
        '#374045',
        '#008891',
        '#ffa62b',
        '#6a097d'
    ]
    const frasesAletoreas = () =>{
        setBackground(colors[Math.floor(Math.random()*colors.length)])
        let rndPosition = Math.floor(Math.random()*frases.length);
        let initial = frases[rndPosition];
        setCurrentQuote(initial.quote)
        setCurrentAuthor(initial.author)
        setAllBackground()
    }
    const setAllBackground = () =>{
        const body = document.getElementsByClassName('App')
        body[0].style.backgroundColor = background
    }
    return(
        <div style={{backgroundColor: background, height: '100vh', display: 'flex', width: '100vw', padding:'20px'}}>
            <div className="quote-container" style={{backgroundColor: background}}>
                <h3>"{currentQuote}"</h3>
                <div className="buttons-container">
                    <p><Author autor= {currentAuthor} /></p>
                    < RefreshButton cambiarFrase={frasesAletoreas} color={background} />
                </div>
            </div>
        </div>

    );
}

export default QuoteBox;
