import data from "./data";
import './scss/app.scss'
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer";

function App() {
  console.log(data);
  return (
    <>
      <Header/>
      <div className="">
      {data.map((item)=> <Card key={item.id} name={item.name} img={item.img} job={item.job} comment={item.comment}/>)}
      </div>
      <Footer/>
    </>
  );
}

export default App;
