import React from 'react'
import "./app.css"
import {Carousel} from "react-bootstrap"
import isa from "../img/isa.jpeg"
import devops from "../img/devops.jpeg"
import about from "../img/about.jpeg"

const Slider = () => {
  //! fade=soluklaşarak diğer resme geç, autoPlay={true} otomatik resim değiş, interval={5000} 5 saniyede bir değiş. slide={false} otomatik geçişi iptal et
  return (
    <Carousel fade autoPlay={true} interval={5000}>
      <Carousel.Item>
       <img src={isa} className="w-100" alt="" />
      </Carousel.Item>
      <Carousel.Item>
     <img src={devops} className="w-100" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src={about} className="w-100" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider