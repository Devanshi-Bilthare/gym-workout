import React from 'react'
import HeroBannerImage from '../Assets/banner.png'

const HeroBanner = () => {
  return (
    <div className='relative mt-36 ml-20 flex'>
       <div>
       <p className='text-red-700 font-semibold text-3xl leading-10'>Fitness Club</p>
        <p className='text-zinc-900 font-bold text-5xl leading-snug'>Sweet, Smile <br/> and Repeat</p>
        <p className='text-2xl leading-10'>Check out the most effective exercises</p>
        <button href className='bg-red-700 px-5 py-3 text-xl rounded text-zinc-100 mt-10'>
            <a href='#exercises'>Explore Exercises</a>
        </button>
        <p className='text-[170px] text-red-200 font-bold' >Exercise</p>
       </div>
        <img className='absolute right-[5%] -top-52 w-2/5 h-screen' src={HeroBannerImage}></img>
    </div>
  )
}

export default HeroBanner