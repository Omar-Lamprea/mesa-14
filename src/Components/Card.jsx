import React from 'react'

const Card = ({product}) => {
  console.log(product);
  return (
    <div className='card'>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <p>Price: {product.price} - Stock: {product.stock}</p>
    </div>
  )
}

export default Card