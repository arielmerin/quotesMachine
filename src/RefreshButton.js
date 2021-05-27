import "./assets/css/styles.css"

// Esta función sólo se ejecuta cuando el usuario desea cambiar de frase y hace una llamada a un callback para ello
// No es candidata a usar useCallback porque no hace ninguna operación significativa
const RefreshButton = ({cambiarFrase, color}) =>{
    return(
        <button onClick={cambiarFrase} className="button " style={{color: color}}>
            Next Quote
        </button>
    );
}

export default RefreshButton;