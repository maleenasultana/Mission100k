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
} from "@chakra-ui/react";
import { useState } from "react";
import Enquiryform from "./Enquiryform";

const OfferCard = ({ imageSrc, title }) => {
  return (
    <Box
      w={"full"}
      maxW={"350px"}
      p={2}
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
        height={"50px"}
        width={"50px"}
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
    <Box>
    <Box
      maxW={{ base: "full", md: "250px" }}
      w={{ base: "100%", md: "auto" }} // Full width on small screens, auto on medium+
      h={{ base: "auto", md: "100%" }}
     textAlign={'center'}
      overflow="hidden"
      p={5}
      borderRadius="50%"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Stack align={"center"} spacing={2}>
        <Box mt={2}>
          <Heading
            textAlign="center"
            size="2xl"
            color={color}
            fontWeight="bold"
          >
            {number}
          </Heading>
          <Text mt={3} fontSize={"sm"} p={10} textAlign={"center"}>
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
    <Box>
        {/* <Image src="../../../lo-removebg.png" height={'200px'} width={'350px'} />
      */}
    <Box
      maxW="9xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      // margin={"40px"}
      borderRadius={"50%"}
    >
      <Stack align={'center'}
        spacing={{ base: 8, md: 6 }}
        py={{ base: 10, md: 18 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text color={"blue.400"} as={"span"}>
                Corporates and Workplaces
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              We help businesses create healthier workplaces by offering
              accessible, stigma-free mental health support. Our services aim to
              reduce stress, boost employee engagement, and improve overall
              satisfaction.
            </Text>
            <Box  position={'absolute'}
            height={'350px'}
            rounded={'2xl'}
            width={'200'}
            overflow={'hidden'}>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={6}
              ></Stack>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            w={{ base: "100%", md: "auto" }} // Full width on small screens, auto on medium+
            h={{ base: "auto", md: "100%" }}
            py={10}
            src={"../../../corp.jpg"}
          />
        </Flex>
      </Stack>
      <Flex
        flexWrap="wrap"
        gridGap={16}
        justify="center"
        pt={30}
        width="100%"
        height={'auto'}
        px={{ base: 4, md: 0 }}>
        <Card
          number={"57%"}
          heading={"Gallup, 2020"}
          description={"of employees experience workplace stress."}
          color={"red.500"}
        />
        <Card
          number={"1 in 10"}
          heading={"Mental Health America, 2021"}
          description={"employees seek mental health support."}
          color={"red.500"}
        />
        <Card
          number={"40%"}
          heading={"World Health Organization, 2021"}
          description={"of employees show no obvious signs of mental distress."}
          color={"red.500"}
        />
      </Flex>
      <Text
        textAlign={"center"}
        fontSize="25px"
        fontWeight="500"
        color={"grey.500"}
        fontFamily={"Exo, sans-serif"}
        py={20}
      >
        Join us to create a mentally healthy workplace!
      </Text>
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        textAlign={"center"}
        pb={"20px"}
        pt={{ base: "90", lg: "50px" }}
        margin={"30px"}
        marginTop={"40px"}
      >
        <Text
          color={"blue.400"}
          as={"span"}
          textAlign={"center"}
          marginTop={"50px"}
          pt={"10px"}
        >
          What we offer:
        </Text>{" "}
      </Heading>
      <Flex
        flexWrap="wrap"
        gridGap={16}
        py={20}
        justify="center"
        spacing={{ base: 6, lg: 8 }}
      >
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
        <OfferCard imageSrc="../../../6.svg" title="Self-help resources." />
        <OfferCard imageSrc="../../../5.svg" title="Expert assessments." />
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title="Worksheets for goal setting and progress tracking."
        />
        <OfferCard
          imageSrc="../../../3.svg"
          title="Comprehensive reports and detailed insights."
        />
      </Flex>

      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        pb={"20px"}
        pt={{ base: "90", lg: "50px" }}
        margin={"30px"}
        marginTop={"40px"}
      >
        <Text color={"blue.400"} as={"span"} textAlign={"center"} marginTop={'50px'} pt={'10px'}>
        Request a call back
        </Text>
      </Heading>
   

    <Enquiryform/>
    
    </Box> 
    </Box>
  );
}
