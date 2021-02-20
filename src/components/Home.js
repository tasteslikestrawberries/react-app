import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import c1 from './assets/c1.webp';
import c2 from './assets/c2.webp';
import c3 from './assets/c3.webp';

 


const Home = () => {
  return (
  
    <header>

      <Carousel className='carousel'>
      <Carousel.Item interval={1500} id='citem'>
    <img className="d-block w-100" src={c1}  alt=""></img>
    <Carousel.Caption id="caption">
      <h3>First slide label</h3> <br/> <br/>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={1500} id='citem'>
    <img className="d-block w-100" src={c2}  alt=""></img>
    <Carousel.Caption id="caption">
      <h3>Second slide label</h3> <br/> <br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={1500} id='citem'>
    <img className="d-block w-100" src={c3}  alt=""></img>
    <Carousel.Caption id="caption">
      <h3>Third slide label</h3> <br/> <br/>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>


    </header>
    
  )
}

export default Home


