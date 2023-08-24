import React from 'react';
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({item}) {
  return (
    <Link to = {`/product/${item.id}`}>
        <div className='card'>Card1</div>
    </Link>
    
  )
}
