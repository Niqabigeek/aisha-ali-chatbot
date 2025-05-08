import React from 'react'
import Cloud from "../../assets/cloud.png"
import "./duaPop.css"


function duaPopUp({ onClose }) {
  return (
    <> 
    
        <div className='fixed inset-0 flex items-center justify-center bg-opacity-50'>
          <div className='popDiv bg-white text-[#641429] pt-10 pb-28 rounded-md text-center shawdow-lg'>
            {/* Close Button */}
            <button 
              className="absolute top-27 right-105 text-2xl cursor-pointer"
              onClick={onClose}
            >
              &times;
            </button>
            <p>Du'aas of the day</p>
            <p className='pb-18'>(Night time Du'aa)</p>
            <img src={ Cloud }  className='absolute w-[12em] left-1/2 transform -translate-x-1/2 top-60 opacity-100 z-0' />
            <p className='text-[2em] pb-3 relative z-10'>بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا</p>
            <p className='text-[0.9em] pb-3'>Bismika Allahumma amutu wa ahya</p>
            <p className='text-[0.7em]'>"In Your name, O Allah, I live and die." 
            <br />
            (Bukhari, Muslim)
            </p>
          </div>
        </div>
      
  

    </>
  )
}

export default duaPopUp

