import React from 'react'
import "./app.css"
import {Carousel} from "react-bootstrap"
import isa from "../img/isa.jpeg"
import devops from "../img/devops.jpeg"
import about from "../img/about.jpeg"

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
       <img src={isa} alt="" />
      </Carousel.Item>
      <Carousel.Item>
     <img src={devops} alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src={about} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider