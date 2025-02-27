import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  
  return (
    <div>
     <div className="w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-auto"
        >
          <SwiperSlide>
            <img src="/images/home/slide-1.jpg" alt="Welcome 1" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/home/bg-building.jpg" alt="Building" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/home/slide-5.jpg" alt="Welcome 2" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="sm:max-w-[1280px] sm:mx-auto h-auto sm:h-[596px] flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-8 p-4">
  
 
  <div className="flex gap-4 sm:gap-15 justify-center">
    <img
      src="/images/home/home-welcome-1.jpg"
      alt="Boy holding flag"
      className="w-[45%] sm:w-[310px] h-[auto] sm:h-[500px] object-cover"
    />
    <img
      src="/images/home/home-welcome-2.jpg"
      alt="Boy reading"
      className="w-[45%] sm:w-[283px] h-[auto] sm:h-[460px] object-cover"
    />
  </div>

  
  <div className="w-full sm:w-[40%] text-center sm:text-left">
    <h1 className="text-[#B91C1C] text-[24px] sm:text-[30px] font-bold">Welcome to</h1>
    <h2 className="text-[#1E3A8A] text-[24px] sm:text-[30px] mb-4 font-bold">
      Bhondawe Patil Public School
    </h2>

    <div className="text-[14px] sm:text-[16px] text-justify font-serif leading-relaxed">
      <p>Welcome to the abode of intellect where the purpose of education is to equip the child with the most excellent technological proficiency.</p>
      <p>To empower him with the skills in order to realize his God-gifted potential and to create the right climate so that the child may develop fully as a complete human being.</p>
      <p>At BHONDAWE PATIL PUBLIC SCHOOL, one's intellect is transformed into an illuminated reflection of knowledge and a broad outlook towards life.</p>
    </div>
  </div>

</div>




<div className="bg-[#EEEEEE] w-full flex items-center justify-center py-8 sm:py-12">
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

<div
  className="relative w-full h-auto sm:h-[536px] bg-[url('/images/home/bg-building.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center sm:justify-end px-4 sm:px-12"
>
  <div className="bg-blue-500/60 text-white p-5 sm:p-8 rounded-[10px] max-w-[90%] sm:max-w-[500px] sm:mr-10 my-6 sm:my-0 ">
    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
      Our Mission
    </h1>
    <p className="text-sm sm:text-base leading-relaxed">
      We seek to make our children confident and creative builders of their future. 
      Our focus is on the child as a whole entity. We work towards an integrated curriculum 
      that reaches across disciplines and age levels. The students will be encouraged to meet 
      academic challenges with openness, enthusiasm, and willingness to solve problems.
      <br /><br />
      We strive to inspire our students to achieve the highest standards of intellectual and personal 
      development through a satisfactory, stimulating, and comprehensive programme. We aim for an 
      atmosphere of cooperation and endeavour to create compassionate, responsible, and innovative 
      global citizens, committed to the development of India and the world.
    </p>
  </div>
</div>


    </div>
  );
}

export default Home;
