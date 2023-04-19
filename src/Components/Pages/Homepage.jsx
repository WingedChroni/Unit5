import React, {useEffect, useState} from 'react'
import "./Homepage.css"
import axios from "axios"
import Categories from './../Categories/Categories';
import ProductCard from '../ProductCard/ProductCard';



function Homepage() {

  const [categories, setCategories] = useState([]);

  const[products, setProducts] = useState([]);

  useEffect(
    ()=>{
      console.log("useEffect succeeded");
      axios.get('https://fakestoreapi.com/products/categories').then(
        res=>{
          console.log(res.data);
          setCategories (res.data);
        }
      ).catch(err=>console.log(err))
      axios.get('https://fakestoreapi.com/products').then(
        res=>{
          console.log(res.data);
          setProducts(res.data);
        }
      ).catch(err=>console.log(err))
    }, []
  )


  return (
    <div className='Homepage-container'>
      <div className="categories-container">
        {
          // categories.map((category,index)=><p key={index}>{category}</p>)
          categories.map((category,index)=><Categories key={index} category={category}/>)
        }
    </div>
      {
        // products.map(product=><p key={product.id}>{product.title}</p>)
        products.map(product=><ProductCard key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Homepage