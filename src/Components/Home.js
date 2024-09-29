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
      <NewsEvents/> {/* Ensure the Hero component is properly closed */}
      <Link bg="blue.400" p="5px" borderRadius="5px" pb="5px" href="#">Show more...</Link>
      <Footer margintop="10px"/>
    </Container>
  );
};

export default Home;
