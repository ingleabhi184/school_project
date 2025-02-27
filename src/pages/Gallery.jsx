// import React from 'react'
 import Slider from '../components/Slider'

// function Gallery() {
//   return (
//     <div>
//         <Slider title={'Event Gallery'}/>


//   <div className='container mx-auto sm:p-5 p:3 mt-7'>
//     <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-15 gap-5 m-3'>

//       <div> <img src='./images/gallery/10.jpg'/></div>
//       <div><img src='./images/gallery/11.jpg'/></div>
//       <div><img src='./images/gallery/03.jpg'/></div>
//       <div><img src='./images/gallery/04.jpg'/></div>
//       <div><img src='./images/gallery/05.jpg'/></div>
//       <div><img src='./images/gallery/06.jpg'/></div>
//       <div><img src='./images/gallery/07.jpg'/></div>
//       <div><img src='./images/gallery/08.jpg'/></div>
//       <div><img src='./images/gallery/09.jpg'/></div>
//       <div><img src='./images/gallery/01.jpg'/></div>
//       <div><img src='./images/gallery/02.jpg'/></div>
//       <div><img src='./images/gallery/35.jpg'/></div>
//       <div><img src='./images/gallery/13.jpg'/></div>
//       <div><img src='./images/gallery/14.jpg'/></div>
//       <div><img src='./images/gallery/15.jpg'/></div>
//       <div><img src='./images/gallery/16.jpg'/></div>
//       <div><img src='./images/gallery/17.jpg'/></div>
//       <div><img src='./images/gallery/18.jpg'/></div>
//       <div><img src='./images/gallery/19.jpg'/></div>
//       <div><img src='./images/gallery/20.jpg'/></div>
//       <div><img src='./images/gallery/21.jpg'/></div>
//       <div><img src='./images/gallery/22.jpg'/></div>
//       <div><img src='./images/gallery/23.jpg'/></div>
//       <div><img src='./images/gallery/24.jpg'/></div>
//       <div><img src='./images/gallery/25.jpg'/></div>
//       <div><img src='./images/gallery/26.jpg'/></div>
//       <div><img src='./images/gallery/27.jpg'/></div>
//       <div><img src='./images/gallery/28.jpg'/></div>
//       <div><img src='./images/gallery/29.jpg'/></div>
//       <div><img src='./images/gallery/30.jpg'/></div>
//       <div><img src='./images/gallery/31.jpg'/></div>
//       <div><img src='./images/gallery/32.jpg'/></div>
//       <div><img src='./images/gallery/33.jpg'/></div>
//       <div><img src='./images/gallery/34.jpg'/></div>
//       <div><img src='./images/gallery/36.jpg'/></div>
//     </div>
//   </div>
//     </div>
//   )
// }

// export default Gallery

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 4000,  
            once: false,    
            offset: 100,   
        });
    }, []);

    const images = [
        "10.jpg", "11.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg",
        "01.jpg", "02.jpg", "35.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg",
        "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg",
        "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "36.jpg"
    ];

    return (
      <>
      <Slider title={'Event Gallery'}/>
        <div className='container mx-auto sm:p-5 p-3 mt-7'>
            <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-10 gap-5 m-3'>
                {images.map((img, index) => (
                    <div key={index} data-aos="fade-up">
                        <img src={`./images/gallery/${img}`} alt={`Gallery ${img}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Gallery;
