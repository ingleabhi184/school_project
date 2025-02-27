import React, { useState } from "react";
import Slider from "../components/Slider";

function Academic() {
  const [Title, setTitle] = useState("earlyYears");

  return (
    <div>
      <Slider title={'Academic'}/>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 pt-14 mt-5 mb-10">
        
       
        <div className="flex flex-wrap justify-center gap-4 mb-6 sm:gap-8">
          {["earlyYears", "foundationYears", "growingYears"].map((section, index) => (
            <button
              key={index}
              onClick={() => setTitle(section)}
              className={`px-6 h-auto sm:h-20 font-bold rounded-md transition border ${
                Title === section ? "bg-blue-900 text-white border-none" : "bg-gray-100 text-blue-700 border-blue-700"
              }`}
            >
              {section === "earlyYears" ? "EARLY YEARS PROGRAMME" :
               section === "foundationYears" ? "THE FOUNDATION YEARS PROGRAMME" :
               "GROWING YEARS PROGRAMME"}
            </button>
          ))}
        </div>

       
        <div className="bg-gray-100 text-black w-full h-auto sm:max-w-[1200px] p-12 rounded-lg shadow-lg flex flex-col">
          {Title === "earlyYears" && (
            <div>
              <h2 className="text-3xl text-primary font-bold text-center pb-3">THE KINDERGARTEN</h2>
              <h2 className="text-3xl text-primary font-bold text-center pb-8 py-4">NUR TO HKG</h2>
              <p className="text-2xl mb-4 text-gray-500">
                EARLY YEARS PROGRAMME focuses on curiosity, exploration, and discovery in a fun-filled, safe, and happy learning environment. 
              </p>
              <p className="text-2xl mb-4 text-gray-500">
                EARLY YEARS PROGRAMME (The Kindergarten) inculcates in children the qualities of curiosity, exploration and discovery in a fun-filled, safe and happy learning environment. An individualised approach helps nurture a love of learning; develop social skills, and instil moral values. The emphasis is on developing in students, self confidence and the ability to effectively communicate in English as well as in their mother tongue; teachers ensure this through effective use of language and by encouraging children to express themselves freely.
                A well-balanced curriculum and theme-based instruction help the young minds integrate their learning smoothly. The emphasis is on exploring, knowing, understanding and forming their own ideas. The principles of learning applied in Kindergarten include Holistic Development and Learning (Aesthetics and Creative Expression, Language and Literacy, Numeracy, Self and Social Awareness); Integrated Learning; Active Learning: Supportive Learning: Interactive Learning and Learning through Play. The curriculum prepares children for a smooth transition to a more formal Primary curriculum.
                The Kindergarten Programme makes use of a range of individual and group activities which create a lively and positive learning environment. Games, songs, creative projects, story-telling, role-playing, drawing and painting help develop children"s foundational skills in literacy and numeracy. They are encouraged to play, explore and discover through dance, music, art and craft. Singing, rhyming and reciting are employed in the Language Arts, and the Phonics Programme. The use of manipulative, pictures and symbols helps them identify relationships between sets and groups of things to be sorted, counted, shared and represented. Sports and interactions with sports teachers help in strengthening coordination and motor skills, and instil enthusiasm for sports. Picnics and fields trips enhance students understanding of their surroundings. Celebration of festivals sensitises them to multiple traditions and cultures.
              </p>
            </div>
          )}

          {Title === "foundationYears" && (
            <div>
              <h2 className="text-2xl font-bold text-center text-primary">THE PRIMARY SCHOOL</h2>
              <h2 className="text-xl font-semibold text-center text-primary py-4">I TO IV</h2>
              <p className="text-xl mb-4 text-gray-500">
              THE FOUNDATION YEARS PROGRAMME (The Primary School) encourages inquiry and exploration, and develops children's competence in various skills reading, writing, listening, speaking, problem-solving, observation, measurement and use of information and communications technology.
                It offers an exciting and creative learning environment, with an inter disciplinary appreciation of Languages, Mathematics, Science and Social Studies, as individual and integrated subjects. Hindi is taught as a Second Language, while Marathi language offered as the Third Language, which helps build a strong foundation in Regional language. The ICT helps students understand Information and Communications Technology and its benefits. Equal emphasis is given to individual, small group and whole-group activities, to improve children's ability to work across all levels. Physical Education develops sports skills and creates health awareness. Exposure to team and individual sports encourage a sense of team spirit, and individual effort and accomplishment.
                The wide range of curricular and co-curricular opportunities offered helps instil in children confidence and discipline. The focus on developing communication skills helps them appreciate the value of education, as it reflects in their ability to express themselves, in addition to developing pragmatic skills.
                Field trips, excursions, activities, projects and presentations provide experiential learning opportunities. Dance, Fine Arts, Western and Indian Music, Yoga, Speech and Drama promote well-rounded development. Students are encouraged to participate in inter-house cultural and sports events. Active learning techniques like free play, dramatisation, and puppetry, songs, dancing and cooking enhance their interest in learning. Book, newspaper and magazine reading activities increase children's awareness of the world. Assemblies, concerts and drama productions help shape their confidence. Student's engagement in community service activities from Class III onwards sensitises them to the needs of their community and to the world around them; they visit old-age homes and orphanages to understand their situations and also to support underprivileged children.
              </p>
            </div>
          )}

          {Title === "growingYears" && (
            <div>
              <h2 className="text-2xl font-bold text-center text-primary">THE MIDDLE SCHOOL</h2>
              <h2 className="text-xl font-semibold text-center text-primary py-4">V TO VIII</h2>
              <p className="text-xl mb-4 text-gray-500">
              GROWING YEARS PROGRAMME (The Middle School) is structured to meet children's varied intellectual and developmental needs. The MSP builds on concepts and skills learnt in the Primary School and ensures progression and continuity across various stages of learning in the School, and incorporates continuous evaluation and review of children's performance.
              The main aims of the Programme are developing skills related to writing, reading, reflecting, critical thinking, public speaking, fostering initiative among students and a desire to acquire knowledge.
              Art, Drama, Computer studies, Music, Yoga and Dance are integrated into the mainstream curriculum and are further strengthened as optional co curricular activities.
              Personal, Social, Health Education helps students address their age-specific interests and concerns, builds awareness, and promotes compassionate and ethical conduct. Physical Education is offered in a more formal manner and sports skills are fine-tuned. This prepares students to pursue sports in a more structured and purposeful manner, including studying sports in the Secondary School as a formal subject.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Academic;
