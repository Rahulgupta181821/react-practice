import React, { useState } from 'react'
import Product from './Product'

function App() {
  var [a,b] = useState(69)
  return (
    <div className="w-full h-screen bg-zinc-900 p-4 text-white">
      <Product age = "25"/>
    </div>

  )
}

export default App
