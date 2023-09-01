import React,{useEffect} from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='home'>
      
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <FeaturedProducts type="Trending"/>
    </div>
  )
}
