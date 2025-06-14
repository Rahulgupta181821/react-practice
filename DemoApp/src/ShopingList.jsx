import React, { Component } from 'react'

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
function ShopingList () {
  const listItems = products.map(product =>
    <li
    key={product.id}
    style = {{color:product.isFruit?'magenta':'red'
    }}
    >
     {product.title}
    </li>
  )
  return(
    <ul>{listItems}</ul>
  )
}

export default ShopingList