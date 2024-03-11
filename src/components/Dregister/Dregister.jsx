import React from 'react'
import './Dregister.css'
const Dregister = () => {
  return (
    <div className='px-20 py-24 bg-center bg-no-repeat bg-your-image'> 
      <div className="flex flex-col items-center gap-5 bg-transparent">
        <div className="text-2xl font-extrabold bg-transparent font-inter random-title">Beta Lab's</div>
        <div className="text-5xl font-bold bg-transparent">Android Development</div>
        <div className="font-light bg-transparent">
            HERE IS THE PARAGRAPH OF BETA LABS
        </div>
        <button className="random-button">
            <span className="random-gradient"></span>
            <span className="random-button-text">Register</span>
        </button>
      </div>
    </div> 
  )
}

export default Dregister