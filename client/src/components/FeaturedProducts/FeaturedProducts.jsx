import React from 'react'
import "./FeaturedProducts.css";
import Card from '../Card/Card';

export default function FeaturedProducts({type}) {

    const data = [
        {
            id:1,
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuspoloassn.nnnow.com%2Fflying-machine-women-mustard-long-sleeve-graphic-print-t-shirt-UVU3X6X9AH2&psig=AOvVaw27NRtKvdpM6RRMs4ebN-sm&ust=1692731860661000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjijN-77oADFQAAAAAdAAAAABAE",
            img2: "",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuspoloassn.nnnow.com%2Fflying-machine-women-mustard-long-sleeve-graphic-print-t-shirt-UVU3X6X9AH2&psig=AOvVaw27NRtKvdpM6RRMs4ebN-sm&ust=1692731860661000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjijN-77oADFQAAAAAdAAAAABAE",
            img2: "",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuspoloassn.nnnow.com%2Fflying-machine-women-mustard-long-sleeve-graphic-print-t-shirt-UVU3X6X9AH2&psig=AOvVaw27NRtKvdpM6RRMs4ebN-sm&ust=1692731860661000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjijN-77oADFQAAAAAdAAAAABAE",
            img2: "",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        }
    ]

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
        Discover our latest additions to our e-commerce t-shirt collection! 
        Our website now showcases an array of innovative features and products 
        designed to elevate your shopping experience. Explore trendsetting designs,
         eco-friendly materials, and a personalized virtual try-on feature that ensures 
         the perfect fit. With enhanced search filters, finding your ideal t-shirt has 
         never been easier. Dive into a world of customizable options, from colors to prints, 
         allowing you to express your unique style. Stay ahead with limited-edition releases, 
         and enjoy seamless navigation on both desktop and mobile platforms. Elevate your wardrobe
          with our new t-shirt products, where fashion and technology converge.
        </p>
      </div>
      <div className='bottom'>
        {data.map(item => (
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}
