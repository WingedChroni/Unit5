import React from 'react'
import "./Header.css"
//AiOutlineShoppingCart
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div>
        <AiOutlineShoppingCart className="cart-icon"/>
    </div>
  )
}

export default Header