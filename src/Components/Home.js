import React from 'react';
import { Container, Link, Text, chakra,Image } from '@chakra-ui/react'; // Import Container from Chakra UI
// import Hero from './Hero'; // Correct the import path
import Carousal from "./Carousal"
import Services from "./Services"
import Features from "./Features"
import EnquiryForm from './Enquiryform';
import Footer from "./Footer"
import Testimonials from "./Testimonials"
import "./../App.css"

const Home = () => {
  return (
    <Container maxW={'1450'}>
      <Carousal display={'auto'}/>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} pb={2}fontWeight={'bold'}>
        <Text color={'green.700'}  font-family= "Exo, sans-serif">EMPOWERING MINDS, TRANSFORMING LIVES: YOUR JOURNEY TO LIFE SUCCESS STARTS HERE</Text>
      </chakra.h1>
      {/* <Image fontSize={ '4xl'} src="../../../Add a heading.png" alt="... " height="200" width="full" /> */}
      <Services/> 
      <br/>
      <Features/>
      <chakra.h1
        textAlign={"center"}
        fontSize={"2xl"}
        py={3}
        fontWeight={"bold"}
        fontFamily="Amaranth, sans-serif"
      >
        <Text color={"blue.500"}>Testimonials</Text> </chakra.h1>
     <Testimonials/>
     <chakra.h1
        textAlign={"center"}
        fontSize={"2xl"}
        py={3}
        fontWeight={"bold"}
        fontFamily="Amaranth, sans-serif"
      >
        <Text color={"blue.500"}>EnquiryForm</Text> </chakra.h1>
      <EnquiryForm/>
     
      <Footer/>
    </Container>
  );
};

export default Home;
