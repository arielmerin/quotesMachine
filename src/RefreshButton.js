import "./assets/css/styles.css"

// Esta función sólo se ejecuta cuando el usuario desea cambiar de frase y hace una llamada a un callback para ello
// No es candidata a usar useCallback porque no hace ninguna operación significativa
const RefreshButton = ({cambiarFrase}) =>{
    return(
        <button onClick={cambiarFrase} className="button ">
            Otra frase
        </button>
    );
}

export default RefreshButton;