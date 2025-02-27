import React, { useState } from 'react'
import { Link } from 'react-router'
import {Menu,X} from 'lucide-react'


function Header() {

 const[open,setOpen]= useState(false);
  return (
    <div>
      
      <div className='bg-secondary py-1  '>
        <div className='container mx-auto flex justify-between text-white font-bold text-xs'>
        <p className='ml-8px'>Abhi@gmail.com</p>
        <a href='#' className='mr-10px'>Instagram</a>
        </div>
       
      </div>
      <div className='container mx-auto'>
        <img src='./images/logo-name.jpg' alt='logo' className='mb-3 ml-40px'></img>
      </div>
      
      <nav className='bg-primary'>
        <ul className={`container-mx-auto sm:flex sm:flex-row flex-col pl-[85px]  items-center gap-10 text-white p-3 font-bold ${open ? "flex justify-end divide-y-2  divide-[#EEEEEE] sm:no-underline " : "hidden"}`}>
        

            <Link to="/"><li className='transition-transform duration-300 hover:scale-150'onClick={()=>setOpen(!open)}>Home</li></Link>
            <Link to="/About"><li className='transition-transform duration-300 hover:scale-150'onClick={()=>setOpen(!open)}>About</li></Link>
            <Link to="/Admission"><li className='transition-transform duration-300 hover:scale-150'onClick={()=>setOpen(!open)}>Admission</li></Link>
            <Link to="/mandatory"><li className='transition-transform duration-300 hover:scale-150'onClick={()=>setOpen(!open)}>Mandatory Public Disclosure</li></Link>
            <Link to="/academic"><li className='transition-transform duration-300 hover:scale-150'onClick={()=>setOpen(!open)}>Academic</li></Link>
            <Link to="/achievemet"><li className='transition-transform duration-300 hover:scale-150'onClick={()=>setOpen(!open)}>Achievement</li></Link>
            <Link to="/infrastructure"><li className='transition-transform duration-300 hover:scale-150'onClick={()=>setOpen(!open)}>Infrastructure</li></Link>
            <Link to="/gallery"><li className='transition-transform duration-300 hover:scale-150'onClick={()=>setOpen(!open)}>Gallery</li></Link>
            <Link to="/contactus"><li className='transition-transform duration-300 hover:scale-150' onClick={()=>setOpen(!open)}>Contact Us</li></Link>
        </ul>
        <div className='flex justify-end items-start sm:hidden'>

       <button onClick={()=>setOpen(!open)}>{open ?<X color="#ffffff" /> :<Menu color='white'/>}</button> 
        </div>
      </nav>
    </div>
  )
}

export default Header
