'use client';

import { useState, useEffect } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";

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

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Box
      position="relative"
      width="100vw"
      overflow="hidden"
      // height={{ base: "40vh", md: "50vh", lg: "100vh" }} // Adjust the height based on screen size
    >
      <Image
        src={images[currentSlide].src}
        alt={images[currentSlide].alt}
        width="100%" // Use percentage to ensure full width
        height="100%" // Use percentage to ensure full height
        objectFit="cover" // Maintain aspect ratio and cover the container
        objectPosition="center" // Ensure the image is centered
      />

      {/* Indicator Dots */}
      <Flex justify="center" position="absolute" bottom="20px" width="100%">
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
