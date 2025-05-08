import React from 'react'
import './chatQuery.css'

function chatQuery() {
  return (
    <>

      <div>
            <div className="p-40">
                
            </div>

            <div className="p-4 bg-[#f8bfce3d] flex items-center fixed bottom-12 w-full shadow-md">
                <div className='pl-6 w-[90%]'>
                    <input
                        type="text"
                        className="w-[99%] p-2 text-[#641429] bg-[#F0C5D1] border rounded-md outline-none placeholder-[#641429] border-[#641429] border-solid border-2"
                        placeholder="Ask Aisha&Ali salah..."
                    
                    />
                </div>
              
                <button
                 className="p-2 pr-7 pl-7 border border-solid border-2 cursor-pointer border-[#641429] text-[white] bg-[#FF4073] rounded-md chatQueryBtn"
                >
                Reply
                </button>
           </div>
      </div>
    
    </>
       
  )
}



export default chatQuery