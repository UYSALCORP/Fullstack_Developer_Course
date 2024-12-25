import Dog from './components/Dog';


function App() {
  return (
    <div className="App">
      <Dog
      name="Husky" 
      img="https://cdn.pixabay.com/photo/2023/01/03/16/00/dog-7694676_640.jpg"
      color="black&white"/>
      <Dog
      name="Karabas"
      img="https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_640.jpg"
      color= "black"
      />
      <Dog
      name="Kangal"
      img="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg"
      color="brown"
      />
    </div>
  );
}

export default App;
