import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import ShopingList from './ShopingList'
import MyButton  from './MyButton'
import EventButton from './Even'
import Button from './Button'
import  NetflixSeries from './components/NetflixSeries'
// function MyButton() {
//   return (
//     <button>I'm a button </button>
//   )
// }

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count + 1)
  }

  return (
    <>
        <NetflixSeries/>
        {/* <Profile/> */}
    </>
  )
}

export default App
