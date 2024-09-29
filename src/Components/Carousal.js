'use client';

import React from 'react';
import Slider from 'react-slick';
import { Box, Text, chakra, keyframes, useColorModeValue } from '@chakra-ui/react';

// Animation for the letter "E"
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Carousel = () => {
  return (
    <Box maxW="100%" mx="auto" mt={10} height="400px" position="relative">
      <Slider {...settings}>
        {/* Slide 1 - Enlighten */}
        <Box
          height="400px"
          bgGradient="linear(to-r, orange.400, yellow.400)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="6xl" fontWeight="bold" color="white">
            <chakra.span
              animation={`${bounce} 2s infinite`}
              display="inline-block"
              mr={2}
            >
              E
            </chakra.span>
            nlighten
          </Text>
        </Box>

        {/* Slide 2 - Enhance */}
        <Box
          height="400px"
          bgGradient="linear(to-r, blue.400, teal.400)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="6xl" fontWeight="bold" color="white">
            <chakra.span
              animation={`${bounce} 2s infinite`}
              display="inline-block"
              mr={2}
            >
              E
            </chakra.span>
            nhance
          </Text>
        </Box>

        {/* Slide 3 - Empower */}
        <Box
          height="400px"
          bgGradient="linear(to-r, purple.400, pink.400)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="6xl" fontWeight="bold" color="white">
            <chakra.span
              animation={`${bounce} 2s infinite`}
              display="inline-block"
              mr={2}
            >
              E
            </chakra.span>
            mpower
          </Text>
        </Box>
      </Slider>
      
    </Box>
  );
};

export default Carousel;
