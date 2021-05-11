import "./assets/css/styles.css"


const RefreshButton = ({cambiarFrase}) =>{
    const refreshPage = ()=> window.location.reload();
    return(
        <button onClick={cambiarFrase} className="button ">
            Otra frase
        </button>
    );
}

export default RefreshButton;