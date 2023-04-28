import React from 'react'
import "./Header.css"
//AiOutlineShoppingCart
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div className='header-container'>
        <a href="/" style={{marginRight:"10px", fontSize: "36px"}}>Fake Store</a>
        <a href="/checkout">
          <AiOutlineShoppingCart className="cart-icon"/>
        </a>
        
    </div>
  )
}

export default Header