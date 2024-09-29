import React  from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
// import Banner from "./Components/Banner"
import About from "./Components/About"
import Services from "./Components/Services"
// import Gallery from "./Components/Gallery"
import Gallery1 from "./Components/Gallery1"
import NewsEvents from './Components/NewsEvents'
import Contactus from "./Components/Contactus"
import Footer from "./Components/Footer"
import Caption from "./Components/Caption"
import Schools from "./Components/Schools"


const App = () => {
  return (
    <>
    
    <Navbar/>
    <Caption/>
    <Hero/>
    {/* <Banner/> */}
    <Schools/>
    <About/>
    <Services/>
    {/* <Gallery/> */}
    <Gallery1/>
    <NewsEvents/>
    <Contactus/>
    <Footer/>
   
    </>
  )
}

export default App
