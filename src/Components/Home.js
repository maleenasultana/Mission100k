import React from 'react';
import { Container, Link, Text, chakra } from '@chakra-ui/react'; // Import Container from Chakra UI
// import Hero from './Hero'; // Correct the import path
import Carousal from "./Carousal"
import Services from "./Services"
import EnquiryForm from './Enquiryform';


const Home = () => {
  return (
    <Container maxW='1250px'>
      <Carousal/>
      <Services/> 
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} pb={2}fontWeight={'bold'}>
        <Text color={'blue.500'} fontFamily="Poppins">Enquiry Form</Text>
      </chakra.h1>
      <EnquiryForm/>
    </Container>
  );
};

export default Home;
