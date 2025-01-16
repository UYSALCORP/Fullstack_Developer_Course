import React from "react";
import Home from "./components/Home";
import DivStyle from "./components/style/ContainerStyle";
import HeaderS, { LinkS } from "./components/style/HeaderStyle";
import Button, { TomatoButton } from "./components/style/ButonStyle";

function App() {
  return (
    <DivStyle> 
      <HeaderS>Merhaba</HeaderS>
      <LinkS href="#">Terbiyesizlink</LinkS>
      <Button bengisu>buton1</Button>
      <Button uysal>buton2</Button>
      <Button > buton3 </Button>
      <TomatoButton apo>buton4</TomatoButton>
      <TomatoButton apo>buton5</TomatoButton>
     <Home/>
    </DivStyle>
  );
}

export default App;
