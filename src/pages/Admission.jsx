import React from 'react'
import Slider from '../components/Slider'

function Admission() {
  return (
    <div>
          <Slider title={'Admission'}/>

  <div className="bg-[#FFFFFF] w-full flex items-center justify-center py-8 sm:py-12">
  <div className="w-full max-w-[900px] px-4">
    
    <h1 className="text-[1.8rem] sm:text-[2rem] font-semibold text-center mb-4">
      School Virtual Tour
    </h1>

    <div className="relative w-full pb-[56.25%] h-0">
      <iframe 
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/cuIFuOVG9eA"
        title="Bhonwade Patil Public School (CBSE) Bajajnagar Waluj"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  </div>

  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="bg-[#1E3A8A] text-white w-full max-w-[600px] h-[680px] p-8 rounded-lg shadow-lg flex flex-col">
    <h2 className="text-2xl font-bold text-center mb-6">
      Please fill the Form below to Place Admission Enquiry
    </h2>
    
    <form className="flex flex-col space-y-6">
      <input type="text" placeholder="Name of Student" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
      <input type="text" placeholder="Admission Required For Which Grade?" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
      <input type="text" placeholder="Parent Name" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
      <input type="tel" placeholder="Contact Number" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
      <input type="email" placeholder="Email ID" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
      <textarea placeholder="Residential Address" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none "></textarea>

      <button className="bg-red-600 text-black font-bold py-3 text-xl rounded mt-4 hover:bg-red-700 transition">
        Submit
      </button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Admission
