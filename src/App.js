import './App.css';
import QuoteBox from "./QuoteBox";
import quotes from "./assets/quotes.json";

function App() {
    console.log("ola mundo")
    console.log(quotes.quotes[0])
    return (

    <div className="App">
      < QuoteBox frases={quotes.quotes}/>
    </div>
  );
}

export default App;
