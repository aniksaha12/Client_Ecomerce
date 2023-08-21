import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

export default function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <FeaturedProducts type="Trending"/>
    </div>
  )
}
