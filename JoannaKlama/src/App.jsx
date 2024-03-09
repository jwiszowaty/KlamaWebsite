import { useState } from 'react'
import './App.css'
import {imgs} from './images.js'
function App() {
  const images = imgs
  const [red, setRed] = useState(0)
  const move = (value) => {
    setRed((red + value)%imgs.length)
  }
  return (
    <>
      <div className='images'>
      {
        images.map((image, index) => <div key={index} className={red === index ? image+' image highlight' : image+' image'}>{image}</div>)
      }
      </div>
      <button onClick={() => move(-1)}>previous</button>
      <button onClick={() => move(1)}>next</button>
    </>
  )
}

export default App
