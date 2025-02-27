import {Link, Route, Routes} from "react-router"
import Admission from "./pages/Admission"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from   "./components/Header"

import Mandatory from "./pages/Mandatory"
import Academic from "./pages/Academic"
import Achievement from "./pages/Achievement"
import Infrastruture from "./pages/Infrastructure"
import Gallery from "./pages/Gallery"
import ContactUs from "./pages/ContactUs"
import Footer from "./components/Footer"

import './App.css'

function App() {
 
  return (
    <>

      <Header/>
    <Routes>
  <Route index element={<Home />} />
  <Route path="About" element={<About />} />
  <Route path="Admission" element={<Admission/>}/>
  <Route path="mandatory" element={<Mandatory/>}/>
  <Route path="academic" element={<Academic/>}/>
  <Route path="achievemet" element={<Achievement/>}/>
  <Route path="infrastructure" element={<Infrastruture/>}/>
  <Route path="gallery" element={<Gallery/>}/>
  <Route path="contactus" element={<ContactUs/>}/>



  </Routes>

    <Footer/>
  
    </>
  )
}

export default App
