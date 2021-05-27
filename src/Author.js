
import "./assets/css/styles.css"

//Esta función actualiza y pinta en el navegador el autor
// No es candidata a useCallback porque no calcula absolutamente nada
const Author = ({autor}) =>{
    return (
        <div className="author-container">
            <i>- {autor}</i>
        </div>
    )
}

export default Author;