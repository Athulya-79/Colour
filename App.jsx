import { useState } from 'react'

import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('white');
  const changeColor = (color) => {
    setBgColor(color)
  }


  return (
    <>
      <div className='Website' style={{ backgroundColor: bgColor }}>
      <h1 className='head' >COLOUR PALETTE </h1>
  <div className='mainDiv'>
  <div>
  <img src="https://cdn.pixabay.com/photo/2020/05/25/15/06/soft-pastel-5219000_640.jpg" alt="" />
</div>
        <div className='ButtonGroup'>
          <button onClick={() => changeColor('#F26378')} className='Button1' ></button>
          <button onClick={() => changeColor('#66DD64')} className='Button2' ></button>
          <button onClick={() => changeColor('#E3E36B')} className='Button3' ></button>
        </div>
        <div className='ButtonGroup2'>

              
          <button onClick={() => changeColor('#FF5B22')} className='Button4' ></button>
          <button onClick={() => changeColor('#676AE3')} className='Button5' ></button>
          <button onClick={() => changeColor('#E066E1')} className='Button6' ></button>

        </div>
      </div>
      </div>
    </>
  )
}

export default App
