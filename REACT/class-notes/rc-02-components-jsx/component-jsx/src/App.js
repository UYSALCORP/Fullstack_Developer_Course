import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main';

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
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
