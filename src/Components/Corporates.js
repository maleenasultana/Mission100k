'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  ListIcon, ListItem, UnorderedList, Link,
  useBreakpointValue,
  Image, FormControl,FormLabel, Input, Select, Textarea, VStack 
} from '@chakra-ui/react'
import { useState } from 'react';


const OfferCard = ({ imageSrc, title }) => {
  return (
    <Box
      w={'full'}
      maxW={'600px'}
    
      p={2}
      // boxShadow={'md'}
      // borderRadius="md"
      display="flex"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.800')}
      height={'80px'} // Ensuring uniform height
    >
      {/* Image on the left side */}
      <Image
        src={imageSrc}
        alt={title}
        boxSize={'100px'}
        objectFit={'cover'}
        borderRadius="full"
        mr={6}
        height={'20px'}
        width={'20px'}

      />

      {/* Text on the right side */}
      <Box>
        <Heading fontSize={'lg'}>{title}</Heading>
      </Box>
    </Box>
  )
}

const Card = ({ heading, description, number,color }) => {
  return (
    
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      overflow="hidden"
      p={5}
      borderRadius="50%"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack align={'center'} spacing={2}>
        <Box mt={2}>
          <Heading
            textAlign="center"
            size="2xl"
            color={color}
            fontWeight="bold">
            {number}
          </Heading>
          <Text mt={3} fontSize={'md'} textAlign={'center'}>
            {description}
          </Text>
        </Box>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          *Source: {heading}
        </Text>
      </Stack>
    </Box>
  )
}

export default function BasicStatistics() {
  
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    service: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
    <Box maxW="9xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} margin={'40px'} borderRadius={'50%'}>
     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            {/* <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
             SEO - Website
            </Text> */}
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
            Corporates and Workplaces
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          We help businesses create healthier workplaces by offering accessible, stigma-free mental health support. Our services aim to reduce stress, boost employee engagement, and improve overall satisfaction.

          </Text>
          <Box>
            
          <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
            {/* <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
             Ontime Projects Delivery
            </Button> */}
           
          </Stack></Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          // objectFit={'cover'}
          height={'450px'}
          width={'550px'}
          src={
            '../../../carrerr 1.jfif'
          }
        />
      </Flex>
    </Stack>
      <Flex flexWrap="wrap" gridGap={8} justify="center" width={'250'} height={'250'} margin={'90px'}>
        <Card
          number={'57%'}
          heading={'Gallup, 2020'}
          description={'of employees experience workplace stress.'}
          // color={'red.500'}
        />
        <Card
          number={'1 in 10'}
          heading={'Mental Health America, 2021'}
          description={'employees seek mental health support.'}
          color={''}
        />
        <Card
          number={'40%'}
          heading={'World Health Organization, 2021'}
          description={'of employees show no obvious signs of mental distress.'}
          color={''}
        />
        <Card
          number={'Join us'}
          heading={'Join us'}
          description={'to create a mentally healthy workplace!'}
          color={''}
        />
      </Flex>
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign={'center'} pb={'30px'} pt={'30px'} margin={'90px'} marginTop={'40px'}>
            {/* <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
             SEO - Website
            </Text> */}
            <br />{' '}
            <Text color={'blue.400'} as={'span'} textAlign={'center'}>
         What we offer:
            </Text>{' '}
          </Heading>
      <Flex flexWrap="wrap" gridGap={8} justify="center">
        <OfferCard
          imageSrc="../../../gift.svg"
          title="On-demand personalized counselling."
        />
        <OfferCard
          imageSrc="../../../dial.svg"
          title="Interactive group sessions."
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Live webinars and expert-led workshops."
        />
        <OfferCard
          imageSrc="../../../6.svg"
          title="Self-help resources."
        />
        <OfferCard
          imageSrc="../../../5.svg"
          title="Expert assessments."
        />
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title="Worksheets for goal setting and progress tracking."
        />
        <OfferCard
          imageSrc="../../../3.svg"
          title="Comprehensive reports and detailed insights."
        />
      </Flex>

 <Box>
<Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} textAlign={'center'} pt={'30px'} marginTop={'40px'} marginBottom={'2px'}>
            {/* <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
             SEO - Website
            </Text> */}
            <br />{' '}
            <Text color={'blue.400'} as={'span'} textAlign={'center'}>
       EnquiryForm
            </Text>{' '}
          </Heading>
</Box>
<Box margin={'30px'}></Box>
      <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} py={'20pxs'}>
       
{/* <Button
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={9}
          colorScheme={'blue'}
          bg={'blue.400'}
          _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }}
          py={'20px'}>
          <Link to="/">Book Your Session Now</Link>
        </Button> */}
  
            <Box maxW="md" mx="auto" mt={10} p={6} border="1px" borderColor="gray.300" borderRadius="md" boxShadow="lg">

            
      <form onSubmit={handleSubmit} mt="30px">
        <VStack spacing={4} align="start">
          <FormControl id="name" isRequired>
            <FormLabel>Name:</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Please enter your name"
            />
          </FormControl>

          <FormControl id="contactNumber" isRequired>
            <FormLabel>Contact Number:</FormLabel>
            <Input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Please enter your contact number"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email ID:</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Please enter your email address"
            />
          </FormControl>

          <FormControl id="service" isRequired>
            <FormLabel>What Service Are You Interested In?</FormLabel>
            <Select
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Choose the service you require"
            >
              <option value="1 to 1 Counseling Service">1 to 1 Counseling Service</option>
              <option value="Workplace - Corporate Program">Workplace - Corporate Program</option>
              <option value="School-College-University Program">School-College-University Program</option>
              <option value="Institutional Development Program">Institutional Development Program</option>
              <option value="Career Counseling and Psychometric Test">Career Counseling and Psychometric Test</option>
              <option value="Government School/Orphanages">Government School/Orphanages</option>
              <option value="Preschool program">Preschool program</option>
              <option value="Other">Other (Please specify)</option>
            </Select>
          </FormControl>

          <FormControl id="additionalInfo">
            <FormLabel>Additional Information:</FormLabel>
            <Textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Please provide any additional details or specific requirements"
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" width="full">
            Submit
          </Button>
        </VStack>
         <Text color={'grey.100'}>
<Text color={'blue.300'}>Thank You for Your Enquiry!</Text><br/>
{/* <Text color={'red.200'}>We appreciate your interest in our services.<br/>
Our team will review your request and get back <br/>
to you shortly. If you require immediate assistance,<br/></Text>
<Text color={'blue.400'}>please feel free to call us at xxxxxxxxxxx</Text> */}

</Text>
      </form>
      </Box>
      </Stack>
    </Box>
  )
}
