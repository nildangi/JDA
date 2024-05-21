import React from 'react'
import '../App.css';
import image1 from '../images/slider/back1.jpg'
import image2 from '../images/slider/back3.jpg'
import image3 from '../images/slider/building(1).jpg'
import image4 from '../images/slider/oat.jpg'
import slider1 from '../images/slider/slide1.jpg'
import slider2 from '../images/slider/slide2.jpg'
import slider3 from '../images/slider/slide3.jpg'
import slider4 from '../images/slider/slide4.jpg'
import slider5 from '../images/slider/slide5.jpg'
// import Carousel from 'react-bootstrap/Carousel';
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-bootstrap';




function Slider() {
  return (
    <div className='imageslider'>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '500px', width: '110%' }}
            src={slider1} />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slider2} className='slide' />
        </Carousel.Item>

         <Carousel.Item>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slider3} className='slide' />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slider4} className='slide' />
        </Carousel.Item> 
      </Carousel>
    </div>
  )
}

export default Slider