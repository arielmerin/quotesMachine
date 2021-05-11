import "./assets/css/styles.css"


const RefreshButton = ({cambiarFrase}) =>{
    return(
        <button onClick={cambiarFrase} className="button ">
            Otra frase
        </button>
    );
}

export default RefreshButton;