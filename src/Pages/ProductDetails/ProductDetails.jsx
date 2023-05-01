import React from 'react'
import "./ProductDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {

  const {productId} = useParams()
  console.log(productId);

  const [product, setProduct] = React.useState ({})

  React.useEffect (()=>
  {
    console.log("page loaded")
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>{
      console.log(res.data)
      setProduct(res.data);
    }).catch(err=>console.log(err))
  }, []
  )

  return (
    <div>
      ProductDetails
      <img src={product?.image} alt="" />
        <div className="container-info">
            <p>{product?.title}</p>
            <p>{product?.price}</p>
            <p>Description</p>
            <p>{product?.description}</p>
        </div>
      
    </div>
  )
}

export default ProductDetails