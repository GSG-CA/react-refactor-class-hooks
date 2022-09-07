import Counter from './Components/Counter'
import Keyboard from './Components/Keyboard'
import Pokemon from './Components/Pokemon'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='component'>
      <h2>Counter Component</h2>
      <Counter />
      </div>
      <div className='component'>
      <h2>Keyboard Component</h2>
      <Keyboard />
      </div>

      <div className='component'>
      <h2>Pokemon Component</h2>
      <Pokemon name='pikachu' />
      </div>
    </div>
  );
}

export default App;
