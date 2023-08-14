import logo from './logo.svg';
import './App.css';
import { SideBySideLayout } from './layouts/SideBySideLayout';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <SideBySideLayout/>
    </div>
  );
}

export default App;
