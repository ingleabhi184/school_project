import React from 'react'
import {Link} from 'react-router'

function Footer() {
  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:items-start sm:ml-[100px] gap-8 sm:h-[355px] bg-[#ffffff] justify-evenly items-center text-center sm:text-left p-5">
  {/* School Address */}
  <div>
    <h1 className="text-[#B91C1C] underline font-bold text-2xl mb-3">School Address</h1>
    <h1 className="text-xl font-semibold text-[#1E3A8A]">Bhondawe Patil Public School</h1>
    <p className="m-1 text-[#1E3A8A]">Gut No. 49, Bajaj Nagar, MIDC,</p>
    <p className="m-1 text-[#1E3A8A]">Waluj, Aurangabad – 431136. (MH)</p>
    <p className="m-1 text-[#1E3A8A]">Contact: 6232616161 / 6232717171</p>
    <p className="m-1 text-[#1E3A8A]">Email: bhondawepatilschool@gmail.com</p>
  </div>

  {/* Quick Links */}
  <div>
    <h1 className="text-[#B91C1C] underline font-bold text-2xl mb-3">Quick Links</h1>
    <ul className="space-y-2 ">
      <Link to="/"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">Home</li></Link>
      <Link to="/About"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">About</li></Link>
      <Link to="/Admission"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">Admission</li></Link>
      <Link to="/mandatory"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">Mandatory Public Disclosure</li></Link>
      <Link to="/academi"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">Academic</li></Link>
      <Link to="/achievemet"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">Achievement</li></Link>
      <Link to="/infrastructure"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">Infrastructure</li></Link>
      <Link to="/gallery"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">Gallery</li></Link>
      <Link to="/contactus"><li className="text-[#1E3A8A] text-[16px]  transition-transform duration-300 hover:scale-110 hover:text-red-500 font-semibold cursor-pointer">Contact Us</li></Link>
    </ul>
  </div>

  {/* Follow Us */}
  <div className="flex flex-col items-center sm:items-start">
    <h1 className="text-[#B91C1C] underline font-bold text-2xl mb-3">Follow Us On</h1>
    <div className="flex space-x-4">
      <img src="./images/icons/facebook.png" className="w-[50px] h-[50px] transition-transform duration-300 hover:scale-150" alt="Facebook" />
      <img src="./images/icons/instagram.png" className="w-[50px] h-[50px] transition-transform duration-300 hover:scale-150" alt="Instagram" />
      <img src="./images/icons/youtube.png" className="w-[50px] h-[50px] transition-transform duration-300 hover:scale-150" alt="YouTube" />
    </div>
  </div>
</div>

    <h2 className='h-[30px] bg-secondary text-white flex justify-center items-center'>All Rights Reserved With Bhondawe Patil Public School</h2>
    </div>
  )
}

export default Footer
