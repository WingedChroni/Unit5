import React from 'react'
import "./ProductCard.css"

function ProductCard({product}) {
  return (
    <a href={`/product/${product.id}/details`}>
      <div className='product-card'>
          <img src={product.image} alt="" />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
      </div>
    </a>
  )
}

export default ProductCard