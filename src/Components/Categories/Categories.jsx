import React from 'react'
import "./Categories.css"

function Categories({category}) {
  return (
    <div className='category'>
        {/* Categories */}
        <a href='#'>{category}</a>
    </div>
  )
}

export default Categories