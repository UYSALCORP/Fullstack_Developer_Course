import Card from './components/card/Card';
import data from './data'

function App() {
  console.log(data);
  return (
    <div className="App">
      <h1> LANGUAGES: </h1>
      {/* //! Rendering Lists */}
      {/* //* Each child in a list should hava aunique "key" prop. */}
      {/* //* Birden fazla statement kullanılacaksa fonk {} içinde yazılmalı ve return keywordu kullanılması gerekir. */}
      {
        data.map((item)=> <Card key={item.id} language={item.language} img={item.img}/>)
      }
      {/* //! Uzun yoldan | Yanlış yoldan yapmak. */}
      {/* <Card language={data[0].language} img={data[0].img}/>
      <Card language={data[1].language} img={data[1].img}/>
      <Card language={data[2].language} img={data[2].img}/> */}
    </div>
  );
}

export default App;
