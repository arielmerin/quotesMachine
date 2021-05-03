import "./assets/css/styles.css"


const RefreshButton = ({}) =>{


    const refreshPage = ()=> window.location.reload();
    return(
        <button onClick={refreshPage} className="button ">
            Otra frase
        </button>
    );
}

export default RefreshButton;