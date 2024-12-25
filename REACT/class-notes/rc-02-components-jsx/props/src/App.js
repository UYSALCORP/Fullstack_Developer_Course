import Dog from './components/Dog';


function App() {
  return (
    <div className="App">
      <Dog
      name="Husky" 
      img="https://cdn.pixabay.com/photo/2023/01/03/16/00/dog-7694676_640.jpg"
      color="black"
      // isBlueEyed={true}
      isBlueEyed
      age={5}
      />
      <Dog
      name="Karabas"
      img="https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_640.jpg"
      color= "gray"
      // isBlueEyed={false}
      age={3}
      />
      <Dog
      name="Kangal"
      img="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg"
      // color="brown"
      // isBlueEyed={false}
      age={7}
      />
    </div>
  );
}

export default App;
