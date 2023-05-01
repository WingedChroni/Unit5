import React from 'react'
import "./Categories.css"
import axios from 'axios'

function Categories({category, setProducts}) {
  

  function getProducts (){
    console.log(`category is ${category}`)
    let link = "";
    if(category != "All"){
      link = `category/${category}`;
    }
    console.log("link is " + link)
    axios.get(`https://fakestoreapi.com/products/${link}`).then(
      res=>{
        console.log(`clicked ${category}`)
        console.log(res.data)
        setProducts(res.data);
      }
    ).catch(err=>console.log(err))
  }

  return (
    <div className='category'>
        {/* Categories */}
        <p onClick={getProducts}>{category}</p>
    </div>
  )
}

export default Categories