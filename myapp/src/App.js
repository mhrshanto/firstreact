import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://codesplanner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Codesplanner
        </a>
      </header>
    </div>
  );
}

export default App;
