import Header from './components/Header'

//? Ayrı dosyaya taşıdık.
// const Header =()=>{
//   return(
//     <p>I am header component</p>
//   )
// }

function App() {
  return (
    <div className="App">
      <h1> React - 02 - Components and JSX </h1>
      <Header></Header>
    </div>
  );
}

export default App;
