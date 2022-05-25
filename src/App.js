import logo from './logo.svg';
// import './App.css';
import './scss/main.scss';
import Tasklist from './Tasklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tasklist id="1" content="this is a task item" />
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
