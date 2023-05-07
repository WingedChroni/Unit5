import React, {useEffect, useState, useContext} from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { LikesContext } from './../../context/LikesContext';

function Header() {

  const {likes} = useContext (LikesContext)


  const [count, setCount] = useState(0)

  useEffect (()=>{
    console.log(`nubmer of items is ${likes.length}`);
    setCount(likes.length)

  }, [likes])

  return (
    <div className='header-container'>
        <Link to="/" style={{marginRight:"10px", fontSize: "36px"}}>Fake Store</Link>

          <Link to="/checkout" className="cart-container">
            <AiOutlineShoppingCart className="cart-icon"/>
            <div className="cart-items">
              <p>{count}</p>
            </div>
          </Link>

        
    </div>
  )
}

export default Header