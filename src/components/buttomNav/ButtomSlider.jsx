import React from 'react';
import '../buttomNav/ButtomSlider.css';
import india_gov from '../../images/slider/15122017120232india-gov.png';
import mygov from '../../images/slider/15122017120409mygov.png';
import swachbharat from '../../images/slider/15122017120459swach-bharat.png';
import dialgov from '../../images/slider/15122017120741dialgov.png';
import rajbhavan from '../../images/slider/30012020072441rajbhavan.jpg';
import mapit from '../../images/slider/30012020074058mapit.jpg';
import mpdc from '../../images/slider/30012020074725mpdc.jpg';
import mptourism from '../../images/slider/30012020074807mptourism.jpg';

function ButtomSlider() {
  return (
    <div className='logos'>
      <div className='logos-slide'>
        <img src={mpdc} alt="MPDC" loading="lazy" />
        <img src={rajbhavan} alt="Raj Bhavan" loading="lazy" />
        <img src={mapit} alt="MAP IT" loading="lazy" />
        <img src={mptourism} alt="MP Tourism" loading="lazy" />
        <img style={{ backgroundColor: 'white' }} src={dialgov} alt="India Gov" loading="lazy" />
        <img src={mygov} alt="MP Tourism" loading="lazy" />
        <img src={swachbharat} alt="MP Tourism" loading="lazy" />
        {/* <img src={india_gov} alt="India Gov" loading="lazy" /> */}
      </div>
      <div className='logos-slide' style={{margin:'0px 30px'}}>
        <img src={mpdc} alt="MPDC" loading="lazy" />
        <img src={rajbhavan} alt="Raj Bhavan" loading="lazy" />
        <img src={mapit} alt="MAP IT" loading="lazy" />
        <img src={mptourism} alt="MP Tourism" loading="lazy" />
        <img style={{ backgroundColor: 'white' }} src={dialgov} alt="India Gov" loading="lazy" />
        <img src={mygov} alt="MP Tourism" loading="lazy" />
        <img src={swachbharat} alt="MP Tourism" loading="lazy" />
        {/* <img src={india_gov} alt="India Gov" loading="lazy" /> */}
      </div>
      
    </div>
  )
}

export default ButtomSlider;
