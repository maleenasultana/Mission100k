 'use client';


import { useState, useEffect } from "react";
import { Box, IconButton, Image, Button, Flex, Container } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const images = [
  { src: "../../../1.png", alt: "First Slide" },
  { src: "../../../2.png", alt: "Second Slide" },
  { src: "../../../3.png", alt: "Third Slide" },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTimes = [2000, 2000, 2000]; // Intervals for each slide in ms

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, intervalTimes[currentSlide]);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
   
    <Box  position="relative"
            height={{ base: '300px', md: '500px', lg: '900px' }} // Responsive height
            width={{ base: '100%', md: '85%', lg: '100vw' }} // Responsive width
            overflow="hidden">
      <Image src={images[currentSlide].src} alt={images[currentSlide].alt} 
      maxW="100%"  // Ensures the image does not exceed the container width
            height="auto" />

      {/* Previous button */}
      {/* <IconButton
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        aria-label="Previous Slide"
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
      /> */}

      {/* Next button */}
      {/* <IconButton
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        aria-label="Next Slide"
        icon={<ChevronRightIcon />}
        onClick={handleNext}
      /> */}

      {/* Indicator Dots */}
      <Flex justify="center" mt={4}>
        {images.map((_, index) => (
          <Button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            size="sm"
            borderRadius="50%"
            mx={1}
            bg={currentSlide === index ? "blue.500" : "gray.300"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </Flex>
    </Box>
 
  );
};

export default Carousel;
