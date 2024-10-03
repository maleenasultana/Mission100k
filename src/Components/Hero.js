'use client';
import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import NewsEvents from './NewsEvents';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const cards = [
    '../../../Designer.png',
    '../../../Designer1.png',
    '../../../Empower.png',
  ];

  return (
    <HStack>
      <Stack>
        <Box display="flex" justifyContent="center" alignItems="center" >
          <Box
            position="relative"
            height={{ base: '300px', md: '500px', lg: '700px' }} // Responsive height
            width={{ base: '100%', md: '85%', lg: '1150px' }} // Responsive width
            overflow="hidden"
          >
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              colorScheme="messenger"
              borderRadius="full"
              position="absolute"
              left={side}
              top={top}
              transform="translate(0%, -50%)"
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt />
            </IconButton>

            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              colorScheme="messenger"
              borderRadius="full"
              position="absolute"
              right={side}
              top={top}
              transform="translate(0%, -50%)"
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt />
            </IconButton>

            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {cards.map((url, index) => (
                <Box
                  key={index}
                  height={{ base: '300px', md: '400px', lg: '600px' }} // Responsive height for each slide
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="contain" // Ensures image scales without cropping
                  backgroundImage={`url(${url})`}
                  width="100%" // Ensures it takes full width of the container
                />
              ))}
            </Slider>
          </Box>
        </Box>
      </Stack>
    </HStack>
  );
}
