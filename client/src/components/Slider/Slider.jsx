import React, { useState } from "react";
import "./Slider.css";
import banner_oversized_tshirt from "../../asset/website_new_theme_banner_oversized_tshirt_copy.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];



  return (
    <div className="slider">
      <div className="banner_oversized_tshirt" data-aos="fade-left" data-aos-duration="2000">
        <img
          src={banner_oversized_tshirt}
          width="80%"
          height={"100%"}
          alt="oversized_tshirt"
        />
      </div>
      <div style={{overflow:'hidden'}}>
      <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"  alt="logo" width="80%"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="logo" width="80%"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="logo" width="80%"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      </div>

    </div>
  );
}
