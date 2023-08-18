import React, { useState } from 'react'
import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';
import WestTwoToneIcon from '@mui/icons-material/WestTwoTone';
import "./Slider.css";

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];

      const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
      };
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
      };

  return (
    <div className='slider'>
      <div className='container' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      {data.map((image, index) => 
        <div className='slide' key={index}>
            <img src={image} alt=''/>
        </div>
        )}
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
            <WestTwoToneIcon/>
        </div>
        <div className='icon' onClick={nextSlide}>
            <EastTwoToneIcon/>
        </div>
      </div>
    </div>
  )
}
