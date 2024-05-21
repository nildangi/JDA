
import '../App.css';
import '../index.css';
import React , { useEffect , useState } from 'react'
import india_gov from '../images/slider/15122017120232india-gov.png'
import mygov from '../images/slider/15122017120409mygov.png'
import swachbharat from '../images/slider/15122017120459swach-bharat.png'
import dialgov from '../images/slider/15122017120741dialgov.png'
import rajbhavan from '../images/slider/30012020072441rajbhavan.jpg'
import mapit from '../images/slider/30012020074058mapit.jpg'
import mpdc from '../images/slider/30012020074725mpdc.jpg'
import mptourism from '../images/slider/30012020074807mptourism.jpg'

const ButtomSlider = () => {
    const images = [
        mpdc,
        mapit,
        rajbhavan,
        dialgov,
        mygov,
        swachbharat
        // Add more image URLs as needed
      ];

      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(interval);
      }, [currentImageIndex]);
    
      const nextSlide = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
      };

  return (
    <div style={{justifyContent:'center',alignContent:'center'}}>
      <img src={images[currentImageIndex]} alt="slide" className="slide" />
    </div>
  )
}

export default ButtomSlider
