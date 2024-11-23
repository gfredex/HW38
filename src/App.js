import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Мир" />
        <Greeting name="Dima" />
        <Greeting name="Dasha" />
        <Greeting name="Margo" />
      </header>
      <Counter />
    </div>
  );
}

export default App;