"use client";

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
  ListIcon,
  ListItem,
  UnorderedList,
  Link,
  useBreakpointValue,
  Image,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { useState } from "react";




const OfferCard = ({ imageSrc, title }) => {
  return (
    <Box
      w={"full"}
      maxW={"300px"}
      p={5}
      // boxShadow={'md'}
      // borderRadius="md"
      display="flex"
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      height={"80px"} // Ensuring uniform height
    >
      {/* Image on the left side */}
      <Image
        src={imageSrc}
        alt={title}
        boxSize={"100px"}
        objectFit={"cover"}
        borderRadius="full"
        mr={6}
        height={"40px"}
        width={"40px"}
      />

      {/* Text on the right side */}
      <Box>
        <Heading fontSize={"lg"}>{title}</Heading>
      </Box>
    </Box>
  );
};

const Card = ({ heading, description, number, color }) => {
  return (
    <Box height={'350px'} width={'300px'} p={10} >
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      overflow="hidden"
      p={4}
      borderRadius="50%"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Stack align={"center"} spacing={1}>
        <Box mt={4}>
          <Heading
            textAlign="center"
            size="2xl"
            color={color}
            fontWeight="bold"
          >
            {number}
          </Heading>
          <Text mt={3} fontSize={"md"} textAlign={"center"}>
            {description}
          </Text>
        </Box>
        
      </Stack>
    </Box>
    <Box>
      <Text fontSize="sm" color="gray.500" textAlign="center">
          *Source: {heading}
        </Text>
    </Box>
    </Box>
  );
};


export default function BasicStatistics() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    service: "",
    additionalInfo: "",
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
    <Box
      maxW="9xl"
      mx={"auto"}
      pt={1}
      px={{ base: 2, sm: 12, md: 17 }}
      margin={"30px"}
      borderRadius={"50%"}
    >
      <Image src="../../../lo-removebg.png" height={'210px'} width={'350px'}/>
      <Stack  direction={{ base: "column", md: "row" }}>
        
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Student Wellbeing Program
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              We offer professional counselling services at campus aimed at
              helping students improve their emotional well-being. Our platform
              connects them with experienced counsellors who guide them in
              managing stress, academic pressure, behavioural challenges,
              personal challenges, and students' overall well-being.
            </Text>
            <Text fontSize={{ base: "14", lg: "24" }} color={"gray.700"}>
              We aim to provide a healthy and balanced campus environment where
              students can thrive emotionally, mentally, and academically.
            </Text>
            <Box 
            column={{base:"1", md:"3"}} height={{ base: "150px", md: "200px", lg: "250px" }} 
       width={{ base: "150px", md: "200px", lg: "350px" }}
       pt={{ base: "10px", md: "20px", lg: "30px" }}>
              <Stack direction={{ base: "column", md: "row" }} spacing={8} >
             
              </Stack>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={'cover'}
            height={"400px"}
            width={"550px"}
            src={"../../../school-img.png"}
          />
        </Flex>
      </Stack>
      <Flex  
        justify="center"
        wrap="wrap" // Makes the circles wrap in smaller screens
        gap={6} // Adds space between the circles
        mt="20px"
        // margin={"10px"}
       
      >
        <Card
          number={"50%"}
          heading={"World Health Organization, 2021"}
          description={"of mental health conditions begin by age 14."}
          color={'red.500'}
        />
        <Card
          number={"60%"}
          heading={"National Center for School Mental Health, 2020"}
          description={
            "Students who receive school-based mental health support"
             }
             color={'green.500'}
        />
        <Card
          number={"13%"}
          heading={"APA, 2019"}
          description={
            "Students receiving mental health support and increase in academic success"
          }
          color={'green.500'}
        />
        <Card
          number={"1 in 7"}
          heading={"WHO, 2021)"}
          description={"adolescents experiences and  mental health disorders"}
          color={'red.500'}
        />

        <Card
          number={"70%"}
          heading={"National Institute for Health and Care Excellence, 2020"}
          description={"Talk therapy reduces anxiety in treated individuals"}
          color={'green.500'}
        />
      </Flex>
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        textAlign={"center"}
        pb={"20px"}
        pt={"100px"}
        margin={"30px"}
        marginTop={"40px"}
        
      >
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
        <br />{" "}
        <Text color={"blue.400"} as={"span"} textAlign={"center"} marginTop={'50px'} pt={'50px'}>
          We offer a holistic approach to student well-being
        </Text>{" "}
      </Heading>
      <Flex flexWrap="wrap" gridGap={8} justify="center">
        <OfferCard
          imageSrc="../../../honor.svg"
          title="One-on-one counseling sessions for personal and academic support."
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Group workshops on stress management and emotional skills."
        />
        <OfferCard
          imageSrc="../../../3.svg"
          title="Roleplays for practical problem-solving."
        />
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title="Assessments to evaluate emotional well-being and progress"
        />
        <OfferCard
          imageSrc="../../../5.svg"
          title="Worksheets to help students set goals and track their growth."
        />
        <OfferCard
          imageSrc="../../../6.svg"
          title="Reference materials for continuous learning.

"
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Self-help tools to promote independent development."
        />
        <OfferCard
          imageSrc="../../../dial.svg"
          title="Career counseling for future guidance."
        />
        <OfferCard
          imageSrc="../../../gift.svg"
          title="Parental guidance sessions to support overall well-being."
        />
      </Flex>
      <Stack  direction={{ base: "column", md: "row" }} margin={'30px'} padding={"30px"}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
           Schools/Colleges
            </Text> */}
              <br />{" "}
              <Text color={"orange.300"} as={"span"}>
                Early Childhood Well-being Support for pre-school
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              We believe that emotional well-being starts early. Our program for
              preschool children focuses on creating a nurturing environment
              where kids can develop emotional skills, manage behaviour, and
              build resilience.<br/></Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.700"}> We also offer guidance for parents, equipping
              them with the tools to support their child's emotional growth,
              ensuring a strong foundation for their overall well-being.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={8}>
              {/* <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Ontime Projects Delivery
              </Button>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                With Proof Reading
              </Button> */}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            // objectFit={'cover'}
            marginTop={'40px'}
            height={"350px"}
            width={'500px'}
            src={"../../../2.jpg"}
          />
        </Flex>
      </Stack>

      <Box>
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign={"center"}
          pt={"30px"}
          marginTop={"40px"}
          marginBottom={"2px"}
        >
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
          <br />{" "}
          <Text color={"blue.400"} as={"span"} textAlign={"center"}>
            EnquiryForm
          </Text>{" "}
        </Heading>
      </Box>
      <Box margin={"30px"}></Box>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: "column", sm: "row" }}
        py={"20pxs"}
      >
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

        <Box
          maxW="md"
          mx="auto"
          mt={10}
          p={6}
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
          boxShadow="lg"
        >
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
                  <option value="1 to 1 Counseling Service">
                    1 to 1 Counseling Service
                  </option>
                  <option value="Workplace - Corporate Program">
                    Workplace - Corporate Program
                  </option>
                  <option value="School-College-University Program">
                    School-College-University Program
                  </option>
                  <option value="Institutional Development Program">
                    Institutional Development Program
                  </option>
                  <option value="Career Counseling and Psychometric Test">
                    Career Counseling and Psychometric Test
                  </option>
                  <option value="Government School/Orphanages">
                    Government School/Orphanages
                  </option>
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
            <Text color={"grey.100"}>
              <Text color={"blue.300"}>Thank You for Your Enquiry!</Text>
              <br />
{/*               
              <Text color={"red.200"}>
                We appreciate your interest in our services.
                <br />
                Our team will review your request and get back <br />
                to you shortly. If you require immediate assistance,
                <br />
              </Text>
              <Text color={"blue.400"}>
                please feel free to call us at xxxxxxxxxxx
              </Text> */}
            </Text>
          </form>
        </Box>
      </Stack>
    </Box>
  );
}