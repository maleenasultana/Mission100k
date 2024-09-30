import React from 'react';
import { Container, Link } from '@chakra-ui/react'; // Import Container from Chakra UI
import Hero from './Hero'; // Correct the import path
import NewsEvents from "./NewsEvents"
import Services from "./Services"
import Footer from "./Footer"

const Home = () => {
  return (
    <Container maxW='1250px'>
      <Hero />
      <Services/>
    
      <Footer margintop="10px"/>
    </Container>
  );
};

export default Home;
