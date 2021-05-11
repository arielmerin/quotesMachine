import "./assets/css/styles.css"

import { useState} from "react"
import Author from "./Author";
import RefreshButton from "./RefreshButton";



const QuoteBox = ({frases}) =>{


    const[currentQuote, setCurrentQuote] = useState(frases[0].quote);
    const[currentAuthor, setCurrentAuthor] = useState(frases[0].author)

    const frasesAletoreas = () =>{
        let rndPosition = Math.floor(Math.random()*frases.length);
        let initial = frases[rndPosition];
        setCurrentQuote(initial.quote)
        setCurrentAuthor(initial.author)
    }
    return(
        <div className="quote-container">
            <h3>"{currentQuote}"</h3>
            <div className="buttons-container">
                <p><Author autor= {currentAuthor} /></p>
                < RefreshButton cambiarFrase={frasesAletoreas} />
            </div>
        </div>
    );
}

export default QuoteBox;
