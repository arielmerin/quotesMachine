import "./assets/css/styles.css"
import Author from "./Author";
import RefreshButton from "./RefreshButton";



const QuoteBox = ({frases}) =>{

    let rndPosition = Math.floor(Math.random()*frases.length);
    console.log(rndPosition)

    return(
        <div className="quote-container">
            <h3>"{frases[rndPosition].quote}"</h3>
            <div className="buttons-container">
                <p><Author autor= {frases[rndPosition].author} /></p>
                < RefreshButton />
            </div>
        </div>
    );
}

export default QuoteBox;
