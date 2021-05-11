import './App.css';
import QuoteBox from "./QuoteBox";
import quotes from "./assets/quotes.json";


// Componente principal que llama a quotebox para hacerse cargo de toda la ejecución del programa
// NO es candidata a useCallback porque no calcula nada significativo
function App() {
    return (
    <div className="App">
      < QuoteBox frases={quotes.quotes}/>
    </div>
  );
}

export default App;
