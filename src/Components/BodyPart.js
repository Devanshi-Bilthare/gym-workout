import React from 'react'
import Icon from '../Assets/gym.png'


const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <div className={`shrink-0 w-60  hover:scale-110 ease-linear duration-300 text-center mt-20 ${bodyPart == item ? 'border-t-2' : 'border-t-0'} border-t-red-700   border-solid p-6`} 
    
    onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }} >
        <img src={Icon} alt='dumble' className='w-[40px] h-[40px] m-auto' />
        <p className='text-3xl font-semibold mt-10 capitalize' 
            
        >{item}</p>
    </div>
  )
}

export default BodyPart