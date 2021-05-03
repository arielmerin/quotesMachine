import "./assets/css/styles.css"
import { useState} from "react"

const RefreshButton = ({}) =>{
    const[currentQuote, changeCurrentQuote] = useState('');

    const refreshPage = ()=> window.location.reload();
    return(
        <button onClick={refreshPage} className="button ">
            Otra frase
        </button>
    );
}

export default RefreshButton;