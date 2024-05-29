import React from 'react';
import '../textSlide/TextSlider.css'


function Text() {
    return (
        <div className='logos'>
            <div className='logos-slide'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, porro!</p>
            </div>

            <div className='logos-slide' style={{ margin: '0px 30px' }}>
                <img src={mpdc} alt="MPDC" loading="lazy" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, porro!</p>
            </div>
        </div>
    )
}

export default Text;
