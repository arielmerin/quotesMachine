import './App.css';
import QuoteBox from "./QuoteBox";
import quotes from "./assets/quotes.json";

function App() {
    return (
    <div className="App">
      < QuoteBox frases={quotes.quotes}/>
    </div>
  );
}

export default App;
