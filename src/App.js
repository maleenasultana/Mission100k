import React  from 'react'
import Navbar from "./Components/Navbar"
import Carousal from "./Components/Carousal"
import Banner from "./Components/Banner"
import About from "./Components/About"
import Services from "./Components/Services"
// import Gallery from "./Components/Gallery"
import Gallery1 from "./Components/Gallery1"
import NewsEvents from './Components/NewsEvents'
import Contactus from "./Components/Contactus"
import Footer from "./Components/Footer"
import Caption from "./Components/Caption"
import Schools from "./Components/Schools"
import GovtSchools from "./Components/GovtSchools"
import Nav from "./Components/Nav"
import IDP from "./Components/IDP"
import EnquiryForm from './Components/Enquiryform'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Corporates from "./Components/Corporates"
import Carousel from './Components/Carousal'
import OnetoOne from "./Components/OnetoOne"
import CareerCounselling from "./Components/CareerCounselling"
import Home from "./Components/Home"
import Psychometrictest from "./Components/Psychometrictest"
import Testimonial from "./Components/Testimonial"
import Features from "./Components/Features"
const App = () => {
  return (
    <>
    <Router>
    {/* <Navbar/> */}
    <Nav/>
    <Routes>
    <Route path="/about" element={<About/>} />
    {/* <Caption/> */}
    <Route path="/" element={<Home/>} /> 
    {/* <Banner/> */}
    <Route path="/schools" element={<Schools/>} />
    <Route path="/govtschools" element={<GovtSchools/>} />
    <Route path="/idp" element={<IDP/>} />
    <Route path="/services" element={<Services/>} />
    {/* <Gallery/> */}
    <Route path="/gallery1" element={<Gallery1/>} />
    <Route path="/newsevents" element={<NewsEvents/>} />
    <Route path="/contactus" element={<Contactus/>} />
    <Route path="/enquiryform" element={<EnquiryForm/>} />
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/corporates" element={<Corporates/>}/>
    <Route path="/onetoone" element={<OnetoOne/>}/>
    <Route path="/careercounselling" element={<CareerCounselling/>}/>
    <Route path="/psychometrictest" element={<Psychometrictest/>}/>
    <Route path="/carousal" element={<Carousal/>} />
    <Route path="/testimonial" element={<Testimonial/>} />
    <Route path="/features" element={<Features/>} />

    </Routes>
   </Router>
  
    </>
  )
}

export default App
