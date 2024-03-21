import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Assets/Logo.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-start m-5 mx-20 gap-20'>
      <Link to='/'>
        <img src={logo} alt='logo'/>
      </Link>
      <div className='flex items-end justify-center gap-10'>
      <Link className='border-b-2 border-solid border-red-600' to='/'>
        Home
      </Link>
      <a href='#exercises'>Exercises</a>
      </div>
    </div>
  )
}

export default Navbar