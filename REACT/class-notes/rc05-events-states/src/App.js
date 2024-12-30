import './App.css';
import ClassComp from './components/classComponent/ClassComp';
import Events from './components/events/Events';
import DataStorage from './components/useStateHook/DataStorage';
import UseStateHook from './components/useStateHook/UseStateHook';


function App() {
  return (
    <div className="App">
      <h1 className='mb-5'> React CH18 - Events </h1>
      {/* <Events/> */}
      {/* <UseStateHook /> */}
      {/* <DataStorage/> */}
      <ClassComp/>
    </div>
  );
}

export default App;
