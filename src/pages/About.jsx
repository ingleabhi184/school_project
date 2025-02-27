import React, { useState } from "react";

function About() {
  const [title, setTitle] = useState("Mission & Vision");
  const [activeButton, setActiveButton] = useState("Mission & Vision");

  const buttons = [
    "Mission & Vision",
    "Philosophy",
    "Chairman's Desk",
    "Principal's Desk",
    "Our Aim",
    "Our Distinction",
  ];

  return (
    <div>
      
      <div>
        <img src="./images/about/about-bg.jpg" className="sm:h-[444px] sm:w-[100%]" />
      </div>

      
      <div className="bg-gray-100 py-15">
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-12 gap-4 m-auto">
          
        
          <div className="col-span-3 flex flex-col  gap-2 p-4 bg-white h-[400px]">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={() => {
                  setTitle(btn);
                  setActiveButton(btn);
                }}
                className={`p-3 border rounded-md font-bold transition-all duration-200 ${
                  activeButton === btn
                    ? "bg-primary text-white"
                    : "bg-white text-primary border-gray-300 hover:bg-primary hover:text-white"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          
          <div className="col-span-9  bg-white p-7 ">

         {
          title==="Mission & Vision"&&
          <div>
            <h2 className="text-primary text-4xl font-bold text-center py-3">Mission</h2>
            <p className="text-gray-500 text-xl text-center">We seek to make our children confident and creative builders of their future. Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens, committed to the development of India and the world.</p><br/><br/>

            <h2 className="text-primary text-4xl font-bold text-center py-3">Vision</h2>
            <p className="text-gray-500 text-xl text-center"> To prepare dynamic and caring citizens of tomorrow, to meet the challenges of a global society, while retaining their traditional values.</p><br/>
              <p className="text-gray-500 text-xl text-center">To develop our school into a vibrant and an exemplary educational institution where students are nurtured, encouraged and motivated to achieve their ultimate potential by exploring limitless possibilities with utmost confidence, dedication and excellence</p>
            </div>
         }
         {
          title==="Philosophy"&&
          <div>
                <h2 className="text-primary text-4xl font-bold text-center py-5">Philosophy</h2>

              <p  className="text-gray-500 text-xl px-5">  The essense and philosophy of our school centres around ....</p>

            <p className="text-red-700 text-xl font-bold py-5 px-5">Empowering knowledge & Excellence-Inspiring Values & Patriotism</p>

            <p className="text-gray-500 text-xl px-5">Besides this, our school is committed to application-oriented learning. We believe that shaping the overall personality of the student is of paramount importance and will offer total personality development as part of the curriculum transaction. We provide individual attention to our students, thus enhancing their ability to acquire and synthesize knowledge in their chosen fields of study. The objective is to inculcate a self-sustaining innovative and self renewing system that always operates on a learning mode.</p>

            </div>
         }
          {
          title==="Chairman's Desk"&&
          <div>
            <img className="sm:ml-[70px]" src="./images/about/chairman.jpg"/>
            <h2 className="text-primary font-bold text-2xl text-center py-2">SHRI. HANUMAN BHONDAWE PATIL</h2>
            <p className="text-center text-gray-500 text-xl ">Chairman</p>

           <h2 className="text-primary font-bold text-4xl text-center py-5"> Words of our Chairmain</h2>
            <p className=" text-primary text-center text-xl">"AFFORDABLE AND QUALITY EDUCATION FOR ONE AND ALL"</p>
            <p className="text-gray-500  text-xl py-4">Bhondawe Patil Public School is started with a focused mission to Inculcate a passion for lifelong learning among students and empower them to learn and excel, so that they can face the practical life situation with confidence and determination: standing true and tall to our vision of facilitating overall personality grooming, academic excellence as one of the primary objectives of our institution.
            Our spacious, ventilated and smart classrooms, highly proficient faculty, professional & experienced management, balanced curriculum with ample space for co-curricular activities, social and value based education etc; make our schooling experience a distinct and unique one.
            I wish every learner for an empowered learning and excellence In school and all facets of life.
            Best Wishes & Warm Regards</p>
            </div>
         }
         {
          title==="Principal's Desk"&&
          <div>
                <img className="sm:ml-[70px]" src="./images/about/Principal-01.jpg"/>
           <h2 className="text-primary font-semibold text-2xl text-center py-2"> Mr. Manoj Asha Ashok Savale</h2>
            <p className="text-center text-gray-500">Principal, Bhondawe Patil Public School</p>

            <h2 className="text-primary text-center font-bold text-4xl py-6"> Message from the Principal</h2>
            <p className="text-black font-semibold text-xl">Welcome to Bhondawe Patil Public School, Bajaj Nagar!</p>
            <p className="text-gray-500  text-xl py-4">It gives me immense pleasure to share with you that our school has been recognized for its commitment to excellence in education. At Bhondawe Patil Public School, we are dedicated to implementing the National Education Policy (NEP) 2020 principles. We have restructured our curriculum and infrastructure to align with NEP guidelines, ensuring a robust educational framework that fosters holistic development.</p>
            <p className="text-gray-500  text-xl py-4"> 
            Our campus is a testament to our commitment to a positive and nurturing environment. Our school is surrounded by lush greenery, with thousands of trees and saplings, and offers a serene and refreshing atmosphere. This unique feature not only enhances the aesthetic appeal but also contributes to the well-being of everyone on campus.</p>
            <p className="text-gray-500  text-xl py-4"> We take pride in providing an international level of education with a local touch. Our students excel in various disciplines, and we have integrated cutting-edge technology into our curriculum. From a state-of-the-art robotics lab to artificial intelligence facilities, we ensure that our students are well-equipped for the future.</p>
            <p className="text-gray-500  text-xl py-4"> We promise our parents and community that every student at BPPS will experience comprehensive growth. Our vision and mission are clear: to develop the leaders of tomorrow through a blend of academic excellence and technological advancement.
            </p>
            <p className="text-gray-500  text-xl py-4"> 
            As we continue to strive for greater heights, we seek your cooperation and partnership. We can achieve our goals and make BPPS a beacon of educational excellence.</p>
            </div>
         }
          {
          title==="Our Aim"&&
          <div>
            <h2 className="text-primary font-bold text-4xl text-center py-5">Our Aim</h2>
            <ul className="list-disc pl-5">
              <li className="text-gray-500 text-xl">To accept and respect all individuals without any bias or prejudice irrespective of differences in origin, religion, ethnicity or otherwise and create an inclusive learning community.</li>
              <li className="text-gray-500 text-xl sm:py-2">To help learners exploit their potential to the fullest and help them improve and grow both academically and personally.</li>
              <li className="text-gray-500 text-xl">To provide a dynamic and broad spectrum learning environment that will faster critical thinking skills in a students and help them become life long learners.</li>
              <li className="text-gray-500 text-xl sm:py-2">To create and awareness among the learners of the social responsibilities and equip them with the skills to adapt to the changing needs of a global environment.</li>
            </ul>
            </div>
         }
         {
          title==="Our Distinction"&&
          <div>

            <h2 className="text-primary font-bold text-4xl text-center py-5">Our Distinction</h2>
            <ul className="list-disc pl-5">
              <li className="text-gray-500 text-xl">Celebrate of culture of excellence in academics and the all round development of children.</li>
              <li className="text-gray-500 text-xl sm:py-2">Individual attention to each child to cater to their diverse learning needs.
              </li>
              <li className="text-gray-500 text-xl">Talented, experienced, and dedicated teachers with linguistic and cultural diversity.
              </li>
              <li className="text-gray-500 text-xl sm:py-2">Inclusive education with a committed team of a student care professionals.</li>
              <li className="text-gray-500 text-xl">Offers and integrated curriculum from LKJ to class VIII. drawing upon the best of national and international curriculum.</li>
              <li className="text-gray-500 text-xl sm:py-2">Wide range and depth of community service for program starting from class III.</li>
              <li className="text-gray-500 text-xl">Upholds Indian culture and values, whilst fostering global citizenship.</li>
              <li className="text-gray-500 text-xl sm:py-2">A safe and secure learning environment with focus on student well being.</li>
              <li className="text-gray-500 text-xl">High quality Student Leadership opportunities including exposure to leaders,Innovators and iconic personalities from all walks of life.</li>
              <li className="text-gray-500 text-xl sm:py-2">Enrichment classes by experts beyond regular curriculum.</li>
              
            </ul>
            </div>
         }
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
