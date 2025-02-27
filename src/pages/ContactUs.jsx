import React from 'react'
import Slider from '../components/Slider'

function ContactUs() {
  return (
    <div>
        <Slider title={'Contact Us'}/>
        <div className='bg-[#EEEEEE] min-h-800px h-auto w-[full] sm:pt-[70px] pt:20px sm:pb-[50px]'>
          <div className='bg-white w-[full] sm:h-[250px] items-center text-center'>

            
            <h1 className='font-bold text-4xl sm:pt-[2.2%] pt-[8px] pb-[10px] text-primary'>School Address</h1>
            <p className='text-primary text-2xl font-medium'>Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad – 431136. (MH).<br></br>

                  Contact: 6232616161/ 6232717171<br></br>

                    Email: info@bhondawepatilschool.in<br></br></p>
          </div>

          <div className='grid sm:grid-cols-2 grid-cols-1 h-[auto] w-full  sm:m-[50px] gap-10 mt-[8px] mb-[10px]'>
          <div class="mt-4 w-full max-w-lg mx-auto">
            <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.814454375241!2d75.232802175225!3d19.847802281522284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b6df9173029%3A0x1d20d2e7adfd03c3!2sBhondawe%20Patil%20Public%20School!5e0!3m2!1sen!2sin!4v1739794276830!5m2!1sen!2sin" 
                class="w-full h-[590px] border-0 rounded-lg shadow-lg"
                allowfullscreen=""
                  loading="lazy"
               referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>

            <div>
       
             <div className="bg-[#1E3A8A] text-white w-full max-w-[600px] h-auto p-8 rounded-lg shadow-lg flex        flex-col">
                <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>
    
                     <form className="flex flex-col space-y-6">
                      
                      <input type="text" placeholder="Name" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
                      <input type="number" placeholder="Mobile Number" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
          
                      <input type="email" placeholder="Email " className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
                      <input type="text" placeholder="Subject " className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none" />
                      <textarea placeholder="Message" className="p-3 bg-transparent border-b border-white text-lg placeholder-white outline-none "></textarea>

                      <button className="bg-red-600 text-black font-bold py-3 text-xl rounded mt-4 cursor-pointer hover:bg-red-700 transition">
                      Send
                  </button>
                </form>
              </div>
              </div>
          
          </div>
        </div>
    </div>
  )
}

export default ContactUs
