'use client';

import { Avatar, Box, Stack, Text, useColorModeValue, Flex, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const Testimonials = () => {
  const boxBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('blue.200', 'blue.700');
  const textColor = useColorModeValue('gray.400', 'gray.400');

  const testimonials = [
    {
      text: 'Mission 100K’s workshops have truly transformed my outlook on life and career. The emotional resilience and career guidance I received have set me on a path to success. I feel more confident and prepared for the future than ever before.',
      author: 'Arjun Nair',
      position: 'College Student',
      image: '../../../p.svg',
    },
    {
      text: 'The support from Mission 100K has been invaluable for our students. Their mental well-being programs have made a significant difference in our community. Our students are now more resilient and optimistic about their futures.',
      author: 'Lakshmi Menon',
      position: 'Teacher at Government School',
      image: '../../../p.svg',
    },
    {
      text: 'Our employees’ productivity and morale have improved remarkably thanks to Mission 100K’s tailored mental health programs. It’s been a game-changer for our workplace, fostering a healthier and more supportive environment.',
      author: 'Ravi Kumar',
      position: 'HR Manager',
      image: '../../../p.svg',
    },
    {
      text: 'Mission 100K’s development programs have helped us enhance our school’s business strategies and staff training. We’ve seen tremendous growth and improvement, and our staff feels more equipped to support our students.',
      author: 'Shotti Naidu',
      position: 'School Principal',
      image: '../../../p.svg',
    },
    {
      text: 'The one-on-one counseling sessions with Mission 100K have been life-changing. I’ve gained so much clarity and confidence in my personal and academic life. Their support has been a crucial part of my journey.',
      author: 'Suresh Iyer',
      position: 'University Student',
      image: '../../../p.svg',
    },
    {
      text: 'Mission 100K’s career counselling has been instrumental in guiding me towards a fulfilling career. Their expert advice and support have been invaluable, helping me navigate my career choices with confidence.',
      author: 'Meera Rajan',
      position: 'A Recent Graduate',
      image: '../../../p.svg',
    },
  ];

  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} p={5}>
      {testimonials.map((testimonial, index) => (
        <Flex
          key={index}
          align="center"
          justify="center"
          py={8}
          px={4}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Stack
            width="full"
            maxW="400px"
            direction={{ base: 'column', lg: 'row' }}
            spacing={5}
          >
            <Box
              boxShadow={'lg'}
              width={'full'}
              rounded={'xl'}
              p={10}
              borderWidth={1}
              borderColor={borderColor}
              bg={boxBg}
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl',
                transition: 'all 0.3s ease-in-out',
              }}
              transition="all 0.3s ease-in-out"
              textAlign="center"
              role="group"
              position={'relative'}
            >
              <Flex justify="center" align="center" mb={4}>
                <Image
                  src={testimonial.image}
                  alt="Sample Image"
                  borderRadius="full"
                  height="60px"
                  width="60px"
                />
              </Flex>
              <Text fontSize={{ base: 'l', md: 'xl' }} textAlign={'center'} maxW={'3xl'} mb={6}>
                {testimonial.text}
              </Text>
              <Box textAlign={'center'}>
                <Text fontWeight={600}>{testimonial.author}</Text>
                <Text fontSize={'sm'} color={textColor}>
                  {testimonial.position}
                </Text>
              </Box>
            </Box>
          </Stack>
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default Testimonials;
