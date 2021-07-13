// import logo from './logo.svg';
import './App.css';

import Message from './components/message/message.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello world!</h3>
        <Message text="Привет, МИР!" />
      </header>
    </div>
  );
}

export default App;
