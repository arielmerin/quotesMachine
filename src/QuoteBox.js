import "./assets/css/styles.css"

import { useState} from "react"
import Author from "./Author";
import RefreshButton from "./RefreshButton";



const QuoteBox = ({frases}) =>{
    let rndPosition = Math.floor(Math.random()*frases.length);

    let initial = frases[rndPosition];
    const[currentQuote, setCurrentQuote] = useState(initial.quote);
    const[currentAuthor, setCurrentAuthor] = useState(initial.author)

    return(
        <div className="quote-container">
            <h3>"{currentQuote}"</h3>
            <div className="buttons-container">
                <p><Author autor= {currentAuthor} /></p>
                < RefreshButton />
            </div>
        </div>
    );
}

export default QuoteBox;
