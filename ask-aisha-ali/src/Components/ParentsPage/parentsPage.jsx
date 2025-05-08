import React from 'react'
import "./parentsPage.css"  
import Img from "../../assets/robot.png"
import NavBar from "../NavBar/navBar"

function parentsPage() {
  return (
    <>
      <NavBar />
      <div className='h-[100vh]'>
        <div className='parents bg-linear-to-r from-[#ff758c] to-[#E3ACBD] pb-10 pt-10 border border-solid border-2 border-[#F0C5D1] shadow-lg rounded-[1rem]'>
          <div className='flex items-center justify-center w-[100%] m-auto'>
            <div className='pl-20 pr-20'>
              <p className='parentsChat text-[#641429] pb-2 text-[1.6em]'>AI-powered chat companion for Muslim kids to learn about Islam in fun and educational way</p>
              <p className='text-[#641429] pt-2 pb-10 text-[1em] font-medium'>Our AI chat companion is designed to inspire curiosity, foster spiritual growth, and provide a positive online experience for your child.</p>
              <button className='bg-white border border-2 border-[#641429] text-[#641429] font-semibold text-[1em] rounded-md p-2 pl-10 pr-10'>Try</button>
              <button className='bg-white border border-2 border-[#641429] btn text-[#641429] font-semibold text-[1em] rounded-md p-2 pl-10 pr-10'>Meet Bot</button>
            </div> 
            <div className='pr-20'>
              <img src={Img}  style={{width: 400}}/>
            </div> 
          </div>
         
        </div>
      </div>
      <div>
        <section className='h-[100vh]'>
          <div className='flex items-center justify-center'>
            <div className='text-center'>
              <h1 className='headingText text-[#641429] text-[1.5em] font-semibold'>Why Ask Aisha&Ali?</h1>
              <p className='text-[#641429] pt-2 pb-10 text-[1em] font-medium'>Our AI chat companion is designed to inspire curiosity, foster spiritual growth, and provide a positive online experience for your child.</p>
              <div className='flex items-center justify-between pText'>
                <div className='pt-30 pb-30 pl-10 pr-10 bg-[#F0C5D1] rounded-[8px] shadow-lg'>
                  <img src="" />
                  <p className='text-[#641429]'>Vetted Islamic Content</p>
                </div>
                <div className='pt-30 pb-30 pl-20 pr-20 bg-[#F0C5D1] rounded-[8px] shadow-lg'>
                  <img src="" />
                  <p className='text-[#641429]'>Kid-Friendly Chat</p>
                </div>
                <div className='pt-30 pb-30 pl-20 pr-20 bg-[#F0C5D1] rounded-[8px] shadow-lg'>
                  <img src="" />
                  <p className='text-[#641429]'>Parent-Approved</p>
                </div>
                
                
              </div>
              
            </div>
            
          </div>
        </section>
      </div>
    </>
  )
}

export default parentsPage
