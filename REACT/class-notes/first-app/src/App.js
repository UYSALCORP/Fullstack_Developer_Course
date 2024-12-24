import helloreact from './assets/react.png'
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>React First-class</h1>
      <p>Merhaba React!</p>
      <img src={helloreact}className="hello-picture"></img>
    </div>
  );
}

export default App;
