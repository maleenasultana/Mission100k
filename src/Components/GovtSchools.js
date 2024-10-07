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
    <Container maxW={'7xl'}>
    <Box
      maxW="6xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      borderRadius={"40%"}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        pb={2}
        fontWeight={"bold"}
      >
        <Text color={"blue.500"} fontFamily="Poppins">
          Employment and Well-being initiative
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
          We are committed to promoting emotional well-being for every student,
          regardless of their background. Our professional counselling services
          are designed to support students in orphanages and government schools,
          connecting them with experienced counsellors who guide stress
          management, personal challenges, and overall mental health. Our
          mission is to ensure that all students have access to the well-being
          services they deserve, creating an inclusive environment where
          everyone can thrive emotionally, mentally, and academically.
        </Text>
      </Box>
      <Flex
        justify="center"
        wrap="wrap" // Makes the circles wrap in smaller screens
        gap={6} // Adds space between the circles
        mt="20px"
      >
        <Box
          borderRadius={"50%"}
          bg={"blue.100"}
          borderBottom="5px solid"
          borderRight="5px solid"
          borderColor="grey.100"
          boxShadow="2px 2px 2px 2px"
          textAlign={"center"}
          mt={"20px"}
          p={8}
          height={{ base: "250px", md: "200px", lg: "250px" }}
          width={{ base: "250px", md: "200px", lg: "350px" }}
          pt={{ base: "40px", md: "60px", lg: "80px" }}
        >
          <Text py={"5px"} fontSize={{ base: "18px", md: "16px", lg: "18px" }}>
            Over 30% of children in orphanages experience mental health issues
            (Children's Rights Alliance, 2021)
          </Text>
        </Box>
        <Box
          borderRadius={"50%"}
          bg={"blue.100"}
          borderBottom="5px solid"
          borderRight="5px solid"
          borderColor="grey.100"
          boxShadow="2px 2px 2px 2px"
          textAlign={"center"}
          mt={"20px"}
          p={8}
          height={{ base: "250px", md: "200px", lg: "250px" }}
          width={{ base: "250px", md: "200px", lg: "350px" }}
          pt={{ base: "40px", md: "60px", lg: "80px" }}
        >
          <Text fontSize={{ base: "18px", md: "16px", lg: "18px" }}>
            Students in low-income schools are 50% more likely to report
            emotional distress (National Center for Children in Poverty, 2020)
          </Text>
        </Box>

        <Box
          borderRadius={"50%"}
          bg={"blue.100"}
          borderBottom="5px solid"
          borderRight="5px solid"
          borderColor="grey.100"
          boxShadow="2px 2px 2px 2px"
          textAlign={"center"}
          mt={"20px"}
          p={8}
          height={{ base: "250px", md: "200px", lg: "250px" }}
          width={{ base: "250px", md: "200px", lg: "350px" }}
          pt={{ base: "40px", md: "60px", lg: "80px" }}
        >
          <Text fontSize={{ base: "18px", md: "16px", lg: "18px" }}>
            Children with access to mental health services show improved
            academic performance by 20% (The Child Mind Institute, 2019)
          </Text>
        </Box>
      </Flex>
      <Flex
        justify="center"
        wrap="wrap" // Makes the circles wrap in smaller screens
        gap={6} // Adds space between the circles
        mt="20px"
      >
        <Box
          borderRadius={"50%"}
          bg={"blue.100"}
          borderBottom="5px solid"
          borderRight="5px solid"
          borderColor="grey.100"
          boxShadow="2px 2px 2px 2px"
          textAlign={"center"}
          mt={"20px"}
          p={8}
          height={{ base: "250px", md: "200px", lg: "250px" }}
          width={{ base: "250px", md: "200px", lg: "350px" }}
          pt={{ base: "40px", md: "60px", lg: "80px" }}
        >
          <Text fontSize={{ base: "18px", md: "16px", lg: "18px" }}>
            Approximately 1 in 5 students in low-income areas experience
            significant mental health challenges (SAMHSA, 2021)
          </Text>
        </Box>

        <Box
          borderRadius={"50%"}
          bg={"blue.100"}
          borderBottom="5px solid"
          borderRight="5px solid"
          borderColor="grey.100"
          boxShadow="2px 2px 2px 2px"
          textAlign={"center"}
          mt={"20px"}
          p={8}
          height={{ base: "250px", md: "200px", lg: "250px" }}
          width={{ base: "250px", md: "200px", lg: "350px" }}
          pt={{ base: "40px", md: "60px", lg: "80px" }}
        >
          <Text fontSize={{ base: "18px", md: "16px", lg: "18px" }}>
            School-based mental health programs can reduce behavioural issues by
            up to 40% (National Institute of Mental Health, 2020)
          </Text>
        </Box>
      </Flex>

      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        textAlign={"center"}
        pb={"20px"}
        pt={{ base: "90", lg: "50px" }}
        margin={"30px"}
        marginTop={"40px"}
      >
        <Text color={"blue.400"} as={"span"} textAlign={"center"} marginTop={'50px'} pt={'10px'}>
          We offer a holistic approach to student well-being
        </Text>
      </Heading>
      <Flex flexWrap="wrap" gridGap={16} py={20} justify="center" spacing={{ base: 6, lg: 8 }}>
        <OfferCard
          imageSrc="../../../honor.svg"
          title="Group workshops on stress management and emotional skills.."
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title=" Roleplays for practical problem-solving."
        />
        
        <OfferCard
          imageSrc="../../../bookmark.svg"
          title=" Assessments to evaluate emotional well-being and progress."
        />
        <OfferCard
          imageSrc="../../../5.svg"
          title="Worksheets to help students set goals and track their growth."
        />
        <OfferCard
          imageSrc="../../../6.svg"
          title="Reference materials for continuous learning."
        />
        <OfferCard
          imageSrc="../../../data.svg"
          title="Self-help tools to promote independent development."
        />
        <OfferCard
          imageSrc="../../../dial.svg"
          title="Career counseling for future guidance."
        />
        
      </Flex>

    
    </Box>
    <Enquiryform/>
    </Container>
  );
}
