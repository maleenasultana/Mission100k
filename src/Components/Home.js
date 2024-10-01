import React from 'react';
import { Container, Link, Text, chakra } from '@chakra-ui/react'; // Import Container from Chakra UI
// import Hero from './Hero'; // Correct the import path
import Carousal from "./Carousal"
import Services from "./Services"
import EnquiryForm from './Enquiryform';
import Footer from "./Footer"
import Testimonials from "./Testimonials"


const Home = () => {
  return (
    <Container maxW='1350px' >
      <Carousal/>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} pb={2}fontWeight={'bold'}>
        <Text color={'green.700'} fontFamily="cursive,poppins">EMPOWERING MINDS, TRANSFORMING LIVES: YOUR JOURNEY TO LIFE SUCCESS STARTS HERE</Text>
      </chakra.h1>
      <Services/> 
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} pb={2}fontWeight={'bold'}>
        <Text color={'blue.500'} fontFamily="Poppins">Testimonials</Text>
      </chakra.h1>
     <Testimonials/>
     <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} pb={2}fontWeight={'bold'}>
        <Text color={'blue.500'} fontFamily="Poppins">Enquiry Form</Text>
      </chakra.h1>
      <EnquiryForm/>
     
      <Footer/>
    </Container>
  );
};

export default Home;
