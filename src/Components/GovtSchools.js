"use client";

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Stack,
  Button,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import Enquiryform from "./Enquiryform";

const OfferCard = ({ imageSrc, title }) => {
  return (
    <Box
      w={"full"}
      maxW={"300px"}
      p={5}
      py={5}
      display="flex"
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      height={"80px"}
    >
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
        width={{ base: "150px", sm: "180px", md: "200px", lg: "220px" }} // Equal width for circle
        height={{ base: "150px", sm: "180px", md: "200px", lg: "220px" }} // Equal height for circle
        bg={"white"} // Ensure contrasting background
        borderRadius="50%" // Make it circular
        boxShadow="lg" // Add shadow for visual depth
        display="flex" // Flex to center content
        flexDirection="column" // Stack content vertically
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
        textAlign="center" // Ensure text is centered
        p={4} // Padding for internal spacing
        borderWidth={1}
        borderColor="gray.200"
        transition="all 0.3s" // Smooth transition for hover effects
        _hover={{ transform: "scale(1.05)" }} // Slight scaling on hover
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
    console.log(formData);
  };

  return (
    <Container maxW={"7xl"}>
      <Box
        maxW="6xl"
        mx={"auto"}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
        borderRadius={"40%"}
        py={10}
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          pb={2}
          fontWeight={"bold"}
        >
          <Text color={"blue.500"} fontFamily="Poppins">
            Student wellbeing initiative
          </Text>
        </chakra.h1>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            We are committed to promoting emotional well-being for every
            student, regardless of their background. Our professional
            counselling services are designed to support students in orphanages
            and government schools, connecting them with experienced counsellors
            who guide stress management, personal challenges, and overall mental
            health. Our mission is to ensure that all students have access to
            the well-being services they deserve, creating an inclusive
            environment where everyone can thrive emotionally, mentally, and
            academically.
          </Text>
        </Box>

        <Flex
          flexWrap="wrap"
          gridGap={{ base: 8, md: 12, lg: 16 }} // Gap between circles
          justify="center" // Always center on all screen sizes
          align="center" // Align vertically center
          pt={30}
          width="100%"
          height={"auto"}
          px={{ base: 4, md: 0 }}
        >
          <Card
            number={"60%"}
            heading={"(UNICEF, 2020)"}
            description={"of orphans face mental issues"}
            color={"red.500"}
            // Responsive card width
          />
          <Card
            number={"2x"}
            heading={"(NIMHANS, 2019)"}
            description={"anxiety in government school kids"}
            color={"red.500"}
         
          />

          <Card
          number={'25%'}
          heading={"(N.R.Council,2019)"}
          description={"Mental services boost academics"}
          color={'red.500'}
          />
        
          <Card
            number={"1 in 3"}
            heading={"(Plan India, 2021)"}
            description={"rural students face high stress"}
            color={"red.500"}
          />
        </Flex>

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
            We offer a holistic approach to student well-being
          </Text>
        </Heading>
        <Flex
          flexWrap="wrap"
          gridGap={16}
          py={20}
          justify="center"
          spacing={{ base: 6, lg: 8 }}
        >
          <OfferCard
            imageSrc="../../../honor.svg"
            title="Group workshops on stress management and emotional skills"
          />
          <OfferCard
            imageSrc="../../../data.svg"
            title=" Roleplays for practical problem-solving"
          />

          <OfferCard
            imageSrc="../../../bookmark.svg"
            title=" Assessments to evaluate emotional well-being and progress"
          />
          <OfferCard
            imageSrc="../../../5.svg"
            title="Worksheets to help students set goals and track their growth"
          />
          <OfferCard
            imageSrc="../../../6.svg"
            title="Reference materials for continuous learning"
          />
          <OfferCard
            imageSrc="../../../data.svg"
            title="Self-help tools to promote independent development"
          />
          <OfferCard
            imageSrc="../../../dial.svg"
            title="Career counseling for future guidance"
          />
        </Flex>
      </Box>
      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
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
          Request a call back
        </Text>
      </Heading>
      <Enquiryform />
    </Container>
  );
}
