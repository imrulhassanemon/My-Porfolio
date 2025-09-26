
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function Navigation (){
  return (
    <ul className='nav-ul'>
      <li className='nav-li'>
        <Link>Home</Link>
      </li>
      <li className='nav-li'>
        <Link>About</Link>
      </li>
      <li className='nav-li'>
        <Link>Work</Link>
      </li>
      <li className='nav-li'>
        <Link>Contact</Link>
      </li>
    </ul>
  )
}

export default function Navbar() {

  const [open, isOpen] = useState(false)

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 '>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex itmes-center justify-between py-2 sm:py-0'>
          <a href='/' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>Ali</a>
          <button className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden' onClick={()=> isOpen(!open)}>
            <img src={open?"../../public/assets/close.svg": '../../public/assets/menu.svg'} className='w-6 h-6' alt="" />
          </button>
          <nav className='hidden  sm:flex'>
            <Navigation></Navigation>
          </nav>
        </div>
        {isOpen && (<div className='block overflow-hidden text-center sm:hidden'>
            <Navigation></Navigation>
        </div>)}
      </div>
    </div>
  )
}
